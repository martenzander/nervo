import Track from "./Core/Track";
import Tween from "./Core/Tween";
import Timeline from "./Core/Timeline";

const getTimelineById = id => {
	let instance;

	Timeline.Instances.forEach(timeline => {
		if (timeline.id === id) instance = timeline;
	});

	return instance;
};

const getTrackById = id => {
	let instance;

	Track.Instances.forEach(track => {
		if (track.id === id) instance = track;
	});

	return instance;
};

const getTweenById = id => {
	let instance;

	Tween.Instances.forEach(tween => {
		if (tween.id === id) instance = tween;
	});

	return instance;
};

export { getTimelineById };
export { getTrackById };
export { getTweenById };

// Classes
export { Track };
export { Tween };
export { Timeline };
