const packageConfig = require("./../../../package.json");
const libName = packageConfig.name.charAt(0).toUpperCase() + packageConfig.name.slice(1);
import { readonly } from "./../Core/Decorators";
import Family from "../Core/Family";

export default class Track extends Family {
	@readonly
	isTrack = true;

	@readonly
	type = "Track";

	constructor(objects = [], options = {}) {
		super(options);
		this.isFinished = false;
		this.hasStarted = false;
		this.duration = 0;
		this.start = options.start !== undefined ? options.start : 0;
		if (objects.length >= 1) this.add(objects, options);
	}

	@readonly
	setStartTime = startTime => {
		if (typeof startTime !== "number") {
			console.error(
				`${libName}.Track.setStartTime: Provided startTime is not typeof 'number'.`
			);
			return this;
		}

		this.start = startTime;

		if (this.parent !== null) {
			this._onChildChange(this);
		}

		return this;
	};

	@readonly
	_reset = e => {
		this.isFinished = false;
		this.hasStarted = false;
		this.children.forEach(child => {
			child.stop();
		});
	};

	@readonly
	_update = t => {
		/*
			modify t by timeScale
		*/
		let timeScale = this.parent.timeScale !== undefined ? this.parent.timeScale : 1.0;

		if (timeScale === Infinity) {
			timeScale = 1.0;
		}

		t /= timeScale;

		if (t >= this.duration + this.start) {
			if (this.isFinished) return;
			this._updateChildrenByTime(this.duration);
			this.dispatchEvent({ type: "onComplete" });
			this.isFinished = true;
			this.hasStarted = false;
		} else if (t >= this.start) {
			if (!this.hasStarted) {
				this.children.forEach(child => {
					if (child.isTween) child.isActive = true;
				});
				this._updateChildrenByTime(0);
				this.hasStarted = true;
				this.isFinished = false;
			} else {
				this._updateChildrenByTime(t - this.start);
				this.dispatchEvent({ type: "onProgress" });
			}
		} else {
			if (!this.hasStarted) return;
			this._reset();
		}
	};
}
