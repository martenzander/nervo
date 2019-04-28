const packageConfig = require("./../../../package.json");
const about = require("./about").default;
const gettingStarted = require("./gettingStarted").default;
const tween = require("./tween").default;
const track = require("./track").default;
const spring = require("./spring").default;
const timeline = require("./timeline").default;

const data = {
	sections: [
		{ ...about },
		// { ...gettingStarted },
		{ ...tween },
		{ ...track },
		{ ...timeline },
		{ ...spring },
	],
};

export default { ...packageConfig, ...data };
