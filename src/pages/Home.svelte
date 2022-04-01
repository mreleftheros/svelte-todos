<script>
  export let todos = [], edit = null, show = false, editText = '';
  import Todos from '../lib/Todos.svelte';
  import Modal from '../lib/Modal.svelte';
  import TodoForm from '../lib/TodoForm.svelte';
</script>

<section>
  <h2 class="title">My Todos</h2>
  {#if todos.length > 0}
    <Todos {todos} on:check on:edit on:trash />
  {:else}
    <p>No more todos...</p>
  {/if}
  {#if show}
    <Modal on:close>
      <TodoForm {edit} {editText} on:add on:set/>
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