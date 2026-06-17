<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import GroupBox from "@/components/Utils/GroupBox.vue";
import { DaocClasses, DaocRealms } from "@/models/DaocClasses";
import { humanTimeSec, sql } from "@/utils";
import { DB } from "@/main";

const props = defineProps<{
	player: any;
}>();

const loading = ref(true);
const account = ref<any>(undefined);
const guild = ref<any>(undefined);
const races = ref<any[]>([]);

async function load() {
	if (!props.player) {
		loading.value = false;
		return;
	}

	loading.value = true;
	try {
		// Load races for lookup
		const [_races] = await DB.select({ table: "race", fields: ["ID", "Name"], limit: 10000 });
		races.value = _races;

		// Load account info
		const [_account] = await DB.selectRaw(`* from account where Name = '${props.player.AccountName}'`);
		account.value = _account.length ? _account[0] : undefined;

		// Load guild if exists
		if (props.player.GuildID) {
			const [_guild] = await DB.select({
				table: "guild",
				fields: ["GuildID", "GuildName", "Realm"],
				where: sql`GuildID = ${props.player.GuildID}`,
				limit: 1,
			});
			guild.value = _guild.length ? _guild[0] : undefined;
		}
	} catch (err) {
		console.error("PlayerInfo load error:", err);
	}
	loading.value = false;
}

onMounted(load);
watch(() => props.player, load);

function getClassName(id: number): string {
	return DaocClasses.find((c) => c.id === id)?.name || `Class ${id}`;
}

function getRealmName(id: number): string {
	return DaocRealms.find((r) => r.value === id)?.title?.replace(/^\d+\.\s*/, "") || `Realm ${id}`;
}

function getRaceName(id: number): string {
	return races.value.find((r) => r.ID === id)?.Name || `Race ${id}`;
}

function formatMoney(copper: number, silver: number, gold: number, platinum: number, mithril: number): string {
	const parts: string[] = [];
	if (mithril) parts.push(`${mithril}m`);
	if (platinum) parts.push(`${platinum}p`);
	if (gold) parts.push(`${gold}g`);
	if (silver) parts.push(`${silver}s`);
	if (copper) parts.push(`${copper}c`);
	return parts.join(" ") || "0c";
}
</script>

<template>
	<GroupBox title="Player Information">
		<v-progress-linear v-if="loading" indeterminate />
		<template v-else>
			<v-row class="info-grid">
				<v-col cols="12" md="6">
					<div class="info-row">
						<span class="info-label">Account:</span>
						<span class="info-value">{{ player.AccountName }}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Last IP:</span>
						<span class="info-value">{{ account?.LastLoginIP || 'N/A' }}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Last Played:</span>
						<span class="info-value">{{ player.LastPlayed ? new Date(player.LastPlayed).toLocaleString() : 'Never' }}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Created:</span>
						<span class="info-value">{{ new Date(player.CreationDate).toLocaleString() }}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Played Time:</span>
						<span class="info-value">{{ humanTimeSec(player.PlayedTime) }}</span>
					</div>
				</v-col>
				<v-col cols="12" md="6">
					<div class="info-row">
						<span class="info-label">Realm:</span>
						<span class="info-value">{{ getRealmName(player.Realm) }}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Race:</span>
						<span class="info-value">{{ getRaceName(player.Race) }}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Class:</span>
						<span class="info-value">{{ getClassName(player.Class) }}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Gender:</span>
						<span class="info-value">{{ player.Gender === 0 ? 'Male' : 'Female' }}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Guild:</span>
						<span class="info-value">{{ guild?.GuildName || 'No Guild' }}</span>
					</div>
				</v-col>
			</v-row>
		<v-divider class="my-3" />
		<v-row class="info-grid">
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Level:</span>
					<span class="info-value font-weight-bold">{{ player.Level }}</span>
				</div>
			</v-col>
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Realm Level:</span>
					<span class="info-value">{{ player.RealmLevel }}</span>
				</div>
			</v-col>
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Champion Level:</span>
					<span class="info-value">{{ player.ChampionLevel }}</span>
				</div>
			</v-col>
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Master Level:</span>
					<span class="info-value">{{ player.MLLevel }}</span>
				</div>
			</v-col>
		</v-row>
		<v-divider class="my-3" />
		<v-row class="info-grid">
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Money:</span>
					<span class="info-value text-warning">{{ formatMoney(player.Copper, player.Silver, player.Gold, player.Platinum, player.Mithril) }}</span>
				</div>
			</v-col>
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Realm Points:</span>
					<span class="info-value">{{ player.RealmPoints?.toLocaleString() }}</span>
				</div>
			</v-col>
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Bounty Points:</span>
					<span class="info-value">{{ player.BountyPoints?.toLocaleString() }}</span>
				</div>
			</v-col>
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Experience:</span>
					<span class="info-value">{{ player.Experience?.toLocaleString() }}</span>
				</div>
			</v-col>
		</v-row>
		</template>
	</GroupBox>
</template>

<style scoped>
.info-grid {
	margin: 0 -8px;
}

.info-row {
	display: flex;
	padding: 4px 0;
	gap: 8px;
}

.info-label {
	color: #888;
	min-width: 120px;
	font-weight: 500;
}

.info-value {
	font-weight: 400;
}
</style>
