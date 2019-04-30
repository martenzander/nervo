import EventDispatcher from "./EventDispatcher";
import { readonly } from "./Decorators";
const uuid = require("uuid/v4");

export default class Root extends EventDispatcher {
	static Instances = [];

	@readonly
	isNervo = true;

	@readonly
	uuid = uuid();

	constructor(options) {
		super();
		this.options = options;

		if ("onComplete" in this.options) {
			this.onComplete = this.options.onComplete;
			this.addEventListener("onComplete", e => {
				this.onComplete(e);
			});
		}
		if ("onProgress" in this.options) {
			this.onProgress = this.options.onProgress;
			this.addEventListener("onProgress", e => {
				this.onProgress(e);
			});
		}

		Root.Instances.push(this);
	}

	/*
		.onProgress():
	*/
	onProgress = e => {};

	/*
		.onComplete():
	*/
	onComplete = e => {};
}
