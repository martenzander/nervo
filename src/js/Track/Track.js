import Base from "./../Core/Base";

export default class Track extends Base {
	constructor(objects = [], options = {}) {
		super(options);
		this.isTrack = true;
		this.type = "Track";
		this.start = options.start !== undefined ? options.start : 0;
		this.end = 0;

		this.add(objects);
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
			if (child.scaledDuration + this.start > this.end) this.end = child.scaledDuration + this.start;
		});
	}

	reset() {
		this.isFinished = false;
		this.isInitialized = false;
		this.children.forEach(child => {
			child.reset();
		});
	}

	update(time) {
		if (time >= this.end) {
			if (this.isFinished) return;
			this.updateChildren(this.end - this.start);
			this.isFinished = true;
		} else if (time >= this.start) {
			if (!this.isInitialized) {
				this.updateChildren(0);
				this.isInitialized = true;
			} else {
				this.updateChildren(time - this.start);
			}
		}
	}
}
