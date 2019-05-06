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
		this.trackHeight = 80 / this.canvas.height;
		this.trackBgColor = "#141730";
		this.trackColors = ["#FFEB4F", "#DD436B", "#196A99"];

		// tweens
		this.tweens = [];
		for (let i = 0; i < 3; i++) {
			const tween = new Nervo.Tween(
				{ progress: 0 },
				{ progress: 1 },
				{
					easing: "cubicInOut",
					duration: 3,
					onProgress: e => {},
				}
			);
			this.tweens.push(tween);
		}

		// tracks
		this.tracks = [];
		for (let i = 0; i < 3; i++) {
			const track = new Nervo.Track([this.tweens[i]], {
				start: 1 + i,
				onProgress: e => {},
			});

			this.tracks.push(track);
		}

		this.timeline = new Nervo.Timeline(this.tracks, {
			loop: true,
			timeScale: 2,
			onComplete: e => {},
			onProgress: e => {
				this.draw();
			},
		});

		// GUI Properties
		const tracksFolder = this.gui.addFolder("Tracks");
		for (let i = 0; i < this.tracks.length; i++) {
			const folder = tracksFolder.addFolder(`Track ${i + 1}`);
			folder
				.add(this.tracks[i], "start")
				.min(0)
				.onChange(e => {
					this.tracks[i].setStartTime(e);
				});
		}
		const tweensFolder = this.gui.addFolder("Tweens");
		for (let i = 0; i < this.tweens.length; i++) {
			const folder = tweensFolder.addFolder(`Tween ${i + 1}`);
			folder
				.add(this.tweens[i], "duration")
				.min(0)
				.onChange(e => {
					this.tweens[i].setDuration(e);
				});
		}
		const timelineFolder = this.gui.addFolder("Timeline");
		timelineFolder.add(this.timeline, "timeScale");
		timelineFolder.add(this.timeline, "easing", easeNames).onChange(e => {
			this.timeline.easing = eases[e];
		});

		this.timeline.start();
	}

	draw = e => {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.font = "18px Roboto Black Italic";

		for (let i = 0; i < this.tracks.length; i++) {
			// Backgrounds
			let y = this.canvas.height / 2 + (this.trackHeight * this.canvas.height + 1) * i;
			y -= (this.tracks.length / 2) * (this.trackHeight * this.canvas.height);
			this.context.fillStyle = this.trackBgColor;
			this.context.fillRect(0, y, this.canvas.width, this.trackHeight * this.canvas.height);

			// Tracks
			this.context.fillStyle = this.tweens[i].isActive
				? this.trackColors[i]
				: "rgba(78,81,111,1)";
			const x = (this.tracks[i].start / this.timeline.duration) * this.canvas.width;
			const width = (this.tracks[i].duration / this.timeline.duration) * this.canvas.width;
			this.context.fillRect(x, y, width, this.trackHeight * this.canvas.height);
			this.context.fillStyle = "#141730";
			this.context.fillText(
				`Track ${i + 1}`,
				x + 5,
				y + this.trackHeight * this.canvas.height - 5
			);
		}

		// Progress
		this.context.fillStyle = "rgba( 32, 36, 73 , 0.5)";
		const width = this.timeline.easedProgress * this.canvas.width;
		this.context.fillRect(0, 0, width, this.canvas.height);

		for (let i = 0; i < this.tracks.length; i++) {
			// Backgrounds
			let y = this.canvas.height / 2 + (this.trackHeight * this.canvas.height + 1) * i;
			y -= (this.tracks.length / 2) * (this.trackHeight * this.canvas.height);
			// Track Markers
			this.context.fillStyle = this.trackColors[i];
			this.context.fillRect(0, y, 5, this.trackHeight * this.canvas.height);
		}
	};
}

export default Track;
