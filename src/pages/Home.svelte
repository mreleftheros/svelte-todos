<script>
  import Todos from '../lib/Todos.svelte';
  import Modal from '../lib/Modal.svelte';
  import TodoForm from '../lib/TodoForm.svelte';

  let todos = [
    {id: 0, text: 'Hello World', done: false},
    {id: 1, text: 'Hello World 1', done: true},
    {id: 2, text: 'Hello World 2', done: false},
  ];
  let modal = {
    show: true,
    edit: null
  };

  const toggleCheck = e => {
    const {id} = e.detail;
    const todo = todos.find(t => t.id === id);
    todo.done = !todo.done;

    return todos=todos;
  }

  const closeModal = () => {
    return modal.show = false;
  }

  const addTodo = ({detail: {text}}) => {
    console.log(text);

    return closeModal();
  }

  const editTodo = ({detail: {id, text}}) => {
    console.log(id, text);

    return closeModal();
  }
</script>

<section>
  <h2 class="title">My Todos</h2>
  {#if todos.length > 0}
    <Todos {todos} on:check={toggleCheck} />
  {:else}
    <p>No more todos...</p>
  {/if}
  {#if modal.show}
    <Modal on:close={closeModal}>
      <TodoForm edit={modal.edit} on:add={addTodo} on:edit={editTodo}/>
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