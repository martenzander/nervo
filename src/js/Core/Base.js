export default class Base {
	static Instances = [];
	static ID = 0;

	constructor() {
		this.setId(this);
		this.children = [];

		// event binding
		this.onAdd = this.onAdd.bind(this);
		this.onProgress = this.onProgress.bind(this);
	}

	clone() {
		const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		this.setId(clone);

		return clone;
	}

	onAdd(object) {
		object.parent = this;
		this.children.push(object);
	}

	onProgress() {
		if ("onProgress" in this.options) this.options.onProgress(this);
	}

	updateChildren(time) {
		this.children.forEach(child => {
			child.update(time);
		});
		this.onProgress();
	}

	setId(object) {
		object.id = Base.ID;
		Base.ID++;
		Base.Instances.push(object);
	}
}
