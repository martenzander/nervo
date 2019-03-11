import Base from "./Base";

const getInstanceById = id => {
	let instance;

	Base.Instances.forEach(baseObject => {
		if (baseObject.id === id) instance = baseObject;
	});

	return instance;
};

const test = 3;

// Utils
export { test };
export { getInstanceById };
