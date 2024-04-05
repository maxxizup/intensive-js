export function renderPlaylist(anyPlaylist) {
    renderPlayListHeader(anyPlaylist.playListInfo);
    renderPlayListTracks(anyPlaylist.tracks);

}

function renderPlayListHeader(anyPlayListInfo) {
    const playListCoverElement = document.createElement('img');
    playListCoverElement.src = (anyPlayListInfo.coverImageUrl);
    playListCoverElement.style.width = '150px';
    document.body.append(playListCoverElement);


    const playListHeaderTitleElement = document.createElement("h2");
    playListHeaderTitleElement.append(anyPlayListInfo.title);
    document.body.append(playListHeaderTitleElement);
}

function renderPlayListTracks(anyTracks) {
    const tracksListElement = document.createElement("ul");
    for (let i = 0; i < anyTracks.length; i++) {
        const trackElement = renderTrack(anyTracks[i]);
        tracksListElement.append(trackElement);
    }

    document.body.append(tracksListElement)
}

function renderTrack(anyTrack) {
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