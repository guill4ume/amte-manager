# Liste des tâches - AmteManagerV2

## Phase 1 : Conteneurisation & Backend Python
- `[x]` Configurer `server.py` dans `AmteManagerV2` (Authentification, proxy SQL, etc.)
- `[x]` Créer le `Dockerfile` multi-stage pour AmteManagerV2
- `[x]` Intégrer le service `amtemanager` dans `docker-compose.yml` d'OpenDAoC-SPB
- `[x]` Valider le démarrage du conteneur et l'accès depuis le navigateur

## Phase 2 : Base de Données & Frontend Joueur
- `[x]` Créer la table `dataquestjson` avec la colonne `CreatorAccount` dans MariaDB (init_dataquestjson.sql créé)
- `[x]` Adapter le frontend Vue pour masquer tous les modules GM/Admin si connecté en tant que joueur
- `[x]` Intégrer l'affichage Leaflet des cartes d'Avalon (zones 50 à 59) et l'outil de conversion de coordonnées (inclus dans DaocMap)

## Phase 3 : Noyau C# & Chargeur de Quêtes
- `[x]` Nettoyer le dossier C# `JsonQuests` (remplacer `BreamorFactionMgr` par le système standard `Faction` de DOL)
- `[x]` Intégrer la gestion des quêtes JSON dans `GameNPC.cs` (liste des quêtes et indicateurs)
- `[x]` Intercepter les interactions de quête JSON dans `GameObject.cs` (`OnInteract`)
- `[x]` Ajouter les accesseurs de quête JSON dans `GamePlayer.cs` (`HasFinishedQuest` / `IsDoingQuest`)
- `[x]` Gérer l'affichage dans le journal du client via `DetailDisplayHandler.cs`
- `[x]` Compiler le serveur OpenDAoC-SPB et valider l'absence d'erreurs

## Phase 4 : Restrictions Joueurs & PNJ Temporaires
- `[x]` Forcer la création de PNJ niveau 1 dans le backend Python et le code C#
- `[x]` Implémenter le mécanisme d'auto-destruction (14 jours maximum / 5 minutes test) dans le code C# du PNJ

## Phase 5 : Tests & Validation
- `[x]` Isoler et identifier de manière unique les PNJs créés par les joueurs en base (NPCTemplateID = -99 au lieu de -1)
- `[x]` Intégrer les fichiers NavMesh et l'ajustement automatique de la hauteur Z sur le GameServer C#
- `[/]` Tester le flux complet : création d'une quête sur l'interface -> sauvegarde DB -> spawn du PNJ -> réalisation en jeu -> auto-destruction
