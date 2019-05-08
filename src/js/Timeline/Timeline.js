import { readonly } from "./../Core/Decorators";
import Ticker from "../Core/Ticker";

export default class Timeline extends Ticker {
	@readonly
	isTimeline = true;

	@readonly
	type = "Timeline";

	constructor(objects = [], options = {}) {
		super(options);
		if (objects.length >= 1 || objects.isNervo) this.add(objects, {});
		if (this.autoStart) this.start();
	}
}
