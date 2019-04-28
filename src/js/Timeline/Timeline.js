import { readonly } from "./../Core/Decorators";
import Track from "./../Track/Track";
import Ticker from "./../Core/Ticker";

export default class Timeline extends Ticker {
	constructor(objects = [], options = {}) {
		super(options);
		delete this.parent;

		this._updateDuration();

		this.add(this._getTrackFromTweens(objects, options), options);
		if (this.autoStart) this.start();
	}

	@readonly
	isTimeline = true;

	@readonly
	type = "Timeline";

	@readonly
	_execute = time => {
		this._updateChildren(time);
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
