export default class Base {
	static Instances = [];
	static ID = 0;

	constructor(options) {
		this.children = [];
		this.options = options;
		this.setId(this);

		// event binding
		this.updateRelationships = this.updateRelationships.bind(this);
	}

	clone() {
		const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		this.setId(clone);

		return clone;
	}

	remove(...objects) {
		objects.forEach(object => {
			for (let i = 0; i < this.children.length; i++) {
				const child = this.children[i];
				if (child === object) {
					object.parent = null;
					this.children.splice(i, 1);
				}
			}
		});
	}

	updateRelationships(object) {
		object.parent = this;
		this.children.push(object);
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
