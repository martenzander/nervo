import * as Nervo from "./../../../src/js/index";
const reference = new Nervo.Timeline([], {});
const TimelineExample = require("./_examples/Timeline");
const trackContent = require("./track");
const tweenContent = require("./tween");
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
			item.copy = "Configuring object handed over to constructor.";
			break;
		case "timeScale":
			item.copy =
				"Floating number scaling the duration of the Timeline. Default: <b>1.0</b>.";
			break;
		case "type":
			item.copy = "String with the purpose to identify the object. Default: <b>Timeline</b>.";
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
			console.log();
			item.copy = "Adds Tweens or Tracks to the Timeline. Arrays are allowed.";
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
			item.copy = `Removes <a href'#${
				trackContent.keys.section
			}'>Tracks</a> from the Timeline. Arrays are allowed.`;
			break;
		case "start":
			item.copy = "Starts playing the Timeline from the start.";
			break;
		case "stop":
			item.copy = "Resets the Timeline to the start and pauses.";
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

const timeline = {
	name: "Nervo.Timeline()",
	key: keys.section,
	contents: [
		[
			{
				component: "copy",
				value: `Timelines control multiple <a href='#${
					trackContent.keys.section
				}'>Tracks</a> and their contained children. If you want to add a <a href='#${
					tweenContent.keys.section
				}'>Tween</a> to a Timeline you can either add the Tween to an already existing Track or directly add the Tween to the Timeline using .<a href='#${
					keys.add
				}'>add</a>(). As long as there are no options provided, this will add the Tween at the end of the Timeline nested in a new Track. See the example below and play with some properties to better understand how Timelines, Tracks and Tweens work together.`,
			},
		],
		[
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
				value: `An array of Tweens and Tracks that will be added to the Timeline. The constructor automatically groups given Tweens on a Track with a .<a href='#${
					trackContent.keys.startTime
				}'>startTime</a> value of <b>0</b>.`,
			},
			{
				component: "headline",
				value: "Options",
				type: "h4",
			},
			{
				component: "copy",
				value: `<a href='#${keys.autoStart}'>autoStart</a> · <a href='#${
					keys.easing
				}'>easing</a> · <a href='#${keys.loop}'>loop</a> · <a href='#${
					keys.onComplete
				}'>onComplete</a> · <a href='#${keys.onProgress}'>onProgress</a> · <a href='#${
					keys.timeScale
				}'>timeScale</a>`,
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
export default timeline;
export { keys };
