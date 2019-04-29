import uuid from "uuid/v4";
const TweenData = require("./tween");
export const key = `id-${uuid()}`;

const gettingStarted = {
	name: "Getting Started",
	key,
	contents: [
		[
			{
				component: "copy",
				value: `Getting started with Nervo is pretty simple. First, installation.`,
			},
			// {
			// 	component: "headline",
			// 	value: `Installation`,
			// 	type: "h3",
			// },
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
				component: "copy",
				value: `Import the library as Nervo.`,
			},
			// {
			// 	component: "headline",
			// 	value: `Import`,
			// 	type: "h3",
			// },
			{
				component: "code",
				value: {
					source: "import.js",
				},
			},
		],
		[
			// {
			// 	component: "headline",
			// 	value: `Create a Tween`,
			// 	type: "h3",
			// },
			{
				component: "code",
				value: {
					source: "import.js",
				},
			},
		],
	],
};

export default gettingStarted;
