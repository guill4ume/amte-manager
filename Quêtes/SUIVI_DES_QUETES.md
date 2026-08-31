# 📊 Suivi & Tableau de Bord des Quêtes (Amtenaël / OpenDAoC)

Ce document assure le suivi centralisé de tous les chantiers de quêtes : lots actifs, quêtes déployées, quêtes archivées, et statut de validation (Local vs VPS Production).

---

## 🎯 Tableau de Bord des Chantiers de Quêtes

| Région / Faction | Lot | Description | Nombre | Statut Local | Statut VPS (Prod) |
| :--- | :---: | :--- | :---: | :---: | :---: |
| **Caer Gothwaite (Région 51)** | **Lot 2** | Quêtes quotidiennes bas niveau (1-15) faune d'Avalon (Morwenna, Borin Thekesd, Odan, Garrick, Kliomo, Mardona, Hargold, Garde) | **8** | ✅ Validé & Déployé | ✅ Validé & Déployé |
| **Paladins de Tyr (Région 51)** | **Faction** | Initiation + 3 Dailies + 1 Weekly Boss (Dame Ysolde & Yasirah al-Nadir) | **5** | ✅ Validé & Déployé | ✅ Validé & Déployé |
| **Lyonesse / James (Archivées)** | **Lot 1** | Anciennes quêtes génériques Shrouded Isles (dépacées/mobs absents) | **11** | 📦 Archivées | 📦 Archivées |
| **Village d'Emblème (Région 51)** | **Lot 3** | Quêtes intermédiaires (niveaux 15-30) autour d'Emblème | *À venir* | ⏳ En attente | ⏳ En attente |
| **Village de Breamor (Région 51)** | **Lot 4** | Quêtes avancées (niveaux 30-45) autour de Breamor | *À venir* | ⏳ En attente | ⏳ En attente |
| **Frontières / RvR / BG** | **RvR** | Quêtes de capture de fort, reliques et élimination de joueurs | **50+** | ✅ Natif DOL | ✅ Natif DOL |

---

## 🗺️ Cartographie & Distances depuis Caer Gothwaite (Centre: X=525000, Y=541500)

La Région 51 regroupe plusieurs zones géographiques interconnectées, dont **Isle of Glass (Zone 51)** abritant Caer Gothwaite, et **Avalon Isle (Zone 52)** abritant Prios au nord.

| Monstre Cible | Spawns BDD | Plage Niveaux | Distance Min | Distance Max | Distance Moyenne | Situation Géographique |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| `rat des neiges` | 31 | 1 | 1 063 u | 3 961 u | **2 644 u** | 🟢 **Dans le village** (ruelles, cours) |
| `lynx sauvage` | 26 | 2 | 4 931 u | 10 209 u | **7 017 u** | 🟢 **Abords ouest** (< 10k u) |
| `vieille branche` | 24 | 3 - 5 | 6 271 u | 14 613 u | **10 192 u** | 🟢 **Sentiers ouest** (~10k u) |
| `cochon sauvage` | 16 | 5 | 9 542 u | 13 916 u | **11 949 u** | 🟢 **Taillis sud-ouest** (~12k u) |
| `araneae` | 26 | 7 | 9 015 u | 18 175 u | **12 595 u** | 🟢 **Vallée sud** (~13k u) |
| `machairodonte` | 21 | 8 | 16 948 u | 21 093 u | **19 031 u** | 🟢 **Plateaux sud-est / Hargold** (~19k u) |
| `loup` | 31 | 11 | 20 788 u | 31 068 u | **26 923 u** | 🟢 **Collines méridionales** (~27k u) |
| `scarabe` | 21 | 9 | 27 646 u | 32 904 u | **30 088 u** | 🟡 **Plaine sud-est** (~30k u) |
| `mort-vivant` | 20 | 4 | 7 100 u | 9 100 u | **8 023 u** | 🟢 **Contreforts ouest du village** (~8k u) |

*Tous les monstres des quêtes 1 à 15 (Lot 2 + Initiation) sont vérifiés en BDD et se trouvent à proximité immédiate (≤ 30 000 unités) de Caer Gothwaite.*

---

## 📋 Détail des Quêtes Actives en Région 51 (Avalon)

### 🏰 1. Quêtes de Caer Gothwaite & Village (Lot 2)

