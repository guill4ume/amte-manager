export interface DaocMapInfo {
	id: number;
	name: string;
	tiles: {
		src: string;
		bounds: [[number, number], [number, number]];
	}[];
}

export interface DaocMiniMapInfo {
	id: number;
	width: number;
	height: number;
	zones: {
		src: string;
		left: number;
		top: number;
		width: number;
		height: number;
		offsetX: number;
		offsetY: number;
		desc: string;
	}[];
}

export const DaocMaps: Record<string, DaocMapInfo> = {
	"1": {
		"id": 1,
		"name": "Albion",
		"tiles": [
			{
				src: "/maps/0.jpg",
				"bounds": [
					[
						-67,
						67
					],
					[
						-59,
						75
					]
				]
			},
			{
				src: "/maps/1.jpg",
				"bounds": [
					[
						-75,
						67
					],
					[
						-67,
						75
					]
				]
			},
			{
				src: "/maps/2.jpg",
				"bounds": [
					[
						-61,
						59
					],
					[
						-53,
						67
					]
				]
			},
			{
				src: "/maps/3.jpg",
				"bounds": [
					[
						-53,
						59
					],
					[
						-45,
						67
					]
				]
			},
			{
				src: "/maps/4.jpg",
				"bounds": [
					[
						-93,
						43
					],
					[
						-85,
						51
					]
				]
			},
			{
				src: "/maps/6.jpg",
				"bounds": [
					[
						-85,
						43
					],
					[
						-77,
						51
					]
				]
			},
			{
				src: "/maps/7.jpg",
				"bounds": [
					[
						-53,
						51
					],
					[
						-45,
						59
					]
				]
			},
			{
				src: "/maps/8.jpg",
				"bounds": [
					[
						-79,
						59
					],
					[
						-71,
						67
					]
				]
			},
			{
				src: "/maps/9.jpg",
				"bounds": [
					[
						-83,
						51
					],
					[
						-75,
						59
					]
				]
			},
			{
				src: "/maps/10.jpg",
				"bounds": [
					[
						-85,
						35
					],
					[
						-77,
						43
					]
				]
			},
			{
				src: "/maps/11.jpg",
				"bounds": [
					[
						-59,
						69
					],
					[
						-51,
						77
					]
				]
			},
			{
				src: "/maps/12.jpg",
				"bounds": [
					[
						-45,
						61
					],
					[
						-37,
						69
					]
				]
			},
			{
				src: "/maps/14.jpg",
				"bounds": [
					[
						-51,
						69
					],
					[
						-43,
						77
					]
				]
			},
			{
				src: "/maps/15.jpg",
				"bounds": [
					[
						-43,
						73
					],
					[
						-35,
						81
					]
				]
			}
		]
	},
	"2": {
		"id": 2,
		"name": "Albion Housing",
		"tiles": [
			{
				src: "/maps/13.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			},
			{
				src: "/maps/16.jpg",
				"bounds": [
					[
						-80,
						64
					],
					[
						-72,
						72
					]
				]
			},
			{
				src: "/maps/17.jpg",
				"bounds": [
					[
						-64,
						64
					],
					[
						-56,
						72
					]
				]
			},
			{
				src: "/maps/18.jpg",
				"bounds": [
					[
						-72,
						56
					],
					[
						-64,
						64
					]
				]
			},
			{
				src: "/maps/20.jpg",
				"bounds": [
					[
						-64,
						56
					],
					[
						-56,
						64
					]
				]
			},
			{
				src: "/maps/64.jpg",
				"bounds": [
					[
						-80,
						56
					],
					[
						-72,
						64
					]
				]
			},
			{
				src: "/maps/260.jpg",
				"bounds": [
					[
						-72,
						48
					],
					[
						-64,
						56
					]
				]
			},
			{
				src: "/maps/261.jpg",
				"bounds": [
					[
						-80,
						48
					],
					[
						-72,
						56
					]
				]
			},
			{
				src: "/maps/262.jpg",
				"bounds": [
					[
						-64,
						48
					],
					[
						-56,
						56
					]
				]
			}
		]
	},
	"10": {
		"id": 10,
		"name": "Camelot City",
		"tiles": [
			{
				src: "/maps/26.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"20": {
		"id": 20,
		"name": "Stonehenge Barrows",
		"tiles": [
			{
				src: "/maps/19.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"21": {
		"id": 21,
		"name": "Tomb of Mithra",
		"tiles": [
			{
				src: "/maps/21.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"22": {
		"id": 22,
		"name": "Keltoi Fogou",
		"tiles": [
			{
				src: "/maps/22.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"23": {
		"id": 23,
		"name": "Catacombs of Cardova",
		"tiles": [
			{
				src: "/maps/23.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"24": {
		"id": 24,
		"name": "Tepok's Mine",
		"tiles": [
			{
				src: "/maps/24.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"27": {
		"id": 27,
		"name": "Tutorial",
		"tiles": [
			{
				src: "/maps/27.jpg",
				"bounds": [
					[
						-16,
						8
					],
					[
						-8,
						16
					]
				]
			},
			{
				src: "/maps/28.jpg",
				"bounds": [
					[
						-32,
						24
					],
					[
						-24,
						32
					]
				]
			},
			{
				src: "/maps/29.jpg",
				"bounds": [
					[
						-48,
						40
					],
					[
						-40,
						48
					]
				]
			}
		]
	},
	"30": {
		"id": 30,
		"name": "Atlantis",
		"tiles": [
			{
				src: "/maps/30.jpg",
				"bounds": [
					[
						-72,
						32
					],
					[
						-64,
						40
					]
				]
			},
			{
				src: "/maps/31.jpg",
				"bounds": [
					[
						-72,
						40
					],
					[
						-64,
						48
					]
				]
			},
			{
				src: "/maps/32.jpg",
				"bounds": [
					[
						-64,
						40
					],
					[
						-56,
						48
					]
				]
			},
			{
				src: "/maps/33.jpg",
				"bounds": [
					[
						-80,
						40
					],
					[
						-72,
						48
					]
				]
			},
			{
				src: "/maps/34.jpg",
				"bounds": [
					[
						-72,
						48
					],
					[
						-64,
						56
					]
				]
			},
			{
				src: "/maps/38.jpg",
				"bounds": [
					[
						-56,
						36
					],
					[
						-48,
						44
					]
				]
			},
			{
				src: "/maps/39.jpg",
				"bounds": [
					[
						-56,
						28
					],
					[
						-48,
						36
					]
				]
			},
			{
				src: "/maps/41.jpg",
				"bounds": [
					[
						-72,
						56
					],
					[
						-64,
						64
					]
				]
			},
			{
				src: "/maps/42.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			},
			{
				src: "/maps/43.jpg",
				"bounds": [
					[
						-88,
						44
					],
					[
						-80,
						52
					]
				]
			},
			{
				src: "/maps/44.jpg",
				"bounds": [
					[
						-88,
						52
					],
					[
						-80,
						60
					]
				]
			}
		]
	},
	"35": {
		"id": 35,
		"name": "Cetus' Pit",
		"tiles": [
			{
				src: "/maps/35.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"36": {
		"id": 36,
		"name": "Sobekite Eternal",
		"tiles": [
			{
				src: "/maps/36.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"37": {
		"id": 37,
		"name": "Temple of Twilight",
		"tiles": [
			{
				src: "/maps/37.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"40": {
		"id": 40,
		"name": "Halls of Ma'ati",
		"tiles": [
			{
				src: "/maps/40.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"45": {
		"id": 45,
		"name": "The Great Pyramid",
		"tiles": [
			{
				src: "/maps/45.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"46": {
		"id": 46,
		"name": "Deep Volcanus",
		"tiles": [
			{
				src: "/maps/46.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"47": {
		"id": 47,
		"name": "Aerus City",
		"tiles": [
			{
				src: "/maps/47.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"48": {
		"id": 48,
		"name": "The Unused Mine",
		"tiles": [
			{
				src: "/maps/48.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"49": {
		"id": 49,
		"name": "Rugnog's Haven",
		"tiles": [
			{
				src: "/maps/49.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"50": {
		"id": 50,
		"name": "Avalon City",
		"tiles": [
			{
				src: "/maps/50.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"51": {
		"id": 51,
		"name": "Avalon",
		"tiles": [
			{
				src: "/maps/51.jpg",
				"bounds": [
					[
						-68,
						60
					],
					[
						-60,
						68
					]
				]
			},
			{
				src: "/maps/52.jpg",
				"bounds": [
					[
						-62,
						52
					],
					[
						-54,
						60
					]
				]
			},
			{
				src: "/maps/53.jpg",
				"bounds": [
					[
						-54,
						46
					],
					[
						-46,
						54
					]
				]
			},
			{
				src: "/maps/54.jpg",
				"bounds": [
					[
						-52,
						38
					],
					[
						-44,
						46
					]
				]
			},
			{
				src: "/maps/55.jpg",
				"bounds": [
					[
						-60,
						36
					],
					[
						-52,
						44
					]
				]
			},
			{
				src: "/maps/56.jpg",
				"bounds": [
					[
						-66,
						44
					],
					[
						-58,
						52
					]
				]
			},
			{
				src: "/maps/57.jpg",
				"bounds": [
					[
						-60,
						28
					],
					[
						-52,
						36
					]
				]
			}
		]
	},
	"58": {
		"id": 58,
		"name": "Underground Forest",
		"tiles": [
			{
				src: "/maps/58.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"59": {
		"id": 59,
		"name": "Glashtin Forge",
		"tiles": [
			{
				src: "/maps/59.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"60": {
		"id": 60,
		"name": "Caer Sidi",
		"tiles": [
			{
				src: "/maps/60.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"61": {
		"id": 61,
		"name": "Krondon",
		"tiles": [
			{
				src: "/maps/61.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"62": {
		"id": 62,
		"name": "Crystal Cave",
		"tiles": [
			{
				src: "/maps/62.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"63": {
		"id": 63,
		"name": "Roman Aqueducts",
		"tiles": [
			{
				src: "/maps/63.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"65": {
		"id": 65,
		"name": "Inconnu Crypt",
		"tiles": [
			{
				src: "/maps/65.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"66": {
		"id": 66,
		"name": "Underground Forest",
		"tiles": [
			{
				src: "/maps/66.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"67": {
		"id": 67,
		"name": "Deadlands of Annwn",
		"tiles": [
			{
				src: "/maps/67.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"68": {
		"id": 68,
		"name": "Lower Crypt",
		"tiles": [
			{
				src: "/maps/68.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"69": {
		"id": 69,
		"name": "Darkspire",
		"tiles": [
			{
				src: "/maps/69.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"70": {
		"id": 70,
		"name": "Ruins of Atlantis",
		"tiles": [
			{
				src: "/maps/70.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"71": {
		"id": 71,
		"name": "Ruinrar Atlantis",
		"tiles": [
			{
				src: "/maps/71.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"72": {
		"id": 72,
		"name": "Scrios de Atlantis",
		"tiles": [
			{
				src: "/maps/72.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"73": {
		"id": 73,
		"name": "Atlantis",
		"tiles": [
			{
				src: "/maps/73.jpg",
				"bounds": [
					[
						-72,
						32
					],
					[
						-64,
						40
					]
				]
			},
			{
				src: "/maps/74.jpg",
				"bounds": [
					[
						-72,
						40
					],
					[
						-64,
						48
					]
				]
			},
			{
				src: "/maps/75.jpg",
				"bounds": [
					[
						-64,
						40
					],
					[
						-56,
						48
					]
				]
			},
			{
				src: "/maps/76.jpg",
				"bounds": [
					[
						-80,
						40
					],
					[
						-72,
						48
					]
				]
			},
			{
				src: "/maps/77.jpg",
				"bounds": [
					[
						-72,
						48
					],
					[
						-64,
						56
					]
				]
			},
			{
				src: "/maps/81.jpg",
				"bounds": [
					[
						-56,
						36
					],
					[
						-48,
						44
					]
				]
			},
			{
				src: "/maps/82.jpg",
				"bounds": [
					[
						-56,
						28
					],
					[
						-48,
						36
					]
				]
			},
			{
				src: "/maps/84.jpg",
				"bounds": [
					[
						-72,
						56
					],
					[
						-64,
						64
					]
				]
			},
			{
				src: "/maps/85.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			},
			{
				src: "/maps/86.jpg",
				"bounds": [
					[
						-88,
						44
					],
					[
						-80,
						52
					]
				]
			},
			{
				src: "/maps/87.jpg",
				"bounds": [
					[
						-88,
						52
					],
					[
						-80,
						60
					]
				]
			}
		]
	},
	"78": {
		"id": 78,
		"name": "Cetus' Pit",
		"tiles": [
			{
				src: "/maps/78.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"79": {
		"id": 79,
		"name": "Sobekite Eternal",
		"tiles": [
			{
				src: "/maps/79.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"80": {
		"id": 80,
		"name": "Temple of Twilight",
		"tiles": [
			{
				src: "/maps/80.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"83": {
		"id": 83,
		"name": "Halls of Ma'ati",
		"tiles": [
			{
				src: "/maps/83.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"88": {
		"id": 88,
		"name": "The Great Pyramid",
		"tiles": [
			{
				src: "/maps/88.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"89": {
		"id": 89,
		"name": "Deep Volcanus",
		"tiles": [
			{
				src: "/maps/89.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"90": {
		"id": 90,
		"name": "Aerus City",
		"tiles": [
			{
				src: "/maps/90.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"91": {
		"id": 91,
		"name": "Celestius",
		"tiles": [
			{
				src: "/maps/91.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"92": {
		"id": 92,
		"name": "Veil Rift",
		"tiles": [
			{
				src: "/maps/92.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"93": {
		"id": 93,
		"name": "Shar Labyrinth",
		"tiles": [
			{
				src: "/maps/93.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"94": {
		"id": 94,
		"name": "Queen's Labyrinth",
		"tiles": [
			{
				src: "/maps/94.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"95": {
		"id": 95,
		"name": "The Frontlines",
		"tiles": [
			{
				src: "/maps/95.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"96": {
		"id": 96,
		"name": "Underground Forest",
		"tiles": [
			{
				src: "/maps/96.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"97": {
		"id": 97,
		"name": "Deadlands of Annwn",
		"tiles": [
			{
				src: "/maps/97.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"98": {
		"id": 98,
		"name": "Darkspire",
		"tiles": [
			{
				src: "/maps/98.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"99": {
		"id": 99,
		"name": "Glashtin Forge",
		"tiles": [
			{
				src: "/maps/99.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"100": {
		"id": 100,
		"name": "Midgard",
		"tiles": [
			{
				src: "/maps/100.jpg",
				"bounds": [
					[
						-90,
						92
					],
					[
						-82,
						100
					]
				]
			},
			{
				src: "/maps/101.jpg",
				"bounds": [
					[
						-98,
						88
					],
					[
						-90,
						96
					]
				]
			},
			{
				src: "/maps/102.jpg",
				"bounds": [
					[
						-98,
						80
					],
					[
						-90,
						88
					]
				]
			},
			{
				src: "/maps/103.jpg",
				"bounds": [
					[
						-106,
						88
					],
					[
						-98,
						96
					]
				]
			},
			{
				src: "/maps/104.jpg",
				"bounds": [
					[
						-86,
						100
					],
					[
						-78,
						108
					]
				]
			},
			{
				src: "/maps/105.jpg",
				"bounds": [
					[
						-114,
						92
					],
					[
						-106,
						100
					]
				]
			},
			{
				src: "/maps/106.jpg",
				"bounds": [
					[
						-118,
						84
					],
					[
						-110,
						92
					]
				]
			},
			{
				src: "/maps/107.jpg",
				"bounds": [
					[
						-114,
						76
					],
					[
						-106,
						84
					]
				]
			},
			{
				src: "/maps/108.jpg",
				"bounds": [
					[
						-98,
						72
					],
					[
						-90,
						80
					]
				]
			},
			{
				src: "/maps/111.jpg",
				"bounds": [
					[
						-82,
						88
					],
					[
						-74,
						96
					]
				]
			},
			{
				src: "/maps/112.jpg",
				"bounds": [
					[
						-90,
						80
					],
					[
						-82,
						88
					]
				]
			},
			{
				src: "/maps/113.jpg",
				"bounds": [
					[
						-82,
						80
					],
					[
						-74,
						88
					]
				]
			},
			{
				src: "/maps/115.jpg",
				"bounds": [
					[
						-78,
						72
					],
					[
						-70,
						80
					]
				]
			},
			{
				src: "/maps/116.jpg",
				"bounds": [
					[
						-126,
						84
					],
					[
						-118,
						92
					]
				]
			}
		]
	},
	"101": {
		"id": 101,
		"name": "Jordheim",
		"tiles": [
			{
				src: "/maps/120.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"102": {
		"id": 102,
		"name": "Midgard Housing",
		"tiles": [
			{
				src: "/maps/114.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			},
			{
				src: "/maps/117.jpg",
				"bounds": [
					[
						-64,
						64
					],
					[
						-56,
						72
					]
				]
			},
			{
				src: "/maps/118.jpg",
				"bounds": [
					[
						-72,
						72
					],
					[
						-64,
						80
					]
				]
			},
			{
				src: "/maps/119.jpg",
				"bounds": [
					[
						-80,
						64
					],
					[
						-72,
						72
					]
				]
			},
			{
				src: "/maps/121.jpg",
				"bounds": [
					[
						-80,
						72
					],
					[
						-72,
						80
					]
				]
			},
			{
				src: "/maps/122.jpg",
				"bounds": [
					[
						-64,
						72
					],
					[
						-56,
						80
					]
				]
			},
			{
				src: "/maps/266.jpg",
				"bounds": [
					[
						-72,
						80
					],
					[
						-64,
						88
					]
				]
			},
			{
				src: "/maps/267.jpg",
				"bounds": [
					[
						-80,
						80
					],
					[
						-72,
						88
					]
				]
			},
			{
				src: "/maps/268.jpg",
				"bounds": [
					[
						-64,
						80
					],
					[
						-56,
						88
					]
				]
			}
		]
	},
	"109": {
		"id": 109,
		"name": "The Frontlines",
		"tiles": [
			{
				src: "/maps/109.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"123": {
		"id": 123,
		"name": "Volcanus Instance 1",
		"tiles": [
			{
				src: "/maps/123.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"124": {
		"id": 124,
		"name": "Volcanus Instance 2",
		"tiles": [
			{
				src: "/maps/124.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"125": {
		"id": 125,
		"name": "Spindelhalla",
		"tiles": [
			{
				src: "/maps/125.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"126": {
		"id": 126,
		"name": "Vendo Caverns",
		"tiles": [
			{
				src: "/maps/126.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"127": {
		"id": 127,
		"name": "Varulvhamn",
		"tiles": [
			{
				src: "/maps/127.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"128": {
		"id": 128,
		"name": "Cursed Tomb",
		"tiles": [
			{
				src: "/maps/128.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"129": {
		"id": 129,
		"name": "Nisse's Lair",
		"tiles": [
			{
				src: "/maps/129.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"130": {
		"id": 130,
		"name": "Atlantis",
		"tiles": [
			{
				src: "/maps/130.jpg",
				"bounds": [
					[
						-72,
						32
					],
					[
						-64,
						40
					]
				]
			},
			{
				src: "/maps/131.jpg",
				"bounds": [
					[
						-72,
						40
					],
					[
						-64,
						48
					]
				]
			},
			{
				src: "/maps/132.jpg",
				"bounds": [
					[
						-64,
						40
					],
					[
						-56,
						48
					]
				]
			},
			{
				src: "/maps/133.jpg",
				"bounds": [
					[
						-80,
						40
					],
					[
						-72,
						48
					]
				]
			},
			{
				src: "/maps/134.jpg",
				"bounds": [
					[
						-72,
						48
					],
					[
						-64,
						56
					]
				]
			},
			{
				src: "/maps/138.jpg",
				"bounds": [
					[
						-56,
						36
					],
					[
						-48,
						44
					]
				]
			},
			{
				src: "/maps/139.jpg",
				"bounds": [
					[
						-56,
						28
					],
					[
						-48,
						36
					]
				]
			},
			{
				src: "/maps/141.jpg",
				"bounds": [
					[
						-72,
						56
					],
					[
						-64,
						64
					]
				]
			},
			{
				src: "/maps/142.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			},
			{
				src: "/maps/143.jpg",
				"bounds": [
					[
						-88,
						44
					],
					[
						-80,
						52
					]
				]
			},
			{
				src: "/maps/144.jpg",
				"bounds": [
					[
						-88,
						52
					],
					[
						-80,
						60
					]
				]
			}
		]
	},
	"135": {
		"id": 135,
		"name": "Cetus' Pit",
		"tiles": [
			{
				src: "/maps/135.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"136": {
		"id": 136,
		"name": "Sobekite Eternal",
		"tiles": [
			{
				src: "/maps/136.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"137": {
		"id": 137,
		"name": "Temple of Twilight",
		"tiles": [
			{
				src: "/maps/137.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"140": {
		"id": 140,
		"name": "Halls of Ma'ati",
		"tiles": [
			{
				src: "/maps/140.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"145": {
		"id": 145,
		"name": "The Great Pyramid",
		"tiles": [
			{
				src: "/maps/145.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"146": {
		"id": 146,
		"name": "Deep Volcanus",
		"tiles": [
			{
				src: "/maps/146.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"147": {
		"id": 147,
		"name": "Aerus City",
		"tiles": [
			{
				src: "/maps/147.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"148": {
		"id": 148,
		"name": "The Frontlines",
		"tiles": [
			{
				src: "/maps/148.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"149": {
		"id": 149,
		"name": "Nyttheim",
		"tiles": [
			{
				src: "/maps/149.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"150": {
		"id": 150,
		"name": "Trollheim",
		"tiles": [
			{
				src: "/maps/150.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"151": {
		"id": 151,
		"name": "Aegir",
		"tiles": [
			{
				src: "/maps/151.jpg",
				"bounds": [
					[
						-46,
						30
					],
					[
						-38,
						38
					]
				]
			},
			{
				src: "/maps/152.jpg",
				"bounds": [
					[
						-38,
						34
					],
					[
						-30,
						42
					]
				]
			},
			{
				src: "/maps/153.jpg",
				"bounds": [
					[
						-40,
						42
					],
					[
						-32,
						50
					]
				]
			},
			{
				src: "/maps/154.jpg",
				"bounds": [
					[
						-48,
						44
					],
					[
						-40,
						52
					]
				]
			},
			{
				src: "/maps/155.jpg",
				"bounds": [
					[
						-54,
						36
					],
					[
						-46,
						44
					]
				]
			},
			{
				src: "/maps/156.jpg",
				"bounds": [
					[
						-56,
						48
					],
					[
						-48,
						56
					]
				]
			},
			{
				src: "/maps/157.jpg",
				"bounds": [
					[
						-30,
						34
					],
					[
						-22,
						42
					]
				]
			},
			{
				src: "/maps/158.jpg",
				"bounds": [
					[
						-48,
						52
					],
					[
						-40,
						60
					]
				]
			}
		]
	},
	"160": {
		"id": 160,
		"name": "Tuscaran Glacier",
		"tiles": [
			{
				src: "/maps/160.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"161": {
		"id": 161,
		"name": "Iarnvidiur's Lair",
		"tiles": [
			{
				src: "/maps/161.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"162": {
		"id": 162,
		"name": "Deadlands of Annwn",
		"tiles": [
			{
				src: "/maps/162.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"163": {
		"id": 163,
		"name": "New Frontiers",
		"tiles": [
			{
				src: "/maps/163.jpg",
				"bounds": [
					[
						-60,
						60
					],
					[
						-52,
						68
					]
				]
			},
			{
				src: "/maps/164.jpg",
				"bounds": [
					[
						-68,
						60
					],
					[
						-60,
						68
					]
				]
			},
			{
				src: "/maps/166.jpg",
				"bounds": [
					[
						-60,
						68
					],
					[
						-52,
						76
					]
				]
			},
			{
				src: "/maps/167.jpg",
				"bounds": [
					[
						-52,
						64
					],
					[
						-44,
						72
					]
				]
			},
			{
				src: "/maps/168.jpg",
				"bounds": [
					[
						-52,
						72
					],
					[
						-44,
						80
					]
				]
			},
			{
				src: "/maps/169.jpg",
				"bounds": [
					[
						-52,
						80
					],
					[
						-44,
						88
					]
				]
			},
			{
				src: "/maps/170.jpg",
				"bounds": [
					[
						-44,
						72
					],
					[
						-36,
						80
					]
				]
			},
			{
				src: "/maps/171.jpg",
				"bounds": [
					[
						-68,
						52
					],
					[
						-60,
						60
					]
				]
			},
			{
				src: "/maps/172.jpg",
				"bounds": [
					[
						-76,
						52
					],
					[
						-68,
						60
					]
				]
			},
			{
				src: "/maps/173.jpg",
				"bounds": [
					[
						-76,
						44
					],
					[
						-68,
						52
					]
				]
			},
			{
				src: "/maps/174.jpg",
				"bounds": [
					[
						-84,
						52
					],
					[
						-76,
						60
					]
				]
			},
			{
				src: "/maps/175.jpg",
				"bounds": [
					[
						-84,
						68
					],
					[
						-76,
						76
					]
				]
			},
			{
				src: "/maps/176.jpg",
				"bounds": [
					[
						-76,
						76
					],
					[
						-68,
						84
					]
				]
			},
			{
				src: "/maps/177.jpg",
				"bounds": [
					[
						-76,
						68
					],
					[
						-68,
						76
					]
				]
			},
			{
				src: "/maps/178.jpg",
				"bounds": [
					[
						-68,
						68
					],
					[
						-60,
						76
					]
				]
			}
		]
	},
	"165": {
		"id": 165,
		"name": "Cathal Valley",
		"tiles": [
			{
				src: "/maps/165.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"180": {
		"id": 180,
		"name": "Fomor City",
		"tiles": [
			{
				src: "/maps/180.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"181": {
		"id": 181,
		"name": "HyBrasil",
		"tiles": [
			{
				src: "/maps/181.jpg",
				"bounds": [
					[
						-56,
						48
					],
					[
						-48,
						56
					]
				]
			},
			{
				src: "/maps/182.jpg",
				"bounds": [
					[
						-52,
						40
					],
					[
						-44,
						48
					]
				]
			},
			{
				src: "/maps/183.jpg",
				"bounds": [
					[
						-48,
						32
					],
					[
						-40,
						40
					]
				]
			},
			{
				src: "/maps/184.jpg",
				"bounds": [
					[
						-40,
						34
					],
					[
						-32,
						42
					]
				]
			},
			{
				src: "/maps/185.jpg",
				"bounds": [
					[
						-36,
						42
					],
					[
						-28,
						50
					]
				]
			},
			{
				src: "/maps/186.jpg",
				"bounds": [
					[
						-44,
						46
					],
					[
						-36,
						54
					]
				]
			},
			{
				src: "/maps/187.jpg",
				"bounds": [
					[
						-28,
						42
					],
					[
						-20,
						50
					]
				]
			}
		]
	},
	"188": {
		"id": 188,
		"name": "Darkspire",
		"tiles": [
			{
				src: "/maps/188.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"189": {
		"id": 189,
		"name": "Glashtin Forge",
		"tiles": [
			{
				src: "/maps/189.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"190": {
		"id": 190,
		"name": "Tur Suil",
		"tiles": [
			{
				src: "/maps/190.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"191": {
		"id": 191,
		"name": "Galladoria",
		"tiles": [
			{
				src: "/maps/191.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"192": {
		"id": 192,
		"name": "Le Sanctuaire Du Haut Consule",
		"tiles": [
			{
				src: "/maps/192.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"193": {
		"id": 193,
		"name": "Le Sanctuaire Du Haut Consule",
		"tiles": [
			{
				src: "/maps/193.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"194": {
		"id": 194,
		"name": "Le Sanctuaire Du Haut Consule",
		"tiles": [
			{
				src: "/maps/194.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"195": {
		"id": 195,
		"name": "The Otherworld",
		"tiles": [
			{
				src: "/maps/195.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"196": {
		"id": 196,
		"name": "The Otherworld",
		"tiles": [
			{
				src: "/maps/196.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"197": {
		"id": 197,
		"name": "The Otherworld",
		"tiles": [
			{
				src: "/maps/197.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"198": {
		"id": 198,
		"name": "Volcanus Instance 3",
		"tiles": [
			{
				src: "/maps/198.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"199": {
		"id": 199,
		"name": "Volcanus Instance 4",
		"tiles": [
			{
				src: "/maps/199.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"200": {
		"id": 200,
		"name": "Hibernia",
		"tiles": [
			{
				src: "/maps/200.jpg",
				"bounds": [
					[
						-67,
						39
					],
					[
						-59,
						47
					]
				]
			},
			{
				src: "/maps/201.jpg",
				"bounds": [
					[
						-75,
						39
					],
					[
						-67,
						47
					]
				]
			},
			{
				src: "/maps/202.jpg",
				"bounds": [
					[
						-83,
						35
					],
					[
						-75,
						43
					]
				]
			},
			{
				src: "/maps/203.jpg",
				"bounds": [
					[
						-59,
						27
					],
					[
						-51,
						35
					]
				]
			},
			{
				src: "/maps/204.jpg",
				"bounds": [
					[
						-91,
						35
					],
					[
						-83,
						43
					]
				]
			},
			{
				src: "/maps/205.jpg",
				"bounds": [
					[
						-95,
						43
					],
					[
						-87,
						51
					]
				]
			},
			{
				src: "/maps/206.jpg",
				"bounds": [
					[
						-67,
						47
					],
					[
						-59,
						55
					]
				]
			},
			{
				src: "/maps/207.jpg",
				"bounds": [
					[
						-59,
						35
					],
					[
						-51,
						43
					]
				]
			},
			{
				src: "/maps/208.jpg",
				"bounds": [
					[
						-67,
						55
					],
					[
						-59,
						63
					]
				]
			},
			{
				src: "/maps/210.jpg",
				"bounds": [
					[
						-59,
						47
					],
					[
						-51,
						55
					]
				]
			},
			{
				src: "/maps/211.jpg",
				"bounds": [
					[
						-51,
						39
					],
					[
						-43,
						47
					]
				]
			},
			{
				src: "/maps/212.jpg",
				"bounds": [
					[
						-51,
						47
					],
					[
						-43,
						55
					]
				]
			},
			{
				src: "/maps/214.jpg",
				"bounds": [
					[
						-43,
						51
					],
					[
						-35,
						59
					]
				]
			},
			{
				src: "/maps/216.jpg",
				"bounds": [
					[
						-87,
						43
					],
					[
						-79,
						51
					]
				]
			}
		]
	},
	"201": {
		"id": 201,
		"name": "Tir na Nog",
		"tiles": [
			{
				src: "/maps/209.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"202": {
		"id": 202,
		"name": "Hibernia Housing",
		"tiles": [
			{
				src: "/maps/213.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			},
			{
				src: "/maps/215.jpg",
				"bounds": [
					[
						-72,
						56
					],
					[
						-64,
						64
					]
				]
			},
			{
				src: "/maps/217.jpg",
				"bounds": [
					[
						-80,
						64
					],
					[
						-72,
						72
					]
				]
			},
			{
				src: "/maps/218.jpg",
				"bounds": [
					[
						-72,
						72
					],
					[
						-64,
						80
					]
				]
			},
			{
				src: "/maps/219.jpg",
				"bounds": [
					[
						-80,
						56
					],
					[
						-72,
						64
					]
				]
			},
			{
				src: "/maps/225.jpg",
				"bounds": [
					[
						-80,
						72
					],
					[
						-72,
						80
					]
				]
			},
			{
				src: "/maps/272.jpg",
				"bounds": [
					[
						-88,
						64
					],
					[
						-80,
						72
					]
				]
			},
			{
				src: "/maps/273.jpg",
				"bounds": [
					[
						-88,
						56
					],
					[
						-80,
						64
					]
				]
			},
			{
				src: "/maps/274.jpg",
				"bounds": [
					[
						-88,
						72
					],
					[
						-80,
						80
					]
				]
			}
		]
	},
	"220": {
		"id": 220,
		"name": "Coruscating Mine",
		"tiles": [
			{
				src: "/maps/220.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"221": {
		"id": 221,
		"name": "Muire Tomb",
		"tiles": [
			{
				src: "/maps/221.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"222": {
		"id": 222,
		"name": "Spraggon Den",
		"tiles": [
			{
				src: "/maps/222.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"223": {
		"id": 223,
		"name": "Koalinth Tribal Caverns",
		"tiles": [
			{
				src: "/maps/223.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"224": {
		"id": 224,
		"name": "Treibh Caillte",
		"tiles": [
			{
				src: "/maps/224.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"226": {
		"id": 226,
		"name": "Abandoned Mines",
		"tiles": [
			{
				src: "/maps/226.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"227": {
		"id": 227,
		"name": "Abandoned Mines",
		"tiles": [
			{
				src: "/maps/227.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"228": {
		"id": 228,
		"name": "Abandoned Mines",
		"tiles": [
			{
				src: "/maps/228.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"229": {
		"id": 229,
		"name": "Burial Grounds",
		"tiles": [
			{
				src: "/maps/229.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"231": {
		"id": 231,
		"name": "Art Test Zone",
		"tiles": [
			{
				src: "/maps/231.jpg",
				"bounds": [
					[
						-88,
						80
					],
					[
						-80,
						88
					]
				]
			}
		]
	},
	"232": {
		"id": 232,
		"name": "- Art Test Dungeon",
		"tiles": [
			{
				src: "/maps/232.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"233": {
		"id": 233,
		"name": "Summoner's Hall",
		"tiles": [
			{
				src: "/maps/233.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"234": {
		"id": 234,
		"name": "The Proving Grounds",
		"tiles": [
			{
				src: "/maps/234.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"235": {
		"id": 235,
		"name": "The Lion's Den",
		"tiles": [
			{
				src: "/maps/235.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"236": {
		"id": 236,
		"name": "The Hills of Claret",
		"tiles": [
			{
				src: "/maps/236.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"237": {
		"id": 237,
		"name": "Killaloe",
		"tiles": [
			{
				src: "/maps/237.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"238": {
		"id": 238,
		"name": "Thidranki",
		"tiles": [
			{
				src: "/maps/238.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"239": {
		"id": 239,
		"name": "Braemar",
		"tiles": [
			{
				src: "/maps/239.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"240": {
		"id": 240,
		"name": "Wilton",
		"tiles": [
			{
				src: "/maps/240.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"241": {
		"id": 241,
		"name": "Molvik",
		"tiles": [
			{
				src: "/maps/241.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			}
		]
	},
	"242": {
		"id": 242,
		"name": "Leirvik",
		"tiles": [
			{
				src: "/maps/242.jpg",
				"bounds": [
					[
						-72,
						64
					],
					[
						-64,
						72
					]
				]
			},
			{
				src: "/maps/254.jpg",
				"bounds": [
					[
						-40,
						32
					],
					[
						-32,
						40
					]
				]
			}
		]
	},
	"243": {
		"id": 243,
		"name": "Kobold Undercity",
		"tiles": [
			{
				src: "/maps/243.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"244": {
		"id": 244,
		"name": "Passage of Conflict",
		"tiles": [
			{
				src: "/maps/244.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"245": {
		"id": 245,
		"name": "Labyrinth",
		"tiles": [
			{
				src: "/maps/245.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"249": {
		"id": 249,
		"name": "Darkness Falls",
		"tiles": [
			{
				src: "/maps/249.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"256": {
		"id": 256,
		"name": "Forgotten Mines",
		"tiles": [
			{
				src: "/maps/256.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"257": {
		"id": 257,
		"name": "Forgotten Mines",
		"tiles": [
			{
				src: "/maps/257.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"258": {
		"id": 258,
		"name": "Forgotten Mines",
		"tiles": [
			{
				src: "/maps/258.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"278": {
		"id": 278,
		"name": "Damp Cavern",
		"tiles": [
			{
				src: "/maps/278.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"279": {
		"id": 279,
		"name": "Damp Cavern",
		"tiles": [
			{
				src: "/maps/279.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"280": {
		"id": 280,
		"name": "Damp Cavern",
		"tiles": [
			{
				src: "/maps/280.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"281": {
		"id": 281,
		"name": "Forgotten Sepulchre",
		"tiles": [
			{
				src: "/maps/281.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"282": {
		"id": 282,
		"name": "Forgotten Sepulchre",
		"tiles": [
			{
				src: "/maps/282.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"283": {
		"id": 283,
		"name": "Forgotten Sepulchre",
		"tiles": [
			{
				src: "/maps/283.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"284": {
		"id": 284,
		"name": "The Concealed Guardhouse",
		"tiles": [
			{
				src: "/maps/284.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"285": {
		"id": 285,
		"name": "The Concealed Guardhouse",
		"tiles": [
			{
				src: "/maps/285.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"286": {
		"id": 286,
		"name": "The Concealed Guardhouse",
		"tiles": [
			{
				src: "/maps/286.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"287": {
		"id": 287,
		"name": "The Gossamer Grotto",
		"tiles": [
			{
				src: "/maps/287.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"288": {
		"id": 288,
		"name": "The Gossamer Grotto",
		"tiles": [
			{
				src: "/maps/288.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"289": {
		"id": 289,
		"name": "The Gossamer Grotto",
		"tiles": [
			{
				src: "/maps/289.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"290": {
		"id": 290,
		"name": "Underground Tunnel",
		"tiles": [
			{
				src: "/maps/290.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"291": {
		"id": 291,
		"name": "Underground Tunnel",
		"tiles": [
			{
				src: "/maps/291.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"292": {
		"id": 292,
		"name": "Underground Tunnel",
		"tiles": [
			{
				src: "/maps/292.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"293": {
		"id": 293,
		"name": "Burial Tomb",
		"tiles": [
			{
				src: "/maps/293.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"294": {
		"id": 294,
		"name": "Burial Tomb",
		"tiles": [
			{
				src: "/maps/294.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"295": {
		"id": 295,
		"name": "Burial Tomb",
		"tiles": [
			{
				src: "/maps/295.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"296": {
		"id": 296,
		"name": "Desecrated Grounds",
		"tiles": [
			{
				src: "/maps/296.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"297": {
		"id": 297,
		"name": "Desecrated Grounds",
		"tiles": [
			{
				src: "/maps/297.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"298": {
		"id": 298,
		"name": "Desecrated Grounds",
		"tiles": [
			{
				src: "/maps/298.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"300": {
		"id": 300,
		"name": "Damp Cavern",
		"tiles": [
			{
				src: "/maps/300.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"301": {
		"id": 301,
		"name": "Damp Cavern",
		"tiles": [
			{
				src: "/maps/301.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"302": {
		"id": 302,
		"name": "Damp Cavern",
		"tiles": [
			{
				src: "/maps/302.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"303": {
		"id": 303,
		"name": "Damp Cavern",
		"tiles": [
			{
				src: "/maps/303.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"304": {
		"id": 304,
		"name": "Damp Cavern",
		"tiles": [
			{
				src: "/maps/304.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"305": {
		"id": 305,
		"name": "Forgotten Sepulchre",
		"tiles": [
			{
				src: "/maps/305.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"306": {
		"id": 306,
		"name": "Forgotten Sepulchre",
		"tiles": [
			{
				src: "/maps/306.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"307": {
		"id": 307,
		"name": "Forgotten Sepulchre",
		"tiles": [
			{
				src: "/maps/307.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"308": {
		"id": 308,
		"name": "Forgotten Sepulchre",
		"tiles": [
			{
				src: "/maps/308.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"309": {
		"id": 309,
		"name": "Forgotten Sepulchre",
		"tiles": [
			{
				src: "/maps/309.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"310": {
		"id": 310,
		"name": "The Concealed Guardhouse",
		"tiles": [
			{
				src: "/maps/310.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"311": {
		"id": 311,
		"name": "The Concealed Guardhouse",
		"tiles": [
			{
				src: "/maps/311.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"312": {
		"id": 312,
		"name": "The Concealed Guardhouse",
		"tiles": [
			{
				src: "/maps/312.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"313": {
		"id": 313,
		"name": "The Concealed Guardhouse",
		"tiles": [
			{
				src: "/maps/313.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"314": {
		"id": 314,
		"name": "The Concealed Guardhouse",
		"tiles": [
			{
				src: "/maps/314.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"315": {
		"id": 315,
		"name": "The Gossamer Grotto",
		"tiles": [
			{
				src: "/maps/315.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"316": {
		"id": 316,
		"name": "The Gossamer Grotto",
		"tiles": [
			{
				src: "/maps/316.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"317": {
		"id": 317,
		"name": "The Gossamer Grotto",
		"tiles": [
			{
				src: "/maps/317.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"318": {
		"id": 318,
		"name": "The Gossamer Grotto",
		"tiles": [
			{
				src: "/maps/318.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"319": {
		"id": 319,
		"name": "The Gossamer Grotto",
		"tiles": [
			{
				src: "/maps/319.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"320": {
		"id": 320,
		"name": "Underground Tunnel",
		"tiles": [
			{
				src: "/maps/320.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"321": {
		"id": 321,
		"name": "Underground Tunnel",
		"tiles": [
			{
				src: "/maps/321.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"322": {
		"id": 322,
		"name": "Underground Tunnel",
		"tiles": [
			{
				src: "/maps/322.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"323": {
		"id": 323,
		"name": "Underground Tunnel",
		"tiles": [
			{
				src: "/maps/323.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"324": {
		"id": 324,
		"name": "Underground Tunnel",
		"tiles": [
			{
				src: "/maps/324.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"325": {
		"id": 325,
		"name": "The Forgotten Tunnels",
		"tiles": [
			{
				src: "/maps/325.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"326": {
		"id": 326,
		"name": "The Hidden Lair",
		"tiles": [
			{
				src: "/maps/326.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"327": {
		"id": 327,
		"name": "Caverns of Madness",
		"tiles": [
			{
				src: "/maps/327.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"328": {
		"id": 328,
		"name": "The Hidden Lair",
		"tiles": [
			{
				src: "/maps/328.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"329": {
		"id": 329,
		"name": "Jarlsberg's Hideout",
		"tiles": [
			{
				src: "/maps/329.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"330": {
		"id": 330,
		"name": "The Foothills of Albion",
		"tiles": [
			{
				src: "/maps/330.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"331": {
		"id": 331,
		"name": "Burial AW4",
		"tiles": [
			{
				src: "/maps/331.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"332": {
		"id": 332,
		"name": "Rebel Half Orc Lair",
		"tiles": [
			{
				src: "/maps/332.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"333": {
		"id": 333,
		"name": "The Haunted Halls",
		"tiles": [
			{
				src: "/maps/333.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"334": {
		"id": 334,
		"name": "The Foothills of Midgard",
		"tiles": [
			{
				src: "/maps/334.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"335": {
		"id": 335,
		"name": "Doiri Ban",
		"tiles": [
			{
				src: "/maps/335.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"336": {
		"id": 336,
		"name": "Demonic Prison",
		"tiles": [
			{
				src: "/maps/336.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"337": {
		"id": 337,
		"name": "Demonic Prison",
		"tiles": [
			{
				src: "/maps/337.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"338": {
		"id": 338,
		"name": "Demonic Prison",
		"tiles": [
			{
				src: "/maps/338.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"339": {
		"id": 339,
		"name": "Brimstone Caverns",
		"tiles": [
			{
				src: "/maps/339.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"340": {
		"id": 340,
		"name": "Halls of Helgardh",
		"tiles": [
			{
				src: "/maps/340.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"341": {
		"id": 341,
		"name": "Cave of Cruachan",
		"tiles": [
			{
				src: "/maps/341.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"342": {
		"id": 342,
		"name": "Mid Launch 2",
		"tiles": [
			{
				src: "/maps/342.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"343": {
		"id": 343,
		"name": "Alb Launch 2",
		"tiles": [
			{
				src: "/maps/343.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"344": {
		"id": 344,
		"name": "Hib Launch 2",
		"tiles": [
			{
				src: "/maps/344.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"345": {
		"id": 345,
		"name": "Tomte Prison",
		"tiles": [
			{
				src: "/maps/345.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"346": {
		"id": 346,
		"name": "Nisse's Retreat",
		"tiles": [
			{
				src: "/maps/346.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"347": {
		"id": 347,
		"name": "Lair of the Demon Lord",
		"tiles": [
			{
				src: "/maps/347.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"348": {
		"id": 348,
		"name": "The Baron's Gaol",
		"tiles": [
			{
				src: "/maps/348.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"349": {
		"id": 349,
		"name": "Lios's Eternal Rest",
		"tiles": [
			{
				src: "/maps/349.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"350": {
		"id": 350,
		"name": "Liche's Unrest",
		"tiles": [
			{
				src: "/maps/350.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"351": {
		"id": 351,
		"name": "Nephraal's Gaol",
		"tiles": [
			{
				src: "/maps/351.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"352": {
		"id": 352,
		"name": "Morfesa's Gaol",
		"tiles": [
			{
				src: "/maps/352.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"353": {
		"id": 353,
		"name": "Den of Bones",
		"tiles": [
			{
				src: "/maps/353.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"354": {
		"id": 354,
		"name": "The Lost Burrow",
		"tiles": [
			{
				src: "/maps/354.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"355": {
		"id": 355,
		"name": "Tethra's Stronghold",
		"tiles": [
			{
				src: "/maps/355.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"356": {
		"id": 356,
		"name": "Barrow of Restless Dead",
		"tiles": [
			{
				src: "/maps/356.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"357": {
		"id": 357,
		"name": "The Cursed Lair",
		"tiles": [
			{
				src: "/maps/357.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"358": {
		"id": 358,
		"name": "The Burrow",
		"tiles": [
			{
				src: "/maps/358.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"359": {
		"id": 359,
		"name": "Red Dagger Hideout",
		"tiles": [
			{
				src: "/maps/359.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"360": {
		"id": 360,
		"name": "King Eirik's Throne Room",
		"tiles": [
			{
				src: "/maps/360.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"361": {
		"id": 361,
		"name": "Arachnid's Labyrinth",
		"tiles": [
			{
				src: "/maps/361.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"362": {
		"id": 362,
		"name": "The Master's Lair",
		"tiles": [
			{
				src: "/maps/362.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"363": {
		"id": 363,
		"name": "Anataeus' Sanctuary",
		"tiles": [
			{
				src: "/maps/363.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"364": {
		"id": 364,
		"name": "Keeper Iraeda's Sanctuary",
		"tiles": [
			{
				src: "/maps/364.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"365": {
		"id": 365,
		"name": "Bandit Lair",
		"tiles": [
			{
				src: "/maps/365.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"366": {
		"id": 366,
		"name": "Gnoll Lair",
		"tiles": [
			{
				src: "/maps/366.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"367": {
		"id": 367,
		"name": "Vandr's Bane",
		"tiles": [
			{
				src: "/maps/367.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"368": {
		"id": 368,
		"name": "Past and Present",
		"tiles": [
			{
				src: "/maps/368.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"369": {
		"id": 369,
		"name": "Half-Orc Camp",
		"tiles": [
			{
				src: "/maps/369.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"370": {
		"id": 370,
		"name": "Brutal Realization",
		"tiles": [
			{
				src: "/maps/370.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"371": {
		"id": 371,
		"name": "History Repeats Itself",
		"tiles": [
			{
				src: "/maps/371.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"372": {
		"id": 372,
		"name": "Hounds of Arawn",
		"tiles": [
			{
				src: "/maps/372.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"373": {
		"id": 373,
		"name": "Passage of Echoes",
		"tiles": [
			{
				src: "/maps/373.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"374": {
		"id": 374,
		"name": "The Unrestful Tomb",
		"tiles": [
			{
				src: "/maps/374.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"375": {
		"id": 375,
		"name": "The Lost Passages",
		"tiles": [
			{
				src: "/maps/375.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"376": {
		"id": 376,
		"name": "Goblin's Cookery",
		"tiles": [
			{
				src: "/maps/376.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"377": {
		"id": 377,
		"name": "The Beastmaster's Den",
		"tiles": [
			{
				src: "/maps/377.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"378": {
		"id": 378,
		"name": "Keeper Garran's Sanctuary",
		"tiles": [
			{
				src: "/maps/378.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"379": {
		"id": 379,
		"name": "The Funerary Hall",
		"tiles": [
			{
				src: "/maps/379.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"380": {
		"id": 380,
		"name": "Lair of Doom",
		"tiles": [
			{
				src: "/maps/380.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"381": {
		"id": 381,
		"name": "The Arena",
		"tiles": [
			{
				src: "/maps/381.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"382": {
		"id": 382,
		"name": "The Funerary Hall",
		"tiles": [
			{
				src: "/maps/382.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"383": {
		"id": 383,
		"name": "The Funerary Hall",
		"tiles": [
			{
				src: "/maps/383.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"384": {
		"id": 384,
		"name": "The Ritual Hall",
		"tiles": [
			{
				src: "/maps/384.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"385": {
		"id": 385,
		"name": "The Betrayer's Den",
		"tiles": [
			{
				src: "/maps/385.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"386": {
		"id": 386,
		"name": "The Sundered Tombs",
		"tiles": [
			{
				src: "/maps/386.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"387": {
		"id": 387,
		"name": "The Sundered Tombs",
		"tiles": [
			{
				src: "/maps/387.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"388": {
		"id": 388,
		"name": "The Sundered Tombs",
		"tiles": [
			{
				src: "/maps/388.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"389": {
		"id": 389,
		"name": "Shafts of the Tenebrae",
		"tiles": [
			{
				src: "/maps/389.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"390": {
		"id": 390,
		"name": "Lair of the Exiled",
		"tiles": [
			{
				src: "/maps/390.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"391": {
		"id": 391,
		"name": "La Tour Des Arcanes ALB",
		"tiles": [
			{
				src: "/maps/391.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"392": {
		"id": 392,
		"name": "The Hall of Reawakening",
		"tiles": [
			{
				src: "/maps/392.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"393": {
		"id": 393,
		"name": "The Hidden Crypt",
		"tiles": [
			{
				src: "/maps/393.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"394": {
		"id": 394,
		"name": "King Constantine's Throne Room",
		"tiles": [
			{
				src: "/maps/394.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"395": {
		"id": 395,
		"name": "King Lamfhotas' Throne Room",
		"tiles": [
			{
				src: "/maps/395.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"396": {
		"id": 396,
		"name": "The Depths of Despair",
		"tiles": [
			{
				src: "/maps/396.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"397": {
		"id": 397,
		"name": "Realm of the Damned",
		"tiles": [
			{
				src: "/maps/397.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"398": {
		"id": 398,
		"name": "La Tour des Arcanes MID",
		"tiles": [
			{
				src: "/maps/398.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"399": {
		"id": 399,
		"name": "La Tour des Arcanes HIB",
		"tiles": [
			{
				src: "/maps/399.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"400": {
		"id": 400,
		"name": "Burial Tomb",
		"tiles": [
			{
				src: "/maps/400.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"401": {
		"id": 401,
		"name": "Burial Tomb",
		"tiles": [
			{
				src: "/maps/401.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"402": {
		"id": 402,
		"name": "Burial Tomb",
		"tiles": [
			{
				src: "/maps/402.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"403": {
		"id": 403,
		"name": "Burial Tomb",
		"tiles": [
			{
				src: "/maps/403.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"404": {
		"id": 404,
		"name": "Burial Tomb",
		"tiles": [
			{
				src: "/maps/404.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"405": {
		"id": 405,
		"name": "Desecrated Grounds",
		"tiles": [
			{
				src: "/maps/405.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"406": {
		"id": 406,
		"name": "Desecrated Grounds",
		"tiles": [
			{
				src: "/maps/406.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"407": {
		"id": 407,
		"name": "Desecrated Grounds",
		"tiles": [
			{
				src: "/maps/407.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"408": {
		"id": 408,
		"name": "Desecrated Grounds",
		"tiles": [
			{
				src: "/maps/408.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"409": {
		"id": 409,
		"name": "Desecrated Grounds",
		"tiles": [
			{
				src: "/maps/409.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"410": {
		"id": 410,
		"name": "Forgotten Mines",
		"tiles": [
			{
				src: "/maps/410.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"411": {
		"id": 411,
		"name": "Forgotten Mines",
		"tiles": [
			{
				src: "/maps/411.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"412": {
		"id": 412,
		"name": "Forgotten Mines",
		"tiles": [
			{
				src: "/maps/412.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"413": {
		"id": 413,
		"name": "Forgotten Mines",
		"tiles": [
			{
				src: "/maps/413.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"414": {
		"id": 414,
		"name": "Forgotten Mines",
		"tiles": [
			{
				src: "/maps/414.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"415": {
		"id": 415,
		"name": "The Funerary Hall",
		"tiles": [
			{
				src: "/maps/415.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"416": {
		"id": 416,
		"name": "The Funerary Hall",
		"tiles": [
			{
				src: "/maps/416.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"417": {
		"id": 417,
		"name": "The Funerary Hall",
		"tiles": [
			{
				src: "/maps/417.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"418": {
		"id": 418,
		"name": "The Funerary Hall",
		"tiles": [
			{
				src: "/maps/418.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"419": {
		"id": 419,
		"name": "The Funerary Hall",
		"tiles": [
			{
				src: "/maps/419.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"420": {
		"id": 420,
		"name": "The Sundered Tombs",
		"tiles": [
			{
				src: "/maps/420.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"421": {
		"id": 421,
		"name": "The Sundered Tombs",
		"tiles": [
			{
				src: "/maps/421.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"422": {
		"id": 422,
		"name": "The Sundered Tombs",
		"tiles": [
			{
				src: "/maps/422.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"423": {
		"id": 423,
		"name": "The Sundered Tombs",
		"tiles": [
			{
				src: "/maps/423.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"424": {
		"id": 424,
		"name": "The Sundered Tombs",
		"tiles": [
			{
				src: "/maps/424.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"425": {
		"id": 425,
		"name": "The Lost Wing",
		"tiles": [
			{
				src: "/maps/425.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"426": {
		"id": 426,
		"name": "Deliah's Sanctuary",
		"tiles": [
			{
				src: "/maps/426.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"427": {
		"id": 427,
		"name": "The Cursed Barrow",
		"tiles": [
			{
				src: "/maps/427.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"428": {
		"id": 428,
		"name": "The Cursed Barrow",
		"tiles": [
			{
				src: "/maps/428.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"429": {
		"id": 429,
		"name": "Snyblem's Lair",
		"tiles": [
			{
				src: "/maps/429.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"430": {
		"id": 430,
		"name": "The Plutonian Shore",
		"tiles": [
			{
				src: "/maps/430.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"431": {
		"id": 431,
		"name": "The Cursed Barrow",
		"tiles": [
			{
				src: "/maps/431.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"432": {
		"id": 432,
		"name": "Dismal Grotto",
		"tiles": [
			{
				src: "/maps/432.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"433": {
		"id": 433,
		"name": "Snarg's Grotto",
		"tiles": [
			{
				src: "/maps/433.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"434": {
		"id": 434,
		"name": "The Maze of Tribulation",
		"tiles": [
			{
				src: "/maps/434.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"435": {
		"id": 435,
		"name": "The Smelting Pot",
		"tiles": [
			{
				src: "/maps/435.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"436": {
		"id": 436,
		"name": "Forges of Flame",
		"tiles": [
			{
				src: "/maps/436.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"437": {
		"id": 437,
		"name": "Hugak's Smithy",
		"tiles": [
			{
				src: "/maps/437.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"438": {
		"id": 438,
		"name": "The Goblin Workshop",
		"tiles": [
			{
				src: "/maps/438.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"439": {
		"id": 439,
		"name": "Wolak's Crucible",
		"tiles": [
			{
				src: "/maps/439.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"440": {
		"id": 440,
		"name": "Marik's Workroom",
		"tiles": [
			{
				src: "/maps/440.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"441": {
		"id": 441,
		"name": "Dismal Grotto",
		"tiles": [
			{
				src: "/maps/441.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"442": {
		"id": 442,
		"name": "The Steward's Crypt",
		"tiles": [
			{
				src: "/maps/442.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"443": {
		"id": 443,
		"name": "Serf's Folly",
		"tiles": [
			{
				src: "/maps/443.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"444": {
		"id": 444,
		"name": "Dismal Grotto",
		"tiles": [
			{
				src: "/maps/444.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"445": {
		"id": 445,
		"name": "The Dark Caverns",
		"tiles": [
			{
				src: "/maps/445.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"446": {
		"id": 446,
		"name": "Blathnait's Refuge",
		"tiles": [
			{
				src: "/maps/446.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"447": {
		"id": 447,
		"name": "Broken Mirrors",
		"tiles": [
			{
				src: "/maps/447.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"448": {
		"id": 448,
		"name": "The Dark Caverns",
		"tiles": [
			{
				src: "/maps/448.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"449": {
		"id": 449,
		"name": "The Dark Caverns",
		"tiles": [
			{
				src: "/maps/449.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"450": {
		"id": 450,
		"name": "The Cursed Barrow",
		"tiles": [
			{
				src: "/maps/450.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"451": {
		"id": 451,
		"name": "The Cursed Barrow",
		"tiles": [
			{
				src: "/maps/451.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"452": {
		"id": 452,
		"name": "The Cursed Barrow",
		"tiles": [
			{
				src: "/maps/452.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"453": {
		"id": 453,
		"name": "The Cursed Barrow",
		"tiles": [
			{
				src: "/maps/453.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"454": {
		"id": 454,
		"name": "The Cursed Barrow",
		"tiles": [
			{
				src: "/maps/454.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"455": {
		"id": 455,
		"name": "Dismal Grotto",
		"tiles": [
			{
				src: "/maps/455.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"456": {
		"id": 456,
		"name": "Dismal Grotto",
		"tiles": [
			{
				src: "/maps/456.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"457": {
		"id": 457,
		"name": "Dismal Grotto",
		"tiles": [
			{
				src: "/maps/457.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"458": {
		"id": 458,
		"name": "Dismal Grotto",
		"tiles": [
			{
				src: "/maps/458.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"459": {
		"id": 459,
		"name": "Dismal Grotto",
		"tiles": [
			{
				src: "/maps/459.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"460": {
		"id": 460,
		"name": "The Accursed Caves",
		"tiles": [
			{
				src: "/maps/460.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"461": {
		"id": 461,
		"name": "The Accursed Caves",
		"tiles": [
			{
				src: "/maps/461.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"462": {
		"id": 462,
		"name": "The Accursed Caves",
		"tiles": [
			{
				src: "/maps/462.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"463": {
		"id": 463,
		"name": "The Accursed Caves",
		"tiles": [
			{
				src: "/maps/463.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"464": {
		"id": 464,
		"name": "The Accursed Caves",
		"tiles": [
			{
				src: "/maps/464.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"465": {
		"id": 465,
		"name": "The Dark Caverns",
		"tiles": [
			{
				src: "/maps/465.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"466": {
		"id": 466,
		"name": "The Dark Caverns",
		"tiles": [
			{
				src: "/maps/466.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"467": {
		"id": 467,
		"name": "The Dark Caverns",
		"tiles": [
			{
				src: "/maps/467.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"468": {
		"id": 468,
		"name": "The Dark Caverns",
		"tiles": [
			{
				src: "/maps/468.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"469": {
		"id": 469,
		"name": "The Dark Caverns",
		"tiles": [
			{
				src: "/maps/469.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"470": {
		"id": 470,
		"name": "Half Orc Command Post",
		"tiles": [
			{
				src: "/maps/470.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"471": {
		"id": 471,
		"name": "The Unused Mine",
		"tiles": [
			{
				src: "/maps/471.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"472": {
		"id": 472,
		"name": "The Unused Mine",
		"tiles": [
			{
				src: "/maps/472.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"473": {
		"id": 473,
		"name": "The Unused Mine",
		"tiles": [
			{
				src: "/maps/473.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"474": {
		"id": 474,
		"name": "The Unused Mine",
		"tiles": [
			{
				src: "/maps/474.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"475": {
		"id": 475,
		"name": "Rise of the Spraggons",
		"tiles": [
			{
				src: "/maps/475.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"476": {
		"id": 476,
		"name": "The Warrens",
		"tiles": [
			{
				src: "/maps/476.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"477": {
		"id": 477,
		"name": "The Accursed Caves",
		"tiles": [
			{
				src: "/maps/477.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"478": {
		"id": 478,
		"name": "The Accursed Caves",
		"tiles": [
			{
				src: "/maps/478.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"479": {
		"id": 479,
		"name": "The Ancient's Retreat",
		"tiles": [
			{
				src: "/maps/479.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"480": {
		"id": 480,
		"name": "The Shaman's Inner Sanctum",
		"tiles": [
			{
				src: "/maps/480.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"481": {
		"id": 481,
		"name": "The Accursed Caves",
		"tiles": [
			{
				src: "/maps/481.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"482": {
		"id": 482,
		"name": "The Unused Mine",
		"tiles": [
			{
				src: "/maps/482.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"483": {
		"id": 483,
		"name": "The Brawler's Den",
		"tiles": [
			{
				src: "/maps/483.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"484": {
		"id": 484,
		"name": "Felena's Sorrow",
		"tiles": [
			{
				src: "/maps/484.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"485": {
		"id": 485,
		"name": "The Unused Mine",
		"tiles": [
			{
				src: "/maps/485.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"486": {
		"id": 486,
		"name": "The Unused Mine",
		"tiles": [
			{
				src: "/maps/486.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"487": {
		"id": 487,
		"name": "The Pit of Despair",
		"tiles": [
			{
				src: "/maps/487.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"488": {
		"id": 488,
		"name": "The Forgotten Vein",
		"tiles": [
			{
				src: "/maps/488.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"489": {
		"id": 489,
		"name": "Demon's Breach",
		"tiles": [
			{
				src: "/maps/489.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"491": {
		"id": 491,
		"name": "Maze of Madness",
		"tiles": [
			{
				src: "/maps/491.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"492": {
		"id": 492,
		"name": "Shattered Lands",
		"tiles": [
			{
				src: "/maps/492.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"494": {
		"id": 494,
		"name": "The Gnoll's Den",
		"tiles": [
			{
				src: "/maps/494.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"495": {
		"id": 495,
		"name": "The Inner Sanctum",
		"tiles": [
			{
				src: "/maps/495.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"496": {
		"id": 496,
		"name": "The Deep",
		"tiles": [
			{
				src: "/maps/496.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"497": {
		"id": 497,
		"name": "Mid Launch",
		"tiles": [
			{
				src: "/maps/497.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"498": {
		"id": 498,
		"name": "Alb Launch",
		"tiles": [
			{
				src: "/maps/498.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	},
	"499": {
		"id": 499,
		"name": "Hib Launch",
		"tiles": [
			{
				src: "/maps/499.jpg",
				"bounds": [
					[
						-9,
						1
					],
					[
						-1,
						9
					]
				]
			}
		]
	}
};

export const DaocMiniMaps: DaocMiniMapInfo[] = [
	{
		id: 1,
		width: 38,
		height: 38,
		zones: [
			{
				src: "/maps/0.jpg",
				left: 176,
				top: 84,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Nestled by the majestic City of Camelot, the Village of Cotswold offers adventurers between levels 10 and 14 both training and leveling opportunities. Those of 15th to 19th seasons would find Prydwen Keep to the south more suited to their abilities. The dungeons of Darkness Falls, an RvR dungeon, and Mithra's Tomb, a low-level dungeon, can both be found in Camelot Hills as well. Far to the north, Castle Sauvage guards the gateway into Forest Sauvage and the Albion Frontier."
			},
			{
				src: "/maps/1.jpg",
				left: 176,
				top: 122,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The wide expanse of Salisbury Plains is home to the legendary Stonehenge. Rolling hills spread over the plains where different creatures dwell. Adventurers' level 12 through 25 will find excellent hunting here. Within the circles of Stonehenge lies the entrance to the Stonehenge Barrows, a tomb haunted by the undead that only the most skilled warriors should dare to enter."
			},
			{
				src: "/maps/2.jpg",
				left: 138,
				top: 56,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Nestled in the Black South Mountains are the two small villages Ludlow and Humberton.  Young players will find great hunting in the hills surrounding the villages.  To the south lies the glorious city of Camelot."
			},
			{
				src: "/maps/3.jpg",
				left: 138,
				top: 18,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Black Mountains North is home to Snowdownia Station, a small haven of rest in an area surrounded by towering mountains.  Young adventurers can find much to learn here. The road from the station leads to the northern reaches of the frontier and Snowdonia Fortress."
			},
			{
				src: "/maps/4.jpg",
				left: 62,
				top: 206,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Dartmoor,the very name strikes fear into the heart of young and old alike, for in this valley lies the home of Golestandt the Dragon. The untamed Dartmoor ponies and the giants walk this land freely. Only the most skilled warriors have dared to venture here."
			},
			{
				src: "/maps/6.jpg",
				left: 62,
				top: 168,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Cornwall is a region haunted by the warriors of the past.  From the Ghostly Church to the ruins of the Roman Fort, the area is one of the memories echoing another time.  Heroes around level 30 can seek adventure and riches around and inside the Catacombs of Cardova, while higher level heroes may find challenges further to the west."
			},
			{
				src: "/maps/7.jpg",
				left: 100,
				top: 18,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Legends surround this mysterious lake. The shores are populated with powerful creatures ranging from level 25 through 50 and beyond.  Some monsters have even gained epic status for the very valor it takes to face them.  Groups of the most skilled warriors should be wary near these shores."
			},
			{
				src: "/maps/8.jpg",
				left: 138,
				top: 141,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "This dense and sprawling forest lying south of Salisbury Plains holds many secrets. Hidden deep within the forest is the outpost of Caer Ulfwych where adventurers of 20th to 24th seasons can seek challenges appropriate to their experience. Campacorentin Station and the legendary Lethantis Association offer adventurers between the levels of 25 and 29 additional opportunities in the northwest of the forest. The dungeon of Keltoi Fogou lies to the southeast for those between levels 15 and 20 to explore."
			},
			{
				src: "/maps/9.jpg",
				left: 100,
				top: 159,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Located in the southern region of Albion, the festering marsh is infested with vile creatures which lurk in the shadows. It is also home to Adribard's Retreat, appropriate for adventurers between their 30th and 35th seasons to learn, train, and adventure."
			},
			{
				src: "/maps/10.jpg",
				left: 24,
				top: 168,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The southernmost region of Albion is Lyonesse. Once a thriving settlement, the ocean reclaimed the land, and the flood waters still linger. The land is covered in mist, and powerful creatures from both land and sea have found a home within the ruins of the partially submerged dwellings of yesteryear.  Only the most Skilled adventurers may travel here and live to tell of it."
			}
		]
	},
	{
		id: 2,
		width: 85,
		height: 85,
		zones: [
			{
				src: "/maps/13.jpg",
				left: 171,
				top: 85,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/16.jpg",
				left: 171,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/17.jpg",
				left: 171,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/18.jpg",
				left: 86,
				top: 85,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/20.jpg",
				left: 86,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/64.jpg",
				left: 86,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/260.jpg",
				left: 0,
				top: 85,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/261.jpg",
				left: 0,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/262.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			}
		]
	},
	{
		id: 20,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/19.jpg",
				left: 0,
				top: 0,
				offsetX: 16622,
				offsetY: 13583,
				width: 12694,
				height: 12694,
				desc: "Located beneath the sparse soils of Salisbury plains, the Stonehenge Barrows are the great tombs of lost kings and princes. At the heart of this vast complex of meandering tunnels and barrows is the majestic Barrow of Merlin.  Only the very strongest and bravest adventurers plunder its depths and return to see the light of day."
			}
		]
	},
	{
		id: 21,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/21.jpg",
				left: 0,
				top: 0,
				offsetX: 12412,
				offsetY: 17710,
				width: 13766,
				height: 13766,
				desc: "Mithraism is one of the many cults that the Romans introduced from the east.  Its emphasis on truth, honor, courage, and discipline soon led to Mithra becoming a god of soldiers and traders.  No one knows the truth of his birth, his life, or his death, but it is known that his Tomb is home to a number of horrors and visitors should exercise the utmost of caution."
			}
		]
	},
	{
		id: 22,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/22.jpg",
				left: 0,
				top: 0,
				offsetX: 21729,
				offsetY: 19734,
				width: 7808,
				height: 7808,
				desc: "The druidic sect of the Keltoi live in underground caverns called fogous that are used as their spiritual centers for ceremony, initiation and teaching.  Birth and death rituals are conducted here because the fogous are seen as a transitional zone between this world and the next.  The whole site is considered a sacred space and its design is not so much to keep invaders out as to keep certain forces in."
			}
		]
	},
	{
		id: 23,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/23.jpg",
				left: 0,
				top: 0,
				offsetX: 15007,
				offsetY: 20143,
				width: 17233,
				height: 17233,
				desc: "A dank dangerous crypt of clearly Roman design.  Although there is no record of an emperor dying or being buried in Cornwall, the few expeditions that have returned indicate that the roman legion laid an emperor to rest there.  Locals refuse to return to the area, claiming it to be haunted by ancient ghosts.  Adventurers should be wary as the past often doesn't stay buried for long."
			}
		]
	},
	{
		id: 24,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/24.jpg",
				left: 0,
				top: 0,
				offsetX: 20390,
				offsetY: 16323,
				width: 10969,
				height: 10969,
				desc: "A savage force of goblins in the Black Mountains captured this mine from the surrounding townsfolk.  The goblins are led by a fierce and notorious goblin named Tepok and they now make their home within the mine."
			}
		]
	},
	{
		id: 71,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/71.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Who were the Atlanteans? What power did they possess? The answers to these questions and more can be discovered by stepping through the glowing portal inside the Hall of Heroes.  The researchers and learned people working on this excavation site can sell you supplies you may find useful on your journey."
			}
		]
	},
	{
		id: 30,
		width: 46,
		height: 46,
		zones: [
			{
				src: "/maps/30.jpg",
				left: 25,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Home to Oceanus haven, this is the launching point for explorations into the ruins of Atlantis. Various islands break the oceans surface and many mysteries await beneath the cold waters."
			},
			{
				src: "/maps/31.jpg",
				left: 71,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Ocean of Mesothalassa is home to the legendary sea monster Cetus and the ancient Library of Atlantis.  If you venture beneath the waves, beware of the Tritons who have claimed vast areas for their own purposes."
			},
			{
				src: "/maps/32.jpg",
				left: 71,
				top: 59,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The ruins of Sobekite Eternal tower majestically over the waters of Boreal.  Many islands, which contain treasures and challenges for even the bravest of adventurers, dot the crystaline blue of the vast waters."
			},
			{
				src: "/maps/33.jpg",
				left: 71,
				top: 151,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Located in the deep south, the waters of Notos contain many treasures but untold dangers. Wicked harpies, ancient artifacts of power, and Medusa's Temple of Twilight are only some of the wonders to be discovered."
			},
			{
				src: "/maps/34.jpg",
				left: 117,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Anatole Ocean reaches to the farthest eastern edge of the Atlantean  empire.  Here you can discover the Haven of  Volcanus, battle living  statues, and dive to an Atlantean shipwreck."
			},
			{
				src: "/maps/38.jpg",
				left: 47,
				top: 13,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Stygian Delta is a searing ocean of sand.  Scorpions, crocodile, and the evil Setians are only some of the dangers that await you.  Temples and tombs left from the Atlantean legacy are slowly being reclaimed by the shifting sands."
			},
			{
				src: "/maps/39.jpg",
				left: 1,
				top: 13,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Deep into the desert, the Land of Atum holds both wonders and terrors alike.  The colossal Atlantean pyramid that reaches to the sky, the Temple of Storms, and the entrance to the land of the dead - the Halls of Ma'ati, are only few of the adventures that await you."
			},
			{
				src: "/maps/41.jpg",
				left: 163,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "A land of fiery lava flows, violent eruptions, and a blasted landscape, Typhon's Reach is not for the faint of heart.  The hulking Taur have made this land their home and they guard it with fierce intensity."
			},
			{
				src: "/maps/42.jpg",
				left: 209,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Deep into the charred and blasted land of Volcanus lies the Ashen Isle. Located in the heart of a live volcano, the entry to the Titan Typhon is located here.  The isle is also home to the mighty three headed Chimera."
			},
			{
				src: "/maps/43.jpg",
				left: 94,
				top: 197,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The giant redwoods of the Glen are home to the race of Centaur. Through this dense wood and the foothills of the Aerus mountains, adventurers may discover the ruins of the Atlantean's ancient architecture and encounter the caretakers of this beautiful but deadly land."
			},
			{
				src: "/maps/44.jpg",
				left: 140,
				top: 197,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Once pristine forests on the mountain slopes, the Glen was the pinnacle of Atlantean civilization.  Here they perfected the art of suspending cities in the sky.  After the fall, pieces of the Aerus sky city began to fall to the land below.  Whole chunks of the lost city, some still hovering slightly, can be found scattered across the land."
			}
		]
	},
	{
		id: 51,
		width: 46,
		height: 0,
		zones: [
			{
				src: "/maps/51.jpg",
				left: 204,
				top: 156,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "This beautiful isle provides perfect hunting for younger adventurers.  Home to Caer Gothwaite, the majestic keep looms over the harbor offering safety and assurance. Travel to the main lands and to Atlantis are available in the harbor."
			},
			{
				src: "/maps/52.jpg",
				left: 158,
				top: 121,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Once a thriving orchard of magic and peace, Avalon Isle has been claimed by the vile Drakorans.  The small hamlet Wearyall is the only bastion inhabited by men in this area.  Even fair Avalon city has fallen to these invaders.  The realm calls upon its most skilled warriors to free the once glorious city."
			},
			{
				src: "/maps/53.jpg",
				left: 123,
				top: 75,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "In the Dales of Devwy, towering trees give the forest an aura of heavy, eerie quietness. Many adventurers have stated that the trees hide secrets and shelter monsters of the darkest imagination. All travelers are advised to stay close to the forest path.  Fort Gwyntell offers safety, supplies and training to the few who survive to reach it."
			},
			{
				src: "/maps/54.jpg",
				left: 77,
				top: 68,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "This land is filled with many dangers and over shadowing it all upon a high mountain is the dungeon of Caer Sidi. Once a proud and glorious hall where men and women from the realm gathered, it now lays in ruin, inhabited by the most powerful of Morgana's undead horde.  Only the strongest or the foolish fight to reclaim this stronghold."
			},
			{
				src: "/maps/55.jpg",
				left: 66,
				top: 114,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "A river flows through Gwyddneau to the sea between through a towering canyon.  An ancient race of beings make their homes in these cliffs and guard it furiously.  Along the coastline dwell marooned Vikings whose ships crashed upon these dangerous rock lined shores."
			},
			{
				src: "/maps/56.jpg",
				left: 112,
				top: 147,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Aldland is a land inhabited with strange creatures of both land and air. Caer Diogel offers the only friendly outpost in the region for supplies and training. In the northern part of this wild land is the Ogre citadel Krondon. Many skilled warriors have dared to enter here, few have returned to tell the tale."
			},
			{
				src: "/maps/57.jpg",
				left: 20,
				top: 117,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Inishail Island is a foggy marshland torn between the Lammia and Orcs.  The feuding factions are not the only dangers here in the marsh, adventurers should be wary of slimes and sinkholes."
			}
		]
	},
	{
		id: 70,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/70.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Who were the Atlanteans? What power did they possess? The answers to these questions and more can be discovered by stepping through the glowing portal inside the Hall of Heroes.  The researchers and learned people working on this excavation site can sell you supplies you may find useful on your journey."
			}
		]
	},
	{
		id: 73,
		width: 46,
		height: 46,
		zones: [
			{
				src: "/maps/73.jpg",
				left: 25,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Home to Oceanus haven, this is the launching point for explorations into the ruins of Atlantis. Various islands break the oceans surface and many mysteries await beneath the cold waters."
			},
			{
				src: "/maps/74.jpg",
				left: 71,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Ocean of Mesothalassa is home to the legendary sea monster Cetus and the ancient Library of Atlantis.  If you venture beneath the waves, beware of the Tritons who have claimed vast areas for their own purposes."
			},
			{
				src: "/maps/75.jpg",
				left: 71,
				top: 59,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The ruins of Sobekite Eternal tower majestically over the waters of Boreal.  Many islands, which contain treasures and challenges for even the bravest of adventurers, dot the crystaline blue of the vast waters."
			},
			{
				src: "/maps/76.jpg",
				left: 71,
				top: 151,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Located in the deep south, the waters of Notos contain many treasures but untold dangers. Wicked harpies, ancient artifacts of power, and Medusa's Temple of Twilight are only some of the wonders to be discovered."
			},
			{
				src: "/maps/77.jpg",
				left: 117,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Anatole Ocean reaches to the farthest eastern edge of the Atlantean  empire.  Here you can discover the Haven of  Volcanus, battle living  statues, and dive to an Atlantean shipwreck."
			},
			{
				src: "/maps/81.jpg",
				left: 47,
				top: 13,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Stygian Delta is a searing ocean of sand.  Scorpions, crocodile, and the evil Setians are only some of the dangers that await you.  Temples and tombs left from the Atlantean legacy are slowly being reclaimed by the shifting sands."
			},
			{
				src: "/maps/82.jpg",
				left: 1,
				top: 13,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Deep into the desert, the Land of Atum holds both wonders and terrors alike.  The colossal Atlantean pyramid that reaches to the sky, the Temple of Storms, and the entrance to the land of the dead - the Halls of Ma'ati, are only few of the adventures that await you."
			},
			{
				src: "/maps/84.jpg",
				left: 163,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "A land of fiery lava flows, violent eruptions, and a blasted landscape, Typhon's Reach is not for the faint of heart.  The hulking Taur have made this land their home and they guard it with fierce intensity."
			},
			{
				src: "/maps/85.jpg",
				left: 209,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Deep into the charred and blasted land of Volcanus lies the Ashen Isle. Located in the heart of a live volcano, the entry to the Titan Typhon is located here.  The isle is also home to the mighty three headed Chimera."
			},
			{
				src: "/maps/86.jpg",
				left: 94,
				top: 197,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The giant redwoods of the Glen are home to the race of Centaur. Through this dense wood and the foothills of the Aerus mountains, adventurers may discover the ruins of the Atlantean's ancient architecture and encounter the caretakers of this beautiful but deadly land."
			},
			{
				src: "/maps/87.jpg",
				left: 140,
				top: 197,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Once pristine forests on the mountain slopes, the Glen was the pinnacle of Atlantean civilization.  Here they perfected the art of suspending cities in the sky.  After the fall, pieces of the Aerus sky city began to fall to the land below.  Whole chunks of the lost city, some still hovering slightly, can be found scattered across the land."
			}
		]
	},
	{
		id: 100,
		width: 38,
		height: 38,
		zones: [
			{
				src: "/maps/100.jpg",
				left: 141,
				top: 35,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Within the shadow of the City of Jordheim, the town of Mularn offers those of 10th to 14th seasons both training and leveling opportunities. Those of 15th to 19th seasons would find Fort Veldon to the north more suited to their abilities. The dungeons of Darkness Falls, an RvR dungeon, and the Vendo Caverns, suitable for levels 18 to 30, can both be found in the Vale of Mularn. Finally, Svasud Faste guards the gateway to Uppland and the Midgard frontier."
			},
			{
				src: "/maps/101.jpg",
				left: 122,
				top: 73,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "East Svealand has two major towns: Vasudheim, which lies just outside the gates to the capital city of Jordheim, and Audliten, which offers opportunities to adventurers between their 20th and 24th seasons. This area is also home to the dungeon Nisse's Lair, which will provide challenges to adventurers between levels 8 and 20."
			},
			{
				src: "/maps/102.jpg",
				left: 84,
				top: 73,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "West Svealand is an area dominated by the Blodfelag, though adventurers can find refuge at the town of Huginfel, which also provides leveling opportunities for those between levels 25 and 29. To the west lies the entrance to the frozen wastes of Raumarik and far to the north stands Vindsaul Faste which guards the gateway to Yggdra Forest and the Midgard Frontier."
			},
			{
				src: "/maps/103.jpg",
				left: 122,
				top: 111,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Gotar is crowned by the city of Fort Atla and is ideal for adventurers between their 30th and 35th seasons. On the eastern edge of land, lies the Cursed Tomb, a dungeon which caters to adventurers between the levels 15 and 24."
			},
			{
				src: "/maps/104.jpg",
				left: 179,
				top: 17,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Home of the fire giants, Muspelheim is a charred land with pits of bubbling lava.  Adventurers in their 20s to 30s can find monsters a plenty to hunt here.  Be careful of angering the Dverge, who make their homes here because your trainer may send you to perform tasks for them in pursuit of magical arms and armor."
			},
			{
				src: "/maps/105.jpg",
				left: 142,
				top: 149,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Dark and foreboding, Myrkwood Forest is home to two towns and the most challenging dungeon in old world Midgard, Spindelhalla.  The area around the city of Galplen has monsters appropriate to adventurers' levels 25 to 30.  Across the lake, the town of Gna Faste is home to a number of trainers not found in Galplen, but beware the creature Njessi who calls the lake its home."
			},
			{
				src: "/maps/106.jpg",
				left: 104,
				top: 169,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "In the shadow of Myrkwood Forest, Skona Ravine is a haven for werewolves, who provide good battles for adventurers 20 to mid 30s.  The Varulvhamn dungeon is their home and provides challenges to adventurers in their 30s to 40s."
			},
			{
				src: "/maps/107.jpg",
				left: 66,
				top: 150,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Dank and foggy, Vanern is home to monsters that will challenge adventurers between 30 and 45.  Beware both the Jotuns and Hagbui can be fearsome opponents if caught unprepared."
			},
			{
				src: "/maps/108.jpg",
				left: 46,
				top: 73,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Raumarik is strictly a high level land with monsters challenging to adventurers from 40 to 50.  This area is home to the Wretches of Winter, who can be a challenge to even the most senior group.   The monsters of Raumarik are notoriously aggressive so be on your guard."
			},
			{
				src: "/maps/116.jpg",
				left: 104,
				top: 207,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Malmohus is home to the dragon Gjalpinulva and her underlings.  High level servants wander the area constantly and the dragon periodically flies over her domain patrolling for intruders. It is a very high-level area and should be traveled through carefully with a group."
			}
		]
	},
	{
		id: 102,
		width: 85,
		height: 85,
		zones: [
			{
				src: "/maps/114.jpg",
				left: 0,
				top: 85,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/117.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/118.jpg",
				left: 86,
				top: 85,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/119.jpg",
				left: 0,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/121.jpg",
				left: 86,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/122.jpg",
				left: 86,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/266.jpg",
				left: 171,
				top: 85,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/267.jpg",
				left: 171,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/268.jpg",
				left: 171,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			}
		]
	},
	{
		id: 125,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/125.jpg",
				left: 0,
				top: 0,
				offsetX: 18600,
				offsetY: 18046,
				width: 10733,
				height: 10733,
				desc: "A series of twisting caverns, Spindelhalla is inhabited by the arachites"
			}
		]
	},
	{
		id: 126,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/126.jpg",
				left: 0,
				top: 0,
				offsetX: 17307,
				offsetY: 20027,
				width: 8041,
				height: 8041,
				desc: "The central lair of the aggressive Vendo clan, these caverns serve as lodging, shelter, and thanks to the occasional careless adventurer, sport."
			}
		]
	},
	{
		id: 127,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/127.jpg",
				left: 0,
				top: 0,
				offsetX: 7676,
				offsetY: 11157,
				width: 19880,
				height: 19880,
				desc: "Varulvhamn is the underground lair of the werewolves.  Host to young and old alike, these caves serve as a meeting place for the werewolf nobles.  Despite some open-minded elders, known as the Wolfaur, adventurers who intrude upon their lair should expect a fierce, frantic, and furry greeting."
			}
		]
	},
	{
		id: 128,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/128.jpg",
				left: 0,
				top: 0,
				offsetX: 21729,
				offsetY: 19734,
				width: 7808,
				height: 7808,
				desc: "The Cursed Tomb is the final resting place of dishonored warriors and kings of Midgard who deserted in the midst of battle, betrayed their comrades, let greed and vice get in the way of honor, or died in less than heroic circumstances.  The gods will never allow their entry to Valhalla, so they spend their afterlife haunting this tomb and attempting to entice visitors to join them."
			}
		]
	},
	{
		id: 129,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/129.jpg",
				left: 0,
				top: 0,
				offsetX: 17244,
				offsetY: 19507,
				width: 14282,
				height: 14282,
				desc: "Nisse's Lair is the underground home of the Tomte and their leader, Nisse.  It is also home to a small but powerful lair of spiders that has take over part of the the lair from the Tomte.  Adventurers should take caution to not find them trapped in the middle of these two powerful forces."
			}
		]
	},
	{
		id: 72,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/72.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Who were the Atlanteans? What power did they possess? The answers to these questions and more can be discovered by stepping through the glowing portal inside the Hall of Heroes.  The researchers and learned people working on this excavation site can sell you supplies you may find useful on your journey."
			}
		]
	},
	{
		id: 130,
		width: 46,
		height: 46,
		zones: [
			{
				src: "/maps/130.jpg",
				left: 25,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Home to Oceanus haven, this is the launching point for explorations into the ruins of Atlantis. Various islands break the oceans surface and many mysteries await beneath the cold waters."
			},
			{
				src: "/maps/131.jpg",
				left: 71,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Ocean of Mesothalassa is home to the legendary sea monster Cetus and the ancient Library of Atlantis.  If you venture beneath the waves, beware of the Tritons who have claimed vast areas for their own purposes."
			},
			{
				src: "/maps/132.jpg",
				left: 71,
				top: 59,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The ruins of Sobekite Eternal tower majestically over the waters of Boreal.  Many islands, which contain treasures and challenges for even the bravest of adventurers, dot the crystaline blue of the vast waters."
			},
			{
				src: "/maps/133.jpg",
				left: 71,
				top: 151,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Located in the deep south, the waters of Notos contain many treasures but untold dangers. Wicked harpies, ancient artifacts of power, and Medusa's Temple of Twilight are only some of the wonders to be discovered."
			},
			{
				src: "/maps/134.jpg",
				left: 117,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Anatole Ocean reaches to the farthest eastern edge of the Atlantean  empire.  Here you can discover the Haven of  Volcanus, battle living  statues, and dive to an Atlantean shipwreck."
			},
			{
				src: "/maps/138.jpg",
				left: 47,
				top: 13,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Stygian Delta is a searing ocean of sand.  Scorpions, crocodile, and the evil Setians are only some of the dangers that await you.  Temples and tombs left from the Atlantean legacy are slowly being reclaimed by the shifting sands."
			},
			{
				src: "/maps/139.jpg",
				left: 1,
				top: 13,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Deep into the desert, the Land of Atum holds both wonders and terrors alike.  The colossal Atlantean pyramid that reaches to the sky, the Temple of Storms, and the entrance to the land of the dead - the Halls of Ma'ati, are only few of the adventures that await you."
			},
			{
				src: "/maps/141.jpg",
				left: 163,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "A land of fiery lava flows, violent eruptions, and a blasted landscape, Typhon's Reach is not for the faint of heart.  The hulking Taur have made this land their home and they guard it with fierce intensity."
			},
			{
				src: "/maps/142.jpg",
				left: 209,
				top: 105,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Deep into the charred and blasted land of Volcanus lies the Ashen Isle. Located in the heart of a live volcano, the entry to the Titan Typhon is located here.  The isle is also home to the mighty three headed Chimera."
			},
			{
				src: "/maps/143.jpg",
				left: 94,
				top: 197,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The giant redwoods of the Glen are home to the race of Centaur. Through this dense wood and the foothills of the Aerus mountains, adventurers may discover the ruins of the Atlantean's ancient architecture and encounter the caretakers of this beautiful but deadly land."
			},
			{
				src: "/maps/144.jpg",
				left: 140,
				top: 197,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Once pristine forests on the mountain slopes, the Glen was the pinnacle of Atlantean civilization.  Here they perfected the art of suspending cities in the sky.  After the fall, pieces of the Aerus sky city began to fall to the land below.  Whole chunks of the lost city, some still hovering slightly, can be found scattered across the land."
			}
		]
	},
	{
		id: 151,
		width: 46,
		height: 46,
		zones: [
			{
				src: "/maps/151.jpg",
				left: 23,
				top: 101,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Aegir's Landing is home to the capital city, Aegirhamn, which contains trainers as well as portals to both Old Midgard and Atlantis.  Monsters in this land are suited to young players.  Dyrfjell, the other town in this area undergoes periodic sieges by Morvalt forces.  Both Morvalt and Neanderthal factions fight over this land, so choose your side carefully."
			},
			{
				src: "/maps/152.jpg",
				left: 46,
				top: 55,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The mountains and valleys of Gripklosa shelter the town of Bjarken as the only refuge in this snow covered land.  From the Morvalt controlled city of Trollheim to the hidden Redcap town of Iss, adventurers from 30 to 50 will find foes to challenge them.  In the northern reaches of the land, you may discover Mammoth Valley and see the Old Matriarch herself."
			},
			{
				src: "/maps/153.jpg",
				left: 92,
				top: 67,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Delling Crater is best suited for high level adventurers in their upper 40s.  In the northeastern corner of the land, you will find the entrance to Tuscarian Glacier, the epic dungeon of Aegir.   If you are friendly with the People of Dellingstad, you may rest and trade in their town otherwise you should steer clear as they do not like intruders."
			},
			{
				src: "/maps/154.jpg",
				left: 104,
				top: 113,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Faraheim is a dangerous place to travel at anytime of day or night, because the monsters here challenge even the highest level of adventurers.  The town of Hagall provides the only refuge and the only safe passage to the island of Modernagrav.  A small group of Iarn Dwarves have made a colony here on as well, but be wary as they and their griffon mounts do not take kindly to strangers."
			},
			{
				src: "/maps/155.jpg",
				left: 58,
				top: 147,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Munin Sound is meant to be explored by adventurers from 10 to 40.  The town of Knarr provides a place for the weary traveler to sell and a base to explore this area."
			},
			{
				src: "/maps/156.jpg",
				left: 127,
				top: 159,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Iarnwood is an extremely dangerous area to venture into even for the most senior adventurer.  This area hosts the entrance to the challenging dungeon of Iarnvidiur, which is best explored by well organized groups only.  In the northeast, you will find another settlement of Iarn Dwarves, but make sure you are friendly to them before getting too close."
			},
			{
				src: "/maps/158.jpg",
				left: 170,
				top: 113,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Modernagrav is an island located off of the eastern coast of Faraheim that has monsters fit for adventurers from 35 to 50.  Both the Sjoalf and Redcaps can provide challenges to small groups of adventurers.  Undead populate the middle of the island and only the very brave challenge them in their redoubts."
			}
		]
	},
	{
		id: 163,
		width: 42,
		height: 42,
		zones: [
			{
				src: "/maps/163.jpg",
				left: 97,
				top: 86,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Ellan Vannin is an ancient island originally controlled by the Manx people and their ruler, Manannan mac Lir. The island was once a bastion of Arthur's reign where all three realms lived in harmony. After his death its war-torn shores were abandoned and lost to time' until now. The rulers of the Otherworlds remembered this ancient place. Each have returned with the aim of controlling this once great land and the formidable underground keep, Knoc Meayll, for their realm!"
			},
			{
				src: "/maps/164.jpg",
				left: 97,
				top: 128,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The calm, clear waters of the Irish sea stretch out in all directions.  Without a compass and a map, many ocean farers have found themselves hopelessly lost in its vastness.  Though the waters may seem inviting, enemy battles await by sea. The coast of Albion lies to the east, far from the Hibernian coast in the west."
			},
			{
				src: "/maps/167.jpg",
				left: 118,
				top: 44,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Odin's Gate is Midgard's front line for repelling foreign invaders.  Bledmeer Faste protects both the coast and the realm's river access.  Nottmoor Faste protects the north western coast.  To the east, a series of rope bridges suspended high over canyon walls provides excellent defense for attacking armies marching deep into Midgard's frontier."
			},
			{
				src: "/maps/168.jpg",
				left: 160,
				top: 44,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Blendrake Faste protects the southern coast of these snow-covered mountains, while the marshy keep Hlidskialf Faste defends the southeast's watery borders.  The entrance to the Passage of Conflict opens here, to the south of Glenlock Faste. Ruins of an ancient city can be explored in the center of these lands, and further to the northwest the island keep Glenlock Faste protects river access into Midgard."
			},
			{
				src: "/maps/169.jpg",
				left: 202,
				top: 44,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The looming, dark trees of Yggdra Forest offer safe cover for Arvakr Faste in the southeast.  This mighty Keep is the resting place of the Horn of Valhalla, Midgard's power relic.  Deep in the northeast, the border keep Vindsaul Faste protects Midgard's homeland from invaders.  South of Arvakr Faste, a frontier village offers supplies and training to the weary defender."
			},
			{
				src: "/maps/170.jpg",
				left: 160,
				top: 2,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Located in the northernmost section of Midgard's frontier, Uppland is home to Thor's Hammer. This strength relic is housed by Fensalir Faste deep in the north.  In the east, the border keep Svasud Faste is the gateway to Midgard's inner realm. A frontier village stands ready with supplies for restocking and trainers to aid in learning new skills, just across the river from Mjollner Faste."
			},
			{
				src: "/maps/171.jpg",
				left: 55,
				top: 128,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Emain Macha is Hibernia's front line for repelling invaders from the foreign lands of Albion and Midgard.  Dun Crauchon not only protects the North Sea's coast, but also acts as a sentinel for river access. Dun Crimthainn keeps vigil over the northern border, while Dun Bolg safeguards the swampy waters in the southeast.  The ruins of an ancient city offer mysterious adventure in the south west."
			},
			{
				src: "/maps/172.jpg",
				left: 55,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "In the depths of Hibernia's frontier, the island keep of Dun na Ged keeps careful watch over nearby river traffic, while Dun da Behnn protects the Irish Sea's coast.  Suspended rope bridges stretch high across valleys in the southeast, providing excellent defense against invading armies attempting to flank  the outlaying outposts and keeps.  The Passage of Conflict's entrance can be found deep in the woods, to the  south of nGed."
			},
			{
				src: "/maps/173.jpg",
				left: 13,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Hidden amidst a thick forest of lush trees, Dun Ailinne guards the very heart of the Hibernian frontier.   In the south of the Gorge, Druim Ligen keeps vigil over Hibernia with its massive,  stout walls.  Further north, Dun Ailinne shelters Lug's Spear,  Hibernia's  strength relic.  Weary defenders can find solace in the frontier village deep in the northwest, where training and supplies are readily available."
			},
			{
				src: "/maps/174.jpg",
				left: 55,
				top: 212,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Home to Hibernia's power relic, the Cauldron of Dagda, Dun Scathaig towers over the south. In the southwest, the border keep Druim Cain protects the mainland.  A frontier village in the southeast offers supplies and training to brave defenders not wishing make the long trip home."
			},
			{
				src: "/maps/175.jpg",
				left: 139,
				top: 212,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Snowdonia is the southern most region of Albion's frontier.  Here, the relic Keep Caer Hurbury is home to Merlin's Staff, Albion's famed power relic. To the southwest, the frontier village allows for restocking supplies and training.  The inner realm is heavily guarded by Snowdonia Fortress, Albion's border keep."
			},
			{
				src: "/maps/176.jpg",
				left: 181,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Forest Sauvage is home to Albion's strength relic Keep, Caer Renaris wherein lies the resting place of the Scabbard of Excalibur. Deep in the south, Castle Sauvage is the final defense between attackers in the frontier and Albion's heartlands."
			},
			{
				src: "/maps/177.jpg",
				left: 139,
				top: 170,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The island keep of Caer Boldiam protects the realm's inner river access.  To the northwest lie the ruins of an ancient monastery.  Along the river to the east, the entrance to the Passage of Conflict can be found.    Rope bridges closing the steep valley gaps offer easy passage to Caer Sursbrooke from the south."
			},
			{
				src: "/maps/178.jpg",
				left: 139,
				top: 128,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The northernmost frontier of Albion, Hadrian's Wall is flanked in the west by both the North Sea and the Irish Sea.  Twin sentinels on the westerly sea's borders, the island keep, Caer Benowyc, and the marshy keep, Caer Erasleigh, stand vigil together against enemy invaders.   Caer Berkstead stands a constant vigil against likely Midgard invasions from the north."
			}
		]
	},
	{
		id: 234,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/234.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor!  This region is for levels 1-4 only.  The center keep can be claimed once per level for experience"
			}
		]
	},
	{
		id: 235,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/235.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor!  This region is for levels 5-9 only.  The center keep can be claimed once per level for experience"
			}
		]
	},
	{
		id: 236,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/236.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor!  This region is for levels 10-14 only.  The center keep can be claimed once per level for experience"
			}
		]
	},
	{
		id: 237,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/237.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor!  This region is for levels 15-19 only.  The center keep can be claimed once per level for experience"
			}
		]
	},
	{
		id: 238,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/238.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor!  This region is for levels 20-24 only.  The center keep can be claimed once per level for experience"
			}
		]
	},
	{
		id: 239,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/239.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor!  This region is for levels 25-29 only.  The center keep can be claimed once per level for experience"
			}
		]
	},
	{
		id: 240,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/240.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor!  This region is for levels 30-34 only.  The center keep can be claimed once per level for experience"
			}
		]
	},
	{
		id: 241,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/241.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor!  This region is for levels 35-39 only.  The center keep can be claimed once per level for experience"
			}
		]
	},
	{
		id: 242,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/254.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor!  This region is for levels 40-44 only.  The center keep can be claimed once per level for experience"
			}
		]
	},
	{
		id: 165,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/165.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Defend your realm's honor! This region is for levels 45-49 only."
			}
		]
	},
	{
		id: 166,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/250.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "An ancient Battleground where unseasoned fighters of three realms fought to test their mettle and hone their skills. Scholars researching the recent Pictish incursion had dismissed the Medallion's they all wore as a mere token of their heathen Gods...until they discovered their true purpose."
			}
		]
	},
	{
		id: 167,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/251.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "An ancient Battleground where unseasoned fighters of three realms fought to test their mettle and hone their skills. Scholars researching the recent Pictish incursion had dismissed the Medallion's they all wore as a mere token of their heathen Gods...until they discovered their true purpose."
			}
		]
	},
	{
		id: 168,
		width: 0,
		height: 0,
		zones: [
			{
				src: "/maps/252.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "An ancient Battleground where unseasoned fighters of three realms fought to test their mettle and hone their skills. Scholars researching the recent Pictish incursion had dismissed the Medallion's they all wore as a mere token of their heathen Gods...until they discovered their true purpose."
			}
		]
	},
	{
		id: 181,
		width: 46,
		height: 46,
		zones: [
			{
				src: "/maps/181.jpg",
				left: 152,
				top: 191,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Domnann, a thick, hilly forest, is home to the sylvan capital and the gateway to all of Hy Brasil. Young adventurers will find plenty of hunting here. The Grove of Domnann in the south is an enchanting city of massive trees.  The portal to the Hibernia's mainlands lies just outside of the Grove."
			},
			{
				src: "/maps/182.jpg",
				left: 106,
				top: 168,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The lands of Caillte Garran have one safe stronghold in the southeast known as Droighaid.  The rest of these lands have been scourged by the dread Fomor.  The large population of Fomorian here offers a great challenge to the most learned adventurer.  If a dungeon is what you seek, the entrance to Fomora City lies to the north."
			},
			{
				src: "/maps/183.jpg",
				left: 60,
				top: 145,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Vale holds one safe binding area at the Grove of Aalid Feie. Highly skilled adventurers will find hunting in the open fields and Fomorian villages, or in Tur Suil, a dungeon located in the southern area of the land."
			},
			{
				src: "/maps/184.jpg",
				left: 71,
				top: 99,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Be wary traveling through Cothrom Gorge.  These lands hold great challenge even for groups of the highest skill.  The obscure faction of sylvan living in the Outlander settlement to the east may be your only allies among the ravenous forest creatures that reside here."
			},
			{
				src: "/maps/185.jpg",
				left: 117,
				top: 76,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "World's End is a very dangerous land to journey alone.  The creatures lurking in this heavily wooded area could end the life of even the most experienced adventurer with little effort.  Travel cautiously east to Galladoria, for a dungeon adventure of epic proportions!"
			},
			{
				src: "/maps/186.jpg",
				left: 141,
				top: 122,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The most skilled Hibernian will find the lands of Vigilant Rock a welcome challenge in exploration.  Necht, its single outpost on the eastern shore, provides players with a last-chance stopping point for binding, training, and horse rides before heading into the high level dungeons to the north."
			},
			{
				src: "/maps/187.jpg",
				left: 118,
				top: 20,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Located off of the northern coast of World's End is the long forgotten island Allta Fearann.  Recently discovered, this island's occupants and encounters remain mysterious to all but the most inquisitive explorer."
			}
		]
	},
	{
		id: 200,
		width: 43,
		height: 43,
		zones: [
			{
				src: "/maps/200.jpg",
				left: 99,
				top: 53,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "A sparkling lake divides the rolling hills of Lough Derg. Here adventures may find Mag Mell settled in the shadow of Hibernia's enchanted capital city of Tir na Nog. Mag Mell offers adventures and training to those between their 10th and 14th seasons. On the road south can be found the ancient city of Tir na mBeo where adventurers of seasons 15 to 19 may seek their training. Other notable locations are the Parthanan Farm across the lake and a secluded island, home to the Siabra known as the Dergans."
			},
			{
				src: "/maps/201.jpg",
				left: 99,
				top: 96,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Silvermine Mountains are home to the strongholds of Ardagh and Howth. The coastal town of Ardagh offers adventurers between the seasons of 20 and 24 opportunities to advance while further to the south, Howth is best suited to those between their 25th and 29th seasons. The entrance to the Spraggon Den can also be found here, enticing those between 20 and 25 to adventure and explore."
			},
			{
				src: "/maps/202.jpg",
				left: 78,
				top: 139,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Shannon Estuary boasts the charming coastal village of Connla, which offers adventuring opportunities for those between seasons 30 and 34. The settlement of Cennai can be found to the south and offers a haven for those traveling the road to Innis Carthag. Be wary traveling the southern paths at night, for the Siabra patrol the area and passage can be quite treacherous."
			},
			{
				src: "/maps/203.jpg",
				left: 35,
				top: 10,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "A cliff face stretches the expanse of the westernmost part of these lands and plunges to the sea.  The Cliff Dwellers residing on the shore there pose more of a threat than the cliffs' steep drop.  A cluster of forest in the south hides Koalinth Caverns, a much safer choice for the mid-skilled adventurer."
			},
			{
				src: "/maps/204.jpg",
				left: 78,
				top: 182,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The mid-range dungeon known as Treibh Caillte is tucked in a valley of trees far to the west of Lough Gur.  The Gurite Settlement in the southwest corner and the melancholy fairies to the south are perfect spots for a well-seasoned group of adventurers.  Innis Carthaig in the east and Culraid in the northwest are the only friendly strongholds in these highly aggressive lands."
			},
			{
				src: "/maps/205.jpg",
				left: 121,
				top: 202,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The Bog of Cullen is home to the Siabran Queen, Cliodna and is prime hunting for those between the levels 30 through 50.  Venture not alone here unless you're skilled, for the Gemstone Tower is heavily guarded by the queen's loyal subjects. Friends can be found in the southeast corner in the settlement known as Alainn Bin."
			},
			{
				src: "/maps/206.jpg",
				left: 142,
				top: 53,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Adventurers between the levels of 10 and 20 will find a challenge in this magical valley.  If you seek the thrill of a dungeon, travel northwest to the mouth of the Coruscating Mines, the mainlands most dangerous dungeon."
			},
			{
				src: "/maps/207.jpg",
				left: 78,
				top: 10,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "The capital city Tir na Nog, nestled here in Connacht, is heavily protected by Druim Ligen border keep to the north. This expanse of green fields and hillsides is also home to the beginners dungeon Muire Tomb.   Across the river from Druim Ligen is the entrance portal to Darkness Falls.  Adventurers will find plenty of monsters to hunt in the area surrounding the established town of Ardee."
			},
			{
				src: "/maps/208.jpg",
				left: 185,
				top: 53,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "This grand thicket of trees and brush is home to monsters far beyond the skill of any single Hibernian.  Legendary creatures lurk in this dark wood.  The Faerie Court is rumored to wander its depths, and one fell step could land you face to face with the terror known as Juggernaut.  No doubt adventure awaits in mist of the forest, though venturing alone is sure to prove fatal."
			},
			{
				src: "/maps/216.jpg",
				left: 121,
				top: 159,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Shrouded in eternal twilight, Sheeroe Hills is infested with the magical Glimmerlings.  Should you and your experienced companions manage to get through their defenses, your journey has only just begun.  These lands are a maze of winding valleys heavily guarded by Glimmers and Azures.  A wrong turn could find you in the lair of Cuuldurach the Glimmer King, Hibernia's mighty dragon."
			}
		]
	},
	{
		id: 202,
		width: 85,
		height: 85,
		zones: [
			{
				src: "/maps/213.jpg",
				left: 85,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/215.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/217.jpg",
				left: 85,
				top: 86,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/218.jpg",
				left: 170,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/219.jpg",
				left: 0,
				top: 86,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/225.jpg",
				left: 170,
				top: 86,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/272.jpg",
				left: 85,
				top: 171,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/273.jpg",
				left: 0,
				top: 171,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			},
			{
				src: "/maps/274.jpg",
				left: 170,
				top: 171,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Here the good people of the land make their homes and enjoy the quiet of the country.  You can browse player sold items at the Market Explorer in each housing market area."
			}
		]
	},
	{
		id: 220,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/220.jpg",
				left: 0,
				top: 0,
				offsetX: 17885,
				offsetY: 13632,
				width: 13427,
				height: 13427,
				desc: "Riches and dangers abound in the coruscating mines as a variety of townfolk from across Hibernia have found out when they have come under its spell and found themselves trapped within the mines.  In thrall to the Unseelie, they are policed by gemclickers and silvermine sentries always on the lookout for more slaves for their mines."
			}
		]
	},
	{
		id: 222,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/222.jpg",
				left: 0,
				top: 0,
				offsetX: 17913,
				offsetY: 17347,
				width: 12154,
				height: 12154,
				desc: "Located in the Silvermine Mountains, the Spraggon's Den is the underground home of the wily Spraggon. Many a careless adventurer has met his end in these tunnels, dismissing the Spraggon as merely mischievous fae. The Den's inhabitants do not take kindly to intruders and will call upon their skill at arms and magic to defend their territory."
			}
		]
	},
	{
		id: 221,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/221.jpg",
				left: 0,
				top: 0,
				offsetX: 19546,
				offsetY: 18475,
				width: 11783,
				height: 11783,
				desc: "The tale of the Muire family is one of excess, tragedy, and madness by turns. All that remains of the house of Muire is their neglected tomb, populated by the tortured ghosts of Quillan Muire and his victims."
			}
		]
	},
	{
		id: 223,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/223.jpg",
				left: 0,
				top: 0,
				offsetX: 16610,
				offsetY: 16296,
				width: 15157,
				height: 15157,
				desc: "The Koalinth are a coastal species of hobgoblins that migrated from their homeland under the sea under the coast and taken up residence in these ancient tunnels near the Cliffs of Moher.  From here, they can stage raids on nearby settlements and lure adventurers to their doom in these caves."
			}
		]
	},
	{
		id: 224,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/224.jpg",
				left: 0,
				top: 0,
				offsetX: 17452,
				offsetY: 16125,
				width: 11664,
				height: 11664,
				desc: "A naturally formed cavern set in the hills of Lough gur, Triebh Caillte is inhabited by a small tribe of creatures locally known as ursine dwellers. Little is known of the reclusive clan except that they are hostile to outsiders. Those that seek answers within Triebh Caillte often don't return."
			}
		]
	},
	{
		id: 58,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/58.jpg",
				left: 0,
				top: 0,
				offsetX: 2782,
				offsetY: 3286,
				width: 40075,
				height: 40075,
				desc: "A connecting realm with passages to the surface, the Kobolds maintain a presence in this strange underground grove.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 59,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/59.jpg",
				left: 0,
				top: 0,
				offsetX: 11952,
				offsetY: 9111,
				width: 25459,
				height: 25459,
				desc: "An ashen, decrepit place of poisonous fumes and choking smoke, the glashtin have turned this once-beautiful cavern into a wasteland, all to outfit and armor the enemies of Albion.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 63,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/63.jpg",
				left: 0,
				top: 0,
				offsetX: 5711,
				offsetY: 7644,
				width: 30629,
				height: 30629,
				desc: "Built by the Romans during their rule, the Aqueducts are now occupied by the shunned followers of Pluto.  There they have revived the worship of Arawn alongside their own god.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 65,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/65.jpg",
				left: 0,
				top: 0,
				offsetX: 9061,
				offsetY: 16949,
				width: 27838,
				height: 27838,
				desc: "Built by the Inconnu in service of their Lord Arawn, the Crypt serves as a homeland and waystation on the way to escorting the souls of the dead to the Underworld.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 66,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/66.jpg",
				left: 0,
				top: 0,
				offsetX: 3125,
				offsetY: 4271,
				width: 39870,
				height: 39870,
				desc: "Originally a secret entrance into the Lower Crypt, its discovery led to the destruction of the Crypt itself.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 67,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/67.jpg",
				left: 0,
				top: 0,
				offsetX: 8070,
				offsetY: 5150,
				width: 30515,
				height: 30515,
				desc: "The souls of the fallen dwell here, and their Lord Arawn ruled until they were possessed to rise against him.  Now Albion must battle to keep these renegade souls in check.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 68,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/68.jpg",
				left: 0,
				top: 0,
				offsetX: 6007,
				offsetY: 7138,
				width: 25218,
				height: 25218,
				desc: "Intended to guard the Cauldron of Arawn, the lower crypt was invaded and destroyed by one who desired its power.  Now it lies in ruin and holds dangers untold.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 69,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/69.jpg",
				left: 0,
				top: 0,
				offsetX: 3426,
				offsetY: 13397,
				width: 24193,
				height: 24193,
				desc: "Located deep within the earth at a nexus point of magical ley lines, this ominous fortress is home to a terrible evil power that threatens the world above.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 92,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/92.jpg",
				left: 0,
				top: 0,
				offsetX: 13706,
				offsetY: 5391,
				width: 39019,
				height: 39019,
				desc: "The Rift is a magical barrier that separates the magical world from the natural one.  'Created' by the elves, it now serves as the entry point to the mysterious Shar homeworld.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 93,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/93.jpg",
				left: 0,
				top: 0,
				offsetX: 13698,
				offsetY: 13461,
				width: 14363,
				height: 14363,
				desc: "Using the magic obtained from their time in the Veil, the Shar half-grew, half-built a magnificent city to be their seat of power.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 94,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/94.jpg",
				left: 0,
				top: 0,
				offsetX: 17223,
				offsetY: 11147,
				width: 22745,
				height: 22745,
				desc: "Built as a temple for proper communication with the Shar god, its proximity to the magical forces of the Otherworld enabled it to be used as an instrument of great deception.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 95,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/95.jpg",
				left: 0,
				top: 0,
				offsetX: 4860,
				offsetY: 7037,
				width: 36240,
				height: 36240,
				desc: "A cavernous area on the outskirts of Hibernian control, the Frontlines are a treacherous place filled with dangerous creatures and many of the enthralled souls of Midgard.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 96,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/96.jpg",
				left: 0,
				top: 0,
				offsetX: 3126,
				offsetY: 3529,
				width: 39732,
				height: 39732,
				desc: "Discovered around the Queen's Labyrinth, it led to the great deception that has haunted the Shar for years.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 97,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/97.jpg",
				left: 0,
				top: 0,
				offsetX: 4353,
				offsetY: -1104,
				width: 28769,
				height: 28769,
				desc: "A land intended for the souls of the Hibernia fallen, the Deadlands are now full of those unfortunate souls who have been enthralled by Hibernia's enemies.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 98,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/98.jpg",
				left: 0,
				top: 0,
				offsetX: 3426,
				offsetY: 13397,
				width: 24193,
				height: 24193,
				desc: "Located deep within the earth at a nexus point of magical ley lines, this ominous fortress is home to a terrible evil power that threatens the world above.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 99,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/99.jpg",
				left: 0,
				top: 0,
				offsetX: 10452,
				offsetY: 7974,
				width: 28038,
				height: 28038,
				desc: "An ashen, decrepit place of poisonous fumes and choking smoke, the glashtin have turned this once-beautiful cavern into a wasteland, all to outfit and armor the enemies of Hibernia.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 109,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/109.jpg",
				left: 0,
				top: 0,
				offsetX: 3238,
				offsetY: 1164,
				width: 41943,
				height: 41943,
				desc: "A cavernous area on the outskirts of Albion control, the Frontlines are a treacherous place filled with dangerous creatures and many of the enthralled souls of Albion.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 148,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/148.jpg",
				left: 0,
				top: 0,
				offsetX: 1958,
				offsetY: 8772,
				width: 35658,
				height: 35658,
				desc: "A cavernous mid-point between the Undercity and Nyttheim, the Frontlines have now become a battleground for control of the Kobold world and Midgard above.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 149,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/149.jpg",
				left: 0,
				top: 0,
				offsetX: 9665,
				offsetY: 7094,
				width: 27919,
				height: 27919,
				desc: "Originally a settlement of Kobolds unwilling to welcome others to their city, Nyttheim is now a nightmare & a land filled with possessed Kobolds serving an unknown lord.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 162,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/162.jpg",
				left: 0,
				top: 0,
				offsetX: 4385,
				offsetY: -1104,
				width: 28769,
				height: 28769,
				desc: "A land intended for the souls of the Midgard fallen, the Deadlands are now full of those unfortunate souls who have been enthralled by Midgard's enemies.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 188,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/188.jpg",
				left: 0,
				top: 0,
				offsetX: 3426,
				offsetY: 13397,
				width: 24193,
				height: 24193,
				desc: "Located deep within the earth at a nexus point of magical ley lines, this ominous fortress is home to a terrible evil power that threatens the world above.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 189,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/189.jpg",
				left: 0,
				top: 0,
				offsetX: 11703,
				offsetY: 9735,
				width: 25708,
				height: 25708,
				desc: "An ashen, decrepit place of poisonous fumes and choking smoke, the glashtin have turned this once-beautiful cavern into a wasteland, all to outfit and armor the enemies of Midgard.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 195,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/195.jpg",
				left: 0,
				top: 0,
				offsetX: 11291,
				offsetY: 4059,
				width: 38187,
				height: 38187,
				desc: "A magical land, the Otherworld is a region of violent magical maelstroms beyond the Veil.  Here, the Midgard possessed exist in torment.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 196,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/196.jpg",
				left: 0,
				top: 0,
				offsetX: 14979,
				offsetY: 6107,
				width: 30347,
				height: 30347,
				desc: "A magical land, the Otherworld is a region of violent magical maelstroms beyond the Veil.  Here, the Hibernian possessed exist in torment.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 197,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/197.jpg",
				left: 0,
				top: 0,
				offsetX: 9113,
				offsetY: 6979,
				width: 34444,
				height: 34444,
				desc: "The magical land where the Shar city was created, the Otherworld is a region of powerful and dangerous magical maelstroms, both empowering and threatening.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 226,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/226.jpg",
				left: 0,
				top: 0,
				offsetX: 952,
				offsetY: 4903,
				width: 41705,
				height: 41705,
				desc: "Deserted eons ago, the great Abandoned Mines stretch from one end of Midgard to the other, connecting all dungeons in the realm with rideable mine carts.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 227,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/227.jpg",
				left: 0,
				top: 0,
				offsetX: 3066,
				offsetY: 4232,
				width: 43656,
				height: 43656,
				desc: "Deserted eons ago, the great Abandoned Mines stretch from one end of Albion to the other, connecting all dungeons in the realm with rideable mine carts.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 228,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/228.jpg",
				left: 0,
				top: 0,
				offsetX: 2056,
				offsetY: 1665,
				width: 42333,
				height: 42333,
				desc: "Deserted eons ago, the great Abandoned Mines stretch from one end of Hibernia to the other, connecting all dungeons in the realm with rideable mine carts.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 229,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/229.jpg",
				left: 0,
				top: 0,
				offsetX: 11719,
				offsetY: 2541,
				width: 35665,
				height: 35665,
				desc: "Beneath the city of Jordheim lie the Burial Grounds, a great cavern used for generations not only to bury, but also to honor, the fallen of Midgard.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 243,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/243.jpg",
				left: 0,
				top: 0,
				offsetX: 12536,
				offsetY: 11852,
				width: 27217,
				height: 27217,
				desc: "Built in the same series of caves that gave birth to the Burial Grounds, the Kobold Undercity remained a secret from the surface for hundreds of years.  Blue Gem = Obelisk   Red Gem = Adventure Wing Entrance   Yellow Gem = Zone Line"
			}
		]
	},
	{
		id: 256,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/256.jpg",
				left: 0,
				top: 0,
				offsetX: 19267,
				offsetY: 22767,
				width: 7163,
				height: 7163,
				desc: "Forgotten Mines: Task Dungeon"
			}
		]
	},
	{
		id: 257,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/257.jpg",
				left: 0,
				top: 0,
				offsetX: 16631,
				offsetY: 23235,
				width: 9850,
				height: 9850,
				desc: "Forgotten Mines: Task Dungeon"
			}
		]
	},
	{
		id: 258,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/258.jpg",
				left: 0,
				top: 0,
				offsetX: 20647,
				offsetY: 23235,
				width: 10324,
				height: 10324,
				desc: "Forgotten Mines: Task Dungeon"
			}
		]
	},
	{
		id: 278,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/278.jpg",
				left: 0,
				top: 0,
				offsetX: 20208,
				offsetY: 16476,
				width: 7909,
				height: 7909,
				desc: "Damp Cavern: Task Dungeon"
			}
		]
	},
	{
		id: 279,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/279.jpg",
				left: 0,
				top: 0,
				offsetX: 22014,
				offsetY: 18336,
				width: 6048,
				height: 6049,
				desc: "Damp Cavern: Task Dungeon"
			}
		]
	},
	{
		id: 280,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/280.jpg",
				left: 0,
				top: 0,
				offsetX: 20130,
				offsetY: 18579,
				width: 5805,
				height: 5805,
				desc: "Damp Cavern: Task Dungeon"
			}
		]
	},
	{
		id: 281,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/281.jpg",
				left: 0,
				top: 0,
				offsetX: 16380,
				offsetY: 17730,
				width: 6664,
				height: 6664,
				desc: "Forgotten Sepulchre: Task Dungeon"
			}
		]
	},
	{
		id: 282,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/282.jpg",
				left: 0,
				top: 0,
				offsetX: 15775,
				offsetY: 19021,
				width: 7269,
				height: 7269,
				desc: "Forgotten Sepulchre: Task Dungeon"
			}
		]
	},
	{
		id: 283,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/283.jpg",
				left: 0,
				top: 0,
				offsetX: 16158,
				offsetY: 19639,
				width: 6885,
				height: 6885,
				desc: "Forgotten Sepulchre: Task Dungeon"
			}
		]
	},
	{
		id: 293,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/293.jpg",
				left: 0,
				top: 0,
				offsetX: 18014,
				offsetY: 15277,
				width: 6301,
				height: 6301,
				desc: "Burial Tomb: Task Dungeon"
			}
		]
	},
	{
		id: 294,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/294.jpg",
				left: 0,
				top: 0,
				offsetX: 20540,
				offsetY: 19200,
				width: 6144,
				height: 6144,
				desc: "Burial Tomb: Task Dungeon"
			}
		]
	},
	{
		id: 295,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/295.jpg",
				left: 0,
				top: 0,
				offsetX: 17788,
				offsetY: 16448,
				width: 6528,
				height: 6528,
				desc: "Burial Tomb: Task Dungeon"
			}
		]
	},
	{
		id: 296,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/296.jpg",
				left: 0,
				top: 0,
				offsetX: 20128,
				offsetY: 21244,
				width: 4616,
				height: 4616,
				desc: "Desecrated Grounds: Task Dungeon"
			}
		]
	},
	{
		id: 297,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/297.jpg",
				left: 0,
				top: 0,
				offsetX: 20798,
				offsetY: 20560,
				width: 7183,
				height: 7183,
				desc: "Desecrated Grounds: Task Dungeon"
			}
		]
	},
	{
		id: 298,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/298.jpg",
				left: 0,
				top: 0,
				offsetX: 20075,
				offsetY: 20816,
				width: 4759,
				height: 4759,
				desc: "Desecrated Grounds: Task Dungeon"
			}
		]
	},
	{
		id: 300,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/300.jpg",
				left: 0,
				top: 0,
				offsetX: 23260,
				offsetY: 20305,
				width: 4758,
				height: 4758,
				desc: "Damp Cavern: Task Dungeon"
			}
		]
	},
	{
		id: 301,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/301.jpg",
				left: 0,
				top: 0,
				offsetX: 17407,
				offsetY: 16278,
				width: 7764,
				height: 7764,
				desc: "Damp Cavern: Task Dungeon"
			}
		]
	},
	{
		id: 302,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/302.jpg",
				left: 0,
				top: 0,
				offsetX: 19207,
				offsetY: 21835,
				width: 6106,
				height: 6106,
				desc: "Damp Cavern: Task Dungeon"
			}
		]
	},
	{
		id: 303,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/303.jpg",
				left: 0,
				top: 0,
				offsetX: 21548,
				offsetY: 22012,
				width: 5544,
				height: 5544,
				desc: "Damp Cavern: Task Dungeon"
			}
		]
	},
	{
		id: 304,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/304.jpg",
				left: 0,
				top: 0,
				offsetX: 21133,
				offsetY: 20188,
				width: 4581,
				height: 4581,
				desc: "Damp Cavern: Task Dungeon"
			}
		]
	},
	{
		id: 305,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/305.jpg",
				left: 0,
				top: 0,
				offsetX: 22780,
				offsetY: 22257,
				width: 3080,
				height: 3080,
				desc: "Forgotten Sepulchre: Task Dungeon"
			}
		]
	},
	{
		id: 306,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/306.jpg",
				left: 0,
				top: 0,
				offsetX: 21402,
				offsetY: 21453,
				width: 3797,
				height: 3797,
				desc: "Forgotten Sepulchre: Task Dungeon"
			}
		]
	},
	{
		id: 307,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/307.jpg",
				left: 0,
				top: 0,
				offsetX: 21402,
				offsetY: 21981,
				width: 4586,
				height: 4586,
				desc: "Forgotten Sepulchre: Task Dungeon"
			}
		]
	},
	{
		id: 308,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/308.jpg",
				left: 0,
				top: 0,
				offsetX: 22268,
				offsetY: 21761,
				width: 3492,
				height: 3492,
				desc: "Forgotten Sepulchre: Task Dungeon"
			}
		]
	},
	{
		id: 309,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/309.jpg",
				left: 0,
				top: 0,
				offsetX: 20602,
				offsetY: 20840,
				width: 4167,
				height: 4167,
				desc: "Forgotten Sepulchre: Task Dungeon"
			}
		]
	},
	{
		id: 345,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/345.jpg",
				left: 0,
				top: 0,
				offsetX: 15712,
				offsetY: 22831,
				width: 15100,
				height: 15100,
				desc: "Tomte Prison: Adventure Wing off Nisse's Lair"
			}
		]
	},
	{
		id: 346,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/346.jpg",
				left: 0,
				top: 0,
				offsetX: 15167,
				offsetY: 19274,
				width: 11214,
				height: 11214,
				desc: "Nisse's Retreat: Adventure Wing off Nisse's Lair"
			}
		]
	},
	{
		id: 371,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/371.jpg",
				left: 0,
				top: 0,
				offsetX: 20351,
				offsetY: 21341,
				width: 5113,
				height: 5113,
				desc: "History Repeats Itself: Instance"
			}
		]
	},
	{
		id: 372,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/372.jpg",
				left: 0,
				top: 0,
				offsetX: 19451,
				offsetY: 22103,
				width: 6013,
				height: 6013,
				desc: "Hounds of Arawn: Instance"
			}
		]
	},
	{
		id: 376,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/376.jpg",
				left: 0,
				top: 0,
				offsetX: 16941,
				offsetY: 23652,
				width: 17608,
				height: 17608,
				desc: "Goblin's Cookery: Adventure wing off Tepok's Mine"
			}
		]
	},
	{
		id: 377,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/377.jpg",
				left: 0,
				top: 0,
				offsetX: 17011,
				offsetY: 22467,
				width: 20090,
				height: 20090,
				desc: "The Beastmaster's Den: Adventure wing off Tepok's Mine"
			}
		]
	},
	{
		id: 379,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/379.jpg",
				left: 0,
				top: 0,
				offsetX: 18560,
				offsetY: 20674,
				width: 6272,
				height: 6272,
				desc: "Level 31-40 kill task dungeon"
			}
		]
	},
	{
		id: 380,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/380.jpg",
				left: 0,
				top: 0,
				offsetX: 15458,
				offsetY: 6137,
				width: 17706,
				height: 17706,
				desc: "Lair of Doom: Adventure wing off Catacombs of Cardova"
			}
		]
	},
	{
		id: 381,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/381.jpg",
				left: 0,
				top: 0,
				offsetX: 23258,
				offsetY: 14372,
				width: 17492,
				height: 17492,
				desc: "The Arena: Adventure wing off Catacombs of Cardova"
			}
		]
	},
	{
		id: 382,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/382.jpg",
				left: 0,
				top: 0,
				offsetX: 19200,
				offsetY: 22829,
				width: 4773,
				height: 4773,
				desc: "Level 31-40 kill task dungeon"
			}
		]
	},
	{
		id: 383,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/383.jpg",
				left: 0,
				top: 0,
				offsetX: 19072,
				offsetY: 19821,
				width: 4901,
				height: 4901,
				desc: "Level 31-40 kill task dungeon"
			}
		]
	},
	{
		id: 384,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/384.jpg",
				left: 0,
				top: 0,
				offsetX: 22196,
				offsetY: 17898,
				width: 12603,
				height: 12603,
				desc: "The Ritual Hall: Adventure wing off of Keltoi Fogou"
			}
		]
	},
	{
		id: 385,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/385.jpg",
				left: 0,
				top: 0,
				offsetX: 20092,
				offsetY: 20048,
				width: 9140,
				height: 9140,
				desc: "The Betrayer's Den: Adventure wing off of Keltoi Fogou"
			}
		]
	},
	{
		id: 386,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/386.jpg",
				left: 0,
				top: 0,
				offsetX: 22595,
				offsetY: 20864,
				width: 5862,
				height: 5862,
				desc: "the Sundered Tombs: Task Dungeon"
			}
		]
	},
	{
		id: 387,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/387.jpg",
				left: 0,
				top: 0,
				offsetX: 17066,
				offsetY: 17311,
				width: 7253,
				height: 7253,
				desc: "the Sundered Tombs: Task Dungeon"
			}
		]
	},
	{
		id: 388,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/388.jpg",
				left: 0,
				top: 0,
				offsetX: 19526,
				offsetY: 14992,
				width: 5975,
				height: 5975,
				desc: "the Sundered Tombs: Task Dungeon"
			}
		]
	},
	{
		id: 389,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/389.jpg",
				left: 0,
				top: 0,
				offsetX: 25070,
				offsetY: 14408,
				width: 18277,
				height: 18277,
				desc: ""
			}
		]
	},
	{
		id: 390,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/390.jpg",
				left: 0,
				top: 0,
				offsetX: 5711,
				offsetY: 7644,
				width: 30629,
				height: 30629,
				desc: ""
			}
		]
	},
	{
		id: 392,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/392.jpg",
				left: 0,
				top: 0,
				offsetX: 20447,
				offsetY: 16770,
				width: 9376,
				height: 9376,
				desc: "The Hall of Reawakening: Adventure wing off the Tomb of Mithra"
			}
		]
	},
	{
		id: 393,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/393.jpg",
				left: 0,
				top: 0,
				offsetX: 16735,
				offsetY: 17920,
				width: 9120,
				height: 9120,
				desc: "The Hidden Crypt: Adventure wing off the Tomb of Mithra"
			}
		]
	},
	{
		id: 396,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/396.jpg",
				left: 0,
				top: 0,
				offsetX: 17855,
				offsetY: 18942,
				width: 10572,
				height: 10572,
				desc: "Depths of Despair: Adventure wing off Lower Crypt"
			}
		]
	},
	{
		id: 397,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/397.jpg",
				left: 0,
				top: 0,
				offsetX: 19845,
				offsetY: 17897,
				width: 13623,
				height: 13623,
				desc: ""
			}
		]
	},
	{
		id: 400,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/400.jpg",
				left: 0,
				top: 0,
				offsetX: 20279,
				offsetY: 18176,
				width: 5795,
				height: 5795,
				desc: "Burial Tomb: Task Dungeon"
			}
		]
	},
	{
		id: 401,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/401.jpg",
				left: 0,
				top: 0,
				offsetX: 21055,
				offsetY: 21453,
				width: 3695,
				height: 3695,
				desc: "Burial Tomb: Task Dungeon"
			}
		]
	},
	{
		id: 402,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/402.jpg",
				left: 0,
				top: 0,
				offsetX: 21526,
				offsetY: 22543,
				width: 3569,
				height: 3569,
				desc: "Burial Tomb: Task Dungeon"
			}
		]
	},
	{
		id: 403,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/403.jpg",
				left: 0,
				top: 0,
				offsetX: 22764,
				offsetY: 22578,
				width: 3385,
				height: 3385,
				desc: "Burial Tomb: Task Dungeon"
			}
		]
	},
	{
		id: 404,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/404.jpg",
				left: 0,
				top: 0,
				offsetX: 22268,
				offsetY: 21917,
				width: 4451,
				height: 4451,
				desc: "Burial Tomb: Task Dungeon"
			}
		]
	},
	{
		id: 405,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/405.jpg",
				left: 0,
				top: 0,
				offsetX: 20010,
				offsetY: 21328,
				width: 4532,
				height: 4532,
				desc: "Desecrated Grounds: Task Dungeon"
			}
		]
	},
	{
		id: 406,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/406.jpg",
				left: 0,
				top: 0,
				offsetX: 22620,
				offsetY: 20560,
				width: 4873,
				height: 4873,
				desc: "Desecrated Grounds: Task Dungeon"
			}
		]
	},
	{
		id: 407,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/407.jpg",
				left: 0,
				top: 0,
				offsetX: 20432,
				offsetY: 21275,
				width: 3871,
				height: 3871,
				desc: "Desecrated Grounds: Task Dungeon"
			}
		]
	},
	{
		id: 408,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/408.jpg",
				left: 0,
				top: 0,
				offsetX: 22795,
				offsetY: 21917,
				width: 4430,
				height: 4430,
				desc: "Desecrated Grounds: Task Dungeon"
			}
		]
	},
	{
		id: 409,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/409.jpg",
				left: 0,
				top: 0,
				offsetX: 22497,
				offsetY: 22644,
				width: 4731,
				height: 4731,
				desc: "Desecrated Grounds: Task Dungeon"
			}
		]
	},
	{
		id: 410,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/410.jpg",
				left: 0,
				top: 0,
				offsetX: 19957,
				offsetY: 22884,
				width: 6361,
				height: 6361,
				desc: "Forgotten Mines: Task Dungeon"
			}
		]
	},
	{
		id: 411,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/411.jpg",
				left: 0,
				top: 0,
				offsetX: 22073,
				offsetY: 21604,
				width: 6105,
				height: 6105,
				desc: "Forgotten Mines: Task Dungeon"
			}
		]
	},
	{
		id: 412,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/412.jpg",
				left: 0,
				top: 0,
				offsetX: 20476,
				offsetY: 21942,
				width: 5855,
				height: 5855,
				desc: "Forgotten Mines: Task Dungeon"
			}
		]
	},
	{
		id: 413,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/413.jpg",
				left: 0,
				top: 0,
				offsetX: 21646,
				offsetY: 23856,
				width: 3659,
				height: 3659,
				desc: "Forgotten Mines: Task Dungeon"
			}
		]
	},
	{
		id: 414,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/414.jpg",
				left: 0,
				top: 0,
				offsetX: 23187,
				offsetY: 22467,
				width: 5498,
				height: 5498,
				desc: "Forgotten Mines: Task Dungeon"
			}
		]
	},
	{
		id: 415,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/415.jpg",
				left: 0,
				top: 0,
				offsetX: 22512,
				offsetY: 20608,
				width: 5248,
				height: 5248,
				desc: "The Funerary Hall: Task Dungeon"
			}
		]
	},
	{
		id: 416,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/416.jpg",
				left: 0,
				top: 0,
				offsetX: 19968,
				offsetY: 21805,
				width: 4005,
				height: 4005,
				desc: "The Funerary Hall: Task Dungeon"
			}
		]
	},
	{
		id: 417,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/417.jpg",
				left: 0,
				top: 0,
				offsetX: 23164,
				offsetY: 21383,
				width: 3295,
				height: 3295,
				desc: "The Funerary Hall: Task Dungeon"
			}
		]
	},
	{
		id: 418,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/418.jpg",
				left: 0,
				top: 0,
				offsetX: 21116,
				offsetY: 19410,
				width: 5632,
				height: 5632,
				desc: "The Funerary Hall: Task Dungeon"
			}
		]
	},
	{
		id: 419,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/419.jpg",
				left: 0,
				top: 0,
				offsetX: 20753,
				offsetY: 21504,
				width: 4224,
				height: 4224,
				desc: "The Funerary Hall: Task Dungeon"
			}
		]
	},
	{
		id: 420,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/420.jpg",
				left: 0,
				top: 0,
				offsetX: 23543,
				offsetY: 23201,
				width: 3449,
				height: 3449,
				desc: "The Sundered Tombs: Task Dungeon"
			}
		]
	},
	{
		id: 421,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/421.jpg",
				left: 0,
				top: 0,
				offsetX: 18600,
				offsetY: 18046,
				width: 10733,
				height: 10733,
				desc: "A Dream"
			}
		]
	},
	{
		id: 422,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/422.jpg",
				left: 0,
				top: 0,
				offsetX: 17885,
				offsetY: 13632,
				width: 13427,
				height: 13427,
				desc: "A Dream"
			}
		]
	},
	{
		id: 423,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/423.jpg",
				left: 0,
				top: 0,
				offsetX: 13277,
				offsetY: 15772,
				width: 20195,
				height: 20195,
				desc: "A Dream"
			}
		]
	},
	{
		id: 424,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/424.jpg",
				left: 0,
				top: 0,
				offsetX: 3025,
				offsetY: -350,
				width: 46240,
				height: 46240,
				desc: "A Dream"
			}
		]
	},
	{
		id: 425,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/425.jpg",
				left: 0,
				top: 0,
				offsetX: 9464,
				offsetY: 14598,
				width: 14727,
				height: 14727,
				desc: "The Lost Wing: Adventure wing off Stonehenge Barrows"
			}
		]
	},
	{
		id: 426,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/426.jpg",
				left: 0,
				top: 0,
				offsetX: 8156,
				offsetY: 14052,
				width: 16256,
				height: 16256,
				desc: "Deliah's Sanctuary: Adventure wing off Stonehenge Barrows"
			}
		]
	},
	{
		id: 427,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/427.jpg",
				left: 0,
				top: 0,
				offsetX: 19708,
				offsetY: 21200,
				width: 4959,
				height: 4959,
				desc: "The Cursed Barrow: Task Dungeon"
			}
		]
	},
	{
		id: 428,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/428.jpg",
				left: 0,
				top: 0,
				offsetX: 19456,
				offsetY: 21376,
				width: 4864,
				height: 4864,
				desc: "The Cursed Barrow: Task Dungeon"
			}
		]
	},
	{
		id: 429,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/429.jpg",
				left: 0,
				top: 0,
				offsetX: 15018,
				offsetY: 17137,
				width: 15065,
				height: 15065,
				desc: "Synblem's Lair"
			}
		]
	},
	{
		id: 430,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/430.jpg",
				left: 0,
				top: 0,
				offsetX: 15018,
				offsetY: 18075,
				width: 15779,
				height: 15779,
				desc: "The Plutonian Shore"
			}
		]
	},
	{
		id: 431,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/431.jpg",
				left: 0,
				top: 0,
				offsetX: 19968,
				offsetY: 21074,
				width: 5723,
				height: 5723,
				desc: "The Cursed Barrow: Task Dungeon"
			}
		]
	},
	{
		id: 433,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/433.jpg",
				left: 0,
				top: 0,
				offsetX: 12182,
				offsetY: 11555,
				width: 26904,
				height: 26904,
				desc: "Snarg's Grotto"
			}
		]
	},
	{
		id: 434,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/434.jpg",
				left: 0,
				top: 0,
				offsetX: 11791,
				offsetY: 20998,
				width: 15413,
				height: 15413,
				desc: "Maze of Tribulation"
			}
		]
	},
	{
		id: 435,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/435.jpg",
				left: 0,
				top: 0,
				offsetX: 20966,
				offsetY: 20374,
				width: 9981,
				height: 9981,
				desc: "The Smelting Pot"
			}
		]
	},
	{
		id: 436,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/436.jpg",
				left: 0,
				top: 0,
				offsetX: 20039,
				offsetY: 18537,
				width: 10316,
				height: 10316,
				desc: "Forges of Flame"
			}
		]
	},
	{
		id: 442,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/442.jpg",
				left: 0,
				top: 0,
				offsetX: 13696,
				offsetY: 18304,
				width: 11008,
				height: 11008,
				desc: "The Steward's Crypt: Adventure wing off Muire Tomb"
			}
		]
	},
	{
		id: 443,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/443.jpg",
				left: 0,
				top: 0,
				offsetX: 18522,
				offsetY: 23772,
				width: 10315,
				height: 10315,
				desc: "Serf's Folly: Adventure wing off Muire Tomb"
			}
		]
	},
	{
		id: 450,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/450.jpg",
				left: 0,
				top: 0,
				offsetX: 20377,
				offsetY: 21504,
				width: 4199,
				height: 4199,
				desc: "The Cursed Barrow: Task Dungeon"
			}
		]
	},
	{
		id: 451,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/451.jpg",
				left: 0,
				top: 0,
				offsetX: 21274,
				offsetY: 20763,
				width: 3942,
				height: 3942,
				desc: "The Cursed Barrow: Task Dungeon"
			}
		]
	},
	{
		id: 452,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/452.jpg",
				left: 0,
				top: 0,
				offsetX: 20806,
				offsetY: 22012,
				width: 3847,
				height: 3847,
				desc: "The Cursed Barrow: Task Dungeon"
			}
		]
	},
	{
		id: 453,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/453.jpg",
				left: 0,
				top: 0,
				offsetX: 21643,
				offsetY: 21533,
				width: 3078,
				height: 3078,
				desc: "The Cursed Barrow: Task Dungeon"
			}
		]
	},
	{
		id: 454,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/454.jpg",
				left: 0,
				top: 0,
				offsetX: 21134,
				offsetY: 21277,
				width: 4323,
				height: 4323,
				desc: "The Cursed Barrow: Task Dungeon"
			}
		]
	},
	{
		id: 349,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/349.jpg",
				left: 0,
				top: 0,
				offsetX: 20161,
				offsetY: 22092,
				width: 8144,
				height: 8144,
				desc: "Lio's Eternal Rest: Adventure wing off Cursed Tomb"
			}
		]
	},
	{
		id: 350,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/350.jpg",
				left: 0,
				top: 0,
				offsetX: 18975,
				offsetY: 20276,
				width: 11621,
				height: 11621,
				desc: "Liche's Unrest: Adventure wing off Cursed Tomb"
			}
		]
	},
	{
		id: 27,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/27.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "This rustic region is named after the current sovereign of Albion, King Constantine. It is said that Constantine was raised in the village of Holtham and began his training as a paladin within Caer Stamford. Today proud parents and supporters of the King send their children here for schooling and training."
			},
			{
				src: "/maps/28.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "This fabled land is where the first Viking clan landed upon the Midgard motherland. Here Clan Grenlock settled a bustling village named Hafheim and erected a formidable fortress that they called Thorsa Faste. The proud Vikings have never forgotten their roots and continue to protect this land."
			},
			{
				src: "/maps/29.jpg",
				left: 0,
				top: 0,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "This lush country is steeped in the legends of the Elven King, Lug Lamfhota. It is upon these shores that myths speak of King Lamfhota being gifted with the magical blade Fragarach by his foster father Manannan. The people of the village Fintain and the guardians of Dun Cormyra revere the legends to this day."
			}
		]
	},
	{
		id: 249,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/339.jpg",
				left: 0,
				top: 0,
				offsetX: 1738,
				offsetY: -3856,
				width: 45443,
				height: 45443,
				desc: "These fiery halls are home to horrors never before glimpsed by mortals from the world above. Amid the grotesque pillars and glowing embers dwells a demon host led by Azazel and his trusted Circle of Five."
			},
			{
				src: "/maps/340.jpg",
				left: 0,
				top: 0,
				offsetX: 4479,
				offsetY: 1452,
				width: 34115,
				height: 34115,
				desc: "The frozen Halls of Helgardh exist in a state of eternal winter far more cruel than any known in Midgard. Ceaseless snowfall, expansive ice, and fearsome foes greet all who would dare to challenge mighty Utgard-Lok and his Circle of Five in their lair."
			},
			{
				src: "/maps/341.jpg",
				left: 0,
				top: 0,
				offsetX: 4373,
				offsetY: 4140,
				width: 39408,
				height: 39408,
				desc: "This legendary gateway to the Otherworld has been tainted by the influence of Crom Cruiach. Corruption, disease, and demonic influence run rampant throughout these caves where the demon lord and his Circle of Five lieutenants thrive."
			},
			{
				src: "/maps/249.jpg",
				left: 0,
				top: 0,
				offsetX: 46,
				offsetY: 797,
				width: 43414,
				height: 43414,
				desc: "Darkness Falls is the demonic domain of Legion and his vast array of servants and followers.  Legion feeds on the warfare, bloodshed, strife, and misery.  Baited promises of power and riches lead many mortals astray and, inevitably, to their doom."
			}
		]
	},
	{
		id: 336,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/336.jpg",
				left: 0,
				top: 0,
				offsetX: 19292,
				offsetY: 11488,
				width: 29174,
				height: 29174,
				desc: "Before Geryon's conquest, this wing of Darkness Falls was ruled by three powerful demonic brothers. Two of the brothers swore fealty to Geryon and aid him in guarding the captive demonologist Anataeus."
			}
		]
	},
	{
		id: 337,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/337.jpg",
				left: 0,
				top: 0,
				offsetX: 16422,
				offsetY: 5752,
				width: 34913,
				height: 34913,
				desc: "Before Rugak's conquest, this wing of Darkness Falls was ruled by three powerful demonic brothers. Two of the brothers swore fealty to Rugak and aid him in guarding the captive Keeper Iraeda."
			}
		]
	},
	{
		id: 338,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/338.jpg",
				left: 0,
				top: 0,
				offsetX: 2684,
				offsetY: 5120,
				width: 41911,
				height: 41911,
				desc: "Before Bres' conquest, this wing of Darkness Falls was ruled by three powerful demonic brothers. Two of the brothers swore fealty to Bres and aid him in guarding the captive Keeper Garran and the Lia Fail."
			}
		]
	},
	{
		id: 348,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/348.jpg",
				left: 0,
				top: 0,
				offsetX: 1002,
				offsetY: 11712,
				width: 12260,
				height: 12260,
				desc: "A remnant from a less civilized age, the Gaol beneath Eddington Keep has not held prisoners in a generation. The tunnels still serve as an alternate entrance to the Keep, much to the Baron's regret."
			}
		]
	},
	{
		id: 351,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/351.jpg",
				left: 0,
				top: 0,
				offsetX: 22281,
				offsetY: 16352,
				width: 8172,
				height: 8172,
				desc: "A remnant from a less civilized age, the Gaol beneath Ei-Forr Keep has not held prisoners in a generation. The tunnels still serve as an alternate entrance to the Keep, much to Nephraal's regret."
			}
		]
	},
	{
		id: 352,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/352.jpg",
				left: 0,
				top: 0,
				offsetX: 15771,
				offsetY: 16166,
				width: 9674,
				height: 9674,
				desc: "A remnant from a less civilized age, the Gaol beneath Dun Chaoin has not held prisoners in a generation. The tunnels still serve as an alternate entrance to the castle, much to Morfesa's regret."
			}
		]
	},
	{
		id: 360,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/360.jpg",
				left: 0,
				top: 0,
				offsetX: 21188,
				offsetY: 22143,
				width: 5907,
				height: 5907,
				desc: "Visitors to the halls of King Eirik are greeted by brightly glowing braziers and magnificent statues. The newly-crowned ruler of Midgard holds court with Athr Hasetti Theyr, the Royal Illuminator, Quartermaster Dreiki, and the Weaponmasters of the Visindakona, beneath banners of the realm."
			}
		]
	},
	{
		id: 394,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/394.jpg",
				left: 0,
				top: 0,
				offsetX: 21863,
				offsetY: 23428,
				width: 4554,
				height: 4554,
				desc: "Once the seat of Arthur, the throne room of King Constantine sits deep within Camelot Castle.  Amid impressive statuary and tapestries, King Constantine struggles to restore Albion to greatness with the help of Chamberlain Harlen, Quartermaster Mills, the Weaponmasters, the Royal Illuminator, Sir Norcross and Advisor Wacian."
			}
		]
	},
	{
		id: 395,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/395.jpg",
				left: 0,
				top: 0,
				offsetX: 21954,
				offsetY: 23438,
				width: 4375,
				height: 4375,
				desc: "The Elven King's opulent throne room is lined with statues of Hibernian heroes and banners of the realm. Here, King Lug Lamfhota meets with his closest advisors, including Seneschal Desmond, Quartermaster Kindrey, the Weaponmasters of the paths, and his Royal Illuminator."
			}
		]
	},
	{
		id: 79,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/79.jpg",
				left: 0,
				top: 0,
				offsetX: 8257,
				offsetY: 1731,
				width: 36596,
				height: 36596,
				desc: "Welcome to Sobekite Eternal, where sudden death lurks in every shadow. Hear the echos of valiant adventurers past who have come before you and died. Make your way from the flooded halls of the Triton Chiefs through the temple itself and then into lair of the imposter. Defeat Runihara and lead your followers to victory."
			}
		]
	},
	{
		id: 36,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/36.jpg",
				left: 0,
				top: 0,
				offsetX: 8257,
				offsetY: 1731,
				width: 36596,
				height: 36596,
				desc: "Welcome to Sobekite Eternal, where sudden death lurks in every shadow. Hear the echos of valiant adventurers past who have come before you and died. Make your way from the flooded halls of the Triton Chiefs through the temple itself and then into lair of the imposter. Defeat Runihara and lead your followers to victory."
			}
		]
	},
	{
		id: 136,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/136.jpg",
				left: 0,
				top: 0,
				offsetX: 8257,
				offsetY: 1731,
				width: 36596,
				height: 36596,
				desc: "Welcome to Sobekite Eternal, where sudden death lurks in every shadow. Hear the echos of valiant adventurers past who have come before you and died. Make your way from the flooded halls of the Triton Chiefs through the temple itself and then into lair of the imposter. Defeat Runihara and lead your followers to victory."
			}
		]
	},
	{
		id: 89,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/89.jpg",
				left: 0,
				top: 0,
				offsetX: 8812,
				offsetY: -1840,
				width: 40378,
				height: 40378,
				desc: "You have entered fiery Deep Volcanus, where the blistering flame is enough to burn you to a crisp with a single flicker. Make sure you have what you need to cross the bridge of fire or your adventure will be short indeed. Once you pass the challenge of the four, you will be well on your way to your final meeting with Typhon."
			}
		]
	},
	{
		id: 46,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/46.jpg",
				left: 0,
				top: 0,
				offsetX: 8812,
				offsetY: -1840,
				width: 40378,
				height: 40378,
				desc: "You have entered fiery Deep Volcanus, where the blistering flame is enough to burn you to a crisp with a single flicker. Make sure you have what you need to cross the bridge of fire or your adventure will be short indeed. Once you pass the challenge of the four, you will be well on your way to your final meeting with Typhon."
			}
		]
	},
	{
		id: 146,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/146.jpg",
				left: 0,
				top: 0,
				offsetX: 8812,
				offsetY: -1840,
				width: 40378,
				height: 40378,
				desc: "You have entered fiery Deep Volcanus, where the blistering flame is enough to burn you to a crisp with a single flicker. Make sure you have what you need to cross the bridge of fire or your adventure will be short indeed. Once you pass the challenge of the four, you will be well on your way to your final meeting with Typhon."
			}
		]
	},
	{
		id: 78,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/78.jpg",
				left: 0,
				top: 0,
				offsetX: 17718,
				offsetY: 21741,
				width: 11101,
				height: 11101,
				desc: "Cetus' Pit stretches before you, waiting to claim its next victim. You can escape now through the southern chamber or venture into the pit, seeking your fortune or meeting your fate."
			}
		]
	},
	{
		id: 35,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/35.jpg",
				left: 0,
				top: 0,
				offsetX: 17718,
				offsetY: 21741,
				width: 11101,
				height: 11101,
				desc: "The Cetus' Pit stretches before you, waiting to claim its next victim. You can escape now through the southern chamber or venture into the pit, seeking your fortune or meeting your fate."
			}
		]
	},
	{
		id: 135,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/135.jpg",
				left: 0,
				top: 0,
				offsetX: 17718,
				offsetY: 21741,
				width: 11101,
				height: 11101,
				desc: "The Cetus' Pit stretches before you, waiting to claim its next victim. You can escape now through the southern chamber or venture into the pit, seeking your fortune or meeting your fate."
			}
		]
	},
	{
		id: 80,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/80.jpg",
				left: 0,
				top: 0,
				offsetX: 17786,
				offsetY: 392,
				width: 44265,
				height: 44265,
				desc: "Welcome to your watery grave in the Temple of Twilight. While separate chambers lie before you, reaching them may be your greatest test for the halls of this temple are filled with many fish willing to make you their food. The Medusa awaits those brave enough to stare into her beautiful eyes' forever."
			}
		]
	},
	{
		id: 37,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/37.jpg",
				left: 0,
				top: 0,
				offsetX: 17786,
				offsetY: 392,
				width: 44265,
				height: 44265,
				desc: "Welcome to your watery grave in the Temple of Twilight. While separate chambers lie before you, reaching them may be your greatest test for the halls of this temple are filled with many fish willing to make you their food. The Medusa awaits those brave enough to stare into her beautiful eyes' forever."
			}
		]
	},
	{
		id: 137,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/137.jpg",
				left: 0,
				top: 0,
				offsetX: 17786,
				offsetY: 392,
				width: 44265,
				height: 44265,
				desc: "Welcome to your watery grave in the Temple of Twilight. While separate chambers lie before you, reaching them may be your greatest test for the halls of this temple are filled with many fish willing to make you their food. The Medusa awaits those brave enough to stare into her beautiful eyes' forever."
			}
		]
	},
	{
		id: 83,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/83.jpg",
				left: 0,
				top: 0,
				offsetX: 3680,
				offsetY: 12244,
				width: 40247,
				height: 40247,
				desc: "You have entered the Halls of Ma'ati in the forgotten city of Necropolis where your life will slip away in the sands of time. Cross the river of death into the Land of Atum, but ensure you don't go swimming or you may find that some things are named that way for a reason. Finally, stand before the Great Ammut and be judged."
			}
		]
	},
	{
		id: 40,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/40.jpg",
				left: 0,
				top: 0,
				offsetX: 3680,
				offsetY: 12244,
				width: 40247,
				height: 40247,
				desc: "You have entered the Halls of Ma'ati in the forgotten city of Necropolis where your life will slip away in the sands of time. Cross the river of death into the Land of Atum, but ensure you don't go swimming or you may find that some things are named that way for a reason. Finally, stand before the Great Ammut and be judged."
			}
		]
	},
	{
		id: 140,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/140.jpg",
				left: 0,
				top: 0,
				offsetX: 3680,
				offsetY: 12244,
				width: 40247,
				height: 40247,
				desc: "You have entered the Halls of Ma'ati in the forgotten city of Necropolis where your life will slip away in the sands of time. Cross the river of death into the Land of Atum, but ensure you don't go swimming or you may find that some things are named that way for a reason. Finally, stand before the Great Ammut and be judged."
			}
		]
	},
	{
		id: 90,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/90.jpg",
				left: 0,
				top: 0,
				offsetX: 5948,
				offsetY: 728,
				width: 45181,
				height: 45181,
				desc: "You have reached the beautiful Aerus City where few mortals have walked since the beginning of time. Whispering ancient dead voices can still be heard in the warm gentle breezes around these floating lands. The last guardian awaits you, not imprisoned, but instead bound by duty to give its life to protect the most powerful secrets of Atlantis from misuse by those deemed unworthy. Are you worthy?"
			}
		]
	},
	{
		id: 47,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/47.jpg",
				left: 0,
				top: 0,
				offsetX: 5948,
				offsetY: 728,
				width: 45181,
				height: 45181,
				desc: "You have reached the beautiful Aerus City where few mortals have walked since the beginning of time. Whispering ancient dead voices can still be heard in the warm gentle breezes around these floating lands. The last guardian awaits you, not imprisoned, but instead bound by duty to give its life to protect the most powerful secrets of Atlantis from misuse by those deemed unworthy. Are you worthy?"
			}
		]
	},
	{
		id: 147,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/147.jpg",
				left: 0,
				top: 0,
				offsetX: 5948,
				offsetY: 728,
				width: 45181,
				height: 45181,
				desc: "You have reached the beautiful Aerus City where few mortals have walked since the beginning of time. Whispering ancient dead voices can still be heard in the warm gentle breezes around these floating lands. The last guardian awaits you, not imprisoned, but instead bound by duty to give its life to protect the most powerful secrets of Atlantis from misuse by those deemed unworthy. Are you worthy?"
			}
		]
	},
	{
		id: 489,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/489.jpg",
				left: 0,
				top: 0,
				offsetX: 5225,
				offsetY: 20217,
				width: 27836,
				height: 27836,
				desc: ""
			}
		]
	},
	{
		id: 180,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/180.jpg",
				left: 0,
				top: 0,
				offsetX: 16135,
				offsetY: 13034,
				width: 18040,
				height: 18040,
				desc: "Fomor City is home to the grotesque, malformed, and malevolent race of giants known as the Fomorians."
			}
		]
	},
	{
		id: 60,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/60.jpg",
				left: 0,
				top: 0,
				offsetX: 13277,
				offsetY: 15772,
				width: 20195,
				height: 20195,
				desc: "Straddling the lines that connect our world with Annwn, Caer Sidi is prison to countless restless souls, souls trapped there until the day when Apocalypse brings his wrath down upon the land of the living."
			}
		]
	},
	{
		id: 61,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/61.jpg",
				left: 0,
				top: 0,
				offsetX: 1929,
				offsetY: 9579,
				width: 53365,
				height: 53365,
				desc: "Krondon is the home of the Thrawn Ogres and ruled by a warrior queen."
			}
		]
	},
	{
		id: 150,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/150.jpg",
				left: 0,
				top: 0,
				offsetX: 3025,
				offsetY: -350,
				width: 46240,
				height: 46240,
				desc: "Trollheim was once the secluded home city of the Trolls.  In recent times, it has been overrun by the tyrannical and savage morvalt."
			}
		]
	},
	{
		id: 190,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/190.jpg",
				left: 0,
				top: 0,
				offsetX: 11062,
				offsetY: 6378,
				width: 24617,
				height: 24617,
				desc: "Tur Suil is the stronghold of Balor, one of the fomorian kings.  Beware the eye of Balor."
			}
		]
	},
	{
		id: 191,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/191.jpg",
				left: 0,
				top: 0,
				offsetX: 9793,
				offsetY: 18125,
				width: 40702,
				height: 40702,
				desc: "In an age long past, the titan Olcasgean was banished to the ends of the world where it could do no harm to man nor threaten the powers-that-be.  Ignorant of how the times had changed, this wayward child of Gaea seethed in anger for many millennia, plotting to exact its revenged upon those who no longer existed.  With its limited, though significant power, Olcasgean spread its roots out beneath soil of Hy Brasil, tainting much of the life that lived there."
			}
		]
	},
	{
		id: 160,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/160.jpg",
				left: 0,
				top: 0,
				offsetX: 1317,
				offsetY: 4139,
				width: 53125,
				height: 53125,
				desc: "With a citadel built over the bones of an ancient dragon, the mighty Ice Queen of the Hrimthursa rules over her frost giant society with a heavy hand."
			}
		]
	},
	{
		id: 161,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/161.jpg",
				left: 0,
				top: 0,
				offsetX: 2714,
				offsetY: -561,
				width: 34211,
				height: 34211,
				desc: "You are in the Lair of Iarnvidiur, deep within the heart of the Iarnwood Forest.  Iarnvidiur is a hideous giantess known for breeding two-headed wolves and other abominations of nature."
			}
		]
	},
	{
		id: 286,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/286.jpg",
				left: 0,
				top: 0,
				offsetX: 20046,
				offsetY: 20476,
				width: 5477,
				height: 5477,
				desc: "You are in a kill task region of the vendo caverns."
			}
		]
	},
	{
		id: 310,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/310.jpg",
				left: 0,
				top: 0,
				offsetX: 19582,
				offsetY: 19712,
				width: 6320,
				height: 6320,
				desc: "You are in a kill task region of the vendo caverns."
			}
		]
	},
	{
		id: 311,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/311.jpg",
				left: 0,
				top: 0,
				offsetX: 20981,
				offsetY: 20816,
				width: 3863,
				height: 3863,
				desc: "The Concealed Guardhouse: Task Dungeon."
			}
		]
	},
	{
		id: 312,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/312.jpg",
				left: 0,
				top: 0,
				offsetX: 19918,
				offsetY: 20732,
				width: 5221,
				height: 5221,
				desc: "The Concealed Guardhouse: Task Dungeon."
			}
		]
	},
	{
		id: 353,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/353.jpg",
				left: 0,
				top: 0,
				offsetX: 19148,
				offsetY: 23185,
				width: 13535,
				height: 13535,
				desc: "You are in an adventure wing within the vendo caverns."
			}
		]
	},
	{
		id: 284,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/284.jpg",
				left: 0,
				top: 0,
				offsetX: 20214,
				offsetY: 20992,
				width: 5040,
				height: 5040,
				desc: "You are in a kill task region of the vendo caverns."
			}
		]
	},
	{
		id: 285,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/285.jpg",
				left: 0,
				top: 0,
				offsetX: 21372,
				offsetY: 19820,
				width: 5892,
				height: 5892,
				desc: "You are in a kill task region of the vendo caverns."
			}
		]
	},
	{
		id: 314,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/314.jpg",
				left: 0,
				top: 0,
				offsetX: 22810,
				offsetY: 22773,
				width: 4499,
				height: 4499,
				desc: "You are in a kill task region of the vendo caverns."
			}
		]
	},
	{
		id: 354,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/354.jpg",
				left: 0,
				top: 0,
				offsetX: 22417,
				offsetY: 11644,
				width: 20095,
				height: 20095,
				desc: "You are in an adventure wing within the vendo caverns."
			}
		]
	},
	{
		id: 287,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/287.jpg",
				left: 0,
				top: 0,
				offsetX: 19597,
				offsetY: 19744,
				width: 8421,
				height: 8421,
				desc: "Level 31-40 kill task dungeon"
			}
		]
	},
	{
		id: 288,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/288.jpg",
				left: 0,
				top: 0,
				offsetX: 21893,
				offsetY: 22335,
				width: 6196,
				height: 6196,
				desc: "Level 31-40 kill task dungeon"
			}
		]
	},
	{
		id: 289,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/289.jpg",
				left: 0,
				top: 0,
				offsetX: 19684,
				offsetY: 22335,
				width: 5537,
				height: 5537,
				desc: "Level 31-40 kill task dungeon"
			}
		]
	},
	{
		id: 315,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/315.jpg",
				left: 0,
				top: 0,
				offsetX: 21123,
				offsetY: 21341,
				width: 5348,
				height: 5348,
				desc: "Gossamer Grotto: Task Dungeon"
			}
		]
	},
	{
		id: 316,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/316.jpg",
				left: 0,
				top: 0,
				offsetX: 21035,
				offsetY: 22335,
				width: 5605,
				height: 5605,
				desc: "Gossamer Grotto: Task Dungeon"
			}
		]
	},
	{
		id: 317,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/317.jpg",
				left: 0,
				top: 0,
				offsetX: 20956,
				offsetY: 22108,
				width: 5448,
				height: 5448,
				desc: "Gossamer Grotto: Task Dungeon"
			}
		]
	},
	{
		id: 318,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/318.jpg",
				left: 0,
				top: 0,
				offsetX: 19978,
				offsetY: 19148,
				width: 6891,
				height: 6891,
				desc: "Gossamer Grotto: Task Dungeon"
			}
		]
	},
	{
		id: 319,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/319.jpg",
				left: 0,
				top: 0,
				offsetX: 20989,
				offsetY: 18464,
				width: 8019,
				height: 8019,
				desc: "Gossamer Grotto: Task Dungeon"
			}
		]
	},
	{
		id: 357,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/357.jpg",
				left: 0,
				top: 0,
				offsetX: 19676,
				offsetY: 17445,
				width: 9732,
				height: 9732,
				desc: "You are in an adventure wing within Varulvhamn."
			}
		]
	},
	{
		id: 358,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/358.jpg",
				left: 0,
				top: 0,
				offsetX: 17284,
				offsetY: 18012,
				width: 9367,
				height: 9367,
				desc: "Home of the Drakulv, lotayal servants or bound slaves to Gjapinulva."
			}
		]
	},
	{
		id: 313,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/313.jpg",
				left: 0,
				top: 0,
				offsetX: 20989,
				offsetY: 18464,
				width: 8019,
				height: 8019,
				desc: "Concealed Guardhouse: Task Dungeon"
			}
		]
	},
	{
		id: 290,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/290.jpg",
				left: 0,
				top: 0,
				offsetX: 19806,
				offsetY: 23388,
				width: 6033,
				height: 6033,
				desc: "Underground Tunnel: Task Dungeon"
			}
		]
	},
	{
		id: 291,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/291.jpg",
				left: 0,
				top: 0,
				offsetX: 22235,
				offsetY: 22176,
				width: 5912,
				height: 5912,
				desc: "Underground Tunnel: Task Dungeon"
			}
		]
	},
	{
		id: 292,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/292.jpg",
				left: 0,
				top: 0,
				offsetX: 21183,
				offsetY: 19381,
				width: 7104,
				height: 7104,
				desc: "Underground Tunnel: Task Dungeon"
			}
		]
	},
	{
		id: 320,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/320.jpg",
				left: 0,
				top: 0,
				offsetX: 19191,
				offsetY: 22942,
				width: 6224,
				height: 6224,
				desc: "Underground Tunnel: Task Dungeon"
			}
		]
	},
	{
		id: 321,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/321.jpg",
				left: 0,
				top: 0,
				offsetX: 21719,
				offsetY: 22813,
				width: 5918,
				height: 5918,
				desc: "Underground Tunnel: Task Dungeon"
			}
		]
	},
	{
		id: 322,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/322.jpg",
				left: 0,
				top: 0,
				offsetX: 19954,
				offsetY: 18898,
				width: 7821,
				height: 7821,
				desc: "Underground Tunnel: Task Dungeon"
			}
		]
	},
	{
		id: 323,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/323.jpg",
				left: 0,
				top: 0,
				offsetX: 23516,
				offsetY: 21229,
				width: 4327,
				height: 4327,
				desc: "Underground Tunnel: Task Dungeon"
			}
		]
	},
	{
		id: 324,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/324.jpg",
				left: 0,
				top: 0,
				offsetX: 21625,
				offsetY: 18652,
				width: 6155,
				height: 6155,
				desc: "Underground Tunnel: Task Dungeon"
			}
		]
	},
	{
		id: 361,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/361.jpg",
				left: 0,
				top: 0,
				offsetX: 17191,
				offsetY: 20317,
				width: 16651,
				height: 16651,
				desc: "You are in an adventure wing within Spindelhalla."
			}
		]
	},
	{
		id: 362,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/362.jpg",
				left: 0,
				top: 0,
				offsetX: 21217,
				offsetY: 22149,
				width: 10764,
				height: 10764,
				desc: "Underground Tunnel: Task Dungeon"
			}
		]
	},
	{
		id: 327,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/327.jpg",
				left: 0,
				top: 0,
				offsetX: 11491,
				offsetY: 14825,
				width: 15455,
				height: 15455,
				desc: "You are in an adventure wing within Nytthiem."
			}
		]
	},
	{
		id: 329,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/329.jpg",
				left: 0,
				top: 0,
				offsetX: 20540,
				offsetY: 14691,
				width: 16465,
				height: 16465,
				desc: "You are in an adventure wing within the Burial Grounds."
			}
		]
	},
	{
		id: 331,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/331.jpg",
				left: 0,
				top: 0,
				offsetX: 12291,
				offsetY: 8291,
				width: 21433,
				height: 21433,
				desc: ""
			}
		]
	},
	{
		id: 332,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/332.jpg",
				left: 0,
				top: 0,
				offsetX: 2714,
				offsetY: -561,
				width: 34211,
				height: 34211,
				desc: ""
			}
		]
	},
	{
		id: 333,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/333.jpg",
				left: 0,
				top: 0,
				offsetX: 11719,
				offsetY: 2541,
				width: 35665,
				height: 35665,
				desc: ""
			}
		]
	},
	{
		id: 373,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/373.jpg",
				left: 0,
				top: 0,
				offsetX: 22942,
				offsetY: 18595,
				width: 18005,
				height: 18005,
				desc: "You are in an adventure wing within Nytthiem."
			}
		]
	},
	{
		id: 374,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/374.jpg",
				left: 0,
				top: 0,
				offsetX: 18800,
				offsetY: 17652,
				width: 11878,
				height: 11878,
				desc: "The tomb of a wealthy hunter, Childe, who became lost in a snow storm and supposedly died here despite disembowelling his horse and climbing into its body for protection."
			}
		]
	},
	{
		id: 375,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/375.jpg",
				left: 0,
				top: 0,
				offsetX: 10456,
				offsetY: 21434,
				width: 25817,
				height: 25817,
				desc: "You are in an adventure wing within the Otherworld."
			}
		]
	},
	{
		id: 439,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/439.jpg",
				left: 0,
				top: 0,
				offsetX: 16678,
				offsetY: 17374,
				width: 12982,
				height: 12982,
				desc: "You are in an adventure wing within Glashtin Forge."
			}
		]
	},
	{
		id: 440,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/440.jpg",
				left: 0,
				top: 0,
				offsetX: 18692,
				offsetY: 20260,
				width: 8733,
				height: 8733,
				desc: "You are in an adventure wing within Glashtin Forge."
			}
		]
	},
	{
		id: 432,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/432.jpg",
				left: 0,
				top: 0,
				offsetX: 20397,
				offsetY: 23235,
				width: 6129,
				height: 6129,
				desc: "You are in a kill task region of the Spraggon Den."
			}
		]
	},
	{
		id: 441,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/441.jpg",
				left: 0,
				top: 0,
				offsetX: 20140,
				offsetY: 22813,
				width: 7968,
				height: 7968,
				desc: "The Dismal Grotto."
			}
		]
	},
	{
		id: 444,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/444.jpg",
				left: 0,
				top: 0,
				offsetX: 16135,
				offsetY: 13034,
				width: 18040,
				height: 18040,
				desc: "A Dream"
			}
		]
	},
	{
		id: 455,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/455.jpg",
				left: 0,
				top: 0,
				offsetX: 21548,
				offsetY: 22813,
				width: 5920,
				height: 5920,
				desc: "The Dismal Grotto. Task Dungeon 1"
			}
		]
	},
	{
		id: 456,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/456.jpg",
				left: 0,
				top: 0,
				offsetX: 23292,
				offsetY: 21261,
				width: 4289,
				height: 4289,
				desc: "The Dismal Grotto."
			}
		]
	},
	{
		id: 457,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/457.jpg",
				left: 0,
				top: 0,
				offsetX: 20883,
				offsetY: 19812,
				width: 5337,
				height: 5337,
				desc: "The Dismal Grotto."
			}
		]
	},
	{
		id: 458,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/458.jpg",
				left: 0,
				top: 0,
				offsetX: 22383,
				offsetY: 20914,
				width: 4337,
				height: 4337,
				desc: "The Dismal Grotto."
			}
		]
	},
	{
		id: 459,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/459.jpg",
				left: 0,
				top: 0,
				offsetX: 19637,
				offsetY: 22813,
				width: 5911,
				height: 5911,
				desc: "The Dismal Grotto."
			}
		]
	},
	{
		id: 475,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/475.jpg",
				left: 0,
				top: 0,
				offsetX: 19504,
				offsetY: 21149,
				width: 9120,
				height: 9120,
				desc: "You are in an adventure wing within the Spraggon Den."
			}
		]
	},
	{
		id: 476,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/476.jpg",
				left: 0,
				top: 0,
				offsetX: 18549,
				offsetY: 22273,
				width: 7958,
				height: 7958,
				desc: "You are in an adventure wing within the Spraggon Den."
			}
		]
	},
	{
		id: 471,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/471.jpg",
				left: 0,
				top: 0,
				offsetX: 22688,
				offsetY: 21699,
				width: 5014,
				height: 5014,
				desc: "You are in a kill task region of the Coruscating Mine."
			}
		]
	},
	{
		id: 472,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/472.jpg",
				left: 0,
				top: 0,
				offsetX: 19826,
				offsetY: 21443,
				width: 5242,
				height: 5242,
				desc: "You are in a kill task region of the Coruscating Mine."
			}
		]
	},
	{
		id: 473,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/473.jpg",
				left: 0,
				top: 0,
				offsetX: 23578,
				offsetY: 22804,
				width: 5923,
				height: 5923,
				desc: "You are in a kill task region of the Coruscating Mine."
			}
		]
	},
	{
		id: 474,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/474.jpg",
				left: 0,
				top: 0,
				offsetX: 21752,
				offsetY: 21200,
				width: 5257,
				height: 5257,
				desc: "You are in a kill task region of the Coruscating Mine."
			}
		]
	},
	{
		id: 482,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/482.jpg",
				left: 0,
				top: 0,
				offsetX: 18819,
				offsetY: 21059,
				width: 7674,
				height: 7674,
				desc: "You are in a kill task region of the Coruscating Mine."
			}
		]
	},
	{
		id: 485,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/485.jpg",
				left: 0,
				top: 0,
				offsetX: 8812,
				offsetY: -1840,
				width: 40378,
				height: 40378,
				desc: "A Dream"
			}
		]
	},
	{
		id: 486,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/486.jpg",
				left: 0,
				top: 0,
				offsetX: 5948,
				offsetY: 728,
				width: 45181,
				height: 45181,
				desc: "A Dream"
			}
		]
	},
	{
		id: 487,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/487.jpg",
				left: 0,
				top: 0,
				offsetX: 10131,
				offsetY: 22756,
				width: 25817,
				height: 25817,
				desc: "You are in an adventure wing within the Coruscating Mine."
			}
		]
	},
	{
		id: 488,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/488.jpg",
				left: 0,
				top: 0,
				offsetX: 22467,
				offsetY: 17914,
				width: 11789,
				height: 11789,
				desc: "You are in an adventure wing within the Coruscating Mine."
			}
		]
	},
	{
		id: 437,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/437.jpg",
				left: 0,
				top: 0,
				offsetX: 21760,
				offsetY: 20798,
				width: 10317,
				height: 10317,
				desc: "You are in an adventure wing within the Glashtin Forge."
			}
		]
	},
	{
		id: 438,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/438.jpg",
				left: 0,
				top: 0,
				offsetX: 21760,
				offsetY: 17260,
				width: 11595,
				height: 11595,
				desc: "You are in an adventure wing within the Glashtin Forge."
			}
		]
	},
	{
		id: 494,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/494.jpg",
				left: 0,
				top: 0,
				offsetX: 19845,
				offsetY: 17897,
				width: 13623,
				height: 13623,
				desc: ""
			}
		]
	},
	{
		id: 495,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/495.jpg",
				left: 0,
				top: 0,
				offsetX: 18150,
				offsetY: 19531,
				width: 9983,
				height: 9983,
				desc: "You are in an adventure wing within the Deadlands."
			}
		]
	},
	{
		id: 445,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/445.jpg",
				left: 0,
				top: 0,
				offsetX: 3680,
				offsetY: 12244,
				width: 40247,
				height: 40247,
				desc: "A Dream"
			}
		]
	},
	{
		id: 448,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/448.jpg",
				left: 0,
				top: 0,
				offsetX: 21884,
				offsetY: 22071,
				width: 4868,
				height: 4868,
				desc: "The Dark Caverns. Task Dungeon 7"
			}
		]
	},
	{
		id: 449,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/449.jpg",
				left: 0,
				top: 0,
				offsetX: 20711,
				offsetY: 19487,
				width: 8017,
				height: 8017,
				desc: "The Dark Caverns"
			}
		]
	},
	{
		id: 465,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/465.jpg",
				left: 0,
				top: 0,
				offsetX: 21747,
				offsetY: 22759,
				width: 3889,
				height: 3889,
				desc: "The Dark Caverns"
			}
		]
	},
	{
		id: 466,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/466.jpg",
				left: 0,
				top: 0,
				offsetX: 22170,
				offsetY: 22214,
				width: 4502,
				height: 4502,
				desc: "The Dark Caverns."
			}
		]
	},
	{
		id: 467,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/467.jpg",
				left: 0,
				top: 0,
				offsetX: 22417,
				offsetY: 22532,
				width: 3806,
				height: 3806,
				desc: "The Dark Caverns."
			}
		]
	},
	{
		id: 468,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/468.jpg",
				left: 0,
				top: 0,
				offsetX: 20722,
				offsetY: 21768,
				width: 5169,
				height: 5169,
				desc: "The Dark Caverns."
			}
		]
	},
	{
		id: 469,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/469.jpg",
				left: 0,
				top: 0,
				offsetX: 21173,
				offsetY: 21133,
				width: 5172,
				height: 5172,
				desc: "The Dark Caverns."
			}
		]
	},
	{
		id: 483,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/483.jpg",
				left: 0,
				top: 0,
				offsetX: 18667,
				offsetY: 13824,
				width: 10983,
				height: 10983,
				desc: "You are in an adventure wing within the Koalinth Caverns."
			}
		]
	},
	{
		id: 484,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/484.jpg",
				left: 0,
				top: 0,
				offsetX: 15433,
				offsetY: 22813,
				width: 11015,
				height: 11015,
				desc: "You are in an adventure wing within the Koalinth Caverns."
			}
		]
	},
	{
		id: 460,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/460.jpg",
				left: 0,
				top: 0,
				offsetX: 22810,
				offsetY: 20859,
				width: 5642,
				height: 5642,
				desc: "The Accursed Caves."
			}
		]
	},
	{
		id: 461,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/461.jpg",
				left: 0,
				top: 0,
				offsetX: 22244,
				offsetY: 20920,
				width: 5215,
				height: 5215,
				desc: "The Accursed Caves."
			}
		]
	},
	{
		id: 462,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/462.jpg",
				left: 0,
				top: 0,
				offsetX: 21979,
				offsetY: 21201,
				width: 5960,
				height: 5960,
				desc: "The Accursed Caves."
			}
		]
	},
	{
		id: 463,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/463.jpg",
				left: 0,
				top: 0,
				offsetX: 18525,
				offsetY: 21567,
				width: 4246,
				height: 4246,
				desc: "The Accursed Caves."
			}
		]
	},
	{
		id: 464,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/464.jpg",
				left: 0,
				top: 0,
				offsetX: 20159,
				offsetY: 21771,
				width: 6959,
				height: 6959,
				desc: "The Accursed Caves."
			}
		]
	},
	{
		id: 477,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/477.jpg",
				left: 0,
				top: 0,
				offsetX: 20700,
				offsetY: 20734,
				width: 4680,
				height: 4680,
				desc: "Level 31-40 kill task dungeon"
			}
		]
	},
	{
		id: 478,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/478.jpg",
				left: 0,
				top: 0,
				offsetX: 22170,
				offsetY: 21684,
				width: 6361,
				height: 6361,
				desc: "Level 31-40 kill task dungeon"
			}
		]
	},
	{
		id: 479,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/479.jpg",
				left: 0,
				top: 0,
				offsetX: 17262,
				offsetY: 14429,
				width: 11199,
				height: 11199,
				desc: "You are in an adventure wing within Triebh Caillte."
			}
		]
	},
	{
		id: 480,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/480.jpg",
				left: 0,
				top: 0,
				offsetX: 15679,
				offsetY: 19407,
				width: 10933,
				height: 10933,
				desc: "You are in an adventure wing within Triebh Caillte."
			}
		]
	},
	{
		id: 481,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/481.jpg",
				left: 0,
				top: 0,
				offsetX: 20109,
				offsetY: 21002,
				width: 6830,
				height: 6830,
				desc: "Level 31-40 kill task dungeon"
			}
		]
	},
	{
		id: 446,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/446.jpg",
				left: 0,
				top: 0,
				offsetX: 2721,
				offsetY: 1449,
				width: 31679,
				height: 31679,
				desc: "Within a rift of the endless Veil."
			}
		]
	},
	{
		id: 447,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/447.jpg",
				left: 0,
				top: 0,
				offsetX: 2158,
				offsetY: 714,
				width: 27312,
				height: 27312,
				desc: ""
			}
		]
	},
	{
		id: 491,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/491.jpg",
				left: 0,
				top: 0,
				offsetX: 14174,
				offsetY: 20326,
				width: 16818,
				height: 16818,
				desc: "You are in an adventure wing within the Queen's Labrynth."
			}
		]
	},
	{
		id: 492,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/492.jpg",
				left: 0,
				top: 0,
				offsetX: 13304,
				offsetY: 23234,
				width: 20417,
				height: 20417,
				desc: "You are in an adventure wing within the Queen's Labrynth."
			}
		]
	},
	{
		id: 49,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/49.jpg",
				left: 0,
				top: 0,
				offsetX: 13706,
				offsetY: 5391,
				width: 39019,
				height: 39019,
				desc: ""
			}
		]
	},
	{
		id: 470,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/470.jpg",
				left: 0,
				top: 0,
				offsetX: 21965,
				offsetY: 21752,
				width: 4649,
				height: 4649,
				desc: "You are within a Half Orc Command Post."
			}
		]
	},
	{
		id: 48,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/48.jpg",
				left: 0,
				top: 0,
				offsetX: 16622,
				offsetY: 13583,
				width: 12694,
				height: 12694,
				desc: "A Dream"
			}
		]
	},
	{
		id: 496,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/496.jpg",
				left: 0,
				top: 0,
				offsetX: 25070,
				offsetY: 14408,
				width: 18277,
				height: 18277,
				desc: "You are in an adventuring wing within Nyttheim."
			}
		]
	},
	{
		id: 45,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/45.jpg",
				left: 0,
				top: 0,
				offsetX: 20046,
				offsetY: 19583,
				width: 7525,
				height: 7525,
				desc: "You are within the Great Pyramid."
			}
		]
	},
	{
		id: 91,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/91.jpg",
				left: 0,
				top: 0,
				offsetX: 19843,
				offsetY: 19844,
				width: 7929,
				height: 7929,
				desc: "You have entered the heavenly body of the sky, a place protected by a particularly powerful guardian."
			}
		]
	},
	{
		id: 145,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/145.jpg",
				left: 0,
				top: 0,
				offsetX: 20046,
				offsetY: 19583,
				width: 7525,
				height: 7525,
				desc: "You are within the Great Pyramid."
			}
		]
	},
	{
		id: 88,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/88.jpg",
				left: 0,
				top: 0,
				offsetX: 20046,
				offsetY: 19583,
				width: 7525,
				height: 7525,
				desc: "You are within the Great Pyramid."
			}
		]
	},
	{
		id: 325,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/325.jpg",
				left: 0,
				top: 0,
				offsetX: 1067,
				offsetY: 1160,
				width: 12498,
				height: 12498,
				desc: "The Forgotten Tunnels"
			}
		]
	},
	{
		id: 326,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/326.jpg",
				left: 0,
				top: 0,
				offsetX: 19070,
				offsetY: 19153,
				width: 13302,
				height: 13302,
				desc: "The Hidden Lair"
			}
		]
	},
	{
		id: 328,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/328.jpg",
				left: 0,
				top: 0,
				offsetX: 8866,
				offsetY: 14997,
				width: 19235,
				height: 19235,
				desc: "The Hidden Lair"
			}
		]
	},
	{
		id: 355,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/355.jpg",
				left: 0,
				top: 0,
				offsetX: 15031,
				offsetY: 12894,
				width: 12684,
				height: 12684,
				desc: "Tethra's Stronghold"
			}
		]
	},
	{
		id: 356,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/356.jpg",
				left: 0,
				top: 0,
				offsetX: 20724,
				offsetY: 23726,
				width: 10172,
				height: 10172,
				desc: "Barrow of Restless Dead"
			}
		]
	},
	{
		id: 359,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/359.jpg",
				left: 0,
				top: 0,
				offsetX: 12488,
				offsetY: 8879,
				width: 16718,
				height: 16718,
				desc: "Red Dagger Hideout"
			}
		]
	},
	{
		id: 233,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/233.jpg",
				left: 0,
				top: 0,
				offsetX: 13562,
				offsetY: 15091,
				width: 23938,
				height: 23938,
				desc: "Dark and dank, the Summoner's Hall proves to be an uninviting domain."
			}
		]
	},
	{
		id: 244,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/244.jpg",
				left: 0,
				top: 0,
				offsetX: 6022,
				offsetY: 5176,
				width: 42340,
				height: 42340,
				desc: "No corner is safe within the Passage of Conflict.  Your enemies may lurk beyond any turn."
			}
		]
	},
	{
		id: 62,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/62.jpg",
				left: 0,
				top: 0,
				offsetX: 19334,
				offsetY: 21177,
				width: 7410,
				height: 7410,
				desc: "You find yourself in a large cave beneath the city of Avalon.  Unique crystalline structures grow from the floor, walls, and ceiling.  It is rumored that a two-headed dragon has claimed this place as its lair."
			}
		]
	},
	{
		id: 365,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/365.jpg",
				left: 0,
				top: 0,
				offsetX: 21965,
				offsetY: 21752,
				width: 4649,
				height: 4649,
				desc: "Bandits Lair"
			}
		]
	},
	{
		id: 366,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/366.jpg",
				left: 0,
				top: 0,
				offsetX: 21965,
				offsetY: 21752,
				width: 4649,
				height: 4649,
				desc: "Gnolls Lair"
			}
		]
	},
	{
		id: 367,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/367.jpg",
				left: 0,
				top: 0,
				offsetX: 22810,
				offsetY: 21952,
				width: 3716,
				height: 3716,
				desc: "Vandrs Bane"
			}
		]
	},
	{
		id: 368,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/368.jpg",
				left: 0,
				top: 0,
				offsetX: 22058,
				offsetY: 23118,
				width: 3489,
				height: 3489,
				desc: "Past and Present"
			}
		]
	},
	{
		id: 369,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/369.jpg",
				left: 0,
				top: 0,
				offsetX: 20492,
				offsetY: 20522,
				width: 5055,
				height: 5055,
				desc: "You are within a Half Orc Camp."
			}
		]
	},
	{
		id: 370,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/370.jpg",
				left: 0,
				top: 0,
				offsetX: 21965,
				offsetY: 21752,
				width: 4649,
				height: 4649,
				desc: "Brutal Realization"
			}
		]
	},
	{
		id: 10,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/26.jpg",
				left: 0,
				top: 0,
				offsetX: 21900,
				offsetY: 13350,
				width: 11200,
				height: 11200,
				desc: "You are in the grand city of Camelot, capital city of Albion."
			}
		]
	},
	{
		id: 50,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/50.jpg",
				left: 0,
				top: 0,
				offsetX: 10130,
				offsetY: 11915,
				width: 28840,
				height: 28840,
				desc: "The once beautiful city of Avalon has been reduced to smoldering rubble as a result of the Drakoran invasion."
			}
		]
	},
	{
		id: 101,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/120.jpg",
				left: 0,
				top: 0,
				offsetX: 18580,
				offsetY: 17917,
				width: 11455,
				height: 11455,
				desc: "You are in the glorious city of Jordheim, the capital city of Midgard."
			}
		]
	},
	{
		id: 201,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/209.jpg",
				left: 0,
				top: 0,
				offsetX: 9900,
				offsetY: 15750,
				width: 17400,
				height: 17400,
				desc: "You are in the brilliant city of Tir na Nog, the capital city of Hibernia."
			}
		]
	},
	{
		id: 245,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/245.jpg",
				left: 0,
				top: 0,
				offsetX: 1641,
				offsetY: 1157,
				width: 62582,
				height: 62582,
				desc: "This immense complex has served many purposes in its lifetime, acting as home, capitol, fortress and prison to the Minotaur race. Much of its architecture was shaped by the Relics, first designed for their protection and later twisted by their dark power.  Sealed for centuries, corruption and chaos now rule these echoing halls."
			}
		]
	},
	{
		id: 391,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/391.jpg",
				left: 0,
				top: 0,
				offsetX: 20001,
				offsetY: 20529,
				width: 4574,
				height: 4574,
				desc: ""
			}
		]
	},
	{
		id: 398,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/398.jpg",
				left: 0,
				top: 0,
				offsetX: 20208,
				offsetY: 20711,
				width: 4367,
				height: 4367,
				desc: ""
			}
		]
	},
	{
		id: 399,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/399.jpg",
				left: 0,
				top: 0,
				offsetX: 20729,
				offsetY: 20970,
				width: 3883,
				height: 3883,
				desc: ""
			}
		]
	},
	{
		id: 192,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/192.jpg",
				left: 0,
				top: 0,
				offsetX: 22788,
				offsetY: 21546,
				width: 4717,
				height: 4717,
				desc: "Between the warm, inviting torchlight and the soft padding sounds of the High Guardians patrolling about, you almost feel at home within the High Consul's newly carved private sanctum. If it wasn't for the importance of the task at hand, you'd almost consider asking to stay awhile."
			}
		]
	},
	{
		id: 193,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/193.jpg",
				left: 0,
				top: 0,
				offsetX: 22788,
				offsetY: 21546,
				width: 4717,
				height: 4717,
				desc: "Between the warm, inviting torchlight and the soft padding sounds of the High Guardians patrolling about, you almost feel at home within the High Consul's newly carved private sanctum. If it wasn't for the importance of the task at hand, you'd almost consider asking to stay awhile."
			}
		]
	},
	{
		id: 194,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/194.jpg",
				left: 0,
				top: 0,
				offsetX: 22788,
				offsetY: 21546,
				width: 4717,
				height: 4717,
				desc: "Between the warm, inviting torchlight and the soft padding sounds of the High Guardians patrolling about, you almost feel at home within the High Consul's newly carved private sanctum. If it wasn't for the importance of the task at hand, you'd almost consider asking to stay awhile."
			}
		]
	},
	{
		id: 275,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/275.jpg",
				left: 97,
				top: 86,
				offsetX: 0,
				offsetY: 0,
				width: 0,
				height: 0,
				desc: "Manannan's Room: Instance. Ellan Vannin is an ancient island originally controlled by the Manx people and their ruler, Manannan mac Lir. His spirit was released when the portals opened to the Otherworlds and disturbed his final resting place. He rules here again."
			}
		]
	},
	{
		id: 277,
		width: 256,
		height: 256,
		zones: [
			{
				src: "/maps/277.jpg",
				left: 0,
				top: 0,
				offsetX: 1317,
				offsetY: 4139,
				width: 53125,
				height: 53125,
				desc: ""
			}
		]
	},
];
