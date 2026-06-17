# QuestFactory — Générateur de Quêtes OpenDAoC / Amtenaël

Outil de génération automatique de scripts C# pour les quêtes Daily/Weekly/Hardcore du serveur Amtenaël.
**Créé le 9 juin 2026. Validé en production le 11 juin 2026.**

## Structure

```
QuestFactory/
├── generate_quests.py              # Script principal
├── quests_definitions_example.csv # Exemple de définitions (10 quêtes)
├── quests_definitions.csv         # TON fichier de travail (à créer)
├── templates/
│   ├── daily_pve_kill.cs.j2       # Daily PvE (kill mobs nommés)
│   ├── daily_rvr_kill.cs.j2       # Daily RvR (kill players)
│   ├── hardcore_kill.cs.j2        # Hardcore (kill orange-con solo)
│   └── weekly_pve_kill.cs.j2      # Weekly PvE (kill mobs nommés)
└── README.md
```

## Prérequis

```powershell
python -m pip install jinja2
```

> Python 3.12 installé via `winget install Python.Python.3.12` le 11 juin 2026.

---

## Utilisation rapide

### 1. Valider sans écrire (dry-run)
```powershell
$env:PYTHONIOENCODING = "utf-8"
python generate_quests.py --csv quests_definitions_example.csv --dry-run
```

### 2. Générer les fichiers
```powershell
$env:PYTHONIOENCODING = "utf-8"
python generate_quests.py --csv quests_definitions.csv
```

### 3. Générer en écrasant les fichiers existants
```powershell
python generate_quests.py --csv quests_definitions.csv --overwrite
```

### 4. Rebuild Docker local (intègre les .cs dans l'image)
```powershell
cd ..\OpenDAoC-SPB
docker compose up -d --build
```

### 5. Vérifier que les quêtes se chargent
```powershell
docker logs openbots-server 2>&1 | Select-String "Registering quest"
```

### 6. Valider in-game puis pousser en prod
```powershell
git add GameServer/scripts/quests/AtlasQuests/DailyQuests/
git commit -m "feat: add batch quests via QuestFactory"
git push origin spb
```

> ⚠️ **Règle d'or** : Ne jamais pousser sans validation in-game préalable. Le push déclenche un déploiement automatique en prod à 4h00.

---

## Comment ça marche

### Vue d'ensemble du pipeline

```
quests_definitions.csv
        │
        ▼ python generate_quests.py
        │
        ├── Lit chaque ligne du CSV
        ├── Choisit le bon template Jinja2 selon (quest_type, frequency)
        ├── Rend le template avec les paramètres de la ligne
        └── Écrit le fichier .cs dans le bon sous-dossier du projet
                    │
                    ▼ docker compose up -d --build
                    │
                    ├── dotnet build intègre tous les .cs dans GameServer.dll
                    └── Le serveur charge les quêtes via [ScriptLoadedEvent]
```

### Résolution du PNJ donneur de quête

Chaque script généré utilise une **propriété dynamique** pour localiser le PNJ (ex: James) plutôt qu'une référence statique. Cela évite une race condition critique découverte en production : quand plusieurs scripts se chargent en parallèle, une référence statique `GameNPC James = null` pouvait rester null si le PNJ n'était pas encore créé au moment du chargement du script.

```csharp
// Pattern robuste (utilisé dans tous les templates)
private static GameNPC James
{
    get
    {
        foreach (GameNPC npc in WorldMgr.GetNPCsByName("James", eRealm.Albion))
            if (npc.CurrentRegionID == 51 && npc.X == 534044 && npc.Y == 549664)
                return npc;
        return null;
    }
}
```

Cette propriété interroge `WorldMgr` à chaque appel, garantissant que le PNJ est toujours trouvé dès qu'il existe dans le monde, quelle que soit l'ordre de chargement des scripts.

### Correspondance type → template → dossier de sortie

