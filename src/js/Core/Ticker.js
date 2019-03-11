import * as Motion from "./../index";
import Clock from "./Clock";
import Base from "./Base";
import * as Eases from "eases";

export default class Ticker extends Base {
	constructor(options) {
		super(options);
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Motion.AutoStart;
		this.clock = new Clock();
		this.currentTime = 0;
		this.duration = options.duration || Motion.Duration;
		this.easing = Eases[options.easing] || Eases[Motion.Easing];
		this.isActive = false;
		this.loop = options.loop !== undefined ? options.loop : Motion.Loop;
		this.timeScale = options.timeScale !== undefined ? options.timeScale : Motion.TimeScale;
		this.scaledDuration = this.duration * this.timeScale;

		// event binding
		this.tick = this.tick.bind(this);
		this.onProgress = this.onProgress.bind(this);
		this.onComplete = this.onComplete.bind(this);

		if (this.autoStart) this.start();
	}

	onComplete() {
		this.pause();
		if ("onComplete" in this.options) this.options.onComplete(this);
	}

	onProgress() {
		if ("onProgress" in this.options) this.options.onProgress(this);
	}

	reset() {
		// reset currentTime
		this.currentTime = 0;

		// trigger reset of children
		this.children.forEach(child => {
			child.reset();
		});

		// update with currentTime = 0
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
		this.tick();
	}

	execute(time) {
		this.updateChildren(time);
	}

	update(time) {
		// update progress
		this.progress = time / this.scaledDuration;
		this.easedProgress = this.easing(this.progress);

		// validate progress
		if (this.progress >= 1.0) {
			this.progress = 1.0;
			this.easedProgress = 1.0;
			time = this.scaledDuration;
			this.execute(time);
			// onProgress
			this.onProgress();

			if (this.loop) {
				this.start();
			} else {
				this.onComplete();
			}
		} else {
			this.execute(this.scaledDuration * this.easedProgress);
			// onProgress
			this.onProgress();
		}
	}

	tick() {
		// update time
		this.currentTime += this.clock.getDelta();

		// update call
		this.update(this.currentTime);

		if (!this.isActive) return;
		requestAnimationFrame(this.tick);
	}
}
