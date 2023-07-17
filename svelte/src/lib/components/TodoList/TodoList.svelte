<script>
  import NewTodoItem from "./NewTodoItem.svelte";
  import TodoListItem from "./TodoListItem.svelte";

  import { todo, addTask, removeTask, toggleDone } from "./TodoStore.js";
</script>

<ul>
  {#each $todo as task, i}
    <TodoListItem
      {task}
      onRemove={() => removeTask(i)}
      onToggle={toggleDone}
    />
  {/each}
</ul>

<NewTodoItem {addTask} />

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
