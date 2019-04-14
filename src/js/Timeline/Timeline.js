import Track from "./../Track/Track";
import Ticker from "./../Core/Ticker";

export default class Timeline extends Ticker {
	constructor(objects = [], options = {}) {
		super(options);
		this.updateDuration();
		this.isTimeline = true;
		this.type = "Timeline";

		this.add(this.getTrackFromTweens(objects, options), options);
		if (this.autoStart) this.start();
	}

	execute(time) {
		this.updateChildren(time);
	}

	getTrackFromTweens(tweens, options) {
		return new Track(tweens, {
			start: options.start !== undefined ? options.start : this.duration,
		});
	}

	updateDuration() {
		let duration = 0;

		this.children.forEach(child => {
			if (child.end > duration) duration = child.end;
		});

		this.duration = duration;
	}
}
