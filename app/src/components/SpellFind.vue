<script lang="ts" setup>
import { DataTableHeader } from '@/vuetify.types';
import GenericFind from './GenericFind.vue';

const emit = defineEmits<{
	(event: "select", spellId: string, spell: any): void;
}>();

const headers: DataTableHeader[] = [
	{ key: "SpellID", title: "Spell ID", align: "end", sortable: true },
	{ key: "Type", title: "Type", sortable: true },
	{ key: "Name", title: "Name", sortable: true },
	{ key: "Target", title: "Target", sortable: true },
	{ key: "Range", title: "Range", align: "end", sortable: true },
	{ key: "CastTime", title: "Cast time", align: "end", sortable: true },
	{ key: "Damage", title: "Damage", align: "end", sortable: true },
	{ key: "DamageType", title: "Damage type", sortable: true },
];
</script>

<template>
	<GenericFind
		title="Search a spell"
		table="spell"
		table-pkey="SpellID"
		:headers="headers"
		:default-sort="[{ key: 'Name', order: 'asc' }]"
		@select="s => emit('select', s.SpellID, s)" />
</template>
