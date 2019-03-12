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

	execute(time) {
		this.updateChildren(time);
	}

	addTrack(track) {
		this.updateRelationships(track);
	}

	add(object, options = {}) {
		if (object.isTween) {
			const track = new Track([object], {
				start: options.start !== undefined ? options.start : this.duration,
			});
			this.addTrack(track);
		} else if (object.isTrack) {
			object.start = object.start !== undefined ? object.start : this.duration;
			object.updateTimeRange();
			this.addTrack(object, options);
		}
		this.updateDuration();
	}

	updateDuration() {
		let duration = 0;

		this.children.forEach(child => {
			if (child.end > duration) duration = child.end;
		});

		this.duration = duration;
	}
}
