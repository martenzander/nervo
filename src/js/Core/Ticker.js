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
		this.easing = options.easing !== undefined ? options.easing : Eases[Nervo.Easing];
		if (typeof this.easing === "string") this.easing = Eases[this.easing];
		this.isActive = false;
		this.loop = options.loop !== undefined ? options.loop : Nervo.Loop;
		this.timeScale = options.timeScale !== undefined ? options.timeScale : Nervo.TimeScale;
	}

	/*
		._clock: Instance of Clock to keep track of time.
	*/
	@readonly
	_clock = new Clock();

	/*
		._reset(): Resets this instance and all of its children to t = 0.
		It's best practice to not call this method directly.
		Use .start() or .stop() instead.
	*/
	@readonly
	_reset = e => {
		this.currentTime = 0;

		/* Reset all children. */
		this.children.forEach(child => {
			child._reset();
		});

		/* Set this.isActive so ._update(t) will have effect. */
		this.isActive = true;

		this._update(this.currentTime);
	};

	/*
		.start(): Resets this instance, all of its children and than starts ticking.
	*/
	@readonly
	start = e => {
		this._reset();
		this.play();
	};

	/*
		.stop(): Resets this instance, all of its children and than stops at t = 0.
	*/
	@readonly
	stop = e => {
		this._reset();
		this.pause();
	};

	/*
		.pause(): Sets this.isActive to false and interrupts the tick loop.
		Also stops the clock at this.currentTime.
	*/
	@readonly
	pause = e => {
		this.isActive = false;
		this._clock.stop();
	};

	/*
		.play(): Sets this.isActive to true and triggers the tick loop after
		restarting the clock.
	*/
	@readonly
	play = e => {
		this.isActive = true;
		this._clock.start();
		this._tick();
	};

	/*
		this.execute(): Actual performance code of extending classes belongs here.
	*/
	@readonly
	_execute = e => {};

	/*
		._update(): Updates the progress based on the currentTime.
		Than applies timeScale and triggers this.execute() with final updateTime.
		Lastly trigger events based on progress and loop options.
	*/

	_update = t => {
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

		this._execute(updateTime);

		/* Trigger events based on progress and loop options. */
		this.dispatchEvent({ type: "onProgress" });

		if (this.progress >= 1.0) {
			if (this.loop) {
				this.start();
			} else {
				this.dispatchEvent({ type: "onComplete" });
				this.pause();
			}
		}
	};

	/*
		._tick(): The requestAnimationFrame loop to trigger ._update() with currentTime.
		Only gets triggered by .play() and should not be called directly.
	*/
	@readonly
	_tick = e => {
		if (!this.isActive) return;

		/* Update time. */
		this.deltaTime = this._clock.getDelta();
		this.lastTime = this.currentTime;
		this.currentTime += this.deltaTime;

		/* Trigger update to calculate actual progress. */
		this._update(this.currentTime);

		requestAnimationFrame(this._tick);
	};
}
