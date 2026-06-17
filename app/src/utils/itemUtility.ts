/**
 * Item Utility Calculator
 *
 * Calculates the "utility" or "imbue points" of an item based on its bonuses.
 * This is based on the DOL spellcraft/crafting system used in Dark Age of Camelot.
 */

import { eProperty } from "@/models/DaocValues";

export interface BonusUtilityResult {
	bonusType: number;
	bonusValue: number;
	utility: number;
	category: "stat" | "resist" | "skill" | "hp" | "mana" | "toa" | "cap" | "focus" | "forbidden" | "unknown";
}

export interface ItemUtilityResult {
	bonuses: BonusUtilityResult[];
	totalUtility: number;
	maxGem: number;
	maxImbuePoints: number;
}

/**
 * Calculate the utility points for a single bonus
 */
export function getBonusUtility(bonusType: number, bonusValue: number): BonusUtilityResult {
	if (bonusType === 0 || bonusValue === 0) {
		return { bonusType, bonusValue, utility: 0, category: "unknown" };
	}

	let utility: number;
	let category: BonusUtilityResult["category"];

	// Stats (STR, DEX, CON, etc.) or Acuity
	if ((bonusType >= eProperty.Stat_First && bonusType <= eProperty.Stat_Last) || bonusType === eProperty.Acuity) {
		utility = Math.floor(((bonusValue - 1) * 2) / 3) + 1;
		category = "stat";
	}
	// Max Mana / Power
	else if (bonusType === eProperty.MaxMana) {
		utility = bonusValue * 2 - 2;
		category = "mana";
	}
	// Max Health / Hits
	else if (bonusType === eProperty.MaxHealth) {
		utility = Math.floor(bonusValue / 4);
		category = "hp";
	}
	// Resists
	else if (bonusType >= eProperty.Resist_First && bonusType <= eProperty.Resist_Last) {
		utility = bonusValue * 2 - 2;
		category = "resist";
	}
	// Skills
	else if (bonusType >= eProperty.Skill_First && bonusType <= eProperty.Skill_Last) {
		utility = (bonusValue - 1) * 5;
		category = "skill";
	}
	// ToA Bonuses
	else if (bonusType >= eProperty.ToABonus_First && bonusType <= eProperty.ToABonus_Last) {
		utility = bonusValue * 100;
		category = "toa";
	}
	// Power Pool Cap
	else if (bonusType === eProperty.PowerPoolCapBonus) {
		utility = (bonusValue * 2 - 2) * 4;
		category = "cap";
	}
	// Max Health Cap
	else if (bonusType === eProperty.MaxHealthCapBonus) {
		utility = Math.floor(bonusValue / 4) * 4;
		category = "cap";
	}
	// Stat Cap Bonuses
	else if (bonusType >= eProperty.StatCapBonus_First && bonusType <= eProperty.StatCapBonus_Last) {
		utility = (Math.floor(((bonusValue - 1) * 2) / 3) + 1) * 4;
		category = "cap";
	}
	// Resist Cap Bonuses
	else if (bonusType >= eProperty.ResCapBonus_First && bonusType <= eProperty.ResCapBonus_Last) {
		utility = (bonusValue * 2 - 2) * 4;
		category = "cap";
	}
	// Forbidden/Special bonuses (very high utility to flag them)
	else if (
		bonusType === eProperty.MaxSpeed ||
		bonusType === eProperty.MaxConcentration ||
		bonusType === eProperty.ArmorFactor ||
		bonusType === eProperty.ArmorAbsorption ||
		bonusType === eProperty.HealthRegenerationRate ||
		bonusType === eProperty.PowerRegenerationRate ||
		bonusType === eProperty.EnduranceRegenerationRate ||
		bonusType === eProperty.SpellRange ||
		bonusType === eProperty.ArcheryRange ||
		bonusType === eProperty.MeleeSpeed ||
		bonusType === eProperty.LivingEffectiveLevel ||
		bonusType === eProperty.EvadeChance ||
		bonusType === eProperty.BlockChance ||
		bonusType === eProperty.ParryChance ||
		bonusType === eProperty.FatigueConsumption ||
		bonusType === eProperty.MeleeDamage ||
		bonusType === eProperty.RangedDamage ||
		bonusType === eProperty.FumbleChance ||
		bonusType === eProperty.MesmerizeDurationReduction ||
		bonusType === eProperty.StunDurationReduction ||
		bonusType === eProperty.SpeedDecreaseDurationReduction ||
		bonusType === eProperty.BladeturnReinforcement ||
		bonusType === eProperty.DefensiveBonus ||
		bonusType === eProperty.SpellFumbleChance ||
		bonusType === eProperty.NegativeReduction ||
		bonusType === eProperty.PieceAblative ||
		bonusType === eProperty.ReactionaryStyleDamage ||
		bonusType === eProperty.SpellPowerCost ||
		bonusType === eProperty.StyleCostReduction ||
		bonusType === eProperty.ToHitBonus ||
		bonusType === eProperty.AllSkills ||
		bonusType === eProperty.WeaponSkill ||
		bonusType === eProperty.CriticalMeleeHitChance ||
		bonusType === eProperty.CriticalArcheryHitChance ||
		bonusType === eProperty.CriticalSpellHitChance ||
		bonusType === eProperty.WaterSpeed ||
		bonusType === eProperty.SpellLevel ||
		bonusType === eProperty.MissHit ||
		bonusType === eProperty.KeepDamage ||
		bonusType === eProperty.DPS ||
		bonusType === eProperty.MagicAbsorption ||
		bonusType === eProperty.CriticalHealHitChance ||
		bonusType === eProperty.BountyPoints ||
		bonusType === eProperty.XpPoints ||
		bonusType === eProperty.Resist_Natural ||
		bonusType === eProperty.ExtraHP ||
		bonusType === eProperty.Conversion ||
		bonusType === eProperty.StyleAbsorb ||
		bonusType === eProperty.RealmPoints ||
		bonusType === eProperty.ArcaneSyphon ||
		bonusType === eProperty.MaxProperty
	) {
		utility = 1000000;
		category = "forbidden";
	}
	// Focus (anything else in 120-165 range is focus)
	else {
		utility = 1;
		category = "focus";
	}

	if (utility < 1) utility = 1;

	return { bonusType, bonusValue, utility, category };
}

