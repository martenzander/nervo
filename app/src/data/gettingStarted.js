import uuid from "uuid/v4";
const TweenData = require("./tween");
export const key = `id-${uuid()}`;

console.log(TweenData.keys.section);

const gettingStarted = {
	name: "Getting Started",
	key,
	contents: [
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
		[
			{
				component: "headline",
				value: `Create a <a href="#${TweenData.keys.section}">Tween</a>`,
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

export default gettingStarted;
