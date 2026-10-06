-- ============================================================================
-- Correctif Global : Vitesse & Aggro Faune Region 51 (Avalon)
-- Date : 31 Aout 2026
-- ============================================================================

-- 1. Morts-vivants de niveau 4 (Village de Gothwaite / Quete d'initiation)
UPDATE mob 
SET Speed = 100, AggroLevel = 90, AggroRange = 400, Brain = 'DOL.AI.Brain.StandardMobBrain' 
WHERE Region = 51 AND Name = 'mort-vivant' AND Level = 4;

-- 2. Ours de niveau 4
UPDATE mob
SET AggroLevel = 60, AggroRange = 350, Brain = 'DOL.AI.Brain.StandardMobBrain'
WHERE Region = 51 AND Name = 'ours' AND Level = 4;

-- 3. Cochons sauvages de niveau 5
UPDATE mob
SET AggroLevel = 30, AggroRange = 250, Brain = 'DOL.AI.Brain.StandardMobBrain'
WHERE Region = 51 AND Name = 'cochon sauvage' AND Level = 5;

-- 4. Lynx sauvages de niveau 2
UPDATE mob
SET AggroLevel = 80, AggroRange = 300, Brain = 'DOL.AI.Brain.StandardMobBrain'
WHERE Region = 51 AND Name = 'lynx sauvage' AND Level = 2;

-- 5. Vieilles branches (Quete d'Odan) & branches maudites
UPDATE mob 
SET AggroLevel = 60, AggroRange = 350, Brain = 'DOL.AI.Brain.StandardMobBrain' 
WHERE Region = 51 AND Name = 'vieille branche' AND Level = 3;

UPDATE mob 
SET AggroLevel = 80, AggroRange = 400, Brain = 'DOL.AI.Brain.StandardMobBrain' 
WHERE Region = 51 AND Name = 'vieille branche maudite';

-- 6. Sanglier sauvage
UPDATE mob 
SET AggroLevel = 80, AggroRange = 400, Brain = 'DOL.AI.Brain.StandardMobBrain' 
WHERE Region = 51 AND Name = 'sanglier sauvage';

-- 7. Limaces carnivores & Barral (Correction AggroRange = 0)
UPDATE mob 
SET AggroLevel = 90, AggroRange = 500, Brain = 'DOL.AI.Brain.StandardMobBrain' 
WHERE Region = 51 AND Name = 'limace carnivore';

UPDATE mob 
SET AggroLevel = 90, AggroRange = 500, Brain = 'DOL.AI.Brain.StandardMobBrain' 
WHERE Region = 51 AND Name = 'Barral';

-- 8. Brachyoure Alpha
UPDATE mob 
SET AggroLevel = 80, AggroRange = 400, Brain = 'DOL.AI.Brain.StandardMobBrain' 
WHERE Region = 51 AND Name = 'brachyoure alpha';

-- 9. Dragon ancestral (Vitesse active)
UPDATE mob 
SET Speed = 200, AggroLevel = 100, AggroRange = 1000, Brain = 'DOL.AI.Brain.StandardMobBrain' 
WHERE Region = 51 AND Name = 'Dragon ancestral';
