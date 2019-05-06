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
		delete this.start;
		delete this.stop;
		delete this.pause;
		delete this.play;
		delete this.autoPlay;
		delete this.loop;
		delete this._tick;

		this._isFinished = false;
		this.startTime = options.startTime !== undefined ? options.startTime : 0;
		if (objects.length >= 1) this.add(objects, options);
	}

	@readonly
	setStartTime = startTime => {
		this.startTime = startTime;
		this._onChange(this);

		return this;
	};

	/*
		._reset(): Deactivates this and resets all of its children to t = 0.
		It's best practice to not call this method directly.
	*/

	@readonly
	_reset = e => {
		this._isFinished = false;
		this.isActive = false;
		this.children.forEach(child => {
			child.stop();
		});
	};

	/*
		._update(): Updates the progress based on given time (t).
		Updates children based on updateTime. Lastly trigger events
		based on progress and loop options.
	*/

	@readonly
	_update = t => {
		this.currentTime = t;
		if (!this.isActive) return;

		this._updateProgress(this.currentTime - this.startTime);

		const updateTime = this.duration * this.easedProgress;

		this._updateChildrenByTime(updateTime);

		if (this.progress >= 1.0) {
			if (!this._isFinished) {
				this._isFinished = true;
				this.isActive = false;
				this.dispatchEvent({ type: "onProgress" });
				this.dispatchEvent({ type: "onComplete" });
			} else {
				this.isActive = false;
			}
		} else if (this.progress > 0) {
			if (!this.isActive) {
				this.isActive = true;
				this._isFinished = false;
			} else {
				this.dispatchEvent({ type: "onProgress" });
			}
		} else {
			if (!this.isActive) return;
			this._isFinished = false;
			this._reset();
			this.isActive = false;
		}
	};
}
