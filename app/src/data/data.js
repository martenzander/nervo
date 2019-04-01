const packageConfig = require("./../../../package.json");

const data = {
	sections: [
		{
			name: "About",
		},
		{
			name: "Installation",
			contents: [
				{
					type: "code",
					data: js,
				},
			],
		},
		{
			name: "Getting Started",
		},
	],
};

export default { ...packageConfig, ...data };
