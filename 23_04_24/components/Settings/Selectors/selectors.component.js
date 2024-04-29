import {GridSizeSelector} from "./GridSizeSelector/grid-size-selector.component.js";
import {PointsToWinSelector} from "./PointsToWinSelector/points-to-win-selector.component.js";
import {PointsToLoseSelector} from "./PointsToLoseSelector/points-to-lose-selector.component.js";

export function Selectors() {
    const selectorsElement = document.createElement('div');
    selectorsElement.className = 'selectors';


    const gridSizeBox = document.createElement('div');
    const gridSizeTitle = document.createElement('p');
    gridSizeTitle.append('Grid size');
    gridSizeBox.className = 'selectors__box-item';

    const winPointsBox = document.createElement('div');
    const winPointsTitle = document.createElement('p');
    winPointsTitle.append('Points to win');
    winPointsBox.className = 'selectors__box-item';

    const losePointsBox = document.createElement('div');
    const losePointsTitle = document.createElement('p');
    losePointsTitle.append('Points to lose');
    losePointsBox.className = 'selectors__box-item';


    gridSizeBox.append(gridSizeTitle, GridSizeSelector());
    winPointsBox.append(winPointsTitle, PointsToWinSelector());
    losePointsBox.append(losePointsTitle, PointsToLoseSelector());

    selectorsElement.append(gridSizeBox, winPointsBox, losePointsBox);

    return selectorsElement;
}