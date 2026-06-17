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

## 5. Questions Ouvertes pour Validation (Conceptualisation)

Pour affiner notre plan de travail, nous devons clarifier les points suivants :

> [!IMPORTANT]
> **Q1. Accès à la base de données :**
> Souhaitez-vous que le serveur Python `server.py` s'exécute directement sur l'hôte Windows (ce qui nécessite d'exposer le port `3306` de MariaDB dans `docker-compose.yml`), ou préférez-vous que nous conteneurisions également le backend/frontend d'AmteManagerV2 pour qu'il tourne dans le même réseau Docker que le serveur de jeu ?
> *(Note : L'exécution directe sur Windows est généralement plus simple pour le développement local et la compilation/l'écriture directe des fichiers C#).*

> [!IMPORTANT]
> **Q2. Méthode d'intégration des Quêtes C# :**
> Actuellement, les quêtes d'OpenDAoC-SPB sont compilées au démarrage du serveur de jeu depuis le dossier des scripts C#. 
> - Confirmez-vous que nous devons continuer à générer des fichiers physiques `.cs` (comme le fait QuestFactory) pour les placer dans le dossier scripts ?
> - Ou souhaitez-vous que nous étudions l'introduction d'un chargeur de quêtes dynamique (comme `dataquestjson` sur Breamor) qui lirait les quêtes directement depuis la base de données au démarrage ou à chaud sans recompiler le serveur ?
> *(Note : La génération de fichiers C# physiques est très robuste, tandis que le chargement dynamique en base de données évite de devoir redémarrer ou recompiler le serveur).*

> [!IMPORTANT]
> **Q3. Gestion de l'authentification et des comptes :**
> - Pour la connexion sur l'interface, devons-nous utiliser la table `account` existante du serveur OpenDAoC-SPB ?
> - Comment les joueurs s'inscriront-ils ou obtiendront-ils leur accès ? (Par exemple, toute personne ayant un compte joueur en jeu a automatiquement un accès "Joueur" sur l'interface, et les comptes GM/Admin ont l'accès complet ?)

> [!IMPORTANT]
> **Q4. Les cartes et images Leaflet :**
> Où sont situées les images des cartes d'Avalon (`51.jpg` à `57.jpg`) ? Sont-elles déjà présentes dans le dossier `QuestPlayerFactory/maps` ?
