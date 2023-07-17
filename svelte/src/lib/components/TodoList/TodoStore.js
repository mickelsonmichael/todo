import { writable, readonly, get } from "svelte/store";

const todoStore = writable([{ name: "First todo", isDone: true }]);

/**
 * Creates a function capable of determining whether the name of a task
 * is equivalent to the name parameter through a case-insensitive check.
 * @param {string} name The name that will be captured in the function
 * @returns  A function that accepts a task/todo object (with name property)
 */
function isDuplicateOf(name) {
    const lowerName = name.toLocaleLowerCase();

    return ({ name }) => name.toLowerCase().startsWith(lowerName)
}

/**
 * Adds a task to the todo list
 * @param {string} name 
 */
function addTask(name) {
    if (name == "") {
        return;
    }

    const currentTodo = get(todoStore);

    const duplicates = currentTodo.filter(isDuplicateOf(name));

    const numDuplicates = duplicates.length;

    if (numDuplicates > 0) {
        const numbers = duplicates.map((task) => {
            const match = task.name.match(/\(([0-9]+)\)$/);

            return match != null && match.length > 1 ? Number(match[1]) : 0;
        });

        const num = 1 + Math.max(...numbers);

        name = `${name} (${num})`;
    }

    todoStore.set([...currentTodo, { name, isDone: false }]);
}

/**
 * Removes a task from the list via its index
 * @param {number} index The index of the task to remove
 */
function removeTask(index) {
    const currentTodo = get(todoStore);

    todoStore.set([...currentTodo.slice(0, index), ...currentTodo.slice(index + 1)]);
}

/**
 * Marks a task as complete or incomplete
 * @param {any} task The task to toggle
 */
function toggleDone(task) {
    task.isDone = !task.isDone;

    todoStore.update(store => store);
}

const todo = readonly(todoStore);

export { todo, addTask, removeTask, toggleDone };
