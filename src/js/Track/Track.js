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

	_updateDuration = start => {
		let duration = 0;
		this.start = start !== undefined ? start : this.start;

		if (this.children.length <= 0) {
			console.warn(`${libName}.Track._updateDuration: No children on this Track.`);
			return this;
		}

		this.children.forEach(child => {
			const timeScale = child.timeScale !== undefined ? child.timeScale : 1.0;
			const childStart = typeof child.start === "number" ? child.start : 0.0;

			if (child.duration * timeScale + childStart > duration)
				duration = child.duration * timeScale + childStart;
		});

		this.duration = duration;

		return this;
	};

	_reset = e => {
		this.isFinished = false;
		this.hasStarted = false;
		this.children.forEach(child => {
			child._reset();
		});
	};

	_update = t => {
		const timeScale = this.parent.timeScale !== undefined ? this.parent.timeScale : 1.0;
		t /= timeScale;

		if (t >= this.duration + this.start) {
			if (this.isFinished) return;
			this._updateChildrenByTime(this.duration);
			this.dispatchEvent({ type: "onComplete" });
			this.isFinished = true;
		} else if (t >= this.start) {
			if (!this.hasStarted) {
				this.children.forEach(child => {
					child.isActive = true;
				});
				this._updateChildrenByTime(0);
				this.hasStarted = true;
			} else {
				this._updateChildrenByTime(t - this.start);
				this.dispatchEvent({ type: "onProgress" });
			}
		}
	};
}
