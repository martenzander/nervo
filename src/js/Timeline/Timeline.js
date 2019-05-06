import { readonly } from "./../Core/Decorators";
import Track from "./../Track/Track";
import Ticker from "./../Core/Ticker";

export default class Timeline extends Ticker {
	@readonly
	isTimeline = true;

	@readonly
	type = "Timeline";

	constructor(objects = [], options = {}) {
		super(options);

		if (objects.length !== 0) this.add(objects, {});
		if (this.autoStart) this.start();
	}

	@readonly
	_execute = t => {
		this._updateChildrenByTime(t / this.timeScale);
	};

	@readonly
	_getTrackFromTweens = (tweens, options) => {
		const track = new Track(tweens, {
			startTime: options.startTime !== undefined ? options.startTime : this.duration,
		});
		return track;
	};
}
