export default class Base {
	static Instances = [];
	static ID = 0;

	constructor() {
		this.setId(this);
	}

	clone() {
		const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		this.setId(clone);

		return clone;
	}

	setId(object) {
		object.id = Base.ID;
		Base.ID++;
		Base.Instances.push(object);
	}
}
