<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    return dispatch('close');
  }
</script>

<div class="flex-center modal-box" on:click|self={handleClick}>
  <div class="modal">
    <slot />
    <button class="exit" on:click={handleClick}>x</button>
  </div>
</div>

<style>
  .modal-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
  }

  .modal {
    position: relative;
    min-width: 60rem;
    height: 30rem;
    background-color: #eee;
    color: #333;
    border-radius: 1rem;
  }

  .exit {
    position: absolute;
    display: block;
    top: 1rem;
    right: 1rem;
    color: #eee;
    font-size: 2rem;
    font-weight: bold;
    border: 0;
    background-color: crimson;
    cursor: pointer;
    padding: 1rem;
    transition: transform .15s ease;
  }

  .exit:hover {
    transform: scale(0.95);
  }
</style>