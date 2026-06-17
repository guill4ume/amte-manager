import { DaocClasses } from './DaocClasses';

/**
 * Mapping of class IDs to their specialization keys
 * This is a static reference for common class/spec relationships
 */
export const ClassSpecializations: Record<number, string[]> = {
	// Albion
	1: ['Chants', 'Twohanded', 'Shields', 'Slashing', 'Crushing', 'Thrusting'], // Paladin
	2: ['Polearms', 'Twohanded', 'Shields', 'Slashing', 'Crushing', 'Thrusting', 'Crossbow'], // Armsman
	3: ['Stealth', 'Archery', 'Shields', 'Slashing', 'Thrusting'], // Scout
	4: ['Instruments', 'Stealth', 'Slashing', 'Thrusting'], // Minstrel
	5: ['Earth_Magic', 'Cold_Magic', 'Wind_Magic'], // Theurgist
	6: ['Rejuvenation', 'Enhancement', 'Smiting'], // Cleric
	7: ['Fire_Magic', 'Cold_Magic', 'Earth_Magic'], // Wizard
	8: ['Matter_Magic', 'Body_Magic', 'Mind_Magic'], // Sorcerer
	9: ['Stealth', 'Critical_Strike', 'Envenom', 'Dual_Wield', 'Slashing', 'Thrusting'], // Infiltrator
	10: ['Rejuvenation', 'Enhancement', 'Staff'], // Friar
	11: ['Dual_Wield', 'Shields', 'Slashing', 'Crushing', 'Thrusting'], // Mercenary
	12: ['Deathsight', 'Painworking', 'Death_Servant'], // Necromancer
	13: ['Matter_Magic', 'Body_Magic', 'Spirit_Magic'], // Cabalist
	19: ['Soulrending', 'Flexible', 'Crushing', 'Slashing', 'Thrusting', 'Shields'], // Reaver
	33: ['Rejuvenation', 'Enhancement', 'Flexible', 'Crushing', 'Shields'], // Heretic

	// Midgard
	21: ['Stormcalling', 'Shields', 'Sword', 'Axe', 'Hammer'], // Thane
	22: ['Sword', 'Axe', 'Hammer', 'Shields'], // Warrior
	23: ['Stealth', 'Critical_Strike', 'Envenom', 'Left_Axe', 'Sword', 'Axe'], // Shadowblade
	24: ['Battlesongs', 'Sword', 'Axe', 'Hammer'], // Skald
	25: ['Stealth', 'Beastcraft', 'Spear', 'Composite_Bow'], // Hunter
	26: ['Mending', 'Augmentation', 'Pacification'], // Healer
	27: ['Darkness', 'Suppression', 'Summoning'], // Spiritmaster
	28: ['Mending', 'Augmentation', 'Subterranean'], // Shaman
	29: ['Darkness', 'Suppression', 'Runecarving'], // Runemaster
	30: ['Darkness', 'Suppression', 'Bone_Army'], // Bonedancer
	31: ['Left_Axe', 'Sword', 'Axe', 'Hammer'], // Berserker
	32: ['Savagery', 'Hand_To_Hand'], // Savage
	34: ['Odin_Will', 'Mending', 'Sword', 'Spear', 'Shields'], // Valkyrie
	59: ['Cursing', 'Hexing', 'Witchcraft'], // Warlock

	// Hibernia
	39: ['Phantasmal_Wail', 'Spectral_Guard', 'Ethereal_Shriek'], // Bainshee
	40: ['Light_Magic', 'Mana_Magic', 'Void_Magic'], // Eldritch
	41: ['Light_Magic', 'Mana_Magic', 'Enchantments'], // Enchanter
	42: ['Light_Magic', 'Mana_Magic', 'Mentalism'], // Mentalist
	43: ['Blades', 'Blunt', 'Piercing', 'Celtic_Dual'], // Blademaster
	44: ['Large_Weapons', 'Blades', 'Blunt', 'Piercing', 'Shields', 'Celtic_Spear'], // Hero
	45: ['Valor', 'Large_Weapons', 'Blades', 'Blunt', 'Piercing', 'Shields'], // Champion
	46: ['Regrowth', 'Nurture', 'Blades', 'Blunt'], // Warden
	47: ['Regrowth', 'Nurture', 'Nature_Magic'], // Druid
	48: ['Regrowth', 'Nurture', 'Music', 'Blades', 'Blunt'], // Bard
	49: ['Stealth', 'Critical_Strike', 'Envenom', 'Celtic_Dual', 'Blades', 'Piercing'], // Nightshade
	50: ['Stealth', 'Pathfinding', 'Recurve_Bow', 'Celtic_Dual', 'Blades', 'Piercing'], // Ranger
	55: ['Arboreal_Path', 'Creeping_Path', 'Verdant_Path'], // Animist
	56: ['Arboreal_Path', 'Scythe'], // Valewalker
	58: ['Dementia', 'Shadow_Mastery', 'Vampiiric_Embrace', 'Piercing'], // Vampiir
};

/**
 * Get class name by ID
 */
export function getClassName(classId: number): string {
	const cls = DaocClasses.find(c => c.id === classId);
	return cls?.name || `Class ${classId}`;
}

/**
 * Get class by ID
 */
export function getClass(classId: number) {
	return DaocClasses.find(c => c.id === classId);
}

/**
 * Get all classes that have a specific specialization
 */
export function getClassesWithSpec(specKey: string): number[] {
	const classes: number[] = [];
	for (const [classId, specs] of Object.entries(ClassSpecializations)) {
		if (specs.includes(specKey)) {
			classes.push(parseInt(classId));
		}
	}
	return classes;
}

/**
 * Get realm for a class
 */
export function getClassRealm(classId: number): string {
	const cls = DaocClasses.find(c => c.id === classId);
	return cls?.category || 'Unknown';
}

/**
 * Check if a class has a specific specialization
 */
export function classHasSpec(classId: number, specKey: string): boolean {
	const specs = ClassSpecializations[classId];
	return specs?.includes(specKey) || false;
}
