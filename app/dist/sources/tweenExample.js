const tween = new Nervo.Tween(
	{ progress: 0 },
	{ progress: 1 },
	{
		autoStart: true,
		duration: 2,
		easing: "quadInOut",
		loop: true,
		onProgress: e => {
			console.log("Tween has updated.");
		},
		onComplete: e => {
			console.log("Tween has completed.");
		},
	}
);
