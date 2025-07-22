import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        // this.todos = [];
        // console.log(" here is the todo list class");
        this.loadLocalStorage();
    }

    newTodo(todo) {
        this.todos.push(todo);
        this.saveLocalStorage();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveLocalStorage();
    }

    markAsCompleted(id) {
        for (const todo of this.todos) {
            // console.log(id, todo.id)

            if (todo.id === id) {
                todo.completed = !todo.completed;
                console.log(`Tarea con id ${id} marcada como: ${todo.completed}`);
                this.saveLocalStorage(); // save the marked task in LocalStorage

                break;
            }
        }
    }

    countPendingTasks() {
        const pendingsFilter = this.todos.filter(todo => !todo.completed);
        // console.log("pending tasks length: ", pendingsFilter.length);
        return pendingsFilter.length;
    }

    countCompletedTasks() {
        const completedFilter =  this.todos.filter(todo => todo.completed)
        return completedFilter.length; 
    }

    deleteAllCompleted() {
        this.todos = this.todos.filter(task => !task.completed)
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        // turn the received object to as string
        localStorage.setItem("todo", JSON.stringify(this.todos));
    }

    loadLocalStorage() {
        // turn the received string to an object
        const data = localStorage.getItem("todo");

        this.todos = data
                   ? JSON.parse(data) 
                   .filter(todo => todo != null) // dont parse nullish data or any other type than object
                   
                   // map uses a callback as an argument, but it becomes redundant, so we can just send the function without the argument
                   // so, the first arguments the map will send, will be received by our function 
                   .map(Todo.fromJson)
                   : [];
    }
}
