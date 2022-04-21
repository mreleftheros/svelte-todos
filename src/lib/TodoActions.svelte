<script>
  export let allDone = false, someDone = false, onDeleteDone, onToggleAll, todosExist;
</script>

<div class="box">
  <button disabled={!todosExist} class="btn" on:click={onToggleAll}>
    {#if allDone}
      Uncheck All
    {:else}
      Check All
    {/if}
  </button>
  <button disabled={!someDone} class="btn" on:click={onDeleteDone}>
    Remove Checked
  </button>
</div>

<style>
  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 60rem;
    padding: .5rem;
    margin: 1rem auto;
  }

  .btn {
    background-color: dodgerblue;
    border: none;
    min-width: 20rem;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    color: #fff;
    font-size: 1.8rem;
    text-align: center;
    cursor: pointer;
    transition: transform .15s ease-out;
  }

  .btn:disabled {
    background-color: rgb(132, 191, 250);
  }

  .btn:not(:disabled):hover {
    transform: scale(0.99);
  }
</style>