<script lang="ts" setup>
import { debounce } from "@/debounce";
import { DB } from "@/main";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps<{
	small?: boolean;
	label?: string;
	hint?: string;
	persistentHint?: boolean;
	selectedTemplate?: string;
}>();

const emit = defineEmits<{
	(event: "update:selectedTemplate", template?: string): void;
}>();

const templates = ref<any[]>([]);
const selectedTemplateInfo = ref<any>(null);
const search = ref("");
const loading = ref(false);
const menu = ref(false);

const selectedTemplateSync = computed({
	get: () => props.selectedTemplate,
	set: (template: string | undefined) => emit("update:selectedTemplate", template),
});

// Load selected template info
const loadSelected = async () => {
	if (!props.selectedTemplate) {
		selectedTemplateInfo.value = null;
		return;
	}

	try {
		const [result] = await DB.selectRaw(`
			TemplateName, COUNT(*) as ItemCount
			FROM loottemplate
			WHERE TemplateName = '${props.selectedTemplate.replace(/'/g, "''")}'
			GROUP BY TemplateName
		`);

		selectedTemplateInfo.value = result.length > 0 ? result[0] : { TemplateName: props.selectedTemplate, ItemCount: 0 };
	} catch (err) {
		console.error(err);
	}
};

onMounted(loadSelected);
watch(() => props.selectedTemplate, loadSelected);

// Search templates
const _search = debounce(async () => {
	if (loading.value) return;

	loading.value = true;
	try {
		let where = "1";
		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			where = `TemplateName LIKE '%${likeValue}%'`;
		}

		const [result] = await DB.selectRaw(`
			TemplateName, COUNT(*) as ItemCount
			FROM loottemplate
			WHERE ${where}
			GROUP BY TemplateName
			ORDER BY TemplateName
			LIMIT 15
		`);

		templates.value = result;
	} catch (err) {
		console.error(err);
	} finally {
		loading.value = false;
	}
});

watch(search, _search);

function selectTemplate(templateName: string) {
	selectedTemplateSync.value = templateName;
	menu.value = false;
}

function clearSelection() {
	selectedTemplateSync.value = undefined;
	selectedTemplateInfo.value = null;
}

function openMenu() {
	menu.value = true;
	_search();
}
</script>

<template>
	<v-menu v-model="menu" :close-on-content-click="false" min-width="400">
		<template v-slot:activator="{ props: menuProps }">
			<v-text-field
				v-bind="menuProps"
				:model-value="selectedTemplateInfo?.TemplateName || selectedTemplate || ''"
				:label="label || 'Loot Template'"
				:hint="hint"
				:persistent-hint="persistentHint"
				readonly
				prepend-inner-icon="mdi-treasure-chest"
				:density="small ? 'compact' : 'default'"
				@click="openMenu"
			>
				<template v-slot:append>
					<v-btn
						v-if="selectedTemplate"
						icon="mdi-close"
						size="x-small"
						variant="text"
						@click.stop="clearSelection"
					/>
				</template>
			</v-text-field>
		</template>

		<v-card>
			<v-card-title class="text-subtitle-1">
				Select Loot Template
			</v-card-title>

			<v-text-field
				v-model="search"
				prepend-inner-icon="mdi-magnify"
				label="Search templates..."
				variant="outlined"
				density="compact"
				hide-details
				class="mx-4 mb-2"
				autofocus
			/>

			<v-progress-linear :active="loading" indeterminate />

			<v-list density="compact" max-height="300" style="overflow-y: auto">
				<v-list-item
					v-for="template in templates"
					:key="template.TemplateName"
					@click="selectTemplate(template.TemplateName)"
					:active="template.TemplateName === selectedTemplate"
				>
					<template v-slot:prepend>
						<v-icon icon="mdi-treasure-chest" />
					</template>

					<v-list-item-title>{{ template.TemplateName }}</v-list-item-title>

					<template v-slot:append>
						<v-chip size="x-small" color="primary">{{ template.ItemCount }} items</v-chip>
					</template>
				</v-list-item>

				<v-list-item v-if="templates.length === 0 && !loading">
					<v-list-item-title class="text-grey">No templates found</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-card>
	</v-menu>
</template>
