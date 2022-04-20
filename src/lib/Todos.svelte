<script>
  export let todos = [], onToggle, onDelete, onEditModal;
  import Todo from './Todo.svelte';
</script>

<ul>
  {#each todos as todo(todo.id)}
    <Todo {...todo} {onToggle} {onDelete} {onEditModal} />
  {:else}
    <p class="para">There are currently no todos . . .</p>
  {/each}
</ul>

<style>
  .para {
    font-size: 2.5rem;
    text-align: center;
    text-shadow: 1px 2px 0 #333;
    margin-top: 2rem;
  }
</style>