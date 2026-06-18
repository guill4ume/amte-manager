import os
import sys
import hashlib
import json
import pymysql
from flask import Flask, request, jsonify, session, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder="app/dist")
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "amtemanager_secret_key_123456")
CORS(app, supports_credentials=True)

# Connexion DB
DB_HOST = os.environ.get("DB_HOST", "db")
DB_USER = os.environ.get("DB_USER", "root")
DB_PASSWORD = os.environ.get("DB_PASSWORD", "bJ7xV9nK4qP2mX8t")
DB_NAME = os.environ.get("DB_NAME", "opendaoc")

def get_db_connection():
    return pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME,
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

def crypt_password(password: str) -> str:
    # Encapsulation UTF-16BE
    pw_bytes = password.encode('utf-16-be')
    # Hachage MD5
    md5_hash = hashlib.md5(pw_bytes).digest()
    # Formatage sans zéros non significatifs (comportement ToString("X") en C#)
    parts = [f"{b:X}" for b in md5_hash]
    return "##" + "".join(parts)

import threading
import urllib.request
import re

def notify_gameserver_async(url):
    def run():
        try:
            with urllib.request.urlopen(url, timeout=3) as resp:
                resp.read()
        except Exception as e:
            print(f"Gameserver notification failed: {e}", flush=True)
            
    threading.Thread(target=run, daemon=True).start()


# Tables autorisées pour les requêtes (S, U, I, D)
# Pour les joueurs, on restreint fortement les droits
TABLES_ACCESS_PLAYER = {
    'dataquestjson':             (True, True, True, True),  # Droit complet sur les quêtes dynamiques
    'npctemplate':               (True, False, False, False), # Lecture seule pour auto-complétion
    'itemtemplate':              (True, False, False, False), # Lecture seule pour auto-complétion
    'race':                      (True, False, False, False), # Lecture seule
    'mob':                       (True, True, True, True), # Droit complet pour gérer ses propres PNJs créés
    'dolcharacters':             (True, False, False, False), # Lecture seule
    'serverstats':               (True, False, False, False), # Lecture seule pour le dashboard
    'guild':                     (True, False, False, False), # Lecture seule pour l'affichage des guildes
}

