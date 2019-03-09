import Clock from "./Clock";
let tweenIndex = 0;

export default class Timeline {
	static AutoStart = false;

	constructor(tweens = [], options = {}) {
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Timeline.AutoStart;
		this.clock = new Clock();
		this.currentTime = 0;
		this.isTweening = false;
		this.options = options;

		this.tweens = tweens || [];
		this.tweens.forEach(tween => {
			tween.stop();
		});

		// event binding
		this.onComplete = this.onComplete.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.tween = this.tween.bind(this);

		if (this.autoStart) this.start();
	}

	getPreTweenElapsedTime() {
		let preTweenElapsedTime = 0;

		for (let i = 0; i < tweenIndex; i++) {
			preTweenElapsedTime += this.tweens[i].duration;
		}

		return preTweenElapsedTime;
	}

	checkTweenIndex() {
		if (tweenIndex === this.tweens.length - 1) {
			this.pause();
			this.onComplete();
		} else {
			tweenIndex++;
		}
	}

	onComplete() {
		if ("onComplete" in this.options) this.options.onComplete(this.tweens[tweenIndex]);
	}

	onUpdate() {
		if ("onUpdate" in this.options) this.options.onUpdate(this.tweens[tweenIndex]);
	}

	reset() {
		this.currentTime = 0;
		tweenIndex = 0;
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

		this.update(this.currentTime);

		if (!this.isTweening) return;
		requestAnimationFrame(this.tween);
	}

	update(time) {
		// current tween
		const tween = this.tweens[tweenIndex];
		const preTweenElapsedTime = this.getPreTweenElapsedTime();

		if (time >= tween.duration + preTweenElapsedTime) {
			time = tween.duration + preTweenElapsedTime;
			tween.update(tween.duration);
			this.onUpdate();
			this.checkTweenIndex();
		} else {
			tween.update(time - preTweenElapsedTime);
			this.onUpdate();
		}
	}
}
