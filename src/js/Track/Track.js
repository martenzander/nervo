const packageConfig = require("./../../../package.json");
const libName = packageConfig.name.charAt(0).toUpperCase() + packageConfig.name.slice(1);
import Base from "./../Core/Base";

export default class Track extends Base {
	constructor(objects = [], options = {}) {
		super(options);
		this.isTrack = true;
		this.type = "Track";
		this.start = options.start !== undefined ? options.start : 0;

		this.add(objects, options);
	}

	updateTimeRange(start) {
		this.start = start !== undefined ? start : this.start;
		this.end = 0;

		if (this.children.length <= 0) {
			console.warn(
				`${libName}.Track.updateTimeRange: No instances of ${libName}.Tween in this Track.`
			);
			return this;
		}

		this.children.forEach(child => {
			if (child.duration * child.timeScale + this.start > this.end)
				this.end = child.duration * child.timeScale + this.start;
		});

		return this;
	}

	reset() {
		this.finished = false;
		this.initialized = false;
		this.children.forEach(child => {
			child.reset();
		});
	}

	update(t) {
		t /= this.parent.timeScale;

		if (t >= this.end) {
			if (this.finished) return;
			this.updateChildren(this.end - this.start);
			this.onComplete();
			this.finished = true;
		} else if (t >= this.start) {
			if (!this.initialized) {
				this.children.forEach(child => {
					child.isActive = true;
				});
				this.updateChildren(0);
				this.initialized = true;
			} else {
				this.updateChildren(t - this.start);
				this.onProgress();
			}
		}
	}
}
