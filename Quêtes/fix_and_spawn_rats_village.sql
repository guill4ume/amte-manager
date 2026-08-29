-- ==============================================================================
-- Patch SQL : Ajustement des Rats des Neiges (Village de Caer Gothwaite - Region 51)
-- Size = 5, Constitution = 5, Brain = StandardMobBrain, AggroLevel = 0 (Neutre ripostant)
-- ==============================================================================

-- 1. Mise a jour des stats et de l'IA de tous les rats existants
UPDATE mob 
SET Size = 5, Constitution = 5, Brain = 'DOL.AI.Brain.StandardMobBrain', ClassType = '', AggroLevel = 0, AggroRange = 0, MeleeDamageType = 1, Speed = 180, RoamingRange = 500
WHERE Name = 'rat des neiges' AND Region = 51;

-- 2. Ajout de 16 rats des neiges supplementaires dans les rues du village de Caer Gothwaite (si non deja presents)
-- Coordonnees reparties entre CoupeOurs, Borgrond, Emeric, Alain, Alaric, Remi, Veydrak, Garrick, Morveth, Nimriel, Odan, Katell, Arestor, Marnok, Grumak
INSERT INTO mob (Mob_ID, Name, Guild, Realm, Region, X, Y, Z, Speed, Heading, Model, Size, Strength, Constitution, Dexterity, Quickness, Intelligence, Piety, Empathy, Charisma, Level, EquipmentTemplateID, ItemsListTemplateID, NPCTemplateID, Race, Flags, AggroLevel, AggroRange, MeleeDamageType, RespawnInterval, FactionID, BodyType, HouseNumber, Brain, PathID, OwnerID, RoamingRange, IsCloakHoodUp, Gender, PackageID, VisibleWeaponSlots, LastTimeRowUpdated)
SELECT UUID(), 'rat des neiges', '', 0, 51, 523100, 544200, 3165, 180, 1200, 568, 5, 20, 5, 30, 30, 10, 10, 10, 10, 1, 0, 0, 11999, 0, 0, 0, 0, 1, 120, 0, 0, 0, 'DOL.AI.Brain.StandardMobBrain', '', '', 500, 0, 0, '', 0, NOW()
WHERE (SELECT COUNT(*) FROM mob WHERE Name = 'rat des neiges' AND Region = 51) <= 15;
