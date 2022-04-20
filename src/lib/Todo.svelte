<script>
  export let id, text, done;
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  const icons = {
    check: '🗸',
    trash: '✗',
    edit: '⚙'
  };

  const handleClick = ({target: {classList}}) => {
    let action = classList.contains('edit') ? 'edit' : classList.contains('trash') ? 'trash' : 'check';
    const payload = {id};
    if (action === 'edit') payload.text = text;

    return dispatch(action, payload);
  };
</script>

<li class="item">
  <div class="todo">
    <span class="logo">&#127919;</span>
    <h3 class="text" class:line={done}>{text}</h3>
  </div>
  <div class="tools">
    <button class="btn" on:click={handleClick} class:check={done}>{icons.check}</button>
    <button class="btn edit" on:click={handleClick}>{icons.edit}</button>
    <button class="btn trash" on:click={handleClick}>{icons.trash}</button>
  </div>
</li>

<style>
  .btn {
    display: block;
    height: 100%;
    min-width: 5rem;
    cursor: pointer;
    font-size: 3rem;
    border: 0;
    background: none;
  }

  .check {
    color: lime;
  }

  .trash {
    color: crimson;
    transition: transform .15s ease;
  }

  .trash:hover {
    transform: scale(0.95);
  }

  .edit {
    color: #aaa;
    transition: transform .3s ease;
    transform-box: fill-box;
    transform-origin: 50% 50%;
  }

  .edit:hover {
    transform: rotate(90deg);
  }

  .line {
    text-decoration: line-through;
  }

  .item {
    display: flex;
    height: 5rem;
    width: 75%;
    margin: 1rem auto;
    background: rgba(15, 15, 15, .3);
    border-radius: 1rem;
  }

  .todo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 1rem;
  }

  .logo {
    flex-basis: 3rem;
    user-select: none;
  }

  .text {
    flex: 1;
    font-size: 2rem;
    font-weight: 100;
    text-shadow: 1px 1px #333;
  }

  .tools {
    flex-basis: 25rem;
    display: flex;
    justify-content: space-around;
    height: 100%;
  }
</style>