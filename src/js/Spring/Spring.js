import * as Nervo from "./../index";
import Ticker from "../Core/Ticker";

export default class Spring extends Ticker {
	static Stiffness = 0.2;
	static Damping = 0.5;

	constructor(current, target, options = {}) {
		super(options);
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Nervo.AutoStart;
		this.isActive = false;
		this.isSpring = true;
		this.type = "Spring";
		this.target = target;
		this.current = current;
		this.stiffness = options.stiffness !== undefined ? options.stiffness : Spring.Stiffness;
		this.damping = options.damping !== undefined ? options.damping : Spring.Damping;
		this.initialVelocity = 0.0;
		this.velocities = {};

		for (const key in this.current) {
			this.velocities[key] = this.initialVelocity;
		}

		// event binding
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);

		if (this.autoStart) this.play();
	}

	lerp(v0, v1, t) {
		return (1 - t) * v0 + t * v1;
	}

	setTarget(target) {
		this.target = target;
		if (this.isActive) return;
		this.play();
	}

	update() {
		let isComplete = false;

		for (const key in this.current) {
			if (this.current[key] !== this.target[key]) {
				const valueDelta = this.current[key] - this.target[key];
				const force = -this.stiffness * valueDelta;
				const damping = -this.damping * this.velocities[key];
				const acceleration = force + damping;
				this.velocities[key] = this.velocities[key] + acceleration;
				// this.progress = this.lerp(this.current[key], this.target[key], 0.1);
				this.current[key] += this.velocities[key];
			} else {
				isComplete = true;
			}
		}

		this.onProgress();

		if (isComplete) {
			this.pause();
			this.onComplete();
		}
	}
}
