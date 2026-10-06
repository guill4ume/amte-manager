-- ==============================================================================
-- Patch SQL : Spawn de 100 'rat des neiges' dans la Region 27 (Tutorial)
-- Zone 29 (Lamfhota's Sound) : 40 au camp/village + 60 en plaine/nature
-- Modele identique a Caer Gothwaite (Region 51) : Model 568, Lvl 1, Faction 1005
-- ==============================================================================

-- 1. Nettoyage prealable des rats existants en Region 27 (Idempotence)
DELETE FROM mob WHERE Name = 'rat des neiges' AND Region = 27;

-- 2. Insertion des 100 rats des neiges
INSERT INTO mob (
    Mob_ID, Name, Guild, Realm, Region, X, Y, Z, Speed, Heading, Model, Size,
    Strength, Constitution, Dexterity, Quickness, Intelligence, Piety, Empathy, Charisma,
    Level, EquipmentTemplateID, ItemsListTemplateID, NPCTemplateID, Race, Flags,
    AggroLevel, AggroRange, MeleeDamageType, RespawnInterval, FactionID, BodyType,
    HouseNumber, Brain, PathID, OwnerID, RoamingRange, IsCloakHoodUp, Gender,
    PackageID, VisibleWeaponSlots, LastTimeRowUpdated
) VALUES
    /* Rat #1 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342061, 383279, 5390, 180, 204, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #2 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341902, 382709, 5390, 180, 1143, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #3 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342222, 383057, 5394, 180, 712, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #4 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342144, 383084, 5390, 180, 244, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #5 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342110, 382703, 5394, 180, 217, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #6 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342128, 383281, 5391, 180, 3436, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #7 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342340, 383802, 5390, 180, 2278, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #8 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342639, 383458, 5393, 180, 1307, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #9 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342490, 382632, 5391, 180, 1273, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #10 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342879, 383730, 5390, 180, 837, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #11 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342630, 382774, 5392, 180, 2940, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #12 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342886, 383551, 5392, 180, 355, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #13 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342889, 383711, 5385, 180, 3100, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #14 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342992, 383637, 5381, 180, 2962, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #15 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341832, 383582, 5388, 180, 569, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #16 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342115, 382711, 5390, 180, 2370, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #17 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342313, 382797, 5393, 180, 827, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #18 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342070, 383300, 5391, 180, 2988, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #19 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342188, 382765, 5392, 180, 1716, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #20 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342386, 383264, 5394, 180, 584, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #21 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342436, 383588, 5391, 180, 2005, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #22 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342487, 383240, 5394, 180, 2211, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #23 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342428, 382840, 5390, 180, 2656, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #24 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342606, 383978, 5392, 180, 262, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #25 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342641, 382862, 5391, 180, 542, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #26 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342867, 383783, 5390, 180, 2577, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #27 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342950, 383903, 5388, 180, 3241, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #28 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342783, 383622, 5378, 180, 1143, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #29 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342115, 383509, 5392, 180, 2152, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #30 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341996, 382893, 5392, 180, 3271, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #31 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341988, 382748, 5390, 180, 4042, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #32 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342314, 383092, 5391, 180, 898, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #33 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342320, 382665, 5394, 180, 3458, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #34 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342059, 383112, 5394, 180, 3126, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #35 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342350, 383771, 5394, 180, 2059, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #36 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342691, 383051, 5394, 180, 938, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #37 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342700, 382626, 5390, 180, 2786, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #38 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342639, 383780, 5393, 180, 1295, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #39 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342437, 383094, 5394, 180, 2157, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #40 (Camp) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342967, 383507, 5391, 180, 871, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #41 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343754, 383319, 5357, 180, 1629, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #42 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343782, 383280, 5343, 180, 1323, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #43 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344497, 382743, 5314, 180, 4, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #44 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344331, 382600, 5291, 180, 159, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #45 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344571, 382614, 5310, 180, 1961, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #46 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341646, 384680, 5361, 180, 645, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #47 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342549, 384897, 5358, 180, 566, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #48 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342884, 384328, 5365, 180, 1051, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #49 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343286, 384662, 5339, 180, 1352, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #50 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341340, 383021, 5388, 180, 3466, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #51 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341552, 383973, 5384, 180, 1647, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #52 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 340908, 383487, 5390, 180, 3059, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #53 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341129, 383962, 5378, 180, 991, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #54 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341830, 381865, 5380, 180, 2769, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #55 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342602, 382267, 5384, 180, 1885, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #56 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342525, 381907, 5387, 180, 581, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #57 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341460, 381634, 5370, 180, 552, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #58 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343438, 382872, 5359, 180, 1949, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #59 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344085, 382997, 5343, 180, 1755, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #60 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343835, 382940, 5308, 180, 3872, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #61 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344484, 382516, 5291, 180, 1559, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #62 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344299, 382974, 5315, 180, 3531, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #63 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341833, 384520, 5360, 180, 3825, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #64 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342489, 385069, 5350, 180, 806, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #65 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342512, 384945, 5356, 180, 2779, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #66 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343054, 384296, 5343, 180, 1558, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #67 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341259, 382543, 5387, 180, 3456, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #68 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341285, 383673, 5381, 180, 2046, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #69 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 340953, 383363, 5383, 180, 802, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #70 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341267, 384053, 5376, 180, 120, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #71 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342371, 382042, 5386, 180, 1362, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #72 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342497, 382192, 5381, 180, 1751, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #73 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342360, 382068, 5377, 180, 3104, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #74 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341799, 381671, 5374, 180, 3727, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #75 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343533, 383513, 5357, 180, 3986, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #76 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343594, 382803, 5335, 180, 1783, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #77 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344293, 382953, 5310, 180, 499, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #78 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344058, 382151, 5298, 180, 3905, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #79 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344743, 382461, 5318, 180, 465, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #80 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341482, 384290, 5369, 180, 561, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #81 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341869, 385091, 5356, 180, 1926, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #82 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342222, 384783, 5364, 180, 2016, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #83 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343408, 384140, 5341, 180, 671, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #84 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341473, 382997, 5389, 180, 2591, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #85 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341209, 383885, 5383, 180, 2573, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #86 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 340771, 383205, 5393, 180, 1072, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #87 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341260, 383807, 5380, 180, 3745, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #88 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342369, 381874, 5387, 180, 76, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #89 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342636, 382276, 5376, 180, 819, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #90 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342850, 382118, 5379, 180, 2172, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #91 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341757, 381470, 5375, 180, 2001, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #92 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343391, 382961, 5363, 180, 3589, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #93 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344120, 382809, 5345, 180, 64, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #94 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344267, 382506, 5307, 180, 848, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #95 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344270, 382218, 5298, 180, 876, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #96 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 344359, 382578, 5319, 180, 2308, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #97 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 341615, 384834, 5363, 180, 2808, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #98 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342503, 385049, 5358, 180, 2162, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #99 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 342600, 384457, 5356, 180, 416, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #100 (Plaine/Sauvage) */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 343449, 384533, 5335, 180, 2266, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW());
