import { todoList } from "..";
import { Todo } from "../classes";

const todoListDiv = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");


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
    }
})
