import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import PageRoute from "@/components/PageRoute.vue";

export const routes: RouteRecordRaw[] = [
	{
		name: "dashboard",
		path: "/dashboard",
		alias: "/",
		component: () => import("@/views/Dashboard.vue"),
	},
	{
		name: "races",
		path: "/races",
		component: () => import("@/views/Race.vue"),
	},
	{
		name: "daoclists",
		path: "/daoclists",
		component: () => import("@/views/DaocLists.vue"),
	},
	{
		name: "tools",
		path: "/tools",
		component: () => import("@/views/Tools.vue"),
	},
	{
		name: "spells",
		path: "/spell",
		component: PageRoute,
		redirect: "/spell/",
		children: [
			{
				name: "spellList",
				path: "",
				component: () => import("@/views/Spell.vue"),
			},
			{
				name: "spell",
				path: ":id",
				component: () => import("@/views/SpellEdit.vue"),
			},
		],
	},
	{
		name: "styles",
		path: "/style",
		component: PageRoute,
		redirect: "/style/",
		children: [
			{
				name: "styleList",
				path: "",
				component: () => import("@/views/Styles.vue"),
			},
			{
				name: "style",
				path: ":id",
				component: () => import("@/views/StyleEdit.vue"),
			},
		],
	},
	{
		name: "textnpcs",
		path: "/textnpcs",
		component: () => import("@/views/TextNPC.vue"),
	},
	{
		name: "maps",
		path: "/maps/:id?",
		component: () => import("@/views/Maps.vue"),
	},

	{
		name: "guilds",
		path: "/guilds",
		component: PageRoute,
		redirect: "/guilds/",
		children: [
			{
				name: "guildsList",
				path: "",
				component: () => import("@/views/Guilds.vue"),
			},
			{
				name: "guild",
				path: ":id",
				component: () => import("@/views/Guild.vue"),
			},
		],
	},

	{
		name: "players",
		path: "/player",
		component: PageRoute,
		redirect: "/player/",
		children: [
			{
				name: "playerList",
				path: "",
				component: () => import("@/views/Players.vue"),
			},
			{
				name: "player",
				path: ":name",
				component: () => import("@/views/Player.vue"),
			},
		],
	},

	{
		name: "mobs",
		path: "/mob",
		component: PageRoute,
		redirect: "/mob/",
		children: [
			{
				name: "mobList",
				path: "",
				component: () => import("@/views/Mobs.vue"),
			},
		],
	},

	{
		name: "quests",
		path: "/quest",
		component: PageRoute,
		redirect: "/quest/",
		children: [
			{
				name: "questList",
				path: "",
				component: () => import("@/views/Quests.vue"),
			},
			{
				name: "quest",
				path: ":id",
				component: () => import("@/views/QuestEditor.vue"),
			},
		],
	},

	{
		name: "items",
		path: "/item",
		component: PageRoute,
		redirect: "/item/",
		children: [
			{
				name: "itemList",
				path: "",
				component: () => import("@/views/ItemTemplateList.vue"),
			},
			{
				name: "item",
				path: ":id",
				component: () => import("@/views/ItemTemplate.vue"),
			},
		],
	},

	{
		name: "merchantitems",
		path: "/merchantitem",
		component: PageRoute,
		redirect: "/merchantitem/",
		children: [
			{
				name: "merchantitemList",
				path: "",
				component: () => import("@/views/MerchantItemLists.vue"),
			},
			{
				name: "merchantitem",
				path: ":id",
				redirect: (to) => ({
					name: "merchanitemPage",
					params: { ...to.params, page: "items" },
				}),
				component: PageRoute,
				children: [
					{
						name: "merchanitemPage",
						path: ":page",
						component: () => import("@/views/MerchantItemListPage.vue"),
					},
				],
			},
		],
	},

	{
		name: "npctemplates",
		path: "/npctemplate",
		component: PageRoute,
		redirect: "/npctemplate/",
		children: [
			{
				name: "npctemplateList",
				path: "",
				component: () => import("@/views/NpcTemplateList.vue"),
			},
			{
				name: "npctemplate",
				path: ":id",
				component: () => import("@/views/NpcTemplateEdit.vue"),
			},
		],
	},

	{
		name: "loottemplates",
		path: "/loottemplate",
		component: PageRoute,
		redirect: "/loottemplate/",
		children: [
			{
				name: "lootList",
				path: "",
				component: () => import("@/views/LootList.vue"),
			},
			{
				name: "lootEdit",
				path: ":id",
				component: () => import("@/views/LootEdit.vue"),
			},
		],
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
