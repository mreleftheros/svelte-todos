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
    <p class="para">There are currently no todos . . .</p>
  {/if}
  {#if show}
    <Modal on:close>
      <TodoForm {edit} {editText} on:add on:set/>
    </Modal>
  {/if}
</section>

<style>
  .para {
    font-size: 2.5rem;
    text-align: center;
    text-shadow: 1px 2px 0 #333;
  }

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