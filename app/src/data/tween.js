const TweenExample = require("./_examples/Tween");

class TweenContent {
	constructor(keys, reference) {
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
				key: keys.tween[key],
			};

			switch (key) {
				case "autoStart":
					item.copy =
						"If set to <b>true</b> the tween starts immediately after construction.";
					break;
				case "currentTime":
					item.copy = "Past time since Tween start.";
					break;
				case "delay":
					item.copy = "A floating point number defining a delay relative to the parent.";
					break;
				case "duration":
					item.copy = "A floating point number defining the length of the tween.";
					break;
				case "easing":
					item.copy = "Callback function that interpolates the progress.";
					break;
				case "from":
					item.copy = "Object containing starting values of the Tween.";
					break;
				case "isActive":
					item.copy = "Returns <b>true</b> when the Tween is playing.";
					break;
				case "isTween":
					item.copy = "Returns <b>true</b>.";
					break;
				case "loop":
					item.copy = "Whether the Tween will loop when finished.";
					break;
				case "target":
					item.copy = "Object containing the current state values of the Tween.";
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
					item.copy = "Returns the parent Timeline. Default: <b>null</b>.";
					break;
				case "to":
					item.copy = "Object containing desired target values.";
					break;
				case "scale":
					item.copy =
						"Foating number scaling the duration of the Tween. Default: <b>1.0</b>.";
					break;
				case "type":
					item.copy =
						"String with the purpose to identify the object. Default: <b>Tween</b>.";
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
				key: keys.tween[key],
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
					item.copy = "Returns a clone of the Tween.";
					break;
				case "pause":
					item.copy = "Pauses the Tween.";
					break;
				case "play":
					item.copy = "Continues playing the Tween at .<a href=''>currentTime</a>.";
					break;
				case "setDelay":
					item.copy = `Sets a new .<a href='#${keys.tween.delay}'>delay</a> value.`;
					break;
				case "setDuration":
					item.copy = `Sets a new .<a href='#${keys.tween.duration}'>duration</a> value.`;
					break;
				case "setScale":
					item.copy = `Sets a new .<a href='#${keys.tween.scale}'>scale</a> value.`;
					break;
				case "start":
					item.copy = "Starts playing the Tween from the start.";
					break;
				case "stop":
					item.copy = "Resets the Tween to the start and pauses.";
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

		this.content = {
			name: "Nervo.Tween()",
			key: keys.tween.section,
			contents: [
				[
					{
						component: "copy",
						value: `A Tween interpolates any numeric value of an object over time. Multiple Tweens can be controlled by <a href='#${
							keys.timeline.section
						}'>Timelines</a>. Experiment with the example below to become familiar with Nervo Tweens.`,
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
							source: "tweenConstructor.js",
						},
					},
					{
						component: "headline",
						value: "Options",
						type: "h4",
					},
					{
						component: "copy",
						value: `<a href='#${keys.tween.autoStart}'>autoStart</a> · <a href='#${
							keys.tween.delay
						}'>delay</a> · <a href='#${keys.tween.duration}'>duration</a> · <a href='#${
							keys.tween.easing
						}'>easing</a> · <a href='#${keys.tween.loop}'>loop</a> · <a href='#${
							keys.tween.onComplete
						}'>onComplete</a> · <a href='#${
							keys.tween.onProgress
						}'>onProgress</a> · <a href='#${keys.tween.scale}'>scale</a>`,
					},
					{
						component: "attentionBox",
						value:
							"<b>Notice:</b> For the easing option you can either pass a function or a valid <a href='https://www.npmjs.com/package/eases' target='_blank'>eases</a> string. E.g. »sineOut«.",
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
	}
}

// exports
export default TweenContent;
// export { keys };
