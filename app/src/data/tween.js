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
		case "object":
			item.copy = "Object whose properties will be modified.";
			break;
		case "options":
			item.copy = "Configuring object handed over to constructor.";
			break;
		case "onProgress":
			item.copy = "Callback function – gets called while Tween is playing.";
			break;
		case "onComplete":
			item.copy = "Callback function – gets called when Tween is finished.";
			break;
		case "parent":
			item.copy = "Returns the parent Track. Default: <b>null</b>.";
			break;
		case "target":
			item.copy = "Object containing relevant properties and desired target values.";
			break;
		case "timeScale":
			item.copy = "Foating number scaling the duration of the tween. Default: <b>1.0</b>.";
			break;
		case "type":
			item.copy = "String with the purpose to identify the object. Default: <b>Tween</b>.";
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
	if (typeof reference[key] === "function") methodNames.push(key);
}
methodNames.sort();

methodNames.forEach(key => {
	const argumentNames = reference[key]
		.toString()
		.replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s))/gm, "")
		.match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
		.split(/,/);

	const item = {
		name: `${key}`,
		value: "( ",
		readonly: !Object.getOwnPropertyDescriptor(reference, key).writable,
		key: keys[key],
	};

	argumentNames.forEach((name, i) => {
		const type = typeof reference[name];
		const valueType = type !== "undefined" ? type : "any";
		if (name === "") return;
		if (i === argumentNames.length - 1) {
			item.value += ` <b>${name}</b> : ${valueType}`;
		} else {
			item.value += ` <b>${name}</b> : ${valueType},`;
		}
	});

	item.value += " )";

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
				value:
					"A Tween interpolates any numeric value of an object over time. Multiple Tweens can be grouped on <a href='#'>Tracks</a> and controlled by <a href='#'>Timelines</a>.",
			},
		],
		[
			{
				component: "canvas",
				value: TweenExample,
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
					source: "tweenExample.js",
				},
			},
			{
				component: "headline",
				value: "Options",
				type: "h4",
			},
			{
				component: "copy",
				value:
					"<a href=''>autoStart</a> · <a href=''>duration</a> · <a href=''>easing</a> · <a href=''>loop</a> · <a href=''>onProgress</a> · <a href=''>onComplete</a>",
			},
			{
				component: "attentionBox",
				value:
					'<b>Notice:</b> For the easing option you can either pass a function or a valid <a href="https://www.npmjs.com/package/eases" target="_blank">eases</a> string. E.g. "sineOut".',
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
