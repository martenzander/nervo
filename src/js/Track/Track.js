import Base from "./../Core/Base";

export default class Track extends Base {
	constructor(objects = [], options = {}) {
		super(options);
		this.isTrack = true;
		this.type = "Track";
		this.start = options.start !== undefined ? options.start : 0;
		this.end = 0;

		objects.forEach(object => {
			this.add(object);
		});
	}

	add(...objects) {
		objects.forEach(object => {
			if (object.isTween) {
				this.updateRelationships(object);
			}
		});
		this.updateTimeRange();
	}

	updateTimeRange() {
		this.end = 0;

		this.children.forEach(child => {
			if (child.duration * child.timeScale + this.start > this.end) this.end = child.duration * child.timeScale + this.start;
		});
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
			this.finished = true;
		} else if (t >= this.start) {
			if (!this.initialized) {
				this.updateChildren(0);
				this.initialized = true;
			} else {
				this.updateChildren(t - this.start);
			}
		}
	}
}
