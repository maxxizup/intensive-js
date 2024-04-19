export function renderPlayListHeader(anyPlayListInfo) {
	const playListCoverElement = document.createElement('img');
	playListCoverElement.src = (anyPlayListInfo.coverImageUrl);
	playListCoverElement.style.width = '150px';
	document.body.append(playListCoverElement);


	const playListHeaderTitleElement = document.createElement("h2");
	playListHeaderTitleElement.append(anyPlayListInfo.title);
	document.body.append(playListHeaderTitleElement);
}