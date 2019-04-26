const Timeline = require("./../js/Timeline");
import uuid from "uuid/v4";
export const key = `id-${uuid()}`;

const tween = {
	name: "Nervo.Timeline()",
	key,
	contents: [
		{
			component: "copy",
			value:
				"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
		},
		{
			component: "code",
			value: {
				source: "tweenConstructor.js",
			},
		},
		{
			component: "canvas",
			value: Timeline,
		},
		// {
		// 	component: "codePen",
		// 	value: "//codepen.io/SlimMarten/embed/ryzjPe/?height=497&theme-id=1&dark-tab=result",
		// },
	],
};
export default tween;