| quest_type | frequency | Template utilisé | Dossier de sortie (Albion) |
|---|---|---|---|
| `pve` | `daily` | `daily_pve_kill.cs.j2` | `Albion/PvE/Daily/` |
| `pve` | `weekly` | `weekly_pve_kill.cs.j2` | `Albion/PvE/Weekly/` |
| `rvr` | `daily` | `daily_rvr_kill.cs.j2` | `Albion/RvR/Daily/` |
| `rvr` | `weekly` | `daily_rvr_kill.cs.j2` | `Albion/RvR/Weekly/` |
| `hardcore` | `daily` | `hardcore_kill.cs.j2` | `Albion/Hardcore/` |
| `frontier` | `daily` | `daily_pve_kill.cs.j2` | `Albion/Frontier/Daily/` |

> Hibernia et Midgard suivent le même schéma, adapter `realm` dans le CSV.

---

## Format du CSV

Une ligne = une quête. Colonnes obligatoires :

| Colonne | Description | Exemple |
|---|---|---|
| `class_name` | Nom de la classe C# (unique, PascalCase) | `LyonesseCrabQuestAlb` |
| `quest_type` | Type : `pve`, `rvr`, `hardcore`, `frontier` | `pve` |
| `frequency` | Fréquence : `daily`, `weekly` | `daily` |
| `realm` | Royaume : `Albion`, `Hibernia`, `Midgard` | `Albion` |
| `quest_title` | Titre affiché (sans `[Daily]` / `[Weekly]`) | `Crab Infestation` |
| `min_level` | Niveau minimum | `40` |
| `max_level` | Niveau maximum | `50` |
| `kill_quota` | Nombre de kills requis | `10` |
| `mob_name` | Nom exact du mob (PvE) ou vide (RvR/HC) | `Lyonesse Crab` |
| `npc_name` | Nom du PNJ donneur de quête | `James` |
| `npc_var` | Nom de la propriété C# du PNJ | `James` |
| `npc_guild` | Titre du PNJ | `Advisor To The King` |
| `npc_model` | ID du modèle 3D du PNJ | `254` |
| `npc_region` | RegionID | `51` |
| `npc_x` / `npc_y` / `npc_z` / `npc_heading` | Coordonnées du PNJ | `534044` |
| `npc_location_comment` | Nom du lieu (pour les dialogues) | `Caer Gothwaite` |
| `counter_var` | Nom de la variable compteur C# | `crabsKilled` |
| `dialog_intro` | Phrase d'intro du PNJ | `Giant crabs...` |
| `dialog_lore` | (Weekly uniquement) Lore supplémentaire | _(optionnel)_ |
| `dialog_in_progress` | Message si quête en cours (step 1) | `Head north...` |
| `dialog_accepted` | Message après acceptation | `Good luck!` |
| `dialog_decline` | Message si refus | `Thank you.` |
| `dialog_reward` | Message lors de la remise | `Well done!` |
| `whisper_accept` | Mot-clé pour accepter (lien cliquable) | `cull the crabs` |
| `whisper_finish` | Mot-clé pour terminer | `finished the job` |
| `description_step1` | Texte du journal à l'étape 1 | `Kill Crabs...` |

> **Règle d'or :** ZÉRO accent dans les noms de classe, `class_name`, `npc_name` et mots-clés whisper.
> Le `class_name` doit être **globalement unique** dans tout le projet C# pour éviter une erreur `CS0111`.

---

## PNJ Albion Région 51 (James — Caer Gothwaite)

```
Name:      James
GuildName: Advisor To The King
Model:     254
Region:    51
X:         534044
Y:         549664
Z:         4940
Heading:   3143
```

James est **partagé** par toutes les quêtes Albion en région 51. Il est créé une seule fois
au chargement du premier script qui ne le trouve pas en world. Grâce au pattern de propriété
dynamique, tous les scripts le retrouvent correctement même s'ils se chargent en parallèle.

---

## Récompenses standard

