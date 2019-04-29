import * as Nervo from "./../../../src/js/index";
const reference = new Nervo.Track([new Nervo.Tween({}, {}, { duration: 2 })], {});
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
			item.copy = "Contains a list of Tweens. Default <b>null</b>";
			break;
		case "duration":
			item.copy = "Total duration of the Track.";
			break;
		case "hasStarted":
			item.copy = "Returns <b>true</b> when Track started updating. Default: <b>false</b>.";
			break;
		case "isFinished":
			item.copy = "Returns <b>true</b> when Track is finished. Default: <b>false</b>.";
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
			item.copy = "Object handed over to constructor.";
			break;
		case "parent":
			item.copy = "Parent Timeline. Default: <b>null</b>.";
			break;
		case "start":
			item.copy = "Start of the Track in seconds.";
			break;
		case "type":
			item.copy = "A string with the purpose to identify the object. Default: <b>Track</b>.";
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
			item.copy = "Adds Tweens to the Track.";
			break;
		case "clone":
			item.copy = "Returns a clone of the Track.";
			break;
		case "remove":
			item.copy = "Removes Tweens from the Track.";
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
				value:
					"<b>Notice:</b> Tracks don't modify objects directly. They update their child Tweens based on given time provided by their parent timeline. Tracks without a parent Timeline have no effect on their Tweens.",
			},
			{
				component: "attentionBox",
				value:
					"<b>Notice:</b> Tracks update their childs based on a given time provided by their parent Timeline. Tracks without a parent Timeline have no effect on their Tweens.",
			},
			{
				component: "code",
				value: {
					source: "trackExample.js",
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
					source: "trackConstructor.js",
				},
			},
			{
				component: "headline",
				value: "Tweens",
				type: "h4",
			},
			{
				component: "copy",
				value: "An array of Tweens that will be added to the Track.",
			},
			{
				component: "headline",
				value: "Options",
				type: "h4",
			},
			{
				component: "copy",
				value: "<a href=''>start</a>",
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
