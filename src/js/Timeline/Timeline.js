import Clock from "./../Core/Clock";
import Base from "./../Core/Base";
import Track from "./../Track/Track";

export default class Timeline extends Base {
	static AutoStart = false;
	static Loop = false;

	constructor(objects = [], options = {}) {
		super();
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Timeline.AutoStart;
		this.duration = 0;
		this.isTimeline = true;
		this.clock = new Clock();
		this.currentTime = 0;
		this.isActive = false;
		this.options = options;
		this.loop = options.loop !== undefined ? options.loop : Timeline.Loop;

		objects.forEach(object => {
			this.add(object, {});
		});

		// event binding
		this.onComplete = this.onComplete.bind(this);
		this.tween = this.tween.bind(this);

		if (this.autoStart) this.start();
	}

	getDuration() {
		let duration = 0;

		this.children.forEach(child => {
			if (child.end > duration) duration = child.end;
		});

		return duration;
	}

	add(tween) {
		if (!tween.isTween) {
			console.error(`Object is no instance of Tween. : ${tween}`);
			return;
		}

		const track = new Track(tween, {
			start: this.options.start || this.duration,
		});
		this.onAdd(track);
		this.duration = this.getDuration();
	}

	onComplete() {
		if ("onComplete" in this.options) this.options.onComplete(this);
		this.pause();
	}

	reset() {
		this.currentTime = 0;
		this.children.forEach(child => {
			child.reset();
		});
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
		this.tween();
	}

	tween() {
		// update timestamp
		this.currentTime += this.clock.getDelta();

		this.update(this.currentTime);

		if (!this.isActive) return;
		requestAnimationFrame(this.tween);
	}

	update(time) {
		if (time >= this.duration) {
			time = this.duration;
			this.updateChildren(time);
			if (this.loop) {
				this.start();
			} else {
				this.onComplete();
			}
		} else {
			this.updateChildren(time);
		}
	}
}
