import { readonly } from "./../Core/Decorators";
import Ticker from "./../Core/Ticker";

export default class Tween extends Ticker {
	@readonly
	isTween = true;

	@readonly
	type = "Tween";

	constructor(from, to, options = {}) {
		super(options);

		this.from = from;
		this.to = to;
		this.target = options.target !== undefined ? options.target : {};
		if (this.autoStart) this.start();
	}

	@readonly
	setDuration = duration => {
		this.duration = duration;
		this._onChange(this);
	};

	@readonly
	_execute = e => {
		for (const key in this.to) {
			this.target[key] =
				this.from[key] + (this.to[key] - this.from[key]) * this.easedProgress;
		}
	};
}
