const todoListDiv = document.querySelector(".todo-list");


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