const track = new Nervo.Track([...Tweens], {
	start: 0,
	onProgress: e => {
		console.log("Track has updated.");
	},
	onComplete: e => {
		console.log("Track has completed.");
	},
});
