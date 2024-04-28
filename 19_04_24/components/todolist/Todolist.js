import {Header} from "./Header/Header.js";
import {Taskslist} from "./Taskslist/Taskslist.js";
import {Button} from "../common/Button/Button.js";
import {AddNewTaskDialog} from "./AddNewTaskDialog/AddNewTaskDialog.js";
import {openAddNewTaskDialog} from "../../data/data.js";


export function Todolist (todolistData) {
    const container = document.createElement('div');
    const headerElement = Header(todolistData.todolist.title);
    const taskslistElement = Taskslist(todolistData.todolist.tasks)
    const addBtnElement = Button('+add', ()=> openAddNewTaskDialog());
    const addNewTaskDialogElement= AddNewTaskDialog();

    container.append(
        headerElement,
        taskslistElement,
        addBtnElement,
        addNewTaskDialogElement
        );

    return container
}