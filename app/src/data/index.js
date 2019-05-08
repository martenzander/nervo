const packageConfig = require("./../../../package.json");
const about = require("./about").default;
const tween = require("./tween").default;
const spring = require("./spring").default;
const timeline = require("./timeline").default;

const data = {
	sections: [{ ...about }, { ...tween }, { ...timeline }, { ...spring }],
};

export default { ...packageConfig, ...data };
