const Tween = require("./../js/Tween");
import uuid from "uuid/v4";
export const key = `id-${uuid()}`;

const tween = {
	name: "Tween",
	key,
	contents: [
		{
			component: "copy",
			value:
				"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
		},
		{
			component: "canvas",
			value: Tween,
		},
		{
			component: "headline",
			value: "Constructor",
			type: "h3",
		},
		{
			component: "code",
			value: {
				source: "tweenConstructor.js",
			},
		},
		{
			component: "headline",
			value: "Origin",
			type: "h4",
		},
		{
			component: "copy",
			value:
				"None of them is offering the whole bandwidth of possible options. E.g. I wanted to switch between a flex, inline-block or float based grid as well as I wanted to be able to overwrite certain parameters like gutter or column-count breakpoint wise. That is how I came up with the idea to create my very own grid compiler and Mesh wa.",
		},
		{
			component: "headline",
			value: "Target",
			type: "h4",
		},
		{
			component: "copy",
			value: `Lorem <a href='#${key}'>ipsum</a> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
		},
		{
			component: "headline",
			value: "Options",
			type: "h4",
		},
		{
			component: "copy",
			value:
				"Lorem <a href='#Test'>ipsum</a> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
		},
		{
			component: "headline",
			value: "Properties",
			type: "h3",
		},
		{
			component: "copy",
			value:
				"Lorem <a href='#Test'>ipsum</a> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
		},

		// {
		// 	component: "codePen",
		// 	value:
		// 		"//codepen.io/digitalwingman/embed/jRrLXv/?height=265&theme-id=1&dark-tab=js,result",
		// },
	],
};
export default tween;
