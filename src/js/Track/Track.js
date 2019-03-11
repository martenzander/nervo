import Base from "./../Core/Base";

export default class Track extends Base {
	constructor(tween, options = {}) {
		super();
		this.isTrack = true;
		this.tween = tween;
		this.tween.track = this;
		this.start = options.start || 0;
		this.end = tween.duration + this.start;
		this.timeline = options.timeline;

		this.reset();
	}

	reset() {
		this.isFinished = false;
		this.isInitialized = false;
		this.tween.reset();
	}

	update(time) {
		if (time >= this.end) {
			if (this.isFinished) return;
			this.tween.update(this.tween.duration);
			this.isFinished = true;
		} else if (time >= this.start) {
			if (!this.isInitialized) {
				this.tween.update(0);
				this.isInitialized = true;
			} else {
				this.tween.update(time - this.start);
			}
		}
	}
}
