import * as Nervo from "../../../src/js/index";

class Spring {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.radius = 0.0625;
		this.isDragging = false;

		this.setCanvasSize();

		this.spring = new Nervo.Spring(
			{ x: this.canvas.width / 2, y: this.canvas.height / 2 },
			{ x: this.canvas.width / 2, y: this.canvas.height / 2 },
			{
				stiffness: 0.1,
				damping: 0.2,
			}
		);

		this.initEvents();
		this.draw();
	}

	initEvents = e => {
		window.addEventListener("resize", this.onResize);
		this.spring.addEventListener("onProgress", this.onSpringProgress);
		this.spring.addEventListener("onComplete", e => {
			console.log("onComplete");
		});
		this.canvas.addEventListener("mouseleave", this.onMouseLeaveOrUp);
		this.canvas.addEventListener("mouseup", this.onMouseLeaveOrUp);
		this.canvas.addEventListener("mousedown", this.onMouseDown);
		this.canvas.addEventListener("mousemove", this.onMouseMove);
	};

	setCanvasSize = e => {
		const style = window.getComputedStyle(this.canvas);
		const width = style.width;
		const height = style.height;
		this.canvas.setAttribute("width", width.replace("px", ""));
		this.canvas.setAttribute("height", height.replace("px", ""));
	};

	onScroll = e => {
		this.setCanvasSize();
		this.setSpringTargetToCenter();
		this.draw();
	};

	onResize = e => {
		this.setCanvasSize();
		this.setSpringTargetToCenter();
		this.draw();
	};

	onSpringProgress = e => {
		this.draw();
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
			this.spring.current.x,
			this.spring.current.y,
			this.radius * this.canvas.width,
			0,
			2 * Math.PI,
			false
		);
		this.context.fillStyle = "#DD436B";
		this.context.fill();
	};
}

export default Spring;
