import { readonly } from "./../Core/Decorators";
import Track from "./../Track/Track";
import Ticker from "./../Core/Ticker";

export default class Timeline extends Ticker {
	constructor(objects = [], options = {}) {
		super(options);

		this._updateDuration();
		if (objects.length !== 0) this.add(objects, options);
		if (this.autoStart) this.start();
	}

	@readonly
	isTimeline = true;

	@readonly
	type = "Timeline";

	@readonly
	_execute = t => {
		this._updateChildrenByTime(t);
	};

	@readonly
	_getTrackFromTweens = (tweens, options) => {
		const track = new Track(tweens, {
			start: options.start !== undefined ? options.start : this.duration,
		});
		return track;
	};

	@readonly
	_updateDuration = e => {
		let duration = 0;

		this.children.forEach(child => {
			if (child.start + child.duration > duration) duration = child.start + child.duration;
		});

		this.duration = duration;
	};
}
