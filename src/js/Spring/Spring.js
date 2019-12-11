import { readonly } from "./../Core/Decorators";
import * as Nervo from "./../index";
import Root from "../Core/Root";

export default class Spring extends Root {
	static Stiffness = 0.2;
	static Damping = 0.5;
	static Threshold = 0;

	constructor(target, to, options = {}) {
		super(options);

		this.autoStart = options.autoStart !== undefined ? options.autoStart : false;
		this.to = to;
		this.target = target !== undefined ? target : {};
		this.threshold = options.threshold !== undefined ? options.threshold : Spring.Threshold;
		this.stiffness = options.stiffness !== undefined ? options.stiffness : Spring.Stiffness;
		this.damping = options.damping !== undefined ? options.damping : Spring.Damping;
		this._controlObj = {};
		this._velocities = {};

		for (const key in this.target) {
			this._velocities[key] = 0.0;
			this._controlObj[key] = false;
		}

		if (this.autoStart) this.enable();
	}

	@readonly
	isSpring = true;

	@readonly
	type = "Spring";

	@readonly
	springTo = to => {
		this.to = to;
		if (this.isActive) return;
		this.enable();
	};

	/*
		.disable(): Sets this.isActive to false and interrupts the tick loop.
	*/
	@readonly
	disable = () => {
		this.isActive = false;
	};

	/*
		.enable(): Sets this.isActive to true and triggers the tick loop.
	*/
	@readonly
	enable = () => {
		this.isActive = true;
		this._tick();
	};

	@readonly
	_update = e => {
		let isComplete = true;

		for (const key in this.to) {
			const valueDelta = this.target[key] - this.to[key];

			if (Math.abs(valueDelta) > this.threshold) {
				const force = -this.stiffness * valueDelta;
				const damping = -this.damping * this._velocities[key];
				const acceleration = force + damping;
				this._velocities[key] = this._velocities[key] + acceleration;
				this.target[key] += this._velocities[key];
				this._controlObj[key] = false;
			} else {
				this._controlObj[key] = true;
			}
		}

		for (const key in this._controlObj) {
			if (this._controlObj[key] === false) isComplete = false;
		}

		this.dispatchEvent({ type: "onProgress" });

		if (isComplete) {
			this.disable();
			this.dispatchEvent({ type: "onComplete" });
		}
	};

	/*
		._tick(): The requestAnimationFrame loop to trigger ._update().
		Only gets triggered by .play() and should not be called directly.
	*/
	@readonly
	_tick = e => {
		if (this.isActive === false) return;

		/* Trigger update to calculate actual progress. */
		this._update();

		requestAnimationFrame(this._tick);
	};
}
