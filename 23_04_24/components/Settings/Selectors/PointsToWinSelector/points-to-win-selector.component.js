import {setPointsToWin} from "../../../../data.js";

export function PointsToWinSelector() {
    const pointsToWinSelectorElement = document.createElement('select');
    pointsToWinSelectorElement.className = 'selectors__item';

    const fivePointsOption = new Option ('5pts', '5pts');
    const twentyPointsOption = new Option ('20pts', '20pts');
    const fortyPointsOption = new Option ('40pts', '40pts');

    pointsToWinSelectorElement.append(fivePointsOption, twentyPointsOption, fortyPointsOption);

    pointsToWinSelectorElement.onchange = () => {
        if (pointsToWinSelectorElement.selectedIndex === 0) {setPointsToWin(5)}
        if (pointsToWinSelectorElement.selectedIndex === 1) {setPointsToWin(20)}
        if (pointsToWinSelectorElement.selectedIndex === 2) {setPointsToWin(40)}
    }
    return pointsToWinSelectorElement;
}