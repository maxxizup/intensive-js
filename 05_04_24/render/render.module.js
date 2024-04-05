import { renderPlaylist } from './renderPlayList.module.js'

export function renderAllPlayLists(allPlayLists) {
    for (let i = 0; i < allPlayLists.length; i++) {
        renderPlaylist(allPlayLists[i]);
    }
}



