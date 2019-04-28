const packageConfig = require("./../../../package.json");
const libName = packageConfig.name.charAt(0).toUpperCase() + packageConfig.name.slice(1);
import { readonly } from "./../Core/Decorators";
import Base from "./../Core/Base";

export default class Track extends Base {
	constructor(objects = [], options = {}) {
		super(options);
		this.isFinished = false;
		this.hasStarted = false;
		this.duration = 0;
		this.start = options.start !== undefined ? options.start : 0;
		if (objects.length >= 1) this.add(objects, options);
	}

	@readonly
	isTrack = true;

	@readonly
	type = "Track";

	_updateTimeRange = start => {
		let duration = 0;
		this.start = start !== undefined ? start : this.start;

		if (this.children.length <= 0) {
			console.warn(
				`${libName}.Track._updateTimeRange: No instances of ${libName}.Tween in this Track.`
			);
			return this;
		}

		this.children.forEach(child => {
			if (child.duration * child.timeScale > duration)
				duration = child.duration * child.timeScale;
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
		t /= this.parent.timeScale;

		if (t >= this.duration + this.start) {
			if (this.isFinished) return;
			this._updateChildren(this.duration);
			this._onComplete();
			this.isFinished = true;
		} else if (t >= this.start) {
			if (!this.hasStarted) {
				this.children.forEach(child => {
					child.isActive = true;
				});
				this._updateChildren(0);
				this.hasStarted = true;
			} else {
				this._updateChildren(t - this.start);
				this._onProgress();
			}
		}
	};
}
