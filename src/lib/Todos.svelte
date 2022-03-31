<script>
  import Todo from './Todo.svelte';
  export let todos = [];
</script>

<ul>
  {#if todos.length > 0}
    {#each todos as todo(todo.id)}
      <Todo {...todo} />
    {/each}
  {/if}
</ul>

<style>
  
</style>