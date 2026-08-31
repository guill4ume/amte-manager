-- ============================================================================
-- Correctif : Vitesse des Mort-Vivants & Aggro Faune Region 51 (Avalon)
-- Date : 31 Aout 2026
-- ============================================================================

-- 1. Morts-vivants de niveau 4 (Village de Gothwaite / Quete d'initiation)
-- Vitesse fixee a 100 (marche lente mort-vivant) au lieu de 0 (statique)
UPDATE mob 
SET Speed = 100, AggroLevel = 90, AggroRange = 400, Brain = 'DOL.AI.Brain.StandardMobBrain' 
WHERE Region = 51 AND Name = 'mort-vivant' AND Level = 4;

-- 2. Ours de niveau 4 (Region 51)
-- Reglage de l'aggro pour qu'ils ripostent et attaquent
UPDATE mob
SET AggroLevel = 60, AggroRange = 350, Brain = 'DOL.AI.Brain.StandardMobBrain'
WHERE Region = 51 AND Name = 'ours' AND Level = 4;

-- 3. Cochons sauvages de niveau 5 (Region 51)
-- Reglage de l'aggro pour qu'ils ripostent
UPDATE mob
SET AggroLevel = 30, AggroRange = 250, Brain = 'DOL.AI.Brain.StandardMobBrain'
WHERE Region = 51 AND Name = 'cochon sauvage' AND Level = 5;

-- 4. Lynx sauvages de niveau 2 (Region 51)
-- Harmonisation Brain et Aggro
UPDATE mob
SET AggroLevel = 80, AggroRange = 300, Brain = 'DOL.AI.Brain.StandardMobBrain'
WHERE Region = 51 AND Name = 'lynx sauvage' AND Level = 2;
