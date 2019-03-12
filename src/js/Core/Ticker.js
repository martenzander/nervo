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
		this.duration = options.duration !== undefined ? options.duration : Motion.Duration;
		this.easing = options.easing !== undefined ? Eases[options.easing] : Eases[Motion.Easing];
		this.isActive = false;
		this.loop = options.loop !== undefined ? options.loop : Motion.Loop;
		this.timeScale = options.timeScale !== undefined ? options.timeScale : Motion.TimeScale;

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
		let scaledTime = time * this.timeScale;
		if (this.isTimeline) console.log(scaledTime, time);
		let updateTime = 0;
		// update progress
		this.progress = scaledTime / this.duration;
		this.easedProgress = this.easing(this.progress);

		// validate progress
		if (this.progress >= 1.0) {
			this.progress = 1.0;
			this.easedProgress = 1.0;
			scaledTime = this.duration;
			updateTime = scaledTime;
		} else {
			updateTime = this.duration * this.easedProgress;
		}

		this.execute(updateTime);
		// onProgress
		this.onProgress();

		if (this.progress >= 1.0) {
			if (this.loop) {
				this.start();
			} else {
				this.onComplete();
			}
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
