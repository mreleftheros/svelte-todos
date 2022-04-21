<script>
  export let todos = [], filter = 'all', doneTodos, totalTodos, allDone;
</script>

<div class="board-box">
  {#if filter === 'all'}
    {#if !allDone}
      <p class="board">{doneTodos} out of {totalTodos}</p>
    {:else}
      <p class="board">Congrats! All {totalTodos} todos are done!</p>
    {/if}
  {/if}
</div>

<style>
  .board-box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 5rem;
  }

  .board {
    font-size: 2.5rem;
  }
</style>