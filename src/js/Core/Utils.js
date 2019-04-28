import Base from "./Base";

const getInstanceByUuid = uuid => {
	let instance;

	Base.Instances.forEach(baseObject => {
		if (baseObject.uuid === uuid) instance = baseObject;
	});

	return instance;
};

// Utils
export { getInstanceByUuid };
