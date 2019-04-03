const packageConfig = require("./../../../package.json");
const about = require("./about").default;
const installation = require("./installation").default;
const tween = require("./tween").default;
const track = require("./track").default;
const timeline = require("./timeline").default;

const data = {
	sections: [{ ...about }, { ...installation }, { ...tween }, { ...track }, { ...timeline }],
};

export default { ...packageConfig, ...data };
