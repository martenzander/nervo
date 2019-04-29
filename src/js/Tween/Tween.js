import { readonly } from "./../Core/Decorators";
import Ticker from "./../Core/Ticker";

export default class Tween extends Ticker {
	@readonly
	isTween = true;

	@readonly
	type = "Tween";

	constructor(target, properties, options = {}) {
		super(options);

		this.properties = properties;
		this.target = target;
		this._reference = { ...{}, ...this.target };
		if (this.autoStart) this.start();
	}

	@readonly
	_execute = e => {
		for (const key in this.properties) {
			this.target[key] =
				this._reference[key] +
				(this.properties[key] - this._reference[key]) * this.easedProgress;
		}
	};
}
