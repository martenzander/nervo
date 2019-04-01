const packageConfig = require("./../../../package.json");
import js from "raw-loader!./sources/test.source";
console.log(js);

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