/**
 * Get the maximum imbue points for an item based on level and quality
 */
export function getItemMaxImbuePoints(level: number, quality: number): number {
	if (level > 51) return 32;
	if (level < 1) return 0;

	// Clamp quality between 94 and 100
	const qualityIndex = Math.max(0, Math.min(6, quality - 94));
	return itemMaxBonusLevel[level - 1][qualityIndex];
}

/**
 * Calculate the total utility of an item from its bonuses
 */
export function calculateItemUtility(item: {
	Level: number;
	Quality: number;
	Bonus1?: number;
	Bonus1Type?: number;
	Bonus2?: number;
	Bonus2Type?: number;
	Bonus3?: number;
	Bonus3Type?: number;
	Bonus4?: number;
	Bonus4Type?: number;
	Bonus5?: number;
	Bonus5Type?: number;
	Bonus6?: number;
	Bonus6Type?: number;
	Bonus7?: number;
	Bonus7Type?: number;
	Bonus8?: number;
	Bonus8Type?: number;
	Bonus9?: number;
	Bonus9Type?: number;
	Bonus10?: number;
	Bonus10Type?: number;
	ExtraBonus?: number;
	ExtraBonusType?: number;
}): ItemUtilityResult {
	const bonusKeys = [
		{ type: "Bonus1Type", value: "Bonus1" },
		{ type: "Bonus2Type", value: "Bonus2" },
		{ type: "Bonus3Type", value: "Bonus3" },
		{ type: "Bonus4Type", value: "Bonus4" },
		{ type: "Bonus5Type", value: "Bonus5" },
		{ type: "Bonus6Type", value: "Bonus6" },
		{ type: "Bonus7Type", value: "Bonus7" },
		{ type: "Bonus8Type", value: "Bonus8" },
		{ type: "Bonus9Type", value: "Bonus9" },
		{ type: "Bonus10Type", value: "Bonus10" },
		{ type: "ExtraBonusType", value: "ExtraBonus" },
	] as const;

	const bonuses: BonusUtilityResult[] = [];
	let totalUtility = 0;
	let maxGem = 0;

	for (const { type, value } of bonusKeys) {
		const bonusType = (item as Record<string, number>)[type] ?? 0;
		const bonusValue = (item as Record<string, number>)[value] ?? 0;

		if (bonusType !== 0 && bonusValue !== 0) {
			const result = getBonusUtility(bonusType, bonusValue);
			bonuses.push(result);
			totalUtility += result.utility;
			if (result.utility > maxGem) {
				maxGem = result.utility;
			}
		}
	}

	// Total utility is (sum of utilities + max utility) / 2
	const finalUtility = Math.floor((totalUtility + maxGem) / 2);
	const maxImbuePoints = getItemMaxImbuePoints(item.Level, item.Quality);

	return {
		bonuses,
		totalUtility: finalUtility,
		maxGem,
		maxImbuePoints,
	};
}

