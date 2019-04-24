const Timeline = require("./../js/Timeline");

const tween = {
	name: "Timeline",
	contents: [
		{
			component: "copy",
			value:
				"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
		},
		{
			component: "code",
			value: {
				source: "tween.js",
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
