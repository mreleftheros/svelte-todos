<script>
  export let todos = [], filter = 'all', modal = null, onEditModal, onCloseModal, onAdd, onEdit, onToggle, onDelete, onFilter;
  import Todos from '../lib/Todos.svelte';
  import Modal from '../lib/Modal.svelte';
  import TodoForm from '../lib/TodoForm.svelte';
  import TodoBoard from '../lib/TodoBoard.svelte';
  import TodoFilter from '../lib/TodoFilter.svelte';
</script>

<section>
  <h2 class="title">My Todos</h2>
  <TodoBoard {todos} {filter} />
  <TodoFilter {filter} {onFilter} />
  <Todos {todos} {onToggle} {onDelete} {onEditModal} />
  {#if modal}
    <Modal {onCloseModal}>
      <TodoForm {...modal} {onAdd} {onEdit} />
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