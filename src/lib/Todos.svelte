<script>
  import Todo from './Todo.svelte';
  export let todos = [];
</script>

<ul>
  {#each todos as todo(todo.id)}
    <Todo {...todo} on:check on:edit on:trash />
  {:else}
    <p class="para">There are currently no todos . . .</p>
  {/each}
</ul>

<style>
  .para {
    font-size: 2.5rem;
    text-align: center;
    text-shadow: 1px 2px 0 #333;
  }
</style>