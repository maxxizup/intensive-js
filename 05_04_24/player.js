//data:
const playLists = [
    {
        playListId: "1",
        playListInfo: {
            title: "Hip-hop hits",
            coverImageUrl: "cover.avif",
            totalInfo: {
                totalTrackCount: 4,
                totaltracksDurationInSec: 733
            }
        },
        tracks: [
            {
                trackId: "11",
                trackCoverImageUrl: "eminem.jpg",
                artistName: "Eminem",
                trackTitle: "Rap God",
                trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: false
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
        ]
    },
    {
        playListId: "2",
        playListInfo: {
            title: "Hip-hop hits",
            coverImageUrl: "cover.avif",
            totalInfo: {
                totalTrackCount: 4,
                totaltracksDurationInSec: 733
            }
        },
        tracks: [
            {
                trackId: "11",
                trackCoverImageUrl: "eminem.jpg",
                artistName: "Eminem",
                trackTitle: "Rap God",
                trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: false
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
        ]
    },
    {
        playListId: "3",
        playListInfo: {
            title: "Hip-hop hits",
            coverImageUrl: "cover.avif",
            totalInfo: {
                totalTrackCount: 4,
                totaltracksDurationInSec: 733
            }
        },
        tracks: [
            {
                trackId: "11",
                trackCoverImageUrl: "eminem.jpg",
                artistName: "Eminem",
                trackTitle: "Rap God",
                trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: false
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
        ]
    },
]

renderAllPlayLists(playLists);

//render data:
function renderAllPlayLists(allPlayLists) {
    for (let i = 0; i < allPlayLists.length; i++) {
        renderPlaylist(allPlayLists[i]);
    }
}



function renderPlaylist(anyPlaylist) {
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

