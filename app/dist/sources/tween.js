import * as Nervo from "nervo";

const tween = new Nervo.Tween(
	{ value: 0 },
	{ value: 100 },
	{
		autoStart: true,
		duration: 2,
	}
);
