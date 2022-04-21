<script>
  export let todos = [], onToggle, onDelete, onEditModal;
  import Todo from './Todo.svelte';
</script>

<ul>
  {#each todos as todo(todo.id)}
    <Todo {...todo} {onToggle} {onDelete} {onEditModal} />
  {/each}
</ul>