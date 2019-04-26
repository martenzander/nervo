const tween = new Nervo.Tween(
	{ progress: 0 },
	{ progress: 1 },
	{
		autoStart: true,
		duration: 3,
		loop: true,
		easing: "quintInOut",
		onProgress: e => {
			/****************************
			update circle position with
			e.target.value.progress
			****************************/
		},
	}
);
