<script>
  import Todos from '../lib/Todos.svelte';

  let todos = [
    {id: 0, text: 'Hello World', done: false},
    {id: 1, text: 'Hello World 1', done: true},
    {id: 2, text: 'Hello World 2', done: false},
  ];
</script>

<section>
  <h2 class="title">My Todos</h2>
  {#if todos.length > 0}
    <Todos {todos} />
  {:else}
    <p>No more todos...</p>
  {/if}
</section>

<style>
  .title {
    text-align: center;
    margin: 1rem auto;
    font-size: 3rem;
    letter-spacing: .1rem;
    font-weight: bolder;
    user-select: none;
  }
</style>