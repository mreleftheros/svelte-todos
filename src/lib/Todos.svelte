<script>
  import Todo from './Todo.svelte';
  export let todos = [];
</script>

<ul>
  {#if todos.length > 0}
    {#each todos as todo(todo.id)}
      <Todo {...todo} on:check />
    {/each}
  {/if}
</ul>

<style>
  
</style>