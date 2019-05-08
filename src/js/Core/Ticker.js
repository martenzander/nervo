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
		this._isFinished = false;
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Nervo.AutoStart;
		this.currentTime = 0;
		this.duration = options.duration !== undefined ? options.duration : 0;
		this.easing = options.easing !== undefined ? options.easing : Eases[Nervo.Easing];
		if (typeof this.easing === "string") this.easing = Eases[this.easing];
		this.isActive = false;
		this.loop = options.loop !== undefined ? options.loop : Nervo.Loop;
		this.delay = options.delay !== undefined ? options.delay : 0;
		this.scale = options.scale !== undefined || 0 ? options.scale : 1.0;
	}

	/*
		._clock: Instance of Clock to keep track of time.
	*/
	@readonly
	_clock = new Clock();

	/*
		.setDelay:
	*/
	@readonly
	setDelay = delay => {
		this.delay = delay;
		this._onChange(this);

		return this;
	};

	/*
		._reset(): Resets this instance and all of its children to t = 0.
		It's best practice to not call this method directly.
		Use .start() or .stop() instead.
	*/
	_reset = e => {
		this.currentTime = 0;
		this._update(this.currentTime);
	};

	@readonly
	setScale = scale => {
		if (scale <= 0) {
			console.warn("Nervo.Ticker.setScale: scale <= 0 is not allowed.", this);
			this.scale = 1.0;
			return this;
		}

		this.scale = scale;
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
		this.paused = true;
		this._clock.stop();
	};

	/*
		.play(): Sets this.isActive to true and triggers the tick loop after
		restarting the clock.
	*/
	@readonly
	play = () => {
		this.paused = false;
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
		this.progress = t / (this.duration * this.scale);
		this.easedProgress = this.easing(this.progress);

		/* Set actual updateTime. */
		if (this.progress >= 1.0) {
			this.progress = 1.0;
			this.easedProgress = 1.0;
		} else if (this.progress < 0) {
			this.progress = -1.0;
			this.easedProgress = -1.0;
		}
	};

	/*
		._update(): Updates the progress based on given time (t).
		Triggers this.execute() with final updateTime.
		Lastly trigger events based on progress and loop options.
	*/

	_update = t => {
		this._updateProgress(t - this.delay);

		const updateTime = this.duration * this.easedProgress;

		if (this.isTween) {
			this._execute(updateTime);
		} else {
			this._updateChildrenByTime(updateTime);
		}

		if (this.progress >= 1.0) {
			if (this.loop) {
				this.dispatchEvent({ type: "onProgress" });
				this.start();
			} else if (!this._isFinished) {
				this._isFinished = true;
				this.dispatchEvent({ type: "onProgress" });
				this.dispatchEvent({ type: "onComplete" });
				this.pause();
			} else {
				this.isActive = false;
			}
		} else if (this.progress >= 0) {
			this.isActive = true;
			this._isFinished = false;
			this.dispatchEvent({ type: "onProgress" });
		} else {
			this._isFinished = false;
			this.isActive = false;
		}
	};

	/*
		._tick(): The requestAnimationFrame loop to trigger ._update() with currentTime.
		Only gets triggered by .play() and should not be called directly.
	*/

	@readonly
	_tick = () => {
		if (this.paused) return;

		/* Update time. */
		this.currentTime += this._clock.getDelta();

		/* Trigger update to calculate actual progress. */
		this._update(this.currentTime);

		requestAnimationFrame(this._tick);
	};
}
