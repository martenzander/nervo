import * as Nervo from "./../index";
import Clock from "./Clock";
import Base from "./Base";
import * as Eases from "eases";
import { readonly } from "./Decorators";

export default class Ticker extends Base {
	/*
		Nervo.Ticker: This is not intended to be called directly.
		It is called internally as a base class to manage timing and easing by other Nervo classes.
	*/
	constructor(options) {
		super(options);
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Nervo.AutoStart;
		this.currentTime = 0;
		this.duration = options.duration !== undefined ? options.duration : Nervo.Duration;
		this.easing = options.easing !== undefined ? Eases[options.easing] : Eases[Nervo.Easing];
		this.isActive = false;
		this.loop = options.loop !== undefined ? options.loop : Nervo.Loop;
		this.timeScale = options.timeScale !== undefined ? options.timeScale : Nervo.TimeScale;
	}

	/*
		this.reset(): Resets this instance and all of its children to t = 0.
		It's best practice to not call this method directly.
		Use this.start() or this.stop() instead.
	*/
	@readonly
	_clock = new Clock();

	reset() {
	@readonly
		this.currentTime = 0;

		/* Reset all children. */
		this.children.forEach(child => {
			child.reset();
		});

		/* Set this.isActive so this.update(t) will have effect. */
		this.isActive = true;

		this.update(this.currentTime);
	}

	/*
		this.start(): Resets this instance, all of its children and than starts ticking.
	*/
	@readonly
	start() {
		this.reset();
		this.play();
	}

	/*
		this.stop(): Resets this instance, all of its children and than stops at t = 0.
	*/
	@readonly
	stop() {
		this.reset();
		this.pause();
	}

	/*
		this.pause(): Sets this.isActive to false and interrupts the tick loop.
		Also stops the clock at this.currentTime.
	*/
	@readonly
	pause() {
		this.isActive = false;
		this.clock.stop();
	}

	/*
		this.play(): Sets this.isActive to true and triggers the tick loop after
		restarting the clock.
	*/
	@readonly
	play() {
		this.isActive = true;
		this.clock.start();
		this.tick();
	}

	/*
		this.execute(): Actual performance code of extending classes belongs here.
	*/
	@readonly
	execute() {}

	/*
		this.update(): Updates the progress based on the currentTime.
		Than applies timeScale and triggers this.execute() with final updateTime.
		Lastly trigger events based on progress and loop options.
	*/

	update(t) {
		if (!this.isActive) return;

		let updateTime = 0;

		/* Update progress. */
		this.progress = t / (this.duration * this.timeScale);
		this.easedProgress = this.easing(this.progress);

		/* Set actual updateTime. */
		if (this.progress >= 1.0) {
			this.progress = 1.0;
			this.easedProgress = 1.0;
			updateTime = this.duration * this.timeScale;
		} else {
			updateTime = this.duration * this.timeScale * this.easedProgress;
		}

		this.execute(updateTime);

		/* Trigger events based on progress and loop options. */
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

	/*
		this.tick(): The requestAnimationFrame loop to trigger this.update() with currentTime.
		Only gets triggered by this.play() and should not be called directly.
	*/
	@readonly
	tick = e => {
		if (!this.isActive) return;

		/* Update time. */
		this.deltaTime = this.clock.getDelta();
		this.lastTime = this.currentTime;
		this.currentTime += this.deltaTime;

		/* Trigger update to calculate actual progress. */
		this.update(this.currentTime);

		requestAnimationFrame(this.tick);
	};
}
