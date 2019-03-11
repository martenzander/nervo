import Base from "./Core/Base";
import Track from "./Track/Track";
import Tween from "./Tween/Tween";
import Timeline from "./Timeline/Timeline";

const getElementById = id => {
	let instance;

	Base.Instances.forEach(baseObject => {
		if (baseObject.id === id) instance = baseObject;
	});

	return instance;
};

export { getElementById };

// Classes
export { Track };
export { Tween };
export { Timeline };
