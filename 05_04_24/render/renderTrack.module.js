export function renderTrack(anyTrack) {
	const trackElement = document.createElement("li");
	trackElement.style.listStyle = 'none';

	const coverElement = document.createElement('img');
	coverElement.src = anyTrack.trackCoverImageUrl;
	coverElement.style.width = '50px';

	const audio = document.createElement('audio');
	audio.src = anyTrack.trackFileUrl;
	audio.controls = true;

	trackElement.append(
		coverElement,
		audio,
		anyTrack.artistName + ': ' + anyTrack.trackTitle)
	return trackElement;
}