<script lang="ts" setup>
import { debounce } from '@/debounce';
import { DB } from '@/main';
import { computed } from 'vue';
import { onMounted, watch } from 'vue';
import { ref } from 'vue';
import { DaocItemIcon } from "@/components/DaocIcon";

const props = defineProps<{
	small?: boolean;
	label: string;
	hint?: string;
	persistentHint?: boolean;
	selectedItems?: string | string[];
	multiple?: boolean;
}>();
const emit = defineEmits<{
	(event: "update:selectedItems", items?: string | string[]): void;
}>();

const items = ref<any[]>([]);
const selectedTemplates = ref<any[]>([]);
const search = ref("");
const loading = ref(false);
const selectedItemsSync = computed({
	get: () => props.selectedItems,
	set: (items: undefined | string | string[]) => emit("update:selectedItems", items),
});

const load = async () => {
	try {
		const ids = Array.isArray(props.selectedItems) ? props.selectedItems : (props.selectedItems ? [props.selectedItems] : []);
		if (ids.length === 0) {
			selectedTemplates.value = [];
			return;
		}
		const joinIds = ids.filter(i => !!i).map(i => `'${i.replace(/'/g, "''")}'`).join(",");
		const [items] = await DB.select({
			table: "itemtemplate",
			fields: "Id_nb, Name, Level, Model, Price",
			where: joinIds ? `Id_nb IN (${joinIds})` : "1",
			orderby: "Id_nb",
			offset: 0,
			limit: 15,
		});
		selectedTemplates.value = items;
	}
	catch (err) {
		console.error(err);
	}
};
onMounted(load);
watch(selectedItemsSync, load);

const _search = debounce(async () => {
	if (loading.value)
		return;

	loading.value = true;
	try {
		let where = "1";
		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			where = ["Id_nb", "Name", "Level"]
				.map(field => `${field} like '${likeValue}%'`)
				.join(" OR ")
			;
		}
		const [_items] = await DB.select({
			table: "itemtemplate",
			fields: "Id_nb, Name, Level, Model, Price",
			where,
			orderby: "Id_nb",
			offset: 0,
			limit: 15,
		});
		items.value = _items;
		loading.value = false;
	}
	catch (err) {
		alert(`Error: ${err}`);
	}
});
watch(search, _search);

function remove(item: any) {
	if (!Array.isArray(props.selectedItems))
		return;

	const items = [...props.selectedItems];
	const idx = items.indexOf(item.Id_nb);
	if (idx === -1)
		return;
	items.splice(idx, 1);
	emit("update:selectedItems", items);
}

const itemsUnique = computed(() => {
	for (const item of selectedTemplates.value)
		if (!items.value.some(i => i.Id_nb === item.Id_nb))
			items.value.push(item);
	return items.value;
});
</script>

<template>
	<v-autocomplete
		v-model="selectedItemsSync"
		:label="label"
		:hint="hint"
		:persistent-hint="persistentHint"
		:loading="loading"
		:multiple="multiple"
		:chips="multiple"
		clearable

		v-model:search="search"
		:items="itemsUnique"
		item-title="Name"
		item-value="Id_nb"
		no-filter
	>

		<template v-slot:item="{ props, item }">
			<v-list-item v-bind="props" :subtitle="item.Id_nb">
				<template v-slot:prepend>
					<DaocItemIcon :id="item.Model" class="mr-2"/>
				</template>
			</v-list-item>
		</template>
		<template v-slot:chip="{ props, item }">
			<v-chip close @click:close="remove(item)" v-bind="props">
				<small style="margin-right: 1em">{{ item.Id_nb }}</small>
				<DaocItemIcon :id="item.Model" :size="0.5" style="position: relative; top: 4px;"/>
				{{ item.Name }}
			</v-chip>
		</template>

	</v-autocomplete>
</template>
