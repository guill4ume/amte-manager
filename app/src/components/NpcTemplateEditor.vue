<script lang="ts" setup>
import { NpcTemplate } from "@/models/NpcTemplate";
import SpellFind from "./SpellFind.vue";

const props = defineProps<{
	template: NpcTemplate;
}>();
</script>

<template>
	<v-card>
		<v-card-title>NPC Template: {{ template.Name }}</v-card-title>
		<v-card-subtitle>Template ID: {{ template.TemplateId }}</v-card-subtitle>
		<v-card-text>

			<v-card elevation="1" class="mb-5">
				<v-card-subtitle>General</v-card-subtitle>
				<v-card-text>
					<v-row>
						<v-col><v-text-field type="number" label="Template ID" v-model="template.TemplateId" hide-details /></v-col>
						<v-col><v-text-field label="Name" v-model="template.Name" hide-details /></v-col>
					</v-row>

					<v-row>
						<v-col><v-text-field label="Guild" v-model="template.GuildName" hide-details /></v-col>
						<v-col><v-text-field label="Suffix" v-model="template.Suffix" hide-details /></v-col>
					</v-row>

					<v-row>
						<v-col><v-text-field label="Class Type" v-model="template.ClassType" hide-details /></v-col>
						<v-col><v-text-field label="Equipment Template" v-model="template.EquipmentTemplateID" hide-details /></v-col>
						<v-col><v-text-field label="Item List Template" v-model="template.ItemsListTemplateID" hide-details /></v-col>
					</v-row>

					<v-row>
						<v-col><v-text-field type="number" label="Speed" v-model="template.MaxSpeed" hide-details /></v-col>
						<v-col><v-checkbox label="Replace Mob Values" v-model="template.ReplaceMobValues" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Body Type (charm)" v-model="template.BodyType" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Gender" v-model="template.Gender" hide-details /></v-col>
					</v-row>
				</v-card-text>
			</v-card>


			<v-card elevation="1" class="mb-5">
				<v-card-subtitle>Visual</v-card-subtitle>
				<v-card-text>
					<v-row>
						<v-col class="overflow-auto" style="max-height: 268px">
							<template v-for="model in template.Model.split(';')" :key="model">
								<img :src="`/npcs/${model}.jpg`" :height="256" />
							</template>
						</v-col>
						<v-col>
							<v-row>
								<v-col><v-text-field label="Models" v-model="template.Model" hide-details /></v-col>
							</v-row>
							<v-row>
								<v-col><v-text-field label="Sizes" v-model="template.Size" hide-details /></v-col>
								<v-col><v-text-field type="number" label="Visible weapon slots" v-model="template.VisibleWeaponSlots" hide-details /></v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>

			<v-card elevation="1" class="mb-5">
				<v-card-subtitle>Statistics</v-card-subtitle>
				<v-card-text>
					<v-row>
						<v-col><v-text-field label="Levels" v-model="template.Level" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Race" v-model="template.Race" hide-details /></v-col>
					</v-row>

					<v-row>
						<v-col><v-text-field type="number" label="Strength" v-model="template.Strength" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Constitution" v-model="template.Constitution" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Dext" v-model="template.Dexterity" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Quickness" v-model="template.Quickness" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Intelligence" v-model="template.Intelligence" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Piety" v-model="template.Piety" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Empathy" v-model="template.Empathy" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Charisma" v-model="template.Charisma" hide-details /></v-col>
					</v-row>

					<v-row>
						<v-col><v-text-field type="number" label="Armor Factor" v-model="template.ArmorFactor" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Armor Absorb" v-model="template.ArmorAbsorb" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Parry" v-model="template.ParryChance" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Block" v-model="template.BlockChance" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Evade" v-model="template.EvadeChance" hide-details /></v-col>
					</v-row>

					<v-row>
						<v-col><v-text-field type="number" label="Melee Damage Type" v-model="template.MeleeDamageType" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Weapon DPS" v-model="template.WeaponDps" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Weapon SPD" v-model="template.WeaponSpd" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Left Hand Swing" v-model="template.LeftHandSwingChance" hide-details /></v-col>
					</v-row>
				</v-card-text>
			</v-card>

			<v-card elevation="1" class="mb-5">
			<v-card-subtitle>Abilities</v-card-subtitle>
	  		<v-card-text>
					<v-row>
						<v-col>
							<v-text-field label="Spells" v-model="template.Spells" hide-details>
							<template v-slot:append-inner><spell-find @select="(id, _) => template.Spells += `;${id}`" /></template>
							</v-text-field>
						</v-col>
						<v-col><v-text-field label="Styles" v-model="template.Styles" hide-details /></v-col>
						<v-col><v-text-field label="Abilities" v-model="template.Abilities" hide-details /></v-col>
					</v-row>

					<v-row>
						<v-col><v-text-field type="number" label="Aggro level" v-model="template.AggroLevel" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Aggro range" v-model="template.AggroRange" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Max distance" v-model="template.MaxDistance" hide-details /></v-col>
						<v-col><v-text-field type="number" label="Tether range" v-model="template.TetherRange" hide-details /></v-col>
					</v-row>
				</v-card-text>
			</v-card>

			<v-card elevation="1" class="mb-5">
				<v-card-subtitle>Flags</v-card-subtitle>
				<v-card-text>
					<v-row>
						<v-col><v-text-field type="number" label="Flags" v-model="template.Flags" hide-details /></v-col>
						<v-col><v-text-field type="number" label="BreamorFaction" v-model="template.BreamorFaction" hide-details /></v-col>
						<v-col>TODO</v-col>
					</v-row>
				</v-card-text>
			</v-card>

		</v-card-text>
	</v-card>
</template>
