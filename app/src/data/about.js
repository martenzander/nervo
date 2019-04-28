import uuid from "uuid/v4";
export const key = `id-${uuid()}`;

const about = {
	name: "About Nervo",
	key,
	contents: [
		[
			{
				component: "copy",
				value:
					"Nervo is a simple JavaScript animation library providing basic tweening functionality. It is designed to be flexible, intuitive and easy to learn. Nervo allows you to create single Tweens or control multiple instances within a Timeline.",
			},
			// {
			// 	component: "headline",
			// 	value: `Installation`,
			// 	type: "h3",
			// },
			// {
			// 	component: "code",
			// 	value: {
			// 		source: "install.sh",
			// 		isCommand: true,
			// 	},
			// },
			// {
			// 	component: "headline",
			// 	value: `Getting Started`,
			// 	type: "h3",
			// },
			// {
			// 	component: "code",
			// 	value: {
			// 		source: "import.js",
			// 	},
			// },
		],
		[
			{
				component: "headline",
				value: `Installation`,
				type: "h3",
			},
			{
				component: "code",
				value: {
					source: "install.sh",
					isCommand: true,
				},
			},
		],
		[
			{
				component: "headline",
				value: `Import`,
				type: "h3",
			},
			{
				component: "code",
				value: {
					source: "import.js",
				},
			},
		],
	],
};

export default about;
