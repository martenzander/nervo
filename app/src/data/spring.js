import * as Nervo from "./../../../src/js/index";
const reference = new Nervo.Spring({}, {}, {});
const SpringExample = require("./../js/Spring");
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
		value: `: ${typeof reference[key]}`,
		readonly: !Object.getOwnPropertyDescriptor(reference, key).writable,
		key: keys[key],
	};

	switch (key) {
		case "autoStart":
			item.copy = "If set to <b>true</b> the Spring starts immediately after construction.";
			break;
		case "current":
			item.copy = "The currently interpolated values.";
			break;
		case "damping":
			item.copy =
				"A floating number responsible for the damping of the Spring. Default: <b>0.5</b>";
			break;
		case "isActive":
			item.copy = "Returns <b>true</b> when the Spring is playing.";
			break;
		case "isSpring":
			item.copy = "Returns <b>true</b>.";
			break;
		case "onComplete":
			item.copy = "Callback function – gets called when Spring is finished.";
			break;
		case "onProgress":
			item.copy = "Callback function – gets called while Spring is playing.";
			break;
		case "options":
			item.copy = "Object handed over to constructor.";
			break;
		case "stiffness":
			item.copy = "Stiffness of the Spring. Default <b>0.2</b>";
			break;
		case "target":
			item.copy = "Target of the Spring.";
			break;
		case "type":
			item.copy = "A string with the purpose to identify the object. Default: <b>Spring</b>.";
			break;
		case "uuid":
			item.copy = "<a href=''>UUID</a> of the Spring.";
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
		case "clone":
			item.copy = "Returns a clone of the Spring.";
			break;
		case "disable":
			item.copy = "Disables the Spring.";
			break;
		case "enable":
			item.copy = "Enables the Spring.";
			break;
		case "setTarget":
			item.copy = "Sets a new target and enables the Spring.";
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

const spring = {
	name: "Nervo.Spring()",
	key: keys.section,
	contents: [
		[
			{
				component: "copy",
				value: `<code class="language-markup">alert("hi")</code> Lorem ipsum <code class='language-markup'>dolor</code> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <code class="language-markup">alert("hi")</code> Lorem ipsum <code class='language-markup'>dolor</code> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
			},
			{
				component: "canvas",
				value: SpringExample,
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
					source: "springConstructor.js",
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
					"<a href=''>autoStart</a> · <a href=''>damping</a> · <a href=''>stiffness</a>",
			},
			{
				component: "attentionBox",
				value: "<b>Notice:</b> Lorem ipsum.",
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
export default spring;
export { keys };
