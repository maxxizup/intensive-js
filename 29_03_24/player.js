const playlist = {
    playListInfo: {
        title: "Hip-hop hits",
        coverImgUrl: "./cover.avif"
    },
    tracks: [
        {
            trackId: "1",
            artistName: "Eminem",
            trackTitle: "Rap God",
            trackFileUrl: "./eminem_-_rap_god_(muztune.me).mp3",
            trackCoverImgUrl: "./eminem.jpg"
        },
        {
            trackId: "2",
            artistName: "50 cent",
            trackTitle: "In da club",
            trackFileUrl: "./50cent_-_in_da_club_(muztune.me).mp3",
            trackCoverImgUrl: "./50cent.jpg"
        }
    ]
}


// const playListTitleElement = document.createElement("h1");
// playListTitleElement.innerText = playlist.playListInfo.title;
// document.body.append(playListTitleElement);
//
// const playListCoverElement = document.createElement("img");
// playListCoverElement.src = playlist.playListInfo.coverImgUrl;
// playListCoverElement.style.width = "150px";
// playListCoverElement.style.height = "150px";
// document.body.append(playListCoverElement);
//
// const trackListElement = document.createElement("ul");
//
// for (let i = 0; i < playlist.tracks.length; i++) {
//     const trackElement = document.createElement("li");
//
//     const trackCoverElement = document.createElement("img")
//     trackCoverElement.src = playlist.tracks[i].trackCoverImgUrl;
//     trackCoverElement.style.width = "50px";
//     trackCoverElement.style.height = "50px";
//
//     trackElement.append(trackCoverElement);
//     trackElement.append(playlist.tracks[i].artistName + ": " + playlist.tracks[i].trackTitle)
//     trackListElement.append(trackElement);
// }
//
// document.body.append(trackListElement);


function renderPlayList(anyPlayList) {
    renderPlayListHeader(anyPlayList.playListInfo);
    renderTrackList(anyPlayList.tracks);
}
function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleElement = document.createElement("h1");
    playListTitleElement.innerText = playlist.playListInfo.title;
    document.body.append(playListTitleElement);

    const playListCoverElement = document.createElement("img");
    playListCoverElement.src = playlist.playListInfo.coverImgUrl;
    playListCoverElement.style.width = "150px";
    playListCoverElement.style.height = "150px";
    document.body.append(playListCoverElement);
}

function renderTrackList(anyTracks) {
    const trackListElement = document.createElement("ul");
    for (let i = 0; i < anyTracks.length; i++) {
        const trackElement = document.createElement("li");

        const trackCoverElement = document.createElement("img")
        trackCoverElement.src = anyTracks[i].trackCoverImgUrl;
        trackCoverElement.style.width = "50px";
        trackCoverElement.style.height = "50px";

        trackElement.append(trackCoverElement);
        trackElement.append(anyTracks[i].artistName + ": " + anyTracks[i].trackTitle)
        trackListElement.append(trackElement);
    }
        document.body.append(trackListElement);
}

renderPlayList(playlist);