/**
 * Get the category display name
 */
export function getUtilityCategoryName(category: BonusUtilityResult["category"]): string {
	switch (category) {
		case "stat":
			return "Stat";
		case "resist":
			return "Resist";
		case "skill":
			return "Skill";
		case "hp":
			return "Hits";
		case "mana":
			return "Power";
		case "toa":
			return "ToA";
		case "cap":
			return "Cap";
		case "focus":
			return "Focus";
		case "forbidden":
			return "⚠️ Special";
		default:
			return "-";
	}
}

// Taken from DOL Spellcraft calculator - max imbue points by level and quality
// Rows are levels 1-51, columns are quality 94-100
const itemMaxBonusLevel: number[][] = [
	[0, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 2, 2],
	[1, 1, 1, 2, 2, 2, 2],
	[1, 1, 2, 2, 2, 3, 3],
	[1, 2, 2, 2, 3, 3, 4],
	[1, 2, 2, 3, 3, 4, 4],
	[2, 2, 3, 3, 4, 4, 5],
	[2, 3, 3, 4, 4, 5, 5],
	[2, 3, 3, 4, 5, 5, 6],
	[2, 3, 4, 4, 5, 6, 7],
	[2, 3, 4, 5, 6, 6, 7],
	[3, 4, 4, 5, 6, 7, 8],
	[3, 4, 5, 6, 6, 7, 9],
	[3, 4, 5, 6, 7, 8, 9],
	[3, 4, 5, 6, 7, 8, 10],
	[3, 5, 6, 7, 8, 9, 10],
	[4, 5, 6, 7, 8, 10, 11],
	[4, 5, 6, 8, 9, 10, 12],
	[4, 6, 7, 8, 9, 11, 12],
	[4, 6, 7, 8, 10, 11, 13],
	[4, 6, 7, 9, 10, 12, 13],
	[5, 6, 8, 9, 11, 12, 14],
	[5, 7, 8, 10, 11, 13, 15],
	[5, 7, 9, 10, 12, 13, 15],
	[5, 7, 9, 10, 12, 14, 16],
	[5, 8, 9, 11, 12, 14, 16],
	[6, 8, 10, 11, 13, 15, 17],
	[6, 8, 10, 12, 13, 15, 18],
	[6, 8, 10, 12, 14, 16, 18],
	[6, 9, 11, 12, 14, 16, 19],
	[6, 9, 11, 13, 15, 17, 20],
	[7, 9, 11, 13, 15, 17, 20],
	[7, 10, 12, 14, 16, 18, 21],
	[7, 10, 12, 14, 16, 19, 21],
	[7, 10, 12, 14, 17, 19, 22],
	[7, 10, 13, 15, 17, 20, 23],
	[8, 11, 13, 15, 17, 20, 23],
	[8, 11, 13, 16, 18, 21, 24],
	[8, 11, 14, 16, 18, 21, 24],
	[8, 11, 14, 16, 19, 22, 25],
	[8, 12, 14, 17, 19, 22, 26],
	[9, 12, 15, 17, 20, 23, 26],
	[9, 12, 15, 18, 20, 23, 27],
	[9, 13, 15, 18, 21, 24, 27],
	[9, 13, 16, 18, 21, 24, 28],
	[9, 13, 16, 19, 22, 25, 29],
	[10, 13, 16, 19, 22, 25, 29],
	[10, 14, 17, 20, 23, 26, 30],
	[10, 14, 17, 20, 23, 27, 31],
	[10, 14, 17, 20, 23, 27, 31],
	[10, 15, 18, 21, 24, 28, 32],
];
