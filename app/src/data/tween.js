const Tween = require("./../js/Tween");
import uuid from "uuid/v4";
export const key = `id-${uuid()}`;

const tween = {
	name: "Nervo.Tween()",
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
			value: Tween,
		},
		// {
		// 	component: "codePen",
		// 	value:
		// 		"//codepen.io/digitalwingman/embed/jRrLXv/?height=265&theme-id=1&dark-tab=js,result",
		// },
	],
};
export default tween;
