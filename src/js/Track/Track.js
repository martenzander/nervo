const packageConfig = require("./../../../package.json");
const libName = packageConfig.name.charAt(0).toUpperCase() + packageConfig.name.slice(1);
import { readonly } from "./../Core/Decorators";
import Ticker from "../Core/Ticker";

export default class Track extends Ticker {
	@readonly
	isTrack = true;

	@readonly
	type = "Track";

	constructor(objects = [], options = {}) {
		super(options);
		this.isFinished = false;
		this.hasStarted = false;
		this.startTime = options.startTime !== undefined ? options.startTime : 0;
		if (objects.length >= 1) this.add(objects, options);
	}

	@readonly
	setStartTime = startTime => {
		this.startTime = startTime;
		this._onChange(this);

		return this;
	};

	// @readonly
	_reset = e => {
		this.isFinished = false;
		this.hasStarted = false;
		this.children.forEach(child => {
			child.stop();
		});
	};

	@readonly
	_update = t => {
		this.currentTime = t / this.timeScale;

		if (t >= this.duration * this.timeScale + this.startTime) {
			if (this.isFinished) return;
			this._updateChildrenByTime(this.duration);
			this.dispatchEvent({ type: "onComplete" });
			this.isFinished = true;
			this.hasStarted = false;
		} else if (t >= this.startTime) {
			if (!this.hasStarted) {
				this.children.forEach(child => {
					if (child.isTween) child.isActive = true;
				});
				this._updateChildrenByTime(0);
				this.hasStarted = true;
				this.isFinished = false;
			} else {
				this._updateChildrenByTime(this.currentTime - this.startTime / this.timeScale);
				this.dispatchEvent({ type: "onProgress" });
			}
		} else {
			if (!this.hasStarted) return;
			this._reset();
		}
	};
}
