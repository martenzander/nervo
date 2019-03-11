import Ticker from "./../Core/Ticker";

export default class Tween extends Ticker {
	constructor(origin, target, options = {}) {
		super(options);
		this.isTween = true;
		this.type = "Tween";
		this.target = target;
		this.origin = origin;
		this.current = { ...{}, ...this.origin };
	}

	execute() {
		// update values
		for (const key in this.origin) {
			this.current[key] = this.origin[key] + (this.target[key] - this.origin[key]) * this.easedProgress;
		}
	}
}
