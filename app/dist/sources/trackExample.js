const track = new Nervo.Track([...Tweens], {
	start: 0,
	onProgress: e => {
		console.log("Timeline has updated.");
	},
	onComplete: e => {
		console.log("Timeline has completed.");
	},
});
