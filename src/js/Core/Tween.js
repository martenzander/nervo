import Clock from "./Clock";
import * as Eases from "eases";

export default class Tween {
	static AutoStart = false;
	static Duration = 5.0;
	static Easing = "quadInOut";
	static Loop = false;

	constructor(start, end, options = {}) {
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Tween.AutoStart;
		this.clock = new Clock();
		this.current = { ...{}, ...this.startValues };
		this.currentTime = 0;
		this.duration = options.duration || Tween.Duration;
		this.easing = Eases[options.easing] || Eases[Tween.Easing];
		this.easedProgress = this.easing(this.progress);
		this.endValues = end;
		this.isTweening = false;
		this.loop = options.loop !== undefined ? options.loop : Tween.Loop;
		this.options = options;
		this.progress = 0;
		this.startValues = start;

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
		if ("onComplete" in this.options) this.options.onComplete(this);
		this.pause();
	}

	onUpdate() {
		if ("onUpdate" in this.options) this.options.onUpdate(this);
	}

	reset() {
		this.current = { ...{}, ...this.startValues };
		this.currentTime = 0;
		this.progress = 0;
		this.easedProgress = 0;
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
		this.isTweening = false;
		this.clock.stop();
	}

	play() {
		this.isTweening = true;
		this.clock.start();
		this.tween();
	}

	tween() {
		// update timestamp
		this.currentTime += this.clock.getDelta();

		// update tween
		this.update(this.currentTime);

		if (!this.isTweening) return;
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
				this.current[key] =
					this.startValues[key] +
					(this.endValues[key] - this.startValues[key]) * this.easedProgress;
			}
		}
		// onUpdate
		this.onUpdate();
	}
}
