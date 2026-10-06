-- ==============================================================================
-- Patch SQL : Spawn de 30 'rat des neiges' autour de Heyvenna (Region 27 - Constantine's Sound)
-- Centre : X=109945, Y=92768, Z=5068 (Ile Albion Tutorial - Zone 27)
-- Modele identique a Caer Gothwaite : Model 568, Lvl 1, Faction 1005
-- ==============================================================================

INSERT INTO mob (
    Mob_ID, Name, Guild, Realm, Region, X, Y, Z, Speed, Heading, Model, Size,
    Strength, Constitution, Dexterity, Quickness, Intelligence, Piety, Empathy, Charisma,
    Level, EquipmentTemplateID, ItemsListTemplateID, NPCTemplateID, Race, Flags,
    AggroLevel, AggroRange, MeleeDamageType, RespawnInterval, FactionID, BodyType,
    HouseNumber, Brain, PathID, OwnerID, RoamingRange, IsCloakHoodUp, Gender,
    PackageID, VisibleWeaponSlots, LastTimeRowUpdated
) VALUES
    /* Rat #1 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110075, 92812, 5069, 180, 2183, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #2 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110296, 92202, 5069, 180, 2721, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #3 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110056, 92618, 5068, 180, 2734, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #4 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109947, 92849, 5069, 180, 717, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #5 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109884, 92826, 5069, 180, 835, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #6 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110091, 92864, 5066, 180, 2390, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #7 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109714, 92653, 5066, 180, 2499, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #8 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109545, 92713, 5070, 180, 2582, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #9 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109467, 93123, 5070, 180, 3558, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #10 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109349, 92620, 5070, 180, 3982, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #11 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109782, 92479, 5066, 180, 1486, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #12 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110240, 92142, 5068, 180, 1393, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #13 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109767, 93060, 5066, 180, 3741, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #14 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109671, 92632, 5067, 180, 722, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #15 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109499, 93282, 5067, 180, 3323, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #16 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109312, 92763, 5066, 180, 2356, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #17 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110434, 92655, 5067, 180, 3963, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #18 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110194, 93129, 5069, 180, 3778, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #19 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110329, 92792, 5066, 180, 2100, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #20 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109659, 92107, 5069, 180, 2, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #21 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109633, 92483, 5066, 180, 679, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #22 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110435, 92399, 5069, 180, 601, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #23 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109824, 92438, 5068, 180, 2150, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #24 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110391, 92862, 5069, 180, 2853, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #25 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 109476, 92208, 5069, 180, 526, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #26 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110065, 92639, 5067, 180, 642, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #27 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110345, 92918, 5070, 180, 2508, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #28 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110456, 92459, 5068, 180, 3188, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #29 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110458, 93291, 5070, 180, 979, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #30 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 110182, 93179, 5069, 180, 508, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW());
