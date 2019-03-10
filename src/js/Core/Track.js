export default class Track {
	static Instances = [];
	static ID = 0;

	constructor(tween, options = {}) {
		this.tween = tween;
		this.tween.track = this;
		this.start = options.start || 0;
		this.end = tween.duration + this.start;
		this.timeline = options.timeline;
		this.id = Track.ID;
		Track.ID++;
		Track.Instances.push(this);

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
