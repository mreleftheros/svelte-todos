<script>
  export let todos = [], edit = null, show = false;
  import Todos from '../lib/Todos.svelte';
  import Modal from '../lib/Modal.svelte';
  import TodoForm from '../lib/TodoForm.svelte';
</script>

<section>
  <h2 class="title">My Todos</h2>
  {#if todos.length > 0}
    <Todos {todos} on:check />
  {:else}
    <p>No more todos...</p>
  {/if}
  {#if show}
    <Modal on:close>
      <TodoForm {edit} on:add on:edit/>
    </Modal>
  {/if}
</section>

<style>
  .title {
    text-align: center;
    margin: 1rem auto 2rem;
    font-size: 3rem;
    letter-spacing: .1rem;
    font-weight: bolder;
    user-select: none;
  }
</style>