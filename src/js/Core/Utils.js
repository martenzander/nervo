import Base from "./Base";

const getInstanceById = id => {
	let instance;

	Base.Instances.forEach(baseObject => {
		if (baseObject.id === id) instance = baseObject;
	});

	return instance;
};

// Utils
export { getInstanceById };