| Type | XP | Orbs (AtlasROG) | Or |
|---|---|---|---|
| Daily PvE | `XP / 10` | 100 | `level × 50` gold cents |
| Daily RvR | `XP / 5` | 1000 | `level × 32` gold cents + RP via `DAILY_RVR_REWARD` |
| Hardcore | `XP / 2` | 500 | `level × 2` gold |
| Weekly PvE | `XP full` | 5000 | `level × 5` gold |

---

## Quêtes déployées — Lot 1 (11 juin 2026)

10 quêtes Albion pour la région 51 (Lyonesse / Avalon), toutes assignées à **James** :

| Classe C# | Type | Mob / Cible | Kills |
|---|---|---|---|
| `LyonesseCrabQuestAlb` | Daily PvE | Lyonesse Crab | 10 |
| `LyonesseSatyrQuestAlb` | Daily PvE | Lyonesse Satyr | 8 |
| `LyonesseSprigganQuestAlb` | Daily PvE | Spriggan | 12 |
| `LyonesseBogmanQuestAlb` | Daily PvE | Bog Man | 10 |
| `LyonesseWolfQuestAlb` | Daily PvE | Lyonesse Wolf | 15 |
| `LyonesseSpriteQuestAlb` | Daily PvE | Cornish Sprite | 10 |
| `LyonesseAraneidaeQuestAlb` | Daily PvE | Araneid | 12 |
| `LyonesseGhostQuestAlb` | Weekly PvE | Lyonesse Ghost | 20 |
| `HardcoreOrangesAlbAvalon` | Hardcore Daily | Orange-con monsters | 10 |
| `PlayerKillQuestAlbAvalon` | RvR Daily | Enemy players | 5 |

---

## Ajouter un nouveau type de quête

1. Crée un template dans `templates/` (copie le plus proche)
2. Applique le **pattern propriété dynamique** pour le NPC (pas de `static GameNPC X = null`)
3. Ajoute l'entrée dans `QUEST_TYPE_TO_TEMPLATE` et `QUEST_TYPE_TO_PATH` dans `generate_quests.py`
4. Génère, teste, valide in-game, puis push

---

## Workflow complet

```
Éditer quests_definitions.csv
         │
         ▼
python generate_quests.py --dry-run    ← vérifier les chemins
         │
         ▼
python generate_quests.py --overwrite  ← générer les .cs
         │
         ▼
docker compose up -d --build           ← rebuilder l'image Docker locale
         │
         ▼
docker logs openbots-server | Select-String "Registering quest"
                                       ← vérifier l'enregistrement
         │
         ▼
Test in-game (parler au PNJ, tuer le mob, remettre la quête)
         │
         ▼
git add . && git commit -m "feat: ..." && git push origin spb
                                       ← déploiement prod automatique à 4h00
```

---

## Dépannage

### Les quêtes s'enregistrent (`Registering quest`) mais ne s'affichent pas chez le PNJ

**Symptôme :** `[WARN] InvokeSafe took Xms! method: MaQuete.ScriptLoaded target: null`

**Cause :** Race condition au chargement — le PNJ n'existait pas encore quand le script a voulu stocker sa référence statique.

**Fix :** Utiliser le pattern de **propriété dynamique** (voir section "Résolution du PNJ"). Tous les templates v2 (depuis le 11 juin 2026) utilisent ce pattern.

### Erreur `CS0111` au build

**Cause :** Deux classes C# ont le même `class_name` dans le projet.

**Fix :** Chaque quête doit avoir un `class_name` **strictement unique** dans tout le projet. Vérifier avec :
```powershell
Get-ChildItem -Recurse -Filter "*.cs" | Select-String "public class MaClasse"
```

### Quête invisible pour le joueur (mauvais niveau)

**Cause :** `min_level` / `max_level` ne correspondent pas au niveau du personnage de test.

**Fix :** Utiliser `/level 50` en GM sur le serveur local ou adapter les niveaux dans le CSV.
