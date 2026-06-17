# Walkthrough - Phase 4 : Restrictions Joueurs & PNJ Temporaires

Nous avons implémenté les restrictions de sécurité pour les quêtes créées par les joueurs. Les modifications ont été compilées avec succès et sont prêtes pour validation.

## Modifications apportées

### 1. Backend Python (`server.py`)
- Mise à jour du proxy SQL `server.py` pour :
  - Extraire et valider l'insertion/mise à jour du champ `CreatorAccount` lié au joueur connecté.
  - Parser et sécuriser la structure JSON `GoalsJson` pour forcer à 1 tout champ `TargetLevel` qui pourrait y être spécifié.

### 2. Moteur de Quêtes C# (`JsonQuests`)
- **`DBDataQuestJson.cs`** : Ajout du mapping pour le champ `CreatorAccount` afin que le serveur de jeu puisse différencier les quêtes de type `"System"` de celles créées par les joueurs.
- **`DataQuestJson.cs`** : 
  - Récupération du champ `CreatorAccount` lors de l'instanciation de la quête.
  - Si `CreatorAccount != "System"`, le niveau du PNJ donneur de quête (`Npc`) est forcé à **1** et il est configuré avec les propriétés temporaires (`IsPlayerQuestNPC = true`, `CreationDate = DateTime.UtcNow`).

### 3. Gestion des PNJ Temporaires (`GameNPC.cs`)
- **`GameNPC.cs`** :
  - Ajout des propriétés `CreationDate`, `IsPlayerQuestNPC`, et du timer d'auto-destruction `m_autoDestructionTimer` (`ECSGameTimer`).
  - Définition d'un drapeau statique `SpeedUpPlayerQuestNPCDestruction` à des fins de test.
  - Dans la méthode d'insertion du PNJ dans le monde (`AddToWorld()`), si le PNJ appartient à une quête de joueur, démarrage d'un timer configuré pour expirer après **14 jours** (ou **5 minutes** si le mode de test rapide est activé).
  - À l'expiration du timer, appel automatique à la méthode `Delete()` du PNJ pour le retirer du monde.

---

> [!IMPORTANT]
> **Déploiement des modifications Frontend** : 
> L'application Vue étant compilée lors de la construction de l'image Docker d'AmteManagerV2, toute modification du frontend (ex: modifications dans `App.vue` pour l'accessibilité des cartes) nécessite de reconstruire et redémarrer le conteneur pour être prise en compte :
> ```bash
> cd C:\OpenDAOC_server\ProjetsAnnexes\OpenDAoC-SPB
> docker compose up -d --build amtemanager
> ```
> Pensez également à vider le cache de votre navigateur (`Ctrl + F5`) après le redémarrage.

## Plan de Test Proposé

1. **Test rapide (5 minutes)** :
   - Vous pouvez activer le test rapide en jeu en définissant le paramètre `GameNPC.SpeedUpPlayerQuestNPCDestruction = true;` (par exemple via un script de test ou dans le code si vous le souhaitez, ou nous pouvons le faire par défaut pour validation rapide).
   - Créer une quête joueur sur l'application Web locale.
   - Vérifier en jeu que le PNJ donneur de quête a bien son niveau forcé à 1.
   - Attendre 5 minutes et observer que le PNJ disparaît automatiquement (auto-destruction).

---

---

## Intégration de la Carte Interactive dans le Créateur de Quête

Nous avons grandement amélioré l'expérience utilisateur dans l'interface de création de quêtes en intégrant directement la carte Leaflet interactive dans l'onglet **Blueprint** de l'éditeur :

* **Affichage de la Carte** : Un affichage de la carte de la région (`NpcRegion`) a été intégré côte à côte avec le diagramme de flux Cytoscape.
* **Auto-Focus PNJ** : La carte est initialisée avec le nom du PNJ donneur de quête (`NpcName`) pré-rempli dans la zone de recherche pour localiser immédiatement son marqueur sur la carte.
* **Correctif de Hauteur CSS** : La hauteur de la carte dans le sous-composant a été fixée à `400px` (au lieu de la hauteur dynamique de viewport `100vh`) pour éviter son invisibilité ou un bug de chargement de tuiles Leaflet.

---

## Correctifs Apportés sur le Backend Python (`server.py`)

1. **Erreur 400 (Bad Request)** :
   * **Cause** : Le proxy attendait les paramètres `action` et `table` dans le corps JSON, alors que le frontend envoyait parfois ces informations en arguments de requête dans l'URL (`request.args`).
   * **Solution** : Correction dans `server.py` pour tenter de lire depuis `request.json` et en secours depuis `request.args` :
     ```python
     action = req.get('action') or request.args.get('action')
     table = req.get('table') or request.args.get('table')
     ```

2. **Erreur 500 (SQL Syntax Error sur UPDATE)** :
   * **Cause** : Lors de la modification ou l'ajout d'étapes (goals) de quête, le frontend envoyait des backticks échappés (ex. `\`GoalsJson\``), ce qui causait une erreur de syntaxe SQL dans MariaDB.
   * **Solution** : Nettoyage automatique des caractères d'échappement inverses des backticks dans `upfields` avant l'exécution de la requête :
     ```python
     upfields = upfields.replace('\\`', '`').replace('\\\\`', '`')
     ```
   * **Débogage** : Ajout de logs console de débogage (`print(sql)`) dans `server.py` pour capturer la structure SQL exacte en cas de futures erreurs.

