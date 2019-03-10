import Clock from "./Clock";
import Track from "./Track";

export default class Timeline {
	static AutoStart = false;
	static Instances = [];
	static Loop = false;
	static ID = 0;

	constructor(tweens = [], options = {}) {
		this.autoStart = options.autoStart !== undefined ? options.autoStart : Timeline.AutoStart;
		this.clock = new Clock();
		this.currentTime = 0;
		this.isTweening = false;
		this.options = options;
		this.loop = options.loop !== undefined ? options.loop : Timeline.Loop;
		this.tracks = [];
		this.id = Timeline.ID;
		Timeline.ID++;
		Timeline.Instances.push(this);

		tweens.forEach(tween => {
			tween.stop();
			this.add(tween);
		});

		// event binding
		this.onComplete = this.onComplete.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.tween = this.tween.bind(this);

		if (this.autoStart) this.start();
	}

	getDuration() {
		let duration = 0;

		this.tracks.forEach(track => {
			if (track.end > duration) duration = track.end;
		});

		return duration;
	}

	add(tween, options = {}) {
		const track = new Track(tween, {
			start: options.start || this.duration,
			timeline: this,
		});
		this.tracks.push(track);
		this.duration = this.getDuration();
	}

	onComplete() {
		this.pause();
		if ("onComplete" in this.options) this.options.onComplete(this);
	}

	onUpdate() {
		if ("onUpdate" in this.options) this.options.onUpdate(this);
	}

	reset() {
		this.currentTime = 0;
		this.tracks.forEach(track => {
			track.reset();
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

	updateTracks(time) {
		this.tracks.forEach(track => {
			track.update(time);
		});
	}

	update(time) {
		if (time >= this.duration) {
			if (this.loop) {
				this.start();
			} else {
				time = this.duration;
				this.updateTracks(time);
				this.onUpdate();
				this.onComplete();
			}
		} else {
			this.updateTracks(time);
			this.onUpdate();
		}
	}
}
