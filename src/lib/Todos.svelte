<script>
  export let todos = [];
</script>

<ul>
  {#if todos.length > 0}
    {#each todos as {id, text, done}(id)}
      <li>{text}</li>
    {/each}
  {/if}
</ul>

<style>
  
</style>