<script>
  export let task;
  export let onToggle;
  export let onRemove;
</script>

<li key={task.name}>
  <button on:click={() => onToggle(task)}>
    {#if task.isDone}
      &#9745;
    {:else}
      &#9744;
    {/if}
  </button>

  <div>
    {task.name}
  </div>

  <button on:click={() => onRemove()}> &times; </button>
</li>

<style>
  li {
    color: #eee;
    background-color: #333;
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    border-radius: 3px;
    overflow: hidden;
  }

  li > div {
    padding: 0.7rem 0.4rem;
  }

  li > button {
    background: none;
    border: none;
    padding: 0 0.7rem;
    color: #eee;
    background-color: #444;
    cursor: pointer;
  }

  li > button:first-child {
    border-right: 1px solid #555;    
  }

  li > button:last-child {
    margin-left: auto;
    border-left: 1px solid #555;    
  }
</style>
