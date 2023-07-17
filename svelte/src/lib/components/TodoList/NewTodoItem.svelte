<script>
  export let addTask;

  let newTodo = "";

  function submit() {
    addTask(newTodo);
    newTodo = "";
  }
</script>

<div>
  <form on:submit={submit}>
    <input bind:value={newTodo} placeholder="New Task" />
    <button type="submit">+</button>
  </form>
</div>

<style>
  div {
    color: #eee;
    background-color: transparent;
    margin: 1rem 0;
    border-radius: 3px;
    overflow: hidden;
    border: 1px dashed #eee;
  }

  form {
    display: flex;
    flex-direction: row;
  }

  input {
    padding: 0.7rem;
    background-color: transparent;
    border: none;
    color: #eee;
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  button {
    background: none;
    border: none;
    padding: 0 0.7rem;
    color: #eee;
    cursor: pointer;
    margin-left: auto;
    border-left: 1px solid transparent;
  }

  button:hover {
    background-color: #444;
    border-left: 1px solid #555;
  }
</style>
