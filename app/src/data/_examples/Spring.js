import * as Nervo from "./../../../../src/js/index";
import Canvas from "./Core/Canvas";
import detectIt from "detect-it";

class Spring extends Canvas {
	constructor(canvas) {
		super(canvas);
		this.isDragging = false;
		this.springCount = 10;
		this.springs = [];
		this.colors = ["rgba(221,67,107,1)", "#FFEB4F", "#196A99"];

		for (let i = 0; i < this.springCount; i++) {
			const spring = new Nervo.Spring(
				{ x: this.canvas.width / 2, y: this.canvas.height / 2 },
				{ x: this.canvas.width / 2, y: this.canvas.height / 2 },
				{
					stiffness: 0.45,
					damping: 0.9,
					autoStart: false,
					onProgress: e => {
						this.draw();
					},
					onComplete: e => {
						console.log("complete");
					},
				}
			);

			this.springs.push(spring);
		}

		this.gui.add(this.springs[0], "stiffness").onChange(e => {
			this.springs.forEach(spring => {
				spring.stiffness = e;
			});
		});
		this.gui.add(this.springs[0], "damping").onChange(e => {
			this.springs.forEach(spring => {
				spring.damping = e;
			});
		});

		this.initEvents();
		setTimeout(e => {
			this.draw();
		}, 500);
	}

	initEvents = e => {
		window.addEventListener("resize", this.setSpringTargetToCenter);
		if (detectIt.deviceType === "mouseOnly") {
			this.canvas.addEventListener("mouseleave", this.onMouseLeaveOrUp);
			this.canvas.addEventListener("mouseup", this.onMouseLeaveOrUp);
			this.canvas.addEventListener("mousedown", this.onMouseDown);
			this.canvas.addEventListener("mousemove", this.onMouseMove);
		} else {
			// this.canvas.addEventListener("touchcancel", this.onMouseLeaveOrUp);
			this.canvas.addEventListener("touchend", this.onMouseLeaveOrUp);
			this.canvas.addEventListener("touchstart", this.onMouseDown);
			this.canvas.addEventListener("touchmove", this.onMouseMove);
		}
	};

	onMouseDown = e => {
		this.updateMousePosition(e);
		this.isDragging = true;
	};

	onMouseMove = e => {
		if (!this.isDragging) return;
		if (e.touches !== undefined) e.preventDefault();
		this.updateMousePosition(e);
	};

	onMouseLeaveOrUp = e => {
		if (this.isDragging) this.setSpringTargetToCenter();
		this.isDragging = false;
	};

	setSpringTargetToCenter = e => {
		for (let i = 0; i < this.springs.length; i++) {
			if (i === 0) {
				this.springs[i].springTo({
					x: this.canvas.width / 2,
					y: this.canvas.height / 2,
				});
			} else {
				this.springs[i].springTo(this.springs[i - 1].target);
			}
		}
	};

	updateMousePosition = e => {
		const canvasBoundingBox = e.target.getBoundingClientRect();
		const clientX = detectIt.deviceType === "mouseOnly" ? e.clientX : e.touches[0].clientX;
		const clientY = detectIt.deviceType === "mouseOnly" ? e.clientY : e.touches[0].clientY;

		for (let i = 0; i < this.springs.length; i++) {
			if (i === 0) {
				this.springs[i].springTo({
					x: clientX - canvasBoundingBox.left,
					y: clientY - canvasBoundingBox.top,
				});
			} else {
				this.springs[i].springTo(this.springs[i - 1].target);
			}
		}
	};

	draw = e => {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// ellipse
		for (let i = 0; i < this.springs.length; i++) {
			this.context.fillStyle = this.colors[i % 3];
			this.context.beginPath();
			this.context.arc(
				this.springs[this.springs.length - i - 1].target.x,
				this.springs[this.springs.length - i - 1].target.y,
				i === this.springs.length - 1 ? this.radius : this.radius - 1,
				0,
				2 * Math.PI,
				false
			);
			this.context.fill();
		}

		// text
		this.context.font = `${0.3 * this.radius}px Roboto Black Italic`;
		this.context.textAlign = "center";
		this.context.textBaseline = "middle";
		this.context.fillStyle = "#FFEB4F";
		this.context.textAlign = "center";
		this.context.fillText("DRAG ME!", this.springs[0].target.x, this.springs[0].target.y);
	};
}

export default Spring;
