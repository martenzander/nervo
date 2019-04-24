const packageConfig = require("./../../../package.json");
const libName = packageConfig.name.charAt(0).toUpperCase() + packageConfig.name.slice(1);
import EventDispatcher from "./EventDispatcher";

export default class Base extends EventDispatcher {
	static Instances = [];
	static ID = 0;

	constructor(options) {
		super();
		this.children = [];
		this.isNervo = true;
		this.options = options;
		this.parent = null;
		this.setId(this);

		// event binding
		this.onAfterAdd = this.onAfterAdd.bind(this);
		this.onProgress = this.onProgress.bind(this);
		this.onComplete = this.onComplete.bind(this);
		if ("onComplete" in this.options)
			this.addEventListener("onComplete", this.options.onComplete);
		if ("onProgress" in this.options)
			this.addEventListener("onProgress", this.options.onProgress);
		this.addEventListener("onAfterAdd", this.onAfterAdd);
	}

	onComplete() {
		this.dispatchEvent({ type: "onComplete" });
	}

	onProgress() {
		this.dispatchEvent({ type: "onProgress" });
	}

	onAfterAdd(e) {}

	clone() {
		const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		this.setId(clone);

		return clone;
	}

	add(object, options = {}) {
		if (object.length >= 1) {
			if (this.isTimeline) {
				const tweens = [];
				for (let i = 0; i < object.length; i++) {
					if (object[i].isTween) tweens.push(object[i]);
					if (object[i].isTrack) this.add(object[i], {});
				}
				const track = this.getTrackFromTweens(tweens, options);
				this.add(track, options);
				return this;
			}

			for (let i = 0; i < object.length; i++) {
				this.add(object[i]);
			}
			return this;
		}

		if (object === this) {
			console.error(`${libName}.Base.add: Object can't be a child of itself.`, object);
			return this;
		}

		if (object && object.isNervo) {
			if (this.isTween || this.isSpring) {
				console.warn(
					`${libName}.Base.add: Object is an instance of ${libName}.Tween or ${libName}.Spring and can't have children.`,
					object
				);
				return this;
			}

			if (object.parent !== null) {
				object.parent.remove(object);
			}

			if (this.isTimeline) {
				if (!object.isTween && !object.isTrack) {
					console.error(
						`${libName}.Base.add: Object is not an instance of ${libName}.Tween or ${libName}.Track.`,
						object
					);
					return this;
				}
			}

			if (this.isTrack) {
				if (!object.isTween) {
					console.error(
						`${libName}.Base.add: Object is not an instance of ${libName}.Tween.`,
						object
					);
					return this;
				}
			}

			object.parent = this;
			this.children.push(object);

			object.dispatchEvent({ type: "added" });

			this.onChildChange();
		} else {
			console.error(
				`${libName}.Base.add: Object is not an instance of ${libName}.Base.`,
				object
			);
		}
		return this;
	}

	remove(object) {
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) {
				this.remove(arguments[i]);
			}

			return this;
		}

		const index = this.children.indexOf(object);

		if (index !== -1) {
			object.parent = null;
			object.dispatchEvent({ type: "removed" });

			this.children.splice(index, 1);
			this.onChildChange();
		}

		return this;
	}

	onChildChange() {
		if (this.isTimeline) {
			this.updateDuration();
		}

		if (this.isTrack) {
			this.updateTimeRange();
		}
	}

	updateChildren(time) {
		this.children.forEach(child => {
			child.update(time);
		});
	}

	setId(object) {
		object.id = Base.ID;
		Base.ID++;
		Base.Instances.push(object);
	}
}
