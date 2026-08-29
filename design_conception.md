# Conception d'AmteManagerV2

Ce document présente l'architecture, les spécifications techniques et fonctionnelles pour la refonte et l'adaptation de l'outil **AmteManager** (issu de Breamor) pour notre serveur local **OpenDAoC-SPB**, combiné avec les fonctionnalités de création de quêtes issues de **QuestFactory** et **QuestPlayerFactory**.

---

## 1. Objectifs Généraux

1. **Portage d'AmteManager (Breamor)** : 
   - Adapter l'interface d'administration historique (Vite + Vue 3 + Vuetify) pour fonctionner avec la base de données et l'écosystème d'**OpenDAoC-SPB**.
   - Remplacer l'ancien backend PHP (supprimé dans les commits récents d'AmteManager) par un **backend léger en Python** (`server.py`), autonome et local, qui servira d'API de requête et de passerelle de génération.

2. **Création Visuelle de Quêtes (Player Quests)** :
   - Intégrer un module de création de quêtes orientées *Lore* accessible directement depuis l'interface web.
   - Utiliser des cartes interactives Leaflet (avec les zones `51.jpg` à `57.jpg` représentant la région d'Avalon) pour positionner les PNJ et les objectifs, avec conversion automatique des coordonnées Leaflet en coordonnées réelles du jeu :
     - \(X = \text{lng} \times 8192\)
     - \(Y = -\text{lat} \times 8192\)
     - \(Z\) (altitude) saisi manuellement (copié via `/loc` en jeu) avec suggestions intelligentes.
   - Générer à la volée le code C# de la quête et du PNJ associé, et l'injecter directement dans le dossier des scripts du serveur local OpenDAoC-SPB pour compilation automatique.

3. **Gestion des Rôles & Sécurisation** :
   - Adapter l'interface en fonction du rôle de l'utilisateur connecté :
     - **Joueur** : Accès restreint uniquement au créateur visuel de quêtes (Player Quests). Sécurisation des PNJ créés (niveau 1, auto-destruction après 14 jours, pas de récompenses abusives).
     - **GM / Admin** : Accès complet à tous les outils d'édition de la base de données (Loot, Spells, ItemTemplates, Guilds, Players, NPC Templates, etc.) et possibilité de modérer, valider ou supprimer les quêtes créées par les joueurs.

---

## 2. Architecture Technique Proposée

```mermaid
flowchart TD
    subgraph Client [Navigateur Web (Vue 3 + Vuetify + Leaflet)]
        UI[Interface AmteManagerV2]
        UI_Player[Créateur de Quêtes Joueur]
        UI_Admin[Éditeurs DB: Loot, Items, Spells...]
    end

    subgraph Backend [Backend Python - server.py]
        Server[Serveur HTTP natif / Flask / FastAPI]
        Auth[Gestion de Session & Rôles]
        QueryEngine[Moteur de requêtes SQL contrôlé]
        Generator[Générateur C# via Templates Jinja2]
    end

    subgraph ServerDAoC [Serveur de Jeu & Base de Données]
        DB[(MariaDB - openbots-db)]
        ScriptsDir[Dossier des Scripts C# - OpenDAoC-SPB]
    end

    UI -->|API Requests /db/query| Server
    Server -->|MySQL Queries| DB
    UI_Player -->|Générer Quête C#| Generator
    Generator -->|Écriture fichiers .cs| ScriptsDir
```

### 2.1 Backend en Python (`server.py`)
Puisque le backend PHP d'AmteManager a été supprimé et n'est pas pratique pour un environnement de développement local Windows sans serveur Web lourd (Apache/PHP), nous allons concevoir un backend Python. Ce serveur assurera les rôles suivants :
- **Serveur de fichiers statiques** : Servir les fichiers de production construits (`dist/`) de l'application Vite/Vue.
- **Passerelle SQL** : Exposer les routes d'API `/db/query` (sécurisées par table et par rôle) pour émuler le comportement de l'ancien `json_access.php` d'AmteManager. Il se connectera au conteneur MariaDB (`openbots-db`).
- **Générateur de Scripts C#** : Utiliser un moteur de templates (comme Jinja2, déjà utilisé dans QuestFactory) pour générer les fichiers `.cs` de quêtes et de PNJ et les copier directement dans `OpenDAoC-SPB/GameServer/scripts`.
- **Authentification & Rôles** : Lire la table `account` de la base de données pour authentifier l'utilisateur via son pseudo et son mot de passe haché (algorithme DAoC personnalisé présent dans `base.php`), et vérifier son niveau de privilège (`PrivLevel`).

### 2.2 Frontend (Vue 3 / TypeScript / Vuetify / Leaflet)
- **Adaptation des Modèles** : Mettre en correspondance les champs de base de données d'OpenDAoC-SPB avec les formulaires d'édition (par exemple, s'assurer que les tables `loottemplate`, `itemtemplate`, `npctemplate` correspondent bien au schéma de la base MariaDB `opendaoc`).
- **Filtrage de l'interface par rôle** :
  - Si `PrivLevel < 2` (Joueur) : Masquer le menu latéral contenant les éditeurs d'objets, de loots, de sorts et les listes d'administration. Rediriger directement sur le créateur visuel de quêtes.
  - Si `PrivLevel >= 2` (GM/Admin) : Afficher l'ensemble des modules d'administration historiques d'AmteManager.

---

## 3. Spécifications du Créateur de Quêtes

### 3.1 Pour les Joueurs (Player Quests)
- **PNJ Associé** :
  - Création automatique d'un PNJ donneur de quête.
  - Caractéristiques forcées : Niveau 1 (pour éviter l'utilisation de PNJ gardes ou de monstres de farm créés par les joueurs).
  - Date de création injectée dans le code C# : le PNJ s'auto-détruira au bout de 14 jours (`this.Delete();` dans sa méthode de tick ou de démarrage si `DateTime.Now > CreationDate + 14 days`).
- **Objectifs de Quête (Lore)** :
  - Principalement axés sur le dialogue (parler à des PNJ existants, explorer des zones, interagir avec des objets).
  - Pas d'objectifs de farm de monstres de haut niveau ou de récompenses abusives.
- **Cartographie** :
  - Intégration de Leaflet pour afficher les cartes d'Avalon (`51.jpg` à `57.jpg`).
  - Clic sur la carte pour capturer le couple `(X, Y)` et la région correspondante.
  - L'altitude `Z` devra être copiée depuis le jeu (commande `/loc`) ou calculée avec une valeur par défaut estimée selon la proximité de points d'intérêt connus.

### 3.2 Pour les GMs / Admins
- **Validation** : Interface pour visualiser les quêtes générées par les joueurs, pouvoir les éditer, les désactiver ou les supprimer du serveur si elles ne respectent pas la charte.
- **Quêtes Globales** : Possibilité de créer des quêtes via l'interface sans les restrictions des joueurs (récompenses en XP/or/objets, PNJ persistants de tout niveau, etc.).

---

## 4. Plan de Portage Étape par Étape

1. **Initialisation du Projet dans AmteManagerV2** :
   - Copier le projet frontend `app` de `datas diverses/reposgithub/amtemanager/app` vers `AmteManagerV2/app`.
   - Installer les dépendances npm (`npm install`).
2. **Développement du Backend Python (`server.py`)** :
   - Écrire un script `server.py` qui gère les requêtes HTTP, l'authentification (avec décodage/hachage des mots de passe DAoC), et l'accès à MariaDB.
   - Configurer le proxy Vite (`vite.config.ts`) pour rediriger `/api/*` vers notre `server.py` local en développement.
3. **Exposition de la Base de Données** :
   - Modifier temporairement `docker-compose.yml` d'OpenDAoC-SPB pour exposer le port MariaDB `3306:3306` sur le localhost Windows afin de permettre à `server.py` de s'y connecter depuis le système hôte.
4. **Adaptation des Vues d'AmteManager** :
   - Tester la connexion et la récupération des listes (Items, Players, Spells, Loots).
   - Ajuster les requêtes et colonnes selon les différences de schéma de base de données entre Breamor et OpenDAoC-SPB.
5. **Intégration du Créateur de Quêtes Visuel** :
   - Fusionner le concept de cartographie Leaflet et de génération C# par template.
   - Mettre en place les filtres de sécurité et les profils d'utilisateurs.

---

---

## 5. Spécifications Techniques des Évolutions V2 (Juin 2026)

### 5.1 Archivage & Restauration
Pour éviter que les PNJs et Quêtes créés par les joueurs ne soient perdus définitivement après 14 jours d'auto-destruction ou lors de suppressions par l'utilisateur :
- **Tables miroirs** : `mob_archive` et `dataquestjson_archive` conservent la structure exacte de leurs tables parentes.
- **Suppression (AmteManager)** : Toute action SQL `DELETE` interceptée par le proxy `server.py` sur `mob` ou `dataquestjson` copie au préalable l'enregistrement vers la table d'archive correspondante.
- **Expiration (GameServer C#)** : Lorsque le timer d'auto-destruction d'un PNJ (`NPCTemplateID = -99`) expire, le serveur exécute deux requêtes directes SQL via `ExecuteNonQuery` :
  1. `INSERT INTO mob_archive SELECT * FROM mob WHERE Mob_ID = '{InternalID}'`
  2. `DELETE FROM mob WHERE Mob_ID = '{InternalID}'`
  Ceci nettoie la base de données active tout en conservant la sauvegarde.
- **Restauration** : L'administrateur peut restaurer l'entité depuis la page admin. Le backend fait l'opération inverse et met à jour le champ `LastTimeRowUpdated` à `NOW()` pour réinitialiser le cycle de vie de 14 jours du PNJ.

### 5.2 Espace Administration & Modération
- **Restriction d'accès** : Accès réservé aux utilisateurs ayant un `privLevel >= 2`.
- **Interface** : Une page `AdminView.vue` centralise la liste des créations actives et archivées.
- **Pérennisation (1-clic)** :
  - **Quêtes** : Marquées comme permanentes (`is_permanent = 1`) en BDD. Attribution de points à l'auteur en fonction du nombre de tâches/étapes dans `GoalsJson` (20 points par étape, minimum 10).
  - **PNJs** : Le `NPCTemplateID` passe de `-99` (Temporaire) à `-100` (Permanent). Le GameServer C# charge les PNJs `-100` (Z-snapping actif) mais ne lance pas de timer d'auto-destruction.
- **Immuabilité** : Dès qu'une quête est marquée `is_permanent = 1`, toute tentative d'édition (`UPDATE`) ou de suppression (`DELETE`) par son auteur (si son `privLevel < 2`) est bloquée et renvoie une erreur 403.


### 5.3 Système de Notation
- **Persistence** : Stockage dans la table `quest_ratings` (AccountName, QuestID, Rating, Comment).
- **Sécurisation des évaluations** : Seuls les administrateurs et les comptes joueurs ayant terminé la quête (`Step = -1` dans la table `quest` pour ce `QuestId`) ont le droit de poster ou de visualiser les évaluations de cette quête dans l'interface.

### 5.4 Progression Créateurs
- **Stockage** : Les points créateurs sont enregistrés dans la colonne `creator_points` de la table `account`.
- **Paliers & Déblocages** :
  - **Tier 0** (< 100 points) : PNJs simples (Niveau max = 10, pas d'équipement personnalisé, pas d'effets visuels).
  - **Tier 1** (100 - 499 points) : Création jusqu'au niveau 30, équipements d'armes simples autorisés (`EquipmentTemplateID` actif).
  - **Tier 2** (500 - 999 points) : Création jusqu'au niveau 50 (Possibilité de concevoir des Boss avec capacités spéciales).
  - **Tier 3** (>= 1000 points) : Personnalisation visuelle avancée (Spécification d'un effet visuel de spawn `SpawnEffect` et d'émotes/barks).
- **Validation Backend** : Le backend `server.py` compare les paramètres de la requête d'insertion avec les points de l'auteur et rejette l'insertion en cas d'infraction aux règles de palier.

