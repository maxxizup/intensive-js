import {setGridSize} from "../../../../data.js";

export function GridSizeSelector() {
    const gridSizeSelectorElement = document.createElement('select');
    gridSizeSelectorElement.className = 'selectors__item';


    const grid4x4option = new Option ('4x4', '4x4');
    const grid5x5option = new Option ('5x5', '5x5');
    const grid6x6option = new Option ('6x6', '6x6');

    gridSizeSelectorElement.append(grid4x4option, grid5x5option, grid6x6option);

    gridSizeSelectorElement.onchange = () => {
        if (gridSizeSelectorElement.selectedIndex === 0) {setGridSize(4, 4)}
        if (gridSizeSelectorElement.selectedIndex === 1) {setGridSize(5, 5)}
        if (gridSizeSelectorElement.selectedIndex === 2) {setGridSize(6, 6)}
    }
    return gridSizeSelectorElement;
}