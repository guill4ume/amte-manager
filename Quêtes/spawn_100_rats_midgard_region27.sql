-- ==============================================================================
-- Patch SQL : Spawn de 100 'rat des neiges' sur l'ile Midgard (Region 27 - Grenlock's Sound)
-- Zone 28 : 25 plaine blaireaux, 25 plateau haut, 25 plaine centrale, 25 sous-bois ouest
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
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241795, 217563, 5280, 180, 3199, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #2 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 242128, 218085, 5283, 180, 998, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #3 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241453, 218024, 5277, 180, 3920, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #4 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241655, 218030, 5278, 180, 1557, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #5 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241745, 217555, 5281, 180, 3913, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #6 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 242031, 218116, 5279, 180, 2546, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #7 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241938, 217839, 5279, 180, 1057, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #8 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241497, 218105, 5279, 180, 2599, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #9 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241628, 218404, 5283, 180, 1371, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #10 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241625, 217892, 5277, 180, 3242, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #11 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241748, 217722, 5283, 180, 3787, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #12 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241935, 218031, 5281, 180, 993, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #13 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241802, 218237, 5283, 180, 1765, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #14 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241520, 217739, 5281, 180, 1059, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #15 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241825, 217675, 5283, 180, 1152, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #16 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241847, 218099, 5283, 180, 2459, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #17 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241433, 217937, 5277, 180, 366, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #18 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241950, 218022, 5278, 180, 1987, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #19 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241625, 218249, 5280, 180, 3161, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #20 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241777, 218163, 5277, 180, 629, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #21 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241611, 218081, 5282, 180, 105, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #22 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241762, 217987, 5279, 180, 1351, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #23 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241568, 218149, 5281, 180, 2087, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #24 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241772, 218070, 5282, 180, 2017, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #25 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 241606, 217825, 5282, 180, 185, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #26 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250767, 233501, 5400, 180, 971, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #27 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250644, 233756, 5400, 180, 3157, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #28 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250627, 233701, 5400, 180, 2211, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #29 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250463, 233825, 5398, 180, 1191, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #30 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250816, 233645, 5397, 180, 3971, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #31 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250692, 233866, 5402, 180, 818, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #32 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250551, 234218, 5399, 180, 3941, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #33 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250801, 233685, 5403, 180, 300, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #34 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250619, 233620, 5402, 180, 1202, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #35 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250631, 233768, 5397, 180, 3632, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #36 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250735, 233697, 5401, 180, 328, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #37 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250803, 234137, 5401, 180, 3110, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #38 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250967, 233640, 5401, 180, 4001, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #39 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250709, 233690, 5403, 180, 1242, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #40 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250944, 233548, 5399, 180, 1321, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #41 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250583, 233479, 5399, 180, 3186, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #42 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250627, 233872, 5398, 180, 673, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #43 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250418, 233649, 5403, 180, 3610, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #44 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250312, 233862, 5397, 180, 3320, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #45 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250310, 233957, 5399, 180, 2222, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #46 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250427, 234029, 5397, 180, 2604, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #47 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250959, 233821, 5398, 180, 978, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #48 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250902, 233667, 5399, 180, 714, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #49 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250425, 234150, 5399, 180, 1030, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #50 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 250786, 233889, 5400, 180, 1102, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #51 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230009, 225203, 4849, 180, 2973, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #52 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230229, 225260, 4850, 180, 106, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #53 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230282, 225034, 4848, 180, 939, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #54 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230213, 224948, 4852, 180, 3236, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #55 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230107, 225110, 4847, 180, 2403, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #56 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230021, 225344, 4849, 180, 335, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #57 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230297, 225284, 4853, 180, 3652, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #58 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230469, 225331, 4853, 180, 2371, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #59 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230004, 225300, 4847, 180, 3688, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #60 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230546, 225131, 4847, 180, 2791, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #61 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230462, 225209, 4852, 180, 2493, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #62 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230374, 224996, 4853, 180, 1689, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #63 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230596, 225101, 4847, 180, 325, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #64 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 229988, 225095, 4852, 180, 2932, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #65 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230110, 225199, 4852, 180, 2588, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #66 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230420, 224970, 4850, 180, 1855, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #67 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230441, 225281, 4849, 180, 1949, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #68 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230461, 225167, 4852, 180, 1519, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #69 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230243, 225287, 4853, 180, 1171, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #70 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230483, 225167, 4852, 180, 2702, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #71 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230073, 225195, 4853, 180, 797, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #72 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230125, 225049, 4850, 180, 164, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #73 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230161, 225506, 4851, 180, 918, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #74 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230230, 225140, 4852, 180, 2484, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #75 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 230394, 225366, 4850, 180, 770, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #76 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220705, 218874, 4828, 180, 2724, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #77 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220605, 218814, 4827, 180, 1195, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #78 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220896, 219276, 4833, 180, 1819, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #79 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220927, 219210, 4827, 180, 1564, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #80 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 221195, 218934, 4829, 180, 2568, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #81 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220726, 218710, 4832, 180, 522, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #82 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220878, 218981, 4830, 180, 1358, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #83 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220849, 218780, 4828, 180, 2048, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #84 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220831, 218836, 4830, 180, 1856, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #85 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220512, 218740, 4832, 180, 1432, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #86 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220544, 218991, 4831, 180, 1206, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #87 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220683, 218617, 4831, 180, 2630, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #88 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220611, 218812, 4827, 180, 1220, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #89 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 221048, 218914, 4830, 180, 693, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #90 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220727, 219166, 4831, 180, 1078, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #91 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220793, 219222, 4829, 180, 3210, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #92 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220519, 218873, 4828, 180, 88, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #93 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220553, 219052, 4828, 180, 4035, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #94 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220932, 218875, 4829, 180, 3683, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW()),
    /* Rat #95 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220808, 218827, 4829, 180, 3519, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #96 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220931, 219033, 4829, 180, 1682, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 400, 0, 0, NULL, 255, NOW()),
    /* Rat #97 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220835, 218881, 4829, 180, 2019, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #98 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220834, 218738, 4833, 180, 2871, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #99 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 221012, 218604, 4831, 180, 1715, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 350, 0, 0, NULL, 255, NOW()),
    /* Rat #100 */
    (UUID(), 'rat des neiges', 'Animaux sauvages', 0, 27, 220823, 219080, 4827, 180, 2524, 568, 5, 20, 15, 30, 30, 30, 30, 30, 30, 1, NULL, NULL, 11999, 0, 0, 80, 400, 1, 15, 1005, 1, 0, 'DOL.AI.Brain.StandardMobBrain', NULL, '', 500, 0, 0, NULL, 255, NOW());
