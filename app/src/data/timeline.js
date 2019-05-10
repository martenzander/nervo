const TimelineExample = require("./_examples/Timeline");

class TimelineContent {
	constructor(keys, reference) {
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
				key: keys.timeline[key],
			};

			switch (key) {
				case "autoStart":
					item.copy =
						"If set to <b>true</b> the Timeline starts immediately after construction.";
					break;
				case "children":
					item.copy = "Contains a list of Timelines and Tweens. Default: <b>null</b>";
					break;
				case "currentTime":
					item.copy = "Past time since Timeline start.";
					break;
				case "delay":
					item.copy = "A floating point number defining a delay relative to the parent.";
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
				case "parent":
					item.copy = "Returns the parent Timeline. Default: <b>null</b>.";
					break;
				case "scale":
					item.copy =
						"Floating number scaling the duration of the Timeline. Default: <b>1.0</b>.";
					break;
				case "type":
					item.copy =
						"String with the purpose to identify the object. Default: <b>Timeline</b>.";
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
				key: keys.timeline[key],
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
					item.copy = "Adds Tweens or Timelines to the Timeline. Arrays are allowed.";
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
						keys.timeline.section
					}'>Tweens</a> or Timelines from the Timeline. Arrays are allowed.`;
					break;
				case "start":
					item.copy = "Starts playing the Timeline from the start.";
					break;
				case "stop":
					item.copy = "Resets the Timeline to the start and pauses.";
					break;
				case "setDelay":
					item.copy = `Sets a new .<a href='#${keys.timeline.delay}'>delay</a> value.`;
					break;
				case "setScale":
					item.copy = `Sets a new .<a href='#${keys.timeline.scale}'>scale</a> value.`;
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
			name: "Nervo.Timeline()",
			key: keys.timeline.section,
			contents: [
				[
					{
						component: "copy",
						value: `Timelines control multiple <a href='#${
							keys.tween.section
						}'>Tweens</a> or Timelines. If you want to add a Tween to a Timeline use the .<a href='#${
							keys.timeline.add
						}'>add</a>() method. By default all children will be added at the end of a Timeline. Experiment with the example below to get familiar with Timelines, Tweens and how they interact.`,
					},
				],
				[
					{
						component: "canvas",
						value: TimelineExample,
					},
					{
						component: "attentionBox",
						value:
							"<b>Pro Tip:</b> For even more flexibility in space and time start nesting Timelines!",
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
						value: "Children",
						type: "h4",
					},
					{
						component: "copy",
						value:
							"An array of Tweens and Timelines that will be added to the Timeline.",
					},
					{
						component: "headline",
						value: "Options",
						type: "h4",
					},
					{
						component: "copy",
						value: `<a href='#${keys.timeline.autoStart}'>autoStart</a> · <a href='#${
							keys.timeline.easing
						}'>easing</a> · <a href='#${keys.timeline.loop}'>loop</a> · <a href='#${
							keys.timeline.onComplete
						}'>onComplete</a> · <a href='#${
							keys.timeline.onProgress
						}'>onProgress</a> · <a href='#${keys.timeline.scale}'>scale</a>`,
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
export default TimelineContent;
