import * as Nervo from "../../../../src/js/index";
import Canvas from "./Core/Canvas";
import eases from "eases";

const easeNames = [];

for (const key in eases) {
	easeNames.push(key);
}

class TimelineExample extends Canvas {
	constructor(canvas) {
		super(canvas);
		this.setSizes();
		this.tweens = [];
		this.fixedPadding = 50;

		/*
			Create a bunch of Tweens.
		*/

		for (let i = 0; i < 6; i++) {
			const tween = new Nervo.Tween(
				{ progress: 0 },
				{ progress: 1 },
				{
					easing: eases.sineOut,
					duration: 1 + (i % 2),
					onProgress: e => {},
				}
			);
			if (i === 0) {
				tween.id = "test";
			}
			this.tweens.push(tween);
		}

		/*
			Create a new looping Timeline.
			.onProgress(): Redraw the canvas
		*/

		this.rootTimeline = new Nervo.Timeline([], {
			loop: true,
			onComplete: e => {},
			onProgress: e => {
				this.draw();
			},
		});

		/*
			Add .tweens to .timeline.
		*/

		for (let i = 0; i < this.tweens.length; i += 2) {
			const timeline = new Nervo.Timeline([this.tweens[i], this.tweens[i + 1]], {});
			this.rootTimeline.add(timeline, {});
			// this.rootTimeline.add(this.tweens[i], {});
		}

		/*
			Add relevant properties to dat.GUI.
		*/
		const timelineFolder = this.gui.addFolder("Timeline");
		this.createChildrenFolder(this.rootTimeline, timelineFolder);
		const optionsFolder = timelineFolder.addFolder("options");
		optionsFolder.add(this.rootTimeline, "start");
		optionsFolder.add(this.rootTimeline, "stop");
		optionsFolder.add(this.rootTimeline, "play");
		optionsFolder.add(this.rootTimeline, "pause");
		optionsFolder.add(this.rootTimeline, "delay").onChange(e => {
			this.rootTimeline.setDelay(e);
		});
		optionsFolder.add(this.rootTimeline, "scale").onChange(e => {
			this.rootTimeline.setScale(e);
		});
		optionsFolder.add(this.rootTimeline, "easing", easeNames).onChange(e => {
			this.rootTimeline.easing = eases[e];
		});

		/*
			Start Timeline.
		*/
		this.rootTimeline.start();
	}

	createChildrenFolder(object, folder) {
		if (object.children.length > 0) {
			const innerFolder = folder.addFolder("children");

			object.children.forEach((child, i) => {
				const childFolder = innerFolder.addFolder(`${i + 1} ${child.type}`);
				this.createChildrenFolder(child, childFolder);
				const optionsFolder = childFolder.addFolder("options");
				optionsFolder.add(child, "scale").onChange(e => {
					child.setScale(e);
				});
				optionsFolder.add(child, "delay").onChange(e => {
					child.setDelay(e);
				});
				if (child.isTween) {
					optionsFolder.add(child, "duration").onChange(e => {
						child.setDuration(e);
					});
				}
			});
		}
	}

	getScaleFactor = object => {
		let scale = object.scale;

		function addScale(object) {
			scale += object.scale;

			if (object.parent !== null) {
				addScale(object.parent);
			}
		}

		addScale(object);
		return scale;
	};

	fillTimeline = (timeline, x, y, width, height) => {
		this.context.fillStyle = timeline.isActive ? "#DD436B" : "rgba(221,67,107,0.55)";
		this.context.fillRect(x, y, width, this.timelineHeight);
		const childHeight =
			(height - (this.timelineHeight + 2) - (timeline.children.length - 1) * 2) /
			timeline.children.length;
		const scale = timeline === this.rootTimeline ? 1.0 : timeline.scale;

		let delayWidth = 0;

		for (let i = 0; i < timeline.children.length; i++) {
			const child = timeline.children[i];
			let delayWidth =
				(child.delay / this.rootTimeline.duration) * (this.canvas.width - this.leftMargin);

			function scaleDelayWidth(object) {
				if (object.parent !== null) {
					delayWidth *= object.scale;
					scaleDelayWidth(object.parent);
				}
			}

			if (timeline !== this.rootTimeline) scaleDelayWidth(timeline);

			const childWidth =
				((child.duration * child.scale) / (timeline.duration * scale)) * width * scale;
			const childY = y + (this.timelineHeight + 2) + i * (childHeight + 2);
			const childX = x + delayWidth;
			this.context.fillStyle = "rgba(0,0,0,0.15)";
			this.context.fillRect(0, childY, this.canvas.width, childHeight);
			this.context.fillStyle = "rgba(0,0,0,0.35)";
			this.context.fillRect(childX, childY, childWidth, childHeight);

			if (child.isTimeline) {
				this.fillTimeline(child, childX, childY, childWidth, childHeight);
			} else {
				this.context.fillStyle = child.isActive ? "#FFEB4F" : "rgba( 255, 235, 79 , 0.55)";
				this.context.fillRect(childX, childY, childWidth, childHeight);
			}
		}
	};

	draw = e => {
		/*
			Clear the current canvas drawing.
		*/
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		/*
			Calculate height, leftMargin.
			Set fontStyle and childPadding.
		*/
		const height =
			(this.canvas.height - this.fixedPadding * 2) / 1 / this.rootTimeline.children.length;
		this.leftMargin = 0;
		this.timelineHeight = 3;
		const childPadding = 1;
		this.context.font = "12px Roboto Slab Bold";
		this.context.textBaseline = "top";
		this.context.textAlign = "center";

		this.fillTimeline(
			this.rootTimeline,
			0,
			this.fixedPadding,
			this.canvas.width,
			this.canvas.height - this.fixedPadding * 2
		);

		/*
			Draw time slider.
		*/
		this.context.fillStyle = "rgba( 32, 36, 73 , 0.5)";
		const width = this.rootTimeline.easedProgress * (this.canvas.width - this.leftMargin);
		this.context.moveTo(width + this.leftMargin, 0);
		this.context.lineTo(width + this.leftMargin, this.canvas.height);
		this.context.stroke();

		/*
			Draw time measurement.
		*/
		this.context.strokeStyle = "rgba(255,255,255,0.25)";
		this.context.lineWidth = 1;
		this.context.fillStyle = "rgba(255,255,255,0.25)";

		for (let i = 0; i < this.rootTimeline.duration * 10; i++) {
			const x =
				(i / (this.rootTimeline.duration * 10)) * (this.canvas.width - this.leftMargin) +
				this.leftMargin;
			this.context.beginPath();
			this.context.moveTo(x, 0);
			if (i % 10 === 0 && i !== 0) {
				this.context.lineTo(x, 10);
				this.context.stroke();
				this.context.fillText(`${i / 10}`, x, 15);
			}
		}
	};
}

export default TimelineExample;
