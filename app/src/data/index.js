const packageConfig = require("./../../../package.json");
const about = require("./about").default;
const installation = require("./installation").default;
const tween = require("./tween").default;


const data = {
	sections: [
		{...about},
		{...installation},
		{...tween},
	],
};

export default { ...packageConfig, ...data };
