import { readonly } from "./Decorators";
const uuid = require("uuid/v4");
import Root from "./Root";

export default class Family extends Root {
	constructor(options) {
		super(options);
		this.children = [];
		this.parent = null;
	}

	@readonly
	clone = () => {
		const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		Object.defineProperty(clone, "uuid", {
			value: uuid(),
			writable: false,
		});
		Root.Instances.push(clone);
		return clone;
	};

	@readonly
	add = (object, options = {}) => {
		if (object.length >= 1) {
			for (let i = 0; i < object.length; i++) {
				this.add(object[i], options);
			}
			return this;
		}

		if (object === this) {
			console.error("Nervo.Family.add: Object can't be a child of itself.", object);
			return this;
		}

		if (object && object.isNervo) {
			if (this.isTween || this.isSpring) {
				console.warn(
					"Nervo.Family.add: Object is an instance of Nervo.Tween or Nervo.Spring and can't have children.",
					object
				);
				return this;
			}

			if (object.isSpring) {
				console.error(
					`Nervo.Family.add: Can't add object of type ${object.type} to a Track.`,
					object
				);
				return this;
			}

			if (object.parent !== null) {
				object.parent.remove(object);
			}

			object.parent = this;
			this.children.push(object);

			object.dispatchEvent({ type: "added" });

			this._onChange(this);
		} else {
			console.error("Nervo.Family.add: Object is not an instance of Nervo.Family.", object);
			return this;
		}
		return this;
	};

	@readonly
	remove = object => {
		if (object.length > 1) {
			for (let i = 0; i < object.length; i++) {
				this.remove(object[i]);
			}

			return this;
		}

		const index = this.children.indexOf(object);

		if (index !== -1) {
			object.parent = null;
			object.dispatchEvent({ type: "removed" });

			this.children.splice(index, 1);
			if (this.isTimeline || this.isTrack) {
				this._onChange(this);
			}
		}

		return this;
	};

	@readonly
	_updateChildrenByTime = t => {
		this.children.forEach(child => {
			child.isActive = true;
			child._update(t);
		});
	};

	@readonly
	_onChange = object => {
		if (!object.isTween) {
			let duration = 0;

			object.children.forEach(child => {
				const childTimeScale = child.timeScale !== undefined ? child.timeScale : 1.0;
				const childDelay = typeof child.delay === "number" ? child.delay : 0.0;

				if (child.duration * childTimeScale + childDelay > duration)
					duration = child.duration * childTimeScale + childDelay;
			});

			object.duration = duration;
		}

		if (object.parent) {
			this._onChange(object.parent);
		}

		return this;
	};
}
