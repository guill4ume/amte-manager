# 📊 Suivi & Tableau de Bord des Quêtes (Amtenaël / OpenDAoC)

Ce document assure le suivi centralisé de tous les chantiers de quêtes : lots actifs, quêtes déployées, quêtes archivées, et statut de validation (Local vs VPS Production).

---

## 🎯 Tableau de Bord des Chantiers de Quêtes

| Région / Faction | Lot | Description | Nombre | Statut Local | Statut VPS (Prod) |
| :--- | :---: | :--- | :---: | :---: | :---: |
| **Caer Gothwaite (Région 51)** | **Lot 2** | Quêtes quotidiennes bas niveau (1-15) faune d'Avalon (Capitaine, Borin, Kliomo, Mardona, Hargold) | **8** | ✅ Validé & Déployé | 🟡 En cours de test |
| **Paladins de Tyr (Région 51)** | **Faction** | Initiation + 3 Dailies + 1 Weekly Boss (Lysanor & Yasirah al-Nadir) | **5** | ✅ Validé & Déployé | 🟡 En cours de test |
| **Lyonesse / James (Archivées)** | **Lot 1** | Anciennes quêtes génériques Shrouded Isles (dépacées/mobs absents) | **11** | 📦 Archivées | 📦 Archivées |
| **Village d'Emblème (Région 51)** | **Lot 3** | Quêtes intermédiaires (niveaux 15-30) autour d'Emblème | *À venir* | ⏳ En attente | ⏳ En attente |
| **Village de Breamor (Région 51)** | **Lot 4** | Quêtes avancées (niveaux 30-45) autour de Breamor | *À venir* | ⏳ En attente | ⏳ En attente |
| **Frontières / RvR / BG** | **RvR** | Quêtes de capture de fort, reliques et élimination de joueurs | **50+** | ✅ Natif DOL | ✅ Natif DOL |

---

## 📋 Détail des Quêtes Actives en Région 51 (Avalon)

### 🏰 1. Quêtes de Caer Gothwaite & Village (Lot 2)

| Classe C# | PNJ Donneur | Lieu | Min Lvl | Max Lvl | Cible & Quota | Titre |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| `GothwaiteRatsDaily` | **Capitaine de Gothwaite** | Remparts de Gothwaite | 1 | 60 | 10 `rat des neiges` | `[Daily] Nettoyage des Remparts` |
| `CorboisLynxDaily` | **Borin Corbois** | Entrée de Gothwaite | 1 | 60 | 10 `lynx sauvage` | `[Daily] La Chasse aux Felins` |
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
   - Se rendre auprès des PNJs donneurs (**Capitaine de Gothwaite**, **Borin Corbois**, **Kliomo**, **Mardona**, **Hargold**).
   - Constater la présence de l'indicateur visuel doré sous les pieds du PNJ.
2. **Prise de Quête & Dialogue** :
   - Clic droit sur le PNJ $\rightarrow$ Le texte d'introduction et le mot-clé entre crochets s'affichent.
   - Clic sur le mot-clé $\rightarrow$ Le dialogue d'acceptation se déclenche et la quête s'ajoute au journal de quêtes (`/quest`).
3. **Réalisation des Objectifs** :
   - Tuer les monstres demandés $\rightarrow$ Vérifier l'incrémentation du compteur de quête à l'écran.
4. **Rendu de Quête** :
   - Retourner auprès du PNJ donneur $\rightarrow$ L'indicateur visuel de fin de quête est actif.
   - Clic sur le mot-clé de validation $\rightarrow$ Réception de l'expérience, de l'or et clôture de l'étape.
