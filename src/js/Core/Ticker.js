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

		if (this.autoStart) this.start();
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

	execute() {}

	update(t) {
		if (!this.isActive) return;

		let updateTime = 0;
		// update progress
		this.progress = t / (this.duration * this.timeScale);
		this.easedProgress = this.easing(this.progress);

		// validate progress
		if (this.progress >= 1.0) {
			this.progress = 1.0;
			this.easedProgress = 1.0;
			updateTime = this.duration * this.timeScale;
		} else {
			updateTime = this.duration * this.timeScale * this.easedProgress;
		}

		this.execute(updateTime);
		// onProgress
		this.onProgress();

		if (this.progress >= 1.0) {
			if (this.loop) {
				this.start();
			} else {
				this.onComplete();
				this.pause();
			}
		}
	}

	tick() {
		if (!this.isActive) return;

		// update time
		this.currentTime += this.clock.getDelta();

		// update call
		this.update(this.currentTime);

		requestAnimationFrame(this.tick);
	}
}
