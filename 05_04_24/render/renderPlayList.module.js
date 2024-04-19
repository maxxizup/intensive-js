import {renderPlayListHeader} from "./renderPlayListHeader.module.js";
import {renderPlayListTracks} from "./renderPlayListTracks.module.js";

export function renderPlaylist(anyPlaylist) {
    renderPlayListHeader(anyPlaylist.playListInfo);
    renderPlayListTracks(anyPlaylist.tracks);

}



