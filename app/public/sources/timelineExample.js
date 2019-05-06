const timeline = new Nervo.Timeline(
	[ ...Tweens ],
	{
		autoStart: true,
		easing: "linear",
		loop: true,
		onProgress: e => {
			console.log("Timeline has updated.");
		},
		onComplete: e => {
			console.log("Timeline has completed.");
		},
	}
);
