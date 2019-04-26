const gettingStarted = {
	name: "Getting Started",
	contents: [
		{
			component: "headline",
			value: `Installation`,
			type: "h3",
		},
		{
			component: "copy",
			value: `Navigate to your project folder and enter the following command into your CLI.`,
		},
		{
			component: "code",
			value: {
				source: "install.sh",
				isCommand: true,
			},
		},
		{
			component: "headline",
			value: `Import`,
			type: "h3",
		},
		{
			component: "code",
			value: {
				source: "import.js",
			},
		},
	],
};

export default gettingStarted;
