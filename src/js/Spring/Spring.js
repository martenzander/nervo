import { readonly } from "./../Core/Decorators";
import * as Nervo from "./../index";
import Base from "../Core/Base";

export default class Spring extends Base {
	static Stiffness = 0.2;
	static Damping = 0.5;

	constructor(target, properties, options = {}) {
		super(options);
		delete this.parent;
		delete this.children;
		delete this.add;
		delete this.remove;

		this.autoStart = options.autoStart !== undefined ? options.autoStart : true;
		this.properties = properties;
		this.target = target;
		this.stiffness = options.stiffness !== undefined ? options.stiffness : Spring.Stiffness;
		this.damping = options.damping !== undefined ? options.damping : Spring.Damping;
		this._velocities = {};

		for (const key in this.target) {
			this._velocities[key] = 0.0;
		}

		if (this.autoStart) this.enable();
	}

	@readonly
	isSpring = true;

	@readonly
	type = "Spring";

	@readonly
	setTarget = properties => {
		this.properties = properties;
		if (this.isActive) return;
		this.enable();
	};

	/*
		.disable(): Sets this.isActive to false and interrupts the tick loop.
	*/
	@readonly
	disable = e => {
		this.isActive = false;
	};

	/*
		.enable(): Sets this.isActive to true and triggers the tick loop.
	*/
	@readonly
	enable = e => {
		this.isActive = true;
		this._tick();
	};

	@readonly
	_update = e => {
		let isComplete = false;

		for (const key in this.properties) {
			if (this.target[key] !== this.properties[key]) {
				const valueDelta = this.target[key] - this.properties[key];
				const force = -this.stiffness * valueDelta;
				const damping = -this.damping * this._velocities[key];
				const acceleration = force + damping;
				this._velocities[key] = this._velocities[key] + acceleration;
				this.target[key] += this._velocities[key];
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
