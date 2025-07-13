import { todoList } from "..";
import { Todo } from "../classes";

const todoListDiv = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const deleteCompleted = document.querySelector(".clear-completed");


export const createNewTodo  = (todo) => {
    const htmlTodo = `
        <li class="${(todo.completed) ? "completed" : ""} " data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completed) ? 'checked' : ''}>
                <label>${todo.task}</label>
                <button class="destroy"></button>
            </div>
        </li>`;

    const div = document.createElement("div");

    div.innerHTML = htmlTodo;
    todoListDiv.append(div.firstElementChild); // https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild
    return div.firstElementChild;

}

// events
txtInput.addEventListener("keyup", (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const newTask = new Todo(txtInput.value);
        todoList.newTodo(newTask);
        createNewTodo(newTask);

        txtInput.value = '';
    }
})

todoListDiv.addEventListener("click", (event) => {
    const elementName = event.target.localName; // input, label, button

    const todoElement  = event.target.parentElement.parentElement;
    const elementId = todoElement.getAttribute("data-id");


    // console.log(todoElement);
    // console.log("todo id: ", elementId)
    console.log("todo element", todoElement);

    // click on the check
    if (elementName.includes('input')) {
        todoList.markAsCompleted(elementId);
        todoElement.classList.toggle('completed');
    } else if (elementName.includes('button')) {
        todoList.deleteTodo(elementId);
        todoListDiv.removeChild(todoElement); // https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
    }
})


deleteCompleted.addEventListener("click", () => {
    todoList.deleteAllCompleted();

    for(let i = todoListDiv.children.length - 1; i >= 0; i--) {
        
        const element = todoListDiv.children[i];

        if (element.classList.contains("completed")) {
            todoListDiv.removeChild(element);
        }
    }
})