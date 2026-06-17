<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
	emblem: number;
}>();

const pattern = computed(() => (props.emblem >> 7) & 0x3);
const primary = computed(() => (props.emblem >> 3) & 0xf);
const secondary = computed(() => props.emblem & 0x7);
const logo = computed(() => (props.emblem >> 9) & 0xff);

const _pcolors = [
	"rgb(169,0,3)",
	"rgb(89,0,0)",
	"rgb(99,4,96)",
	"rgb(68,14,98)",
	"rgb(0,0,168)",
	"rgb(12,54,111)",
	"rgb(9,78,91)",
	"rgb(56,121,137)",
	"rgb(6,102,39)",
	"rgb(7,74,51)",
	"rgb(75,89,10)",
	"rgb(143,114,0)",
	"rgb(106,78,20)",
	"rgb(102,58,6)",
	"rgb(75,75,75)",
	"rgb(116,0,68)",
];
const primaryColor = computed(() => _pcolors[primary.value]);
const _scolors = [
	"rgb(205,200,158)",
	"rgb(174,161,134)",
	"rgb(154,154,154)",
	"rgb(235,232,97)",
	"rgb(228,181,84)",
	"rgb(135,196,130)",
	"rgb(143,162,204)",
	"rgb(152,136,165)",
];
const secondaryColor = computed(() => _scolors[secondary.value]);
</script>

<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100">
		<g v-if="emblem" :fill="primaryColor">
			<rect width="80" height="100" x="0" y="0" />
		</g>

		<g v-if="emblem" :fill="secondaryColor">
			<rect v-if="pattern === 0" width="40" height="30" x="0" y="0" />
			<rect v-if="pattern === 0" width="40" height="70" x="40" y="30" />

			<rect v-if="pattern === 1" width="40" height="100" x="40" y="0" />

			<polygon v-if="pattern === 2" points="0,50 40,75 80,50 80,70 40,95 0,70" />
		</g>

		<image v-if="logo" :href="`/icons/emblem/${logo}.png`" width="70" height="70" x="5" />
	</svg>
</template>
