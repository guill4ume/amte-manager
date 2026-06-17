<script lang="ts" setup>
import { DB } from "@/main";
import { Ref, onMounted, watch, ref } from "vue";
import * as d3 from "d3";

const player = ref(0);
const itemtemplate = ref(0);
const mob = ref(0);
const quest = ref(0);

const refClients = ref<HTMLDivElement | null>(null);
const stats = ref([] as { StatDate: string; Clients: number; Upload: number; Download: number }[]);

onMounted(async () => {
	const count = async (table: string, ref: Ref<number>) => {
		const [, count] = await DB.select({ table, fields: "Name" });
		ref.value = count;
	};
	const promises: Promise<any>[] = [
		count("dolcharacters", player),
		count("itemtemplate", itemtemplate),
		count("mob", mob),
		count("dataquestjson", quest),
		(async () => {
			stats.value = await DB.select({
				table: "serverstats",
				fields: ["StatDate", "Clients", "Upload", "Download"],
				orderby: "StatDate DESC",
				limit: 30000,
			}).then((q) => q[0]);
		})(),
	];

	await Promise.all(promises);
});

watch(stats, () => {
	if (!refClients.value) return;

	// Declare the chart dimensions and margins.
	const width = refClients.value.clientWidth;
	const height = 500;
	const marginTop = 20;
	const marginRight = 30;
	const marginBottom = 120;
	const marginLeft = 40;

	// Declare the x (horizontal position) scale.

	const extentX = d3.extent(stats.value, (d) => new Date(d.StatDate));
	if (extentX[0] === undefined) return;
	const x = d3.scaleUtc(extentX, [marginLeft, width - marginRight]);
	const xFormat = x.tickFormat(undefined, "%Y-%m-%d %H:%M");
	// Create the horizontal axis generator, called at startup and when zooming.
	const xAxis = (g: any, x_: typeof x) =>
		g.call(
			d3
				.axisBottom(x_)
				.ticks(width / 80)
				.tickFormat((v, _) => xFormat(v as Date))
				.tickSizeOuter(0)
		);

	// Declare the y (vertical position) scale.
	const y = d3.scaleLinear([0, d3.max(stats.value, (d) => d.Clients) as number], [height - marginBottom, marginTop]);

	// Declare the area generator.
	const area = (data: [Date, number][], xAxis: typeof x) =>
		d3
			.area<[Date, number]>()
			.curve(d3.curveStepAfter)
			.x((d) => xAxis(d[0]))
			.y0(y(0))
			.y1((d) => y(d[1]))(data);

	// Create the zoom behavior.
	const zoom = d3
		.zoom()
		.scaleExtent([1, 32])
		.extent([
			[marginLeft, 0],
			[width - marginRight, height],
		])
		.translateExtent([
			[marginLeft, -Infinity],
			[width - marginRight, Infinity],
		])
		.on("zoom", zoomed);

	// Create the SVG container.
	const svg = d3
		.create("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", [0, 0, width, height])
		.attr("style", "max-width: 100%; height: auto;");

	// Create a clip-path with a unique ID.
	const clip = "clip-" + Date.now().toString();
	svg
		.append("clipPath")
		.attr("id", clip)
		.append("rect")
		.attr("x", marginLeft)
		.attr("y", marginTop)
		.attr("width", width - marginLeft - marginRight)
		.attr("height", height - marginTop - marginBottom);

	// Append a path for the area (under the axes).
	const path = svg
		.append("path")
		.attr("clip-path", `url(#${clip})`)
		.attr("fill", "steelblue")
		.attr(
			"d",
			area(
				stats.value.map((d) => [new Date(d.StatDate), d.Clients]),
				x
			)
		);

	// Add the x-axis.
	const gx = svg
		.append("g")
		.attr("transform", `translate(0,${height - marginBottom})`)
		.call(xAxis, x);

	// Add the y-axis, remove the domain line, add grid lines and a label.
	svg
		.append("g")
		.attr("transform", `translate(${marginLeft},0)`)
		.call(d3.axisLeft(y).ticks(height / 40))
		.call((g) => g.select(".domain").remove())
		.call((g) =>
			g
				.selectAll(".tick line")
				.clone()
				.attr("x2", width - marginLeft - marginRight)
				.attr("stroke-opacity", 0.1)
		)
		.call((g) =>
			g
				.append("text")
				.attr("x", -marginLeft)
				.attr("y", 10)
				.attr("fill", "currentColor")
				.attr("text-anchor", "start")
				.text("Clients")
		);

	// When zooming, redraw the area and the x axis.
	function zoomed(event: any) {
		const xz = event.transform.rescaleX(x);
		path.attr(
			"d",
			area(
				stats.value.map((d) => [new Date(d.StatDate), d.Clients]),
				xz
			)
		);
		gx.call(xAxis, xz);
		gx.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-0.8em")
			.attr("dy", "0.15em")
			.attr("transform", "rotate(-90)");
	}

	// Initial zoom.
	svg
		.call(zoom as any)
		.transition()
		.duration(750)
		.call(zoom.scaleTo as any, 4, [x(new Date()), 0]);

	refClients.value.innerHTML = "";
	refClients.value.append(svg.node() ?? "");
});
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Some statistics" />

		<ul class="pa-5">
			<li>{{ player }} players</li>
			<li>{{ itemtemplate }} items</li>
			<li>{{ mob }} mobs</li>
			<li>{{ quest }} quests</li>
		</ul>

		<div ref="refClients"></div>
	</v-sheet>
</template>
