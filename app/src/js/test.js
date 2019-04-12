import * as Nervo from "./../../../src/js/index";

class Test {
	constructor(canvas) {
		console.log(canvas);
		this.context = canvas.getContext("2d");
		const centerX = canvas.width / 2;
		const centerY = canvas.height / 2;
		const radius = 30;

		this.context.beginPath();
		this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		this.context.fillStyle = "green";
		this.context.fill();
		this.context.lineWidth = 1;
		this.context.strokeStyle = "#003300";
		this.context.stroke();
	}
}

export default Test;
