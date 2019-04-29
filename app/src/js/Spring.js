import * as Nervo from "../../../src/js/index";
import Canvas from "./Core/Canvas";

class Spring extends Canvas {
	constructor(canvas) {
		super(canvas);

		this.isDragging = false;

		this.spring = new Nervo.Spring(
			{ x: this.canvas.width / 2, y: this.canvas.height / 2 },
			{},
			{
				autoStart: false,
				stiffness: 0.1,
				damping: 0.2,
				onProgress: e => {
					this.draw();
				},
				onComplete: e => {
					// console.log("onComplete");
				},
			}
		);

		this.gui.add(this.spring, "stiffness");
		this.gui.add(this.spring, "damping");

		this.initEvents();
		this.draw();
	}

	initEvents = e => {
		window.addEventListener("resize", this.setSpringTargetToCenter);
		this.canvas.addEventListener("mouseleave", this.onMouseLeaveOrUp);
		this.canvas.addEventListener("mouseup", this.onMouseLeaveOrUp);
		this.canvas.addEventListener("mousedown", this.onMouseDown);
		this.canvas.addEventListener("mousemove", this.onMouseMove);
	};

	onMouseDown = e => {
		this.updateMousePosition(e);
		this.isDragging = true;
	};

	onMouseMove = e => {
		if (!this.isDragging) return;
		this.updateMousePosition(e);
	};

	onMouseLeaveOrUp = e => {
		if (this.isDragging) this.setSpringTargetToCenter();
		this.isDragging = false;
	};

	setSpringTargetToCenter = e => {
		this.spring.setTarget({
			x: this.canvas.width / 2,
			y: this.canvas.height / 2,
		});
	};

	updateMousePosition = e => {
		const canvasBoundingBox = e.target.getBoundingClientRect();
		this.spring.setTarget({
			x: e.clientX - canvasBoundingBox.left,
			y: e.clientY - canvasBoundingBox.top,
		});
	};

	draw = e => {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.beginPath();
		this.context.arc(
			this.spring.target.x,
			this.spring.target.y,
			this.radius,
			0,
			2 * Math.PI,
			false
		);
		this.context.fillStyle = "#FFEB4F";
		this.context.fill();
	};
}

export default Spring;
