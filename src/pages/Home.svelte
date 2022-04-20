<script>
  export let todos = [], edit = null, show = false, editText = '';
  import Todos from '../lib/Todos.svelte';
  import Modal from '../lib/Modal.svelte';
  import TodoForm from '../lib/TodoForm.svelte';
  import TodoBoard from '../lib/TodoBoard.svelte';
</script>

<section>
  <h2 class="title">My Todos</h2>
  <TodoBoard {todos} />
  <Todos {todos} on:check on:edit on:trash />
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
    text-shadow: 1px 2px 3px #333;
  }
</style>