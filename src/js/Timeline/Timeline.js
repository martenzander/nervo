import Track from "./../Track/Track";
import Ticker from "./../Core/Ticker";

export default class Timeline extends Ticker {
	constructor(objects = [], options = {}) {
		super(options);
		this.updateDuration();
		this.isTimeline = true;
		this.type = "Timeline";

		objects.forEach(object => {
			this.add(object, {});
		});
	}

	addTween(tween, options = {}) {
		const track = new Track([tween], {
			start: options.start !== undefined ? options.start : this.duration,
		});
		this.updateRelationships(track);
	}

	add(object, options = {}) {
		if (object.isTween) {
			this.addTween(object, options);
		} else if (object.isTrack) {
			this.updateRelationships(object);
		}
		this.updateDuration();
	}

	updateDuration() {
		let duration = 0;

		this.children.forEach(child => {
			if (child.end > duration) duration = child.end;
		});

		this.duration = duration;
		this.scaledDuration = this.duration * this.timeScale;
	}
}
