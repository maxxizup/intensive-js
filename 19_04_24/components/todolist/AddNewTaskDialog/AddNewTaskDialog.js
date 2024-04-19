import {Button} from "../../common/Button/Button.js";
import {addTask, closeAddNewTaskDialog, data} from "../../../data/data.js";

export function AddNewTaskDialog() {
    const container = document.createElement('dialog');
    container.open = data.todolist.addNewTaskDialog.isOpen

    const inputElement = document.createElement('input');
    const saveBtnElement = Button('save', ()=> {addTask(inputElement.value); closeAddNewTaskDialog()});
    const cancelBtnElement = Button('cancel', ()=> closeAddNewTaskDialog())

    container.append(
        inputElement,
        saveBtnElement,
        cancelBtnElement
    )

    return container;
    }