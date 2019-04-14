import * as Nervo from "./../../../src/js/index";

class Tween {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.radius = 30;
		this.padding = 20;
		this.progress = 0;

		this.tween = new Nervo.Tween(
			{ progress: 0 },
			{ progress: 1 },
			{
				autoStart: true,
				duration: 5,
				easing: "quadInOut",
				loop: true,
				onProgress: e => {
					this.progress = e.target.value.progress;
					this.draw();
				},
			}
		);
	}

	draw() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.centerX = this.canvas.width / 2;
		this.centerY = this.canvas.height / 2;
		this.context.beginPath();
		const xPos =
			this.radius +
			this.padding +
			(this.canvas.width - 2 * (this.radius + this.padding)) * this.progress;
		this.context.arc(xPos, this.centerY, this.radius, 0, 2 * Math.PI, false);
		this.context.fillStyle = "#DD436B";
		this.context.fill();
	}
}

export default Tween;
