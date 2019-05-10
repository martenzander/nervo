class AboutContent {
	constructor(keys, reference) {
		this.content = {
			name: "About Nervo",
			key: "about",
			contents: [
				[
					{
						component: "copy",
						value: `Nervo is a solid JavaScript animation library providing basic tweening functionality. It is designed to be flexible, intuitive and easy to learn. Nervo allows you to create single <a href='#${
							keys.tween.section
						}'>Tweens</a>, makes controlling multiple Tweens within <a href='#${
							keys.timeline.section
						}'>Timelines</a> easy, and providess Springs`,
					},
				],
				[
					{
						component: "headline",
						value: "Installation",
						type: "h3",
					},
					{
						component: "code",
						value: {
							source: "install.sh",
							isCommand: true,
						},
					},
				],
				[
					{
						component: "headline",
						value: "Import",
						type: "h3",
					},
					{
						component: "code",
						value: {
							source: "import.js",
						},
					},
				],
			],
		};
	}
}

export default AboutContent;
