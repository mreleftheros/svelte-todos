<script>
  export let todos = [];

  $: doneTodos = todos.filter(t => t.done).length;
	$: totalTodos = todos.length;
  $: allDone = doneTodos === totalTodos;
</script>

<div class="board-box">
  {#if !allDone}
    <p class="board">{doneTodos} out of {totalTodos}</p>
  {:else}
    <p class="board">Congrats! All {totalTodos} todos are done!</p>
  {/if}
</div>

<style>
  .board-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .board {
    font-size: 2.5rem;
  }
</style>