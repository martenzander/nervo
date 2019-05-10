import * as Nervo from "./../../../src/js/index";
const packageConfig = require("./../../../package.json");
import uuid from "uuid/v4";
const references = {
	tween: new Nervo.Tween({}, {}, {}),
	timeline: new Nervo.Timeline([], {}),
	spring: new Nervo.Spring({}, {}, {}),
};

const keys = {};

for (const key in references) {
	const reference = references[key];
	keys[key] = {};
	keys[key].section = `id-${uuid()}`;

	for (const property in reference) {
		keys[key][property] = `id-${uuid()}`;
	}
}

import AboutContent from "./about";
import TimelineContent from "./timeline";
import TweenContent from "./tween";
import SpringContent from "./spring";
const about = new AboutContent(keys, {}).content;
const tween = new TweenContent(keys, references.tween).content;
const timeline = new TimelineContent(keys, references.timeline).content;
const spring = new SpringContent(keys, references.spring).content;

const data = {
	sections: [{ ...about }, { ...tween }, { ...timeline }, { ...spring }],
};

export default { ...packageConfig, ...data };
export { keys, references };
