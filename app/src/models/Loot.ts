/**
 * Loot Template - Defines a set of items that can be dropped
 * Table: loottemplate
 */
export interface LootTemplate {
	LootTemplate_ID: string;
	TemplateName: string;
	ItemTemplateID: string;
	Chance: number;
	Count: number;
}

/**
 * Mob X Loot Template - Links a mob to a loot template
 * Table: mobxloottemplate
 */
export interface MobXLootTemplate {
	MobXLootTemplate_ID: string;
	MobName: string;
	LootTemplateName: string;
	DropCount: number;
}

/**
 * Mob Drop Template - Alternative way to link mobs to loot
 * Table: mobdroptemplate
 */
export interface MobDropTemplate {
	ID: number;
	MobName: string;
	LootTemplateName: string;
	DropCount: number;
}

/**
 * Drop Template X Item Template - Items in drop templates
 * Table: droptemplatexitemtemplate
 */
export interface DropTemplateXItemTemplate {
	ID: number;
	TemplateName: string;
	ItemTemplateID: string;
	Chance: number;
	Count: number;
}

/**
 * Loot Generator - Special loot generators
 * Table: lootgenerator
 */
export interface LootGenerator {
	LootGenerator_ID: string;
	MobName: string | null;
	MobGuild: string | null;
	MobFaction: string | null;
	RegionID: number;
	LootGeneratorClass: string;
	ExclusivePriority: number;
}

/**
 * Helper function to generate a unique ID for loot template entries
 */
export function generateLootTemplateId(templateName: string, itemTemplateId: string): string {
	return `${templateName}_${itemTemplateId}_${Date.now()}`;
}

/**
 * Helper function to generate a unique ID for mob x loot template entries
 */
export function generateMobXLootTemplateId(mobName: string, templateName: string): string {
	return `${mobName}_${templateName}_${Date.now()}`;
}
