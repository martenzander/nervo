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
			item.copy = "If set to <b>true</b> the Timeline starts immediately after construction.";
			break;
		case "children":
			item.copy = "Contains a list of Tracks. Default: <b>null</b>";
			break;
		case "currentTime":
			item.copy = "Past time since Timeline start.";
			break;
		case "duration":
			item.copy = "A floating point number defining the length of the Timeline.";
			break;
		case "easing":
			item.copy = "Callback function that interpolates the progress.";
			break;
		case "isActive":
			item.copy = "Returns <b>true</b> when the Timeline is playing.";
			break;
		case "isTimeline":
			item.copy = "Returns <b>true</b>.";
			break;
		case "loop":
			item.copy = "Whether the Timeline will loop when finished.";
			break;
		case "onComplete":
			item.copy = "Callback function – gets called when Timeline is finished.";
			break;
		case "onProgress":
			item.copy = "Callback function – gets called while Timeline is playing.";
			break;
		case "options":
			item.copy = "Object handed over to constructor.";
			break;
		case "timeScale":
			item.copy =
				"A floating number scaling the progress of the Timeline. Default: <b>1.0</b>.";
			break;
		case "type":
			item.copy =
				"A string with the purpose to identify the object. Default: <b>Timeline</b>.";
			break;
		case "uuid":
			item.copy = "<a href=''>UUID</a> of the Timeline.";
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
			item.copy = "Adds Tweens or Tracks to the Timeline.";
			break;
		case "clone":
			item.copy = "Returns a clone of the Timeline.";
			break;
		case "pause":
			item.copy = "Pauses the Timeline.";
			break;
		case "play":
			item.copy = "Continues playing the Timeline at .<a href=''>currentTime</a>.";
			break;
		case "remove":
			item.copy = "Removes Tweens or Tracks from the Timeline.";
			break;
		case "start":
			item.copy = "Starts playing the Timeline from the start.";
			break;
		case "stop":
			item.copy = "Resets the Timeline to the start and pauses.";
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
				component: "copy",
				value: "The example above could be achieved using the Code below.",
			},
			{
				component: "code",
				value: {
					source: "timelineExample.js",
				},
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
					source: "timelineConstructor.js",
				},
			},
			{
				component: "headline",
				value: "Tweens",
				type: "h4",
			},
			{
				component: "copy",
				value:
					"An array of Tweens that will be added to the Timeline. The constructor automatically groups given Tweens on a Track with a <a href='#'>.start</a> value of <b>0</b>.",
			},
			{
				component: "headline",
				value: "Options",
				type: "h4",
			},
			{
				component: "copy",
				value:
					"<a href=''>autoStart</a> · <a href=''>easing</a> · <a href=''>loop</a> · <a href=''>onProgress</a> · <a href=''>onComplete</a>",
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
