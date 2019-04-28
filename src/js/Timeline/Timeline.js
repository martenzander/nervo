import { readonly } from "./../Core/Decorators";
import Track from "./../Track/Track";
import Ticker from "./../Core/Ticker";

export default class Timeline extends Ticker {
	constructor(objects = [], options = {}) {
		super(options);
		this.updateDuration();

		this.add(this.getTrackFromTweens(objects, options), options);
		if (this.autoStart) this.start();
	}

	@readonly
	isTimeline = true;

	@readonly
	type = "Timeline";

	@readonly

	@readonly
		const track = new Track(tweens, {
			start: options.start !== undefined ? options.start : this.duration,
		});
		return track;
	}

	@readonly
		let duration = 0;

		this.children.forEach(child => {
			if (child.end > duration) duration = child.end;
		});

		this.duration = duration;
	}
}
