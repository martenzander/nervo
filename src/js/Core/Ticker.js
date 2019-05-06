import * as Nervo from "./../index";
import Clock from "./Clock";
import Family from "./Family";
import * as Eases from "eases";
import { readonly } from "./Decorators";

export default class Ticker extends Family {
	/*
		Nervo.Ticker: This is not intended to be called directly.
		It is called internally as a base class to manage timing and easing by other Nervo classes.
	*/
	constructor(options) {
		super(options);
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Nervo.AutoStart;
		this.currentTime = 0;
		this.duration = options.duration !== undefined ? options.duration : 0;
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
	_reset = e => {
		this.currentTime = 0;

		/* Reset all children. */
		this.children.forEach(child => {
			child._reset();
		});

		/* Set this.isActive so ._update(t) will have effect. */
		this.isActive = true;

		if (!this.isTrack) this._update(this.currentTime);
	};

	@readonly
	setTimeScale = timeScale => {
		this.timeScale = timeScale;
		this._onChange(this);

		return this;
	};

	/*
		.start(): Resets this instance, all of its children and than starts ticking.
	*/
	@readonly
	start = () => {
		this._reset();
		this.play();
	};

	/*
		.stop(): Resets this instance, all of its children and than stops at t = 0.
	*/
	@readonly
	stop = () => {
		this._reset();
		this.pause();
	};

	/*
		.pause(): Sets this.isActive to false and interrupts the tick loop.
		Also stops the clock at this.currentTime.
	*/
	@readonly
	pause = () => {
		this.isActive = false;
		this._clock.stop();
	};

	/*
		.play(): Sets this.isActive to true and triggers the tick loop after
		restarting the clock.
	*/
	@readonly
	play = () => {
		this.isActive = true;
		this._clock.start();
		this._tick();
	};

	/*
		._execute(): Actual performance code of extending classes belongs here.
	*/

	_execute = e => {};

	/*
		_updateProgress(): Updates .progress and .easedProgress.
	*/

	@readonly
	_updateProgress = t => {
		this.progress = t / (this.duration * this.timeScale);
		this.easedProgress = this.easing(this.progress);

		/* Set actual updateTime. */
		if (this.progress >= 1.0) {
			this.progress = 1.0;
			this.easedProgress = 1.0;
		} else if (this.progress <= 0) {
			this.progress = 0.0;
			this.easedProgress = 0.0;
		}
	};

	/*
		._update(): Updates the progress based on given time (t).
		Triggers this.execute() with final updateTime.
		Lastly trigger events based on progress and loop options.
	*/

	_update = t => {
		if (!this.isActive) return;

		this._updateProgress(t);

		const updateTime = this.duration * this.easedProgress;

		this._execute(updateTime);

		if (this.progress >= 1.0) {
			if (this.loop) {
				this.start();
			} else {
				this.dispatchEvent({ type: "onProgress" });
				this.dispatchEvent({ type: "onComplete" });
				this.pause();
			}
		} else if (this.progress > 0) {
			this.dispatchEvent({ type: "onProgress" });
		}
	};

	/*
		._tick(): The requestAnimationFrame loop to trigger ._update() with currentTime.
		Only gets triggered by .play() and should not be called directly.
	*/

	@readonly
	_tick = () => {
		if (!this.isActive) return;

		/* Update time. */
		this.currentTime += this._clock.getDelta();

		/* Trigger update to calculate actual progress. */
		this._update(this.currentTime);

		requestAnimationFrame(this._tick);
	};
}
