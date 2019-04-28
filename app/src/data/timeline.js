import * as Nervo from "./../../../src/js/index";
const reference = new Nervo.Timeline([], {});
const TimelineExample = require("./../js/Timeline");
import uuid from "uuid/v4";

// keys
const keys = {
	section: `id-${uuid()}`,
};

for (const key in reference) {
	keys[key] = `id-${uuid()}`;
}

// propsList
const propsBlackList = ["isNervo"];
const propertyMethods = ["easing", "onProgress", "onComplete"];
const propsList = [];
const propertyNames = [];

for (const key in reference) {
	propertyNames.push(key);
}
propertyNames.sort();

propertyNames.forEach(key => {
	propertyNames.push(key);

	const item = {
		name: `${key}`,
		value: `: ${typeof reference[key]}`,
		readonly: !Object.getOwnPropertyDescriptor(reference, key).writable,
		key: keys[key],
	};

	switch (key) {
		case "autoStart":
			item.copy = "If set to <b>true</b> the timeline starts immediately after construction.";
			break;
		case "children":
			item.copy = "Contains a list of Tracks. Default: <b>null</b>";
			break;
		case "currentTime":
			item.copy = "Past time since timeline start.";
			break;
		case "duration":
			item.copy = "A floating point number defining the length of the timeline.";
			break;
		case "easing":
			item.copy = "Callback function that interpolates the progress.";
			break;
		case "isActive":
			item.copy = "Returns <b>true</b> when the timeline is playing.";
			break;
		case "isTimeline":
			item.copy = "Returns <b>true</b>.";
			break;
		case "loop":
			item.copy = "Whether the timeline will loop when finished.";
			break;
		case "options":
			item.copy = "Object handed over to constructor.";
			break;
		case "timeScale":
			item.copy =
				"A floating number scaling the progress of the timeline. Default: <b>1.0</b>.";
			break;
		case "type":
			item.copy =
				"A string with the purpose to identify the object. Default: <b>Timeline</b>.";
			break;
		case "uuid":
			item.copy = "<a href=''>UUID</a> of the timeline.";
			break;
		default:
			item.copy = "";
	}

	if (
		propsBlackList.indexOf(key) === -1 &&
		(typeof reference[key] !== "function" || propertyMethods.indexOf(key) >= 0) &&
		key.charAt(0) !== "_"
	) {
		propsList.push(item);
	}
});

// methodsList
const methodsList = [];
const methodNames = [];

for (const key in reference) {
	methodNames.push(key);
}
methodNames.sort();

methodNames.forEach(key => {
	methodNames.push(key);

	const item = {
		name: `${key}`,
		value: `( )`,
		readonly: !Object.getOwnPropertyDescriptor(reference, key).writable,
		key: keys[key],
	};

	switch (key) {
		case "add":
			item.copy = "Adds Tweens or Tracks to the timeline.";
			break;
		case "clone":
			item.copy = "Returns a clone of the timeline.";
			break;
		case "pause":
			item.copy = "Pauses the timeline.";
			break;
		case "play":
			item.copy = "Continues playing the timeline at .<a href=''>currentTime</a>.";
			break;
		case "remove":
			item.copy = "Removes Tweens or Tracks from the timeline.";
			break;
		case "start":
			item.copy = "Starts playing the timeline from the start.";
			break;
		case "stop":
			item.copy = "Resets the timeline to the start and pauses.";
			break;
		default:
			item.copy = "";
	}

	if (
		propsBlackList.indexOf(key) === -1 &&
		(typeof reference[key] === "function" && propertyMethods.indexOf(key) === -1) &&
		key.charAt(0) !== "_"
	)
		methodsList.push(item);
});

const timeline = {
	name: "Nervo.Timeline()",
	key: keys.section,
	contents: [
		[
			{
				component: "copy",
				value:
					"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
			},
			{
				component: "canvas",
				value: TimelineExample,
			},
		],
		[
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
				value: `Lorem <a href='#${
					keys.section
				}'>ipsum</a> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
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
		],
		[
			{
				component: "headline",
				value: "Properties",
				type: "h3",
			},
			{
				component: "propsList",
				value: propsList,
			},
		],
		[
			{
				component: "headline",
				value: "Methods",
				type: "h3",
			},
			{
				component: "propsList",
				value: methodsList,
			},
		],
	],
};

// exports
export default timeline;
export { keys };
