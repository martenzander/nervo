import * as Nervo from "../../../../src/js/index";
import Canvas from "./Core/Canvas";
import eases from "eases";

const easeNames = [];

for (const key in eases) {
	easeNames.push(key);
}

class TimelineExample extends Canvas {
	constructor(canvas) {
		super(canvas);
		this.setSizes();
		this.tweens = [];
		this.fixedPadding = 50;

		/*
			Create a bunch of Tweens.
		*/

		for (let i = 0; i < 10; i++) {
			const tween = new Nervo.Tween(
				{ progress: 0 },
				{ progress: 1 },
				{
					easing: eases.sineOut,
					duration: 1 + (i % 2),
					onProgress: e => {},
				}
			);
			this.tweens.push(tween);
		}

		/*
			Create a new looping Timeline.
			.onProgress(): Redraw the canvas
		*/

		this.timeline = new Nervo.Timeline([], {
			loop: true,
			onComplete: e => {},
			onProgress: e => {
				this.draw();
			},
		});

		/*
			Add .tweens to .timeline.
		*/
		for (let i = 0; i < this.tweens.length; i += 2) {
			this.timeline.add([this.tweens[i], this.tweens[i + 1]], {
				startTime: i * 1.0,
			});
		}

		/*
			Add relevant properties to dat.GUI.
		*/

		// Tracks
		const tracksFolder = this.gui.addFolder("Tracks");
		for (let i = 0; i < this.timeline.children.length; i++) {
			const folder = tracksFolder.addFolder(`${i + 1}`);
			const track = this.timeline.children[i];
			folder
				.add(track, "startTime")
				.min(0.0)
				.onChange(e => {
					track.setStartTime(e);
				});
			folder.add(track, "timeScale").onChange(e => {
				track.setTimeScale(e);
			});
			const tweens = folder.addFolder("Tweens");
			for (let n = 0; n < track.children.length; n++) {
				const tween = track.children[n];
				const tweenFolder = tweens.addFolder(`${n + 1}`);
				tweenFolder.add(tween, "duration").onChange(e => {
					tween.setDuration(e);
				});
				tweenFolder.add(tween, "timeScale").onChange(e => {
					tween.setTimeScale(e);
				});
			}
		}

		// Timeline
		const timelineFolder = this.gui.addFolder("Timeline");
		timelineFolder.add(this.timeline, "timeScale").onChange(e => {
			this.timeline.setTimeScale(e);
		});
		timelineFolder.add(this.timeline, "easing", easeNames).onChange(e => {
			this.timeline.easing = eases[e];
		});

		/*
			Start Timeline.
		*/
		this.timeline.start();
	}

	draw = e => {
		/*
			Clear the current canvas drawing.
		*/
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		/*
			Calculate trackHeight, leftMargin.
			Set fontStyle and tweenPadding.
		*/
		const trackHeight =
			(this.canvas.height - this.fixedPadding) / this.timeline.children.length;
		// const leftMargin = this.fixedPadding * 0.25;
		const leftMargin = 5;
		const tweenPadding = 1;
		this.context.font = "12px Roboto Slab Bold";
		this.context.textBaseline = "top";
		this.context.textAlign = "center";

		for (let i = 0; i < this.timeline.children.length; i++) {
			const track = this.timeline.children[i];
			const x =
				(track.startTime / this.timeline.duration) * (this.canvas.width - leftMargin) +
				leftMargin;
			const width =
				((track.duration * track.timeScale) / this.timeline.duration) *
				(this.canvas.width - leftMargin);
			const y = this.fixedPadding + (trackHeight + 1) * i;

			// Track Backgrounds
			this.context.fillStyle = "#141730";
			this.context.fillRect(0, y, this.canvas.width, trackHeight);
			this.context.fillStyle = "#202449";
			this.context.fillRect(leftMargin - 1, y, 1, trackHeight);
			this.context.fillStyle = "#DD436B";
			if (track.isActive) this.context.fillRect(0, y, leftMargin, trackHeight);

			// Tweens
			for (let n = 0; n < track.children.length; n++) {
				const tween = track.children[n];
				const tweenHeight =
					(trackHeight - (tweenPadding * track.children.length - 1)) /
					track.children.length;
				const tweenY = y + (tweenHeight + tweenPadding) * n;
				const totalTweenDuration = tween.duration * tween.timeScale;
				const tweenWidth = (totalTweenDuration / track.duration) * width;
				this.context.fillStyle = tween.isActive ? "#FFEB4F" : "rgba( 255, 235, 79 , 0.35)";
				this.context.fillRect(x, tweenY, tweenWidth, tweenHeight);
			}
		}

		/*
			Draw time slider.
		*/
		this.context.fillStyle = "rgba( 32, 36, 73 , 0.5)";
		const width = this.timeline.easedProgress * (this.canvas.width - leftMargin);
		this.context.moveTo(width + leftMargin, 0);
		this.context.lineTo(width + leftMargin, this.canvas.height);
		this.context.stroke();

		/*
			Draw time measurement.
		*/
		this.context.strokeStyle = "rgba(255,255,255,0.25)";
		this.context.lineWidth = 1;
		this.context.fillStyle = "rgba(255,255,255,0.25)";

		for (let i = 0; i < this.timeline.duration * 10; i++) {
			const x =
				(i / (this.timeline.duration * 10)) * (this.canvas.width - leftMargin) + leftMargin;
			this.context.beginPath();
			this.context.moveTo(x, 0);
			if (i % 10 === 0) {
				this.context.lineTo(x, 10);
				this.context.stroke();
				this.context.fillText(`${i / 10}`, x, 15);
			}
		}

		// TrackLabel
		this.context.textAlign = "left";
		this.context.textBaseline = "middle";

		for (let i = 0; i < this.timeline.children.length; i++) {
			const track = this.timeline.children[i];
			this.context.fillStyle = track.isActive ? "#FFEB4F" : "rgba(255,255,255,0.25)";
			const y = this.fixedPadding + (trackHeight + 1) * i;
			// this.context.fillText(`Track ${i + 1}`, 15, y + trackHeight / 2 + 2);
		}
	};
}

export default TimelineExample;
