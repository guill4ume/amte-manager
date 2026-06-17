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

---

## Phase 5 : Tests, Recette & Gestion des PNJs - Isolation des PNJs créés par les joueurs

### 1. Frontend Vue (`Mobs.vue`)
- **Filtre de chargement** : La requête de chargement dans le composant [Mobs.vue](file:///c:/OpenDAOC_server/ProjetsAnnexes/AmteManagerV2/app/src/views/Mobs.vue) a été modifiée pour filtrer exclusivement les PNJs ayant `Region = 51 AND NPCTemplateID = -99` (au lieu de `-1`). Cela permet d'exclure les ~1364 PNJs officiels de la Région 51 présents dans la base de données standard de DAoC qui possèdent également `NPCTemplateID = -1` par défaut.
- **Création/Modification de PNJ** : Lors de la sauvegarde (insertion et mise à jour) d'un PNJ dans la méthode `saveNpc`, la valeur du champ `NPCTemplateID` injectée est désormais `-99`.
- **Validation du marqueur temporaire orange** : Le comportement interactif (clic pour placer et drag-and-drop du marqueur orange) n'a pas été affecté car il est géré entièrement au niveau du client Leaflet.

### Protocole de Test

#### Étape 1 : Reconstruire et démarrer l'application
1. Dans un terminal, rendez-vous dans le répertoire d'intégration d'OpenDAoC-SPB :
   ```bash
   cd C:\OpenDAOC_server\ProjetsAnnexes\OpenDAoC-SPB
   ```
2. Reconstruisez et démarrez le conteneur `amtemanager` :
   ```bash
   docker compose up -d --build amtemanager
   ```
3. Videz le cache de votre navigateur (`Ctrl + F5`) pour forcer le chargement de la nouvelle version du frontend Vue.

#### Étape 2 : Vérification du chargement initial
1. Ouvrez l'interface d'AmteManagerV2 et accédez à l'onglet **PNJs/NPCs**.
2. Vérifiez que la liste des PNJs à droite est vide (ou ne contient que vos précédents tests s'ils avaient `-99` en template, mais ne doit pas afficher les 1364 PNJs officiels).
3. Vérifiez qu'aucun marqueur bleu (représentant les PNJs existants) n'est affiché sur la carte d'Avalon à gauche.

#### Étape 3 : Création d'un PNJ avec l'interface interactive
1. Cliquez sur **New PNJ/NPC**.
2. Vérifiez que le marqueur temporaire orange s'affiche sur la carte.
3. Cliquez à un autre endroit de la carte ou glissez-déposez le marqueur orange. Vérifiez que les coordonnées **X** et **Y** dans le formulaire à droite se mettent à jour automatiquement.
4. Remplissez le nom (ex: `Garde Test 99`) et un titre/guild, puis cliquez sur **Place NPC**.

#### Étape 4 : Validation en base de données et dans la liste
1. Exécutez une requête SQL ou utilisez votre éditeur de base de données pour vérifier la table `mob` :
   ```sql
   SELECT Mob_ID, Name, NPCTemplateID, Region, X, Y FROM mob WHERE NPCTemplateID = -99;
   ```
   *Vérification attendue : Le nouveau PNJ doit y figurer avec `NPCTemplateID = -99`.*
2. Vérifiez que le nouveau PNJ apparaît désormais dans le tableau à droite.
3. Vérifiez qu'un marqueur bleu est présent sur la carte de gauche à la position spécifiée.

#### Étape 5 : Validation de l'édition
1. Cliquez sur l'icône de modification (crayon) à côté du PNJ dans le tableau.
2. Modifiez son nom ou sa guilde, puis cliquez sur **Update NPC**.
3. Exécutez à nouveau la requête SQL pour vérifier que les modifications ont été appliquées et que la valeur de `NPCTemplateID` est restée à `-99`.

---

### Résolution du bug de création (Mob_ID manquant)
- **Problème** : Lors de la création d'un PNJ, l'exécution SQL échouait avec une erreur 500 car le champ clé primaire `Mob_ID` (qui est un UUID string dans DAoC) n'était pas fourni et n'a pas de valeur par défaut en base de données.
- **Solution** : 
  - Mise à jour du backend Flask (`server.py`) pour générer automatiquement un UUID4 unique si `Mob_ID` est absent de l'insertion.
  - Correction de `Mobs.vue` pour typer `Mob_ID` en `string | null` et ajout des guillemets simples SQL dans les clauses `WHERE` pour les requêtes `UPDATE` et `DELETE` afin de supporter les UUID strings.

---

### Problématique de la hauteur Z des PNJs
- **Observation** : Les PNJs créés avec une hauteur par défaut de `Z = 1800` peuvent apparaître sous le sol ou dans le vide en jeu, les rendant invisibles et inciblables.
- **Solution (NavMesh)** :
  1. **Montage Docker Compose** : Les fichiers `.nav` présents dans `FixDivers/NavMesh` ont été montés en lecture seule dans le conteneur du GameServer sous `/app/pathing` :
     ```yaml
     # docker-compose.yml
     - ../FixDivers/NavMesh:/app/pathing:ro
     ```
  2. **Code C# (GameServer)** : Dans [GameNPC.cs](file:///c:/OpenDAOC_server/ProjetsAnnexes/OpenDAoC-SPB/GameServer/gameobjects/GameNPC.cs#L2064-L2078), lors de l'ajout au monde d'un PNJ joueur (`IsPlayerQuestNPC == true`), le serveur interroge désormais le NavMesh local pour caler l'altitude `Z` au niveau du sol réel avec une tolérance verticale de 16 000 unités :
     ```csharp
     if (IsPlayerQuestNPC)
     {
         if (CurrentZone != null && PathingMgr.Instance != null && PathingMgr.Instance.HasNavmesh(CurrentZone))
         {
             var point = PathingMgr.Instance.GetClosestPointAsync(CurrentZone, new System.Numerics.Vector3(X, Y, Z), 500f, 500f, 16000f);
             if (point.HasValue)
             {
                 Z = (int)point.Value.Z;
             }
         }
     }
     ```

### Protocole de Test - Validation en jeu
1. **Création du PNJ** : Connectez-vous sur AmteManagerV2 (après un `Ctrl + F5` pour rafraîchir le cache) et créez un PNJ dans la Région 51 (Avalon) via la carte interactive avec les valeurs de hauteur par défaut (`Z = 1800`).
2. **Vérification en base de données** : Le PNJ doit être présent dans la table `mob` avec `NPCTemplateID = -99` et posséder un `Mob_ID` sous format UUID.
3. **Vérification en jeu** : Rendez-vous aux coordonnées X/Y en jeu avec votre personnage. Le PNJ doit être visible et correctement positionné au niveau du sol (son Z aura été corrigé de façon dynamique par le serveur lors de son spawn).
4. **Validation de l'auto-destruction** : Vérifiez que le PNJ disparaît de lui-même après le délai défini (14 jours ou 5 minutes en mode test).

---

### Résolution du bug de permission UPDATE (Erreur 403)
- **Problème** : Lors de la modification (`UPDATE`) ou de la suppression (`DELETE`) d'un PNJ créé par l'interface autonome, le backend Flask retournait une erreur `403` (Forbidden). Les droits d'accès des joueurs (`TABLES_ACCESS_PLAYER`) sur la table `mob` étaient configurés en lecture + insertion uniquement.
- **Solution** :
  - Mise à jour des permissions dans `server.py` pour accorder les droits d'accès `UPDATE` et `DELETE` aux joueurs sur la table `mob`.
  - Intégration d'une restriction de sécurité stricte dans les requêtes d'action `UPDATE` et `DELETE` sur la table `mob` pour s'assurer qu'un joueur ne peut modifier ou supprimer que ses propres PNJs créés (ceux ayant `NPCTemplateID = -99`). Les PNJs officiels de la table restants ainsi totalement protégés de toute altération par les joueurs.

