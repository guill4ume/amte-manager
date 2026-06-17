import { FunctionalComponent, h } from "vue";
import { DaocIcons, DaocObjects } from "@/models/DaocObjectsCsv";

const _iconFiles = [
	{ from: 0, to: 99, src: "/icons/spl_0.png", },
	{ from: 100, to: 199, src: "/icons/spl_100.png", },
	{ from: 200, to: 299, src: "/icons/spl_200.png", },
	{ from: 300, to: 399, src: "/icons/spl_300.png", },
	{ from: 400, to: 499, src: "/icons/spl_400.png", },
	{ from: 1800, to: 1899, src: "/icons/spl_1800.png", },
	{ from: 500, to: 599, src: "/icons/cbt_500.png", },
	{ from: 600, to: 699, src: "/icons/cbt_600.png", },
	{ from: 700, to: 799, src: "/icons/cbt_700.png", },
	{ from: 800, to: 899, src: "/icons/cbt_800.png", },
	{ from: 900, to: 999, src: "/icons/wpn_900.png", },
	{ from: 1000, to: 1099, src: "/icons/wpn_1000.png", },
	{ from: 1100, to: 1199, src: "/icons/wpn_1100.png", },
	{ from: 1700, to: 1799, src: "/icons/wpn_1700.png", },
	{ from: 1200, to: 1299, src: "/icons/itm_1200.png", },
	{ from: 1300, to: 1399, src: "/icons/itm_1300.png", },
	{ from: 1400, to: 1499, src: "/icons/itm_1400.png", },
	{ from: 1500, to: 1599, src: "/icons/itm_1500.png", },
	{ from: 1600, to: 1699, src: "/icons/skl_1600.png", },
];

export const DaocIcon: FunctionalComponent<{ id: number; size?: number; alt?: string; class?: string; style?: any; }> =
	(props, _ctxt) => {
		const scale = props.size || 1.0;
		const iconId = DaocIcons.get(props.id) ?? 0;
		const src = _iconFiles.find(i => i.from <= iconId && iconId <= i.to)?.src ?? _iconFiles[0].src;
		const x = Math.floor((iconId % 100) % 10) * -32 * scale;
		const y = Math.floor((iconId % 100) / 10) * -32 * scale;
		return h("div", {
			alt: props.alt,
			className: `${props.class ?? ""} icon_${iconId}`,
			style: {
				display: "inline-block",
				backgroundImage: `url(${src})`,
				backgroundSize: `calc(${scale} * 320px) calc(${scale} * 320px)`,
				backgroundPosition: `${x}px ${y}px`,
				width: `calc(${scale} * 32px)`,
				height: `calc(${scale} * 32px)`,
			}
		});
	};

export const DaocItemIcon: FunctionalComponent<{ id: number | string; size?: number; class?: string; style?: any; }> =
	(props, _ctxt) => {
		const modelId = typeof (props.id) === "string" ? parseInt(props.id) : props.id;
		const [id, alt] = DaocObjects.get(modelId) ?? [0, undefined];
		return DaocIcon({ ...props, id, alt, class: `item_${modelId} ${props.class ?? ""}` }, _ctxt);
	}
