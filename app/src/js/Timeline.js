import * as Nervo from "../../../src/js/index";
import Canvas from "./Core/Canvas";
import eases from "eases";

const easeNames = [];

for (const key in eases) {
	easeNames.push(key);
}

class Timeline extends Canvas {
	constructor(canvas) {
		super(canvas);
		this.radiusFactor = 0.0625 / 2;
		this.setSizes();

		this.tweens = [];

		for (let i = 0; i < 3; i++) {
			const tween = new Nervo.Tween(
				{ progress: 0 },
				{ progress: 1 },
				{
					id: i,
					easing: "cubicInOut",
					duration: 3,
					onProgress: e => {},
				}
			);

			this.tweens.push(tween);
		}

		this.timeline = new Nervo.Timeline([], {
			name: "test",
			loop: true,
			timeScale: 1,
			onComplete: e => {},
			onProgress: e => {
				this.draw();
			},
		});

		this.timeline.add([this.tweens[0]], { start: 0 });
		this.timeline.add([this.tweens[1]], { start: 1 });
		this.timeline.add([this.tweens[2]], { start: 2 });

		this.timeline.children.forEach(child => {
			child.name = "test";
			child.id = child.children[0].id;
		});
		this.timeline.start();

		// GUI Properties
		const controls = this.gui.addFolder("controls");
		controls.add(this.timeline, "start");
		controls.add(this.timeline, "stop");
		controls.add(this.timeline, "play");
		controls.add(this.timeline, "pause");
		const options = this.gui.addFolder("options");
		options.add(this.timeline, "loop");
		options.add(this.timeline, "timeScale");
		options.add(this.timeline, "easing", easeNames).onChange(e => {
			this.timeline.easing = eases[e];
		});
	}

	draw = e => {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		let isActive = "";
		for (let i = 0; i < this.tweens.length; i++) {
			isActive += ` ${this.tweens[i].isActive}`;
			this.context.beginPath();
			this.context.arc(
				this.padding +
					(this.canvas.width - 2 * this.padding) * this.tweens[i].object.progress,
				this.padding + this.radius * 2.75 * i,
				this.radius,
				0,
				2 * Math.PI,
				false
			);
			if (i === 0) {
				this.context.fillStyle = "#FFEB4F";
			} else if (i === 1) {
				this.context.fillStyle = "#DD436B";
			} else {
				this.context.fillStyle = "#196A99";
			}
			this.context.fill();
		}
	};
}

export default Timeline;
