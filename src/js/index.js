import Clock from "./Core/Clock";
import * as Eases from "eases";

class Tween {
	constructor(start, end, options = {}) {
		this.autoStart = options.autoStart;
		this.clock = new Clock();
		this.current = { ...{}, ...this.startValues };
		this.currentTime = 0;
		this.duration = options.duration || 5.0;
		this.easing = Eases[options.easing] || Eases.quadInOut;
		this.easedProgress = this.easing(this.progress);
		this.endValues = end;
		this.isRendering = false;
		this.loop = options.loop;
		this.options = options;
		this.progress = 0;
		this.startValues = start;

		// event binding
		this.onComplete = this.onComplete.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.render = this.render.bind(this);

		if (this.autoStart) this.start();
	}

	onComplete() {
		this.current = { ...{}, ...this.endValues };
		this.currentTime = this.duration;
		this.progress = 1.0;
		this.easedProgress = 1.0;
		this.onUpdate();
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
		this.isRendering = false;
		this.clock.stop();
	}

	play() {
		this.isRendering = true;
		this.clock.start();
		this.render();
	}

	updateValues() {
		// update values
		for (const key in this.startValues) {
			this.current[key] =
				this.startValues[key] +
				(this.endValues[key] - this.startValues[key]) * this.easedProgress;
		}
	}

	render() {
		// update timestamp
		this.currentTime += this.clock.getDelta();

		// update progress
		this.progress = this.currentTime / this.duration;
		this.easedProgress = this.easing(this.progress);

		// validate progress
		if (this.progress >= 1.0) {
			if (this.loop) {
				this.start();
			} else {
				this.onComplete();
			}
		} else {
			this.updateValues();
			// onUpdate
			this.onUpdate();
		}

		// values debug
		// console.log(this.currentTime, this.current);

		if (!this.isRendering) return;
		requestAnimationFrame(this.render);
	}
}

export { Tween };