@app.route('/api/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        data = request.json or {}
        username = data.get('login', '').strip()
        password = data.get('password', '').strip()

        if not username or not password:
            return jsonify({"error": "Nom d'utilisateur ou mot de passe manquant"}), 400

        try:
            conn = get_db_connection()
            with conn.cursor() as cursor:
                # Récupération du compte dans la table account
                cursor.execute("SELECT Name, Password, PrivLevel FROM account WHERE Name = %s", (username,))
                account = cursor.fetchone()
            conn.close()

            if account:
                hashed_input = crypt_password(password)
                db_hash = account['Password']
                print(f"DEBUG LOGIN - User: {username}, Pass Len: {len(password)}, Hashed: {hashed_input}, DB Hash: {db_hash}", flush=True)
                
                # Vérification
                is_correct = False
                if db_hash.startswith("##"):
                    is_correct = (hashed_input == db_hash)
                else:
                    is_correct = (password == db_hash)

                if is_correct:
                    session['username'] = account['Name']
                    session['priv_level'] = account['PrivLevel']
                    return jsonify({
                        "ok": True,
                        "name": account['Name'],
                        "privLevel": account['PrivLevel']
                    })
                
            return jsonify({"error": "Identifiants invalides"}), 401
        except Exception as e:
            return jsonify({"error": f"Erreur de base de données : {str(e)}"}), 500
    else:
        # GET check connection
        if 'username' in session:
            return jsonify({
                "ok": True,
                "name": session['username'],
                "privLevel": session['priv_level']
            })
        return jsonify({"ok": False}), 200

@app.route('/api/logout', methods=['GET'])
def logout():
    session.clear()
    return jsonify({"ok": True})

@app.route('/api/db/query', methods=['POST'])
def query_db():
    if 'username' not in session:
        return jsonify({"login": False, "error": "Non connecté"}), 401

    username = session['username']
    priv_level = session['priv_level']
    
    # Lecture des paramètres de requête
    req = request.json or {}
    action = req.get('action') or request.args.get('action')
    table = req.get('table') or request.args.get('table')

    if not action or not table:
        return jsonify({"error": "Paramètres de requête manquants"}), 400

    # Sécurité : Vérification des tables et actions autorisées
    # Pour l'instant, on n'autorise que les fonctionnalités Joueurs (priv_level >= 1)
    if table not in TABLES_ACCESS_PLAYER:
        return jsonify({"error": f"Accès refusé à la table {table}"}), 403

    allowed_actions = TABLES_ACCESS_PLAYER[table]
    action_idx = {'SELECT': 0, 'UPDATE': 1, 'INSERT': 2, 'DELETE': 3}.get(action)
    
    if action_idx is None or not allowed_actions[action_idx]:
        return jsonify({"error": f"Action {action} non autorisée sur {table}"}), 403

    # Construction et filtrage SQL sécurisé
    conn = get_db_connection()
    try:
        with conn.cursor() as cursor:
            if action == 'SELECT':
                fields = req.get('fields', '*')
                where = req.get('where', '1')
                orderby = req.get('orderby')
                limit = req.get('limit', '50')
                groupby = req.get('groupby')

                # Restriction sur dataquestjson : les joueurs voient toutes les quêtes,
                # mais nous devons nous assurer de filtrer ou d'injecter des données appropriées
                sql = f"SELECT {fields} FROM `{table}` WHERE {where}"
                if groupby:
                    sql += f" GROUP BY {groupby}"
                if orderby:
                    sql += f" ORDER BY {orderby}"
                if limit:
                    sql += f" LIMIT {limit}"

                cursor.execute(sql)
                content = cursor.fetchall()

                # Compter le total
                count_sql = f"SELECT COUNT(*) as cnt FROM `{table}` WHERE {where}"
                cursor.execute(count_sql)
                count_res = cursor.fetchone()
                content_count = count_res['cnt'] if count_res else len(content)

                return jsonify({
                    "content": content,
                    "contentCount": content_count,
                    "error": None
                })

            elif action == 'INSERT':
                # Restriction dataquestjson : on force le CreatorAccount et le niveau 1 du PNJ
                if table == 'dataquestjson':
                    fields_list = [f.strip().replace('`', '') for f in req.get('fields', '').split(',')]
                    
                    import csv
                    val_reader = csv.reader([req['values']], quotechar="'", skipinitialspace=True)
                    values_list = next(val_reader)
                    
                    # Ensure CreatorAccount is inserted
                    if 'CreatorAccount' not in fields_list:
                        fields_list.append('CreatorAccount')
                        values_list.append(username)
                    else:
                        c_idx = fields_list.index('CreatorAccount')
                        values_list[c_idx] = username
                        
                    # Sanity check/Force NPC level to 1 in GoalsJson if present
                    if 'GoalsJson' in fields_list:
                        g_idx = fields_list.index('GoalsJson')
                        try:
                            goals = json.loads(values_list[g_idx])
                            for goal in goals:
                                if 'Data' in goal:
                                    if 'TargetLevel' in goal['Data']:
                                        goal['Data']['TargetLevel'] = 1
                            values_list[g_idx] = json.dumps(goals)
                        except:
                            pass
                            
                    req['fields'] = ",".join(f"`{f}`" for f in fields_list)
                    req['values'] = ",".join("'" + val.replace("'", "''") + "'" for val in values_list)

                # Sécurité table 'mob' : force le niveau 1 et restreint les abus éventuels
                elif table == 'mob':
                    fields_list = [f.strip().replace('`', '') for f in req.get('fields', '').split(',')]
                    import csv
                    val_reader = csv.reader([req['values']], quotechar="'", skipinitialspace=True)
                    values_list = next(val_reader)

                    # Générer un Mob_ID unique (UUID) s'il n'est pas présent
                    if 'Mob_ID' not in fields_list:
                        import uuid
                        fields_list.append('Mob_ID')
                        values_list.append(str(uuid.uuid4()))

                    # Forcer le niveau à 1 pour tous les PNJs créés par des joueurs
                    if 'Level' in fields_list:
                        l_idx = fields_list.index('Level')
                        values_list[l_idx] = '1'
                    else:
                        fields_list.append('Level')
                        values_list.append('1')

                    # Forcer la classe par défaut
                    if 'ClassType' in fields_list:
                        c_idx = fields_list.index('ClassType')
                        values_list[c_idx] = 'DOL.GS.GameNPC'

                    # Forcer la date de mise à jour au moment présent (UTC) pour éviter l'expiration immédiate en jeu
                    import datetime
                    now_str = datetime.datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
                    if 'LastTimeRowUpdated' in fields_list:
                        u_idx = fields_list.index('LastTimeRowUpdated')
                        values_list[u_idx] = now_str
                    else:
                        fields_list.append('LastTimeRowUpdated')
                        values_list.append(now_str)

                    req['fields'] = ",".join(f"`{f}`" for f in fields_list)
                    req['values'] = ",".join("'" + val.replace("'", "''") + "'" for val in values_list)

                # Exécuter l'insertion brute (après vérification basique)
                fields = req.get('fields')
                values = req.get('values')
                sql = f"INSERT INTO `{table}` ({fields}) VALUES ({values})"
                print("DEBUG INSERT SQL:", sql, flush=True)
                try:
                    cursor.execute(sql)
                    conn.commit()

                    # Notification de rafraîchissement au GameServer
                    if table == 'mob':
                        try:
                            m_idx = fields_list.index('Mob_ID')
                            mob_id = values_list[m_idx]
                            notify_gameserver_async(f"http://gameserver:9000/reload_npc?action=insert&mob_id={mob_id}")
                        except Exception as n_err:
                            print("Failed to notify gameserver for INSERT:", n_err, flush=True)
                    elif table == 'dataquestjson':
                        notify_gameserver_async("http://gameserver:9000/reload_quests")
                except Exception as sql_err:
                    print("DEBUG INSERT SQL ERROR:", sql_err, flush=True)
                    raise sql_err

                return jsonify({
                    "contentCount": cursor.rowcount,
                    "error": None
                })

            elif action == 'UPDATE':
                upfields = req.get('upfields')
                if upfields:
                    upfields = upfields.replace('\\`', '`').replace('\\\\`', '`')
                where = req.get('where', '0')

                # Sécurité dataquestjson : un joueur ne peut modifier que ses propres quêtes
                if table == 'dataquestjson':
                    # On ajoute la clause de sécurité au WHERE
                    where = f"({where}) AND CreatorAccount = '{username}'"

                # Sécurité mob : un joueur ne peut modifier que ses propres PNJs (NPCTemplateID = -99)
                elif table == 'mob':
                    where = f"({where}) AND NPCTemplateID = -99"

                sql = f"UPDATE `{table}` SET {upfields} WHERE {where}"
                print("DEBUG UPDATE SQL:", sql, flush=True)
                try:
                    cursor.execute(sql)
                    conn.commit()

                    # Notification de rafraîchissement au GameServer
                    if table == 'mob':
                        try:
                            uuid_match = re.search(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", where, re.I)
                            if uuid_match:
                                mob_id = uuid_match.group(0)
                                notify_gameserver_async(f"http://gameserver:9000/reload_npc?action=update&mob_id={mob_id}")
                        except Exception as n_err:
                            print("Failed to notify gameserver for UPDATE:", n_err, flush=True)
                    elif table == 'dataquestjson':
                        notify_gameserver_async("http://gameserver:9000/reload_quests")
                except Exception as sql_err:
                    print("DEBUG UPDATE SQL ERROR:", sql_err, flush=True)
                    raise sql_err

                return jsonify({
                    "contentCount": cursor.rowcount,
                    "error": None
                })

            elif action == 'DELETE':
                where = req.get('where', '0')

                # Sécurité dataquestjson : un joueur ne peut supprimer que ses propres quêtes
                if table == 'dataquestjson':
                    where = f"({where}) AND CreatorAccount = '{username}'"

                # Sécurité mob : un joueur ne peut supprimer que ses propres PNJs (NPCTemplateID = -99)
                elif table == 'mob':
                    where = f"({where}) AND NPCTemplateID = -99"

                sql = f"DELETE FROM `{table}` WHERE {where}"
                cursor.execute(sql)
                conn.commit()

                # Notification de rafraîchissement au GameServer
                if table == 'mob':
                    try:
                        uuid_match = re.search(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", where, re.I)
                        if uuid_match:
                            mob_id = uuid_match.group(0)
                            notify_gameserver_async(f"http://gameserver:9000/reload_npc?action=delete&mob_id={mob_id}")
                    except Exception as n_err:
                        print("Failed to notify gameserver for DELETE:", n_err, flush=True)
                elif table == 'dataquestjson':
                    notify_gameserver_async("http://gameserver:9000/reload_quests")

                return jsonify({
                    "contentCount": cursor.rowcount,
                    "error": None
                })

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()

# Servir le Frontend
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    # Écoute sur toutes les interfaces pour être accessible depuis le réseau Docker
    app.run(host='0.0.0.0', port=80)
