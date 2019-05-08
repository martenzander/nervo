import * as Nervo from "./../../../../src/js/index";
import Canvas from "./Core/Canvas";
import eases from "eases";

const easeNames = [];

for (const key in eases) {
	easeNames.push(key);
}

class TweenExample extends Canvas {
	constructor(canvas) {
		super(canvas);
		this.pos = {
			x: this.padding,
			y: this.canvas.height / 2,
		};
		this.progress = 0;

		this.tween = new Nervo.Tween(
			{ progress: 0 },
			{ progress: 1 },
			{
				delay: 2,
				duration: 3,
				loop: true,
				easing: "quintInOut",
				onProgress: e => {
					this.pos.x =
						this.padding +
						(this.canvas.width - 2 * this.padding) * e.target.object.progress;
					this.pos.y = this.canvas.height / 2;
					this.draw();
				},
			}
		);

		// GUI Properties
		const controls = this.gui.addFolder("controls");
		controls.add(this.tween, "start");
		controls.add(this.tween, "stop");
		controls.add(this.tween, "play");
		controls.add(this.tween, "pause");
		const options = this.gui.addFolder("options");
		options.add(this.tween, "duration").onChange(e => {
			this.tween.setDuration(e);
		});
		options.add(this.tween, "delay").onChange(e => {
			this.tween.setDelay(e);
		});
		options.add(this.tween, "loop");
		options.add(this.tween, "scale").onChange(e => {
			this.tween.setScale(e);
		});
		options.add(this.tween, "easing", easeNames).onChange(e => {
			this.tween.easing = eases[e];
		});

		this.tween.start();
		this.draw();
	}

	draw = e => {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.beginPath();

		this.context.translate(this.pos.x, this.pos.y);
		this.context.rotate((360 * this.tween.easedProgress * Math.PI) / 180);
		this.context.translate(-this.pos.x, -this.pos.y);
		this.context.fillStyle = "#FFEB4F";
		this.context.fillRect(
			this.pos.x - this.radius / 2,
			this.pos.y - this.radius / 2,
			this.radius,
			this.radius
		);

		this.context.setTransform(1, 0, 0, 1, 0, 0);
	};
}

export default TweenExample;
