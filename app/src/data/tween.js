import * as Nervo from "./../../../src/js/index";
const reference = new Nervo.Tween({}, {}, {});
const TweenExample = require("./../js/Tween");
import uuid from "uuid/v4";

// keys
const keys = {
	section: `id-${uuid()}`,
};

for (const key in reference) {
	keys[key] = `id-${uuid()}`;
}

// propsList
const propsBlackList = ["children", "isNervo", "add", "remove"];
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
		readonly: !Object.getOwnPropertyDescriptor(reference, key).writable,
		value: `: ${typeof reference[key]}`,
		key: keys[key],
	};

	switch (key) {
		case "autoStart":
			item.copy = "If set to <b>true</b> the tween starts immediately after construction.";
			break;
		case "current":
			item.copy = "The currently interpolated values.";
			break;
		case "currentTime":
			item.copy = "Past time since tween start.";
			break;
		case "duration":
			item.copy = "A floating point number defining the length of the tween.";
			break;
		case "easing":
			item.copy = "Callback function that interpolates the progress.";
			break;
		case "isActive":
			item.copy = "Returns <b>true</b> when the tween is playing.";
			break;
		case "isTween":
			item.copy = "Returns <b>true</b>.";
			break;
		case "loop":
			item.copy = "Whether the tween will loop when finished.";
			break;
		case "options":
			item.copy = "Object handed over to constructor.";
			break;
		case "origin":
			item.copy = "Starting values handed over to constructor.";
			break;
		case "parent":
			item.copy = "Returns the parent Track. Default: <b>null</b>.";
			break;
		case "target":
			item.copy = "Target values handed over to constructor.";
			break;
		case "timeScale":
			item.copy = "A floating number scaling the progress of the tween. Default: <b>1.0</b>.";
			break;
		case "type":
			item.copy = "A string with the purpose to identify the object. Default: <b>Tween</b>.";
			break;
		case "uuid":
			item.copy = "<a href=''>UUID</a> of the Tween.";
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
		value: "( )",
		readonly: !Object.getOwnPropertyDescriptor(reference, key).writable,
		key: keys[key],
	};

	switch (key) {
		case "clone":
			item.copy = "Returns a clone of the tween.";
			break;
		case "pause":
			item.copy = "Pauses the tween.";
			break;
		case "play":
			item.copy = "Continues playing the tween at .<a href=''>currentTime</a>.";
			break;
		case "start":
			item.copy = "Starts playing the tween from the start.";
			break;
		case "stop":
			item.copy = "Resets the tween to the start and pauses.";
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

const tween = {
	name: "Nervo.Tween()",
	key: keys.section,
	contents: [
		[
			{
				component: "copy",
				value: "A Tween interpolates numeric values of an Object over time.",
			},
			{
				component: "canvas",
				value: TweenExample,
			},
		],
		[
			{
				component: "copy",
				value: "The example above could be achieved using the following Code.",
			},
			{
				component: "code",
				value: {
					source: "tweenExample.js",
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
					'An object containing the starting values of a Tween. E.g. <code class="language-markup">{ x : 0 }</code>.',
			},
			{
				component: "headline",
				value: "Target",
				type: "h4",
			},
			{
				component: "copy",
				value:
					'An object containing the target values of a Tween. E.g. <code class="language-markup">{ x : 1 }</code>.',
			},
			{
				component: "headline",
				value: "Options",
				type: "h4",
			},
			{
				component: "copy",
				value:
					"An optional object to configure the settings of a Tween.<br/><a href=''>autoStart</a> · <a href=''>duration</a> · <a href=''>easing</a> · <a href=''>loop</a> · <a href=''>onProgress</a> · <a href=''>onComplete</a>",
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
export default tween;
export { keys };
