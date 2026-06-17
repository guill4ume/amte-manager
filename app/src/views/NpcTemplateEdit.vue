<script lang="ts" setup>
import NpcTemplateEditor from '@/components/NpcTemplateEditor.vue';
import { toSQL } from '@/dbconnection';
import { DB } from '@/main';
import { NpcTemplate } from '@/models/NpcTemplate';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const template = ref<NpcTemplate | null>(null);
const loading = ref(true);
const saveLoading = ref(false);
const isNewRecord = ref(false);

onMounted(async () => {
    loading.value = true;
    try {
        const id = route.params.id;
        if (!id) {
            template.value = new NpcTemplate();
            isNewRecord.value = true;
        } else {
            const [_template] = await DB.select({
                table: "npctemplate",
                fields: "*",
                where: `NpcTemplate_ID = ${toSQL(id)}`
            });
			template.value = _template.length ? _template[0] : null;
        }
    } catch (err) {
        console.error("Failed to load NPC template:", err);
        template.value = null;
    } finally {
        loading.value = false;
    }
});

async function save() {
    if (!template.value) return;

    if (isNewRecord.value && !template.value.NpcTemplate_ID) {
        alert("Template ID (the string) cannot be empty for a new NPC.");
        return;
    }
    // Ajouter une validation pour le TemplateId numérique
    if (isNewRecord.value && (!template.value.TemplateId || template.value.TemplateId <= 0)) {
        alert("In-game TemplateId (the number) must be a positive number.");
        return;
    }

    saveLoading.value = true;
    try {
        if (isNewRecord.value) {
            const [existing] = await DB.select({
                table: "npctemplate",
                fields: "NpcTemplate_ID, TemplateId",
                where: `NpcTemplate_ID = ${toSQL(template.value.NpcTemplate_ID)} OR TemplateId = ${toSQL(template.value.TemplateId)}`,
                limit: 2,
            });

            if (existing.length > 0) {
                const conflictingId = existing[0].NpcTemplate_ID === template.value.NpcTemplate_ID ? `ID (string) '${template.value.NpcTemplate_ID}'` : `In-game ID (number) '${template.value.TemplateId}'`;
                alert(`Error: The ${conflictingId} already exists. Please choose a unique value.`);
                saveLoading.value = false;
                return;
            }

            await DB.insert("npctemplate", template.value);
        } else {
            const [existing] = await DB.select({
                table: "npctemplate",
                fields: "NpcTemplate_ID",
                where: `TemplateId = ${toSQL(template.value.TemplateId)} AND NpcTemplate_ID != ${toSQL(template.value.NpcTemplate_ID)}`,
                limit: 1,
            });

            if (existing.length > 0) {
                 alert(`Error: The In-game ID (number) '${template.value.TemplateId}' is already used by another NPC. Please choose a unique value.`);
                saveLoading.value = false;
                return;
            }

            await DB.update("npctemplate", template.value, `NpcTemplate_ID = ${toSQL(template.value.NpcTemplate_ID)}`);
        }
        router.back();
    } catch (err) {
        alert(`An error occurred: ${err}`);
    } finally {
        saveLoading.value = false;
    }
}

function duplicate() {
    if (!template.value) return;

    const newTemplate = JSON.parse(JSON.stringify(template.value));
    const originalId = newTemplate.NpcTemplate_ID || 'new_npc';
    newTemplate.NpcTemplate_ID = `${originalId}_copy_${Date.now()}`;
    newTemplate.TemplateId = 0;

    newTemplate.Name = `${newTemplate.Name} (Copy)`;

    template.value = newTemplate;
    isNewRecord.value = true;
    router.replace({ params: { id: undefined } });
}
</script>

<template>
    <div v-if="loading" class="d-flex justify-center align-center" style="height: 400px;">
        <v-progress-circular indeterminate size="64" />
    </div>

    <v-sheet :elevation="1" rounded v-else-if="template">
        <v-toolbar style="position: sticky; top: 0; z-index: 1">
            <v-toolbar-title>
                {{ template.Name || "New NPC Template" }}
            </v-toolbar-title>

            <v-btn prepend-icon="mdi-content-copy" @click="duplicate">Duplicate</v-btn>

            <v-btn color="primary" @click="save" :loading="saveLoading">Save</v-btn>
            <v-btn @click="router.back()">Cancel</v-btn>
        </v-toolbar>

        <v-card-text>
            <NpcTemplateEditor :template="template" />
        </v-card-text>
    </v-sheet>

    <v-alert v-else type="warning" title="Not Found" prominent>
        The NPC template could not be found. It may have been deleted or the ID is incorrect.
    </v-alert>
</template>