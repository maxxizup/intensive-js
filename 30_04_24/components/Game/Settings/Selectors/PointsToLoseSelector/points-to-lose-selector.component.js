import {setPointsToLose} from "../../../../../data.js";

export function PointsToLoseSelector() {
    const pointsToLoseSelectorElement = document.createElement('select');
    pointsToLoseSelectorElement.className = 'selectors__item';

    const fivePointsOption = new Option ('5pts', '5pts');
    const tenPointsOption = new Option ('10pts', '10pts');
    const fifteenPointsOption = new Option ('15pts', '15pts');

    pointsToLoseSelectorElement.append(fivePointsOption, tenPointsOption, fifteenPointsOption);

    pointsToLoseSelectorElement.onchange = () => {
        if (pointsToLoseSelectorElement.selectedIndex === 0) {setPointsToLose(5)}
        if (pointsToLoseSelectorElement.selectedIndex === 1) {setPointsToLose(10)}
        if (pointsToLoseSelectorElement.selectedIndex === 2) {setPointsToLose(15)}
    }
    return pointsToLoseSelectorElement;
}