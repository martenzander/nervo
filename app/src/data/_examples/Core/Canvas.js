import * as dat from "dat.gui";

class Canvas {
	constructor(canvas) {
		this.canvas = canvas;
		this.gui = new dat.GUI({ autoPlace: false });
		// this.gui.close();
		this.gui.domElement.classList.add("gui");
		this.canvas.parentElement.parentElement.appendChild(this.gui.domElement);
		this.context = canvas.getContext("2d");
		// this.radiusFactor = 0.0625;
		this.radiusFactor = 0.1;
		this.setSizes();
		window.addEventListener("resize", this.onResize);
	}

	setSizes = e => {
		const style = window.getComputedStyle(this.canvas);
		const width = style.width;
		const height = style.height;
		this.canvas.setAttribute("width", width.replace("px", ""));
		this.canvas.setAttribute("height", height.replace("px", ""));
		this.radius = this.radiusFactor * this.canvas.width;
		this.padding = 0.03125 * this.canvas.width + this.radius;
	};

	onResize = e => {
		this.setSizes();
		this.draw();
	};

	draw = e => {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.beginPath();
		this.context.arc(0, 0, this.radius, 0, 2 * Math.PI, false);
		this.context.fillStyle = "#DD436B";
		this.context.fill();
	};
}

export default Canvas;
