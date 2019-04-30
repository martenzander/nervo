import { readonly } from "./../Core/Decorators";
import * as Nervo from "./../index";
import Root from "../Core/Root";

export default class Spring extends Root {
	static Stiffness = 0.2;
	static Damping = 0.5;

	constructor(object, target, options = {}) {
		super(options);

		this.autoStart = options.autoStart !== undefined ? options.autoStart : true;
		this.target = target;
		this.object = object;
		this.stiffness = options.stiffness !== undefined ? options.stiffness : Spring.Stiffness;
		this.damping = options.damping !== undefined ? options.damping : Spring.Damping;
		this._velocities = {};

		for (const key in this.object) {
			this._velocities[key] = 0.0;
		}

		if (this.autoStart) this.enable();
	}

	@readonly
	isSpring = true;

	@readonly
	type = "Spring";

	@readonly
	setTarget = target => {
		this.target = target;
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
		let isComplete = false;

		for (const key in this.target) {
			if (this.object[key] !== this.target[key]) {
				const valueDelta = this.object[key] - this.target[key];
				const force = -this.stiffness * valueDelta;
				const damping = -this.damping * this._velocities[key];
				const acceleration = force + damping;
				this._velocities[key] = this._velocities[key] + acceleration;
				this.object[key] += this._velocities[key];
			} else {
				isComplete = true;
			}
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
		if (!this.isActive) return;

		/* Trigger update to calculate actual progress. */
		this._update();

		requestAnimationFrame(this._tick);
	};
}
