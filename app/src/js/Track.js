import * as Nervo from "../../../src/js/index";
import Canvas from "./Core/Canvas";
import eases from "eases";

const easeNames = [];

for (const key in eases) {
	easeNames.push(key);
}

class Track extends Canvas {
	constructor(canvas) {
		super(canvas);
		this.radiusFactor = 0.0625 / 2;
		this.setSizes();
		this.trackHeight = 0.1724137931;
		this.trackBgColor = "#141730";
		this.trackLabelFontSize = 0.02181818182;

		// tweens
		this.tweens = [];
		for (let i = 0; i < 8; i++) {
			const tween = new Nervo.Tween(
				{ progress: 0 },
				{ progress: 1 },
				{
					easing: "cubicInOut",
					duration: 1 + (i % 2),
					onProgress: e => {},
				}
			);

			if (i === 0) {
				tween.onProgress = e => {
					// console.log(e.target.progress);
				};
			}

			this.tweens.push(tween);
		}

		this.timeline = new Nervo.Timeline([], {
			loop: true,
			timeScale: 1,
			onComplete: e => {},
			onProgress: e => {
				this.draw();
			},
		});

		for (let i = 0; i < this.tweens.length; i += 2) {
			this.timeline.add([this.tweens[i], this.tweens[i + 1]], {
				startTime: i,
			});
		}

		// Tweens

		const tweensFolder = this.gui.addFolder("Tweens");
		for (let i = 0; i < this.tweens.length; i++) {
			const tween = this.tweens[i];
			const tweenFolder = tweensFolder.addFolder(`Tween ${i + 1}`);
			tweenFolder
				.add(tween, "duration")
				.min(0)
				.onChange(e => {
					tween.setDuration(e);
				});
			tweenFolder.add(tween, "timeScale").onChange(e => {
				tween.setTimeScale(e);
			});
		}

		// Tracks
		const tracksFolder = this.gui.addFolder("Tracks");
		for (let i = 0; i < this.timeline.children.length; i++) {
			const folder = tracksFolder.addFolder(`Track ${i + 1}`);
			const track = this.timeline.children[i];
			folder
				.add(track, "startTime")
				.min(0)
				.onChange(e => {
					track.setStartTime(e);
				});
			folder.add(track, "timeScale").onChange(e => {
				track.setTimeScale(e);
			});
		}

		// Timeline
		const timelineFolder = this.gui.addFolder("Timeline");
		timelineFolder.add(this.timeline, "timeScale");
		timelineFolder.add(this.timeline, "easing", easeNames).onChange(e => {
			this.timeline.easing = eases[e];
		});

		this.timeline.children[0].id = "test";

		this.timeline.start();
	}

	draw = e => {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		const trackHeight = (this.canvas.height - this.padding) / this.timeline.children.length;
		const leftSpace = this.padding * 1.75;

		this.context.font = `${this.trackLabelFontSize * this.canvas.width}px Roboto Black Italic`;
		this.context.textBaseline = "middle";
		this.context.textAlign = "left";
		for (let i = 0; i < this.timeline.children.length; i++) {
			const track = this.timeline.children[i];
			// Backgrounds
			let y = this.padding + (trackHeight + 1) * i;
			// this.context.fillStyle = track.hasStarted ? "rgba(78,81,111,0)" : this.trackBgColor;
			this.context.fillStyle = this.trackBgColor;
			this.context.fillRect(0, y, this.canvas.width, trackHeight);

			// Tracks
			this.context.fillStyle = track.isActive ? "#196A99" : "rgba(78,81,111,0)";
			const x =
				(track.startTime / this.timeline.duration) * (this.canvas.width - leftSpace) +
				leftSpace;
			const width =
				((track.duration * track.timeScale) / this.timeline.duration) *
				(this.canvas.width - leftSpace);

			// Tweens
			const tweenPadding = 0.15 * trackHeight;
			for (let n = 0; n < track.children.length; n++) {
				const tween = track.children[n];
				// this.context.fillStyle = tween.isActive ? "#DD436B" : "rgba(78,81,111,1)";
				this.context.fillStyle = tween.isActive ? "#DD436B" : "rgba( 32, 36, 73 , 1)";
				const tweenHeight = (trackHeight - 3 * tweenPadding) / track.children.length;
				const tweenY = y + tweenPadding + (tweenHeight + tweenPadding) * n;
				const totalTweenDuration = tween.duration * tween.timeScale;
				const tweenWidth = (totalTweenDuration / track.duration) * width;
				this.context.fillRect(x, tweenY, tweenWidth, tweenHeight);
			}
		}

		// Progress
		this.context.fillStyle = "rgba( 32, 36, 73 , 0.5)";
		const width = this.timeline.easedProgress * (this.canvas.width - leftSpace);
		this.context.fillRect(0, 0, width + leftSpace, this.canvas.height);
		this.context.moveTo(width + leftSpace, 0);
		this.context.lineTo(width + leftSpace, this.canvas.height);
		this.context.stroke();

		// time indicator
		this.context.font = `${(this.trackLabelFontSize / 1.5) *
			this.canvas.width}px Roboto Black Italic`;
		this.context.strokeStyle = "rgba(255,255,255,0.25)";
		this.context.textBaseline = "top";
		this.context.textAlign = "center";
		this.context.fillStyle = "rgba(255,255,255,0.25)";
		this.context.lineWidth = 1;

		for (let i = 0; i < this.timeline.duration * 10; i++) {
			const x =
				(i / (this.timeline.duration * 10)) * (this.canvas.width - leftSpace) + leftSpace;
			this.context.beginPath();
			this.context.moveTo(x, 0);
			if (i % 10 === 0) {
				this.context.lineTo(x, this.padding / 3);
				this.context.stroke();
				this.context.fillText(`${i / 10}`, x, this.padding / 2);
			} else {
				this.context.lineTo(x, 10);
				this.context.stroke();
			}
		}

		// TrackLabel
		this.context.textAlign = "left";
		this.context.textBaseline = "middle";

		for (let i = 0; i < this.timeline.children.length; i++) {
			const track = this.timeline.children[i];
			this.context.fillStyle = track.isActive ? "#DD436B" : "rgba(255,255,255,0.25)";
			let y = this.padding + (trackHeight + 1) * i;
			this.context.fillText(`Track ${i + 1}`, 15, y + trackHeight / 2 + 2);
		}
	};
}

export default Track;
