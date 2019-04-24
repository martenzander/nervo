import * as Nervo from "../../../src/js/index";
import Canvas from "./Core/Canvas";

class Tween extends Canvas {
	constructor(canvas) {
		super(canvas);
		this.pos = {
			x: this.padding,
			y: this.canvas.height / 2,
		};

		this.tween = new Nervo.Tween(
			{ progress: 0 },
			{ progress: 1 },
			{
				autoStart: true,
				duration: 3,
				loop: true,
				easing: "quintInOut",
				onProgress: e => {
					this.pos.x =
						this.padding +
						(this.canvas.width - 2 * this.padding) * e.target.value.progress;
					this.pos.y = this.canvas.height / 2;
					this.draw();
				},
			}
		);

		this.draw();
	}

	draw = e => {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.beginPath();
		this.context.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
		this.context.fillStyle = "#DD436B";
		this.context.fill();
	};
}

export default Tween;
