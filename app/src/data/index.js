const packageConfig = require("./../../../package.json");
const about = require("./about").default;
const installation = require("./installation").default;
const tween = require("./tween").default;
const track = require("./track").default;
const spring = require("./spring").default;
const timeline = require("./timeline").default;

const data = {
	sections: [
		{ ...about },
		{ ...installation },
		{ ...tween },
		{ ...track },
		{ ...timeline },
		{ ...spring },
	],
};

export default { ...packageConfig, ...data };
