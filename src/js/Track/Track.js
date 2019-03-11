import Base from "./../Core/Base";

export default class Track extends Base {
	constructor(tween, options = {}) {
		super();
		this.isTrack = true;
		this.start = options.start || 0;
		this.end = tween.duration + this.start;
		this.options = options;

		this.add(tween);

		this.reset();
	}

	add(tween) {
		if (!tween.isTween) {
			console.error(`Object is no instance of Tween. : ${tween}`);
			return;
		}
		this.onAdd(tween);
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
