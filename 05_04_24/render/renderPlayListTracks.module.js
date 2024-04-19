import {renderTrack} from "./renderTrack.module.js";

export function renderPlayListTracks(anyTracks) {
	const tracksListElement = document.createElement("ul");
	for (let i = 0; i < anyTracks.length; i++) {
		const trackElement = renderTrack(anyTracks[i]);
		tracksListElement.append(trackElement);
	}

	document.body.append(tracksListElement)
}

