import Clock from "./../Core/Clock";
import Base from "./../Core/Base";
import * as Eases from "eases";

export default class Tween extends Base {
	static AutoStart = false;
	static Duration = 5.0;
	static Easing = "quadInOut";
	static Loop = false;

	constructor(start, end, options = {}) {
		super();
		this.isTween = true;
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Tween.AutoStart;
		this.clock = new Clock();
		this.duration = options.duration || Tween.Duration;
		this.easing = Eases[options.easing] || Eases[Tween.Easing];
		this.endValues = end;
		this.isActive = false;
		this.loop = options.loop !== undefined ? options.loop : Tween.Loop;
		this.options = options;
		this.startValues = start;

		this.reset();

		// event binding
		this.onComplete = this.onComplete.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.tween = this.tween.bind(this);

		if (this.autoStart) this.start();
	}

	onComplete() {
		this.current = { ...{}, ...this.endValues };
		this.currentTime = this.duration;
		this.progress = 1.0;
		this.easedProgress = 1.0;
		this.pause();
		if ("onComplete" in this.options) this.options.onComplete(this);
	}

	onUpdate() {
		if ("onUpdate" in this.options) this.options.onUpdate(this);
	}

	reset() {
		this.current = { ...{}, ...this.startValues };
		this.currentTime = 0;
		// update tween
		this.update(this.currentTime);
	}

	start() {
		this.reset();
		this.play();
	}

	stop() {
		this.reset();
		this.pause();
	}

	pause() {
		this.isActive = false;
		this.clock.stop();
	}

	play() {
		this.isActive = true;
		this.clock.start();
		this.tween();
	}

	tween() {
		// update timestamp
		this.currentTime += this.clock.getDelta();

		// update tween
		this.update(this.currentTime);

		if (!this.isActive) return;
		requestAnimationFrame(this.tween);
	}

	update(time) {
		// update progress
		this.progress = time / this.duration;
		this.easedProgress = this.easing(this.progress);

		// validate progress
		if (this.progress >= 1.0) {
			if (this.loop) {
				this.start();
			} else {
				this.onComplete();
			}
		} else {
			// update values
			for (const key in this.startValues) {
				this.current[key] = this.startValues[key] + (this.endValues[key] - this.startValues[key]) * this.easedProgress;
			}
		}
		// onUpdate
		this.onUpdate();
	}
}
