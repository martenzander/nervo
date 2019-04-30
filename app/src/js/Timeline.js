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

		for (let i = 0; i < 6; i++) {
			const timeScale = i === 0 ? 1.5 : 1;

			const tween = new Nervo.Tween(
				{ progress: 0 },
				{ progress: 1 },
				{
					// timeScale: timeScale,
					easing: "cubicInOut",
					duration: 3,
					onProgress: e => {
						// console.log(e.target);
					},
				}
			);

			this.tweens.push(tween);
		}

		// const trackNested = new Nervo.Track([this.tweens[0], this.tweens[1], this.tweens[2]], {
		// 	start: 2,
		// 	onProgress: e => {
		// 		// console.log(e);
		// 	},
		// });

		// const parentTrack = new Nervo.Track(
		// 	[trackNested, this.tweens[3], this.tweens[4], this.tweens[5]],
		// 	{
		// 		start: 0,
		// 		onProgress: e => {
		// 			// console.log(e);
		// 		},
		// 	}
		// );

		this.timeline = new Nervo.Timeline([], {
			loop: true,
			timeScale: 2,
			onComplete: e => {},
			onProgress: e => {
				this.draw();
			},
		});

		this.timeline.add([this.tweens[0], this.tweens[1]], { start: 0 });
		this.timeline.add([this.tweens[2], this.tweens[3]], { start: 1 });
		this.timeline.add([this.tweens[4], this.tweens[5]], { start: 2 });
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
		for (let i = 0; i < this.tweens.length; i++) {
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
			if (i <= 1) {
				this.context.fillStyle = "#FFEB4F";
			} else if (i <= 3) {
				this.context.fillStyle = "#DD436B";
			} else {
				this.context.fillStyle = "#202449";
			}
			this.context.fill();
		}
	};
}

export default Timeline;