| Classe C# | PNJ Donneur | Lieu | Min Lvl | Max Lvl | Cible & Quota | Titre |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| `MorwennaRatsDaily` | **Morwenna (Médecin)** | Village de Gothwaite | 1 | 60 | 10 `rat des neiges` | `[Daily] Nettoyer la Ville` |
| `BorinThekesdLynxDaily` | **Borin Thekesd (Cercle du Croc)** | Village de Gothwaite | 1 | 60 | 10 `lynx sauvage` | `[Daily] La Chasse aux Felins` |
| `OdanBranchesDaily` | **Odan (Bûcheron)** | Village de Gothwaite | 1 | 60 | 8 `vieille branche` | `[Daily] Menace Sylvestre` |
| `GarrickCochonsDaily` | **Garrick (Fret)** | Village de Gothwaite | 1 | 60 | 10 `cochon sauvage` | `[Daily] Ravitaillement de Gothwaite` |
| `KliomoAraigneesDaily` | **Kliomo (Forgeron)** | Marché de Gothwaite | 1 | 60 | 10 `araneae` | `[Daily] Toiles et Carapaces` |
| `MardonaScarabeDaily` | **Mardona (Forgeron)** | Marché de Gothwaite | 1 | 60 | 10 `scarabe` | `[Daily] Cuirasses de Scarabee` |
| `HargoldPredateursDaily` | **Hargold (Mercenaire)** | Camp d'Hargold (Sud) | 1 | 60 | 10 `machairodonte` | `[Daily] Dents de Sabre du Sud` |
| `GardeHargoldLoupsDaily` | **Garde d'Hargold** | Camp d'Hargold (Sud) | 1 | 60 | 10 `loup` | `[Daily] Traque de la Meute` |

### 🛡️ 2. Quêtes de Faction des Paladins de Tyr

| Classe C# | PNJ Donneur | Lieu | Type | Min Lvl | Max Lvl | Cible & Quota | Titre |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| `VoieDeLaJustice` | **Dame Ysolde d'Argent** | Village de Gothwaite | Initiation | 1 | 60 | 5 `mort-vivant` | `La Voie de la Justice` |
| `TyrDailyPurge` | **Yasirah al-Nadir** | Bastion de l'Ordre | Daily | 40 | 60 | 10 `ange dechu` | `[Daily] Purge des Morts-Vivants` |
| `TyrDailyTraque` | **Yasirah al-Nadir** | Bastion de l'Ordre | Daily | 40 | 60 | 8 `heretique` | `[Daily] La Chasse aux Heretiques` |
| `TyrDailyProtection` | **Yasirah al-Nadir** | Bastion de l'Ordre | Daily | 40 | 60 | 12 `Esprit malveillant` | `[Daily] Rempart contre le Chaos` |
| `TyrWeeklyBoss` | **Yasirah al-Nadir** | Bastion de l'Ordre | Weekly | 45 | 60 | 1 `Vorrim BriseCrane` | `[Weekly] Le Fleau de Khorne` |

---

## 📦 Archive du Lot 1 (Anciennes Quêtes Lyonesse/James)

Emplacement de sauvegarde : `ProjetsAnnexes/DossierPortage/Archives/Quests_Archive_Region51/`
- `LyonesseCrabQuestAlb.cs`
- `LyonesseSatyrQuestAlb.cs`
- `LyonesseSprigganQuestAlb.cs`
- `LyonesseBogmanQuestAlb.cs`
- `LyonesseWolfQuestAlb.cs`
- `LyonesseSpriteQuestAlb.cs`
- `LyonesseAraneidaeQuestAlb.cs`
- `DanaoinKillQuestAlb.cs`
- `LyonesseGhostQuestAlb.cs`
- `HardcoreOrangesAlbAvalon.cs`
- `PlayerKillQuestAlbAvalon.cs`

---

## 🧪 Protocole de Test & Validation

1. **Vérification du Cercle Doré** :
   - Se connecter avec un personnage joueur (niveau 1 à 50+).
   - Se rendre auprès des PNJs donneurs (**Morwenna**, **Borin Thekesd**, **Odan**, **Garrick**, **Kliomo**, **Mardona**, **Hargold**, **Garde d'Hargold**).
   - Constater la présence de l'indicateur visuel doré sous les pieds du PNJ.
2. **Prise de Quête & Dialogue** :
   - Clic droit sur le PNJ $\rightarrow$ Le texte d'introduction et le mot-clé entre crochets s'affichent.
   - Clic sur le mot-clé $\rightarrow$ Le dialogue d'acceptation se déclenche et la quête s'ajoute au journal de quêtes (`/quest` ou touche `J`).
3. **Indicateurs Minicarte & Boussole (Points Rouges)** :
   - **Étape 1 (Chasse)** : Vérifier que la boussole/minicarte et la carte de zone (`Shift+M`) affichent un point rouge dynamique sur la position des créatures cibles.
   - **Étape 2 (Rendu PNJ)** : Dès que le quota de monstres est atteint, vérifier que le point rouge bascule automatiquement pour pointer sur le PNJ donneur.
4. **Réalisation des Objectifs** :
   - Tuer les monstres demandés $\rightarrow$ Vérifier l'incrémentation du compteur de quête à l'écran.
5. **Rendu de Quête** :
   - Retourner auprès du PNJ donneur $\rightarrow$ L'indicateur visuel de fin de quête est actif.
   - Clic sur le mot-clé de validation $\rightarrow$ Réception de l'expérience, de l'or et clôture de l'étape (effacement propre du marqueur).

