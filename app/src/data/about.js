import uuid from "uuid/v4";
export const key = `id-${uuid()}`;

const about = {
	name: "About Nervo",
	key,
	contents: [
		[
			{
				component: "copy",
				value:
					"Nervo is a simple JavaScript animation library providing basic tweening functionality. It is designed to be flexible, intuitive and easy to learn. Nervo allows you to create single Tweens or control multiple instances within a Timeline.",
			},
		],
	],
};

export default about;
