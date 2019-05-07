import * as Nervo from "./../../../src/js/index";
const reference = new Nervo.Track([new Nervo.Tween({}, {}, { duration: 2 })], {});
const tweenContent = require("./tween");
const trackContent = require("./track");
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
		readonly: !Object.getOwnPropertyDescriptor(reference, key).writable,
		value: `: ${typeof reference[key]}`,
		key: keys[key],
	};

	switch (key) {
		case "children":
			item.copy = "Contains a list of Tweens or Tracks. Default <b>null</b>";
			break;
		case "currentTime":
			item.copy = "Past time since the parent started.";
			break;
		case "duration":
			item.copy = "Total duration of the Track.";
			break;
		case "easing":
			item.copy = "Callback function that interpolates the progress.";
			break;
		case "isActive":
			item.copy = "Returns <b>true</b> when the Track is playing.";
			break;
		case "isTrack":
			item.copy = "Returns <b>true</b>.";
			break;
		case "onComplete":
			item.copy = "Callback function – gets called when Track is finished.";
			break;
		case "onProgress":
			item.copy = "Callback function – gets called while Track is playing.";
			break;
		case "options":
			item.copy = "Configuring object handed over to constructor.";
			break;
		case "parent":
			item.copy = "Parent Timeline. Default: <b>null</b>.";
			break;
		case "startTime":
			item.copy = "Starting time of the Track in relation to its parent.";
			break;
		case "timeScale":
			item.copy = "Foating number scaling the duration of the Track. Default: <b>1.0</b>.";
			break;
		case "type":
			item.copy = "String with the purpose to identify the object. Default: <b>Track</b>.";
			break;
		case "uuid":
			item.copy = "<a href=''>UUID</a> of the Track.";
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
		case "add":
			item.copy = "Adds Tweens to the Track. Arrays are allowed.";
			break;
		case "clone":
			item.copy = "Returns a clone of the Track.";
			break;
		case "remove":
			item.copy = `Removes <a href='#${tweenContent.keys.section}'>Tweens</a> or <a href='#${
				trackContent.keys.section
			}'>Tracks</a> from the Track. Arrays are allowed.`;
			break;
		case "setStartTime":
			item.copy = `Sets a new .<a href='#${keys.startTime}'>startTime</a> value.`;
			break;
		case "setTimeScale":
			item.copy = `Sets a new .<a href='#${keys.timeScale}'>timeScale</a> value.`;
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

const track = {
	name: "Nervo.Track()",
	key: keys.section,
	contents: [
		[
			{
				component: "copy",
				value: `Tracks group multiple <a href='#${
					tweenContent.keys.section
				}'>Tweens</a> and define a collective .<a href='#${
					keys.startTime
				}'>startTime</a> for all its direct .<a href='#${keys.children}'>children</a>.`,
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
					source: "trackConstructor.js",
				},
			},
			{
				component: "headline",
				value: "Children",
				type: "h4",
			},
			{
				component: "copy",
				value: "Array containing Tweens and Tracks that will be added to the Track.",
			},
			{
				component: "headline",
				value: "Options",
				type: "h4",
			},
			{
				component: "copy",
				value: `<a href='#${keys.startTime}'>startTime</a> · <a href='#${
					keys.easing
				}'>easing</a> · <a href='#${keys.onComplete}'>onComplete</a> · <a href='#${
					keys.onProgress
				}'>onProgress</a> · <a href='#${keys.timeScale}'>timeScale</a>`,
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
export default track;
export { keys };
