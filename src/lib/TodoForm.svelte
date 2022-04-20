<script>
  export let type, text = '', onAdd, onEdit;
  import { onMount } from "svelte";

  let inputRef;

  onMount(() => inputRef.select());

  const handleSubmit = () => {
    if (!text) return;

    if (type === 'edit') {
      return onEdit(text);
    } else if (type === 'add') {
      return onAdd(text);
    }
  }
</script>

<div class="wrapper">
  <h2 class="title flex-center">
    {#if type === 'edit'}
      Edit Todo
    {:else if type === 'add'}
      Add Todo
    {/if}
  </h2>
  <form class="todoForm" on:submit|preventDefault={handleSubmit}> 
    <label class="label" for="text">Todo</label>
    <input class="input" type="text" bind:value={text} bind:this={inputRef} placeholder="Enter todo...">
    <button class="btn" disabled={!text} type="submit">
      {#if type === 'edit'}
        Edit
      {:else if type === 'add'}
        Add
      {/if}
    </button>
  </form>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .todoForm {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 35rem;
    padding: .5rem;
  }
  
  .title {
    text-align: center;
    user-select: none;
    letter-spacing: .1rem;
    font-size: 2.5rem;
    font-weight: 100;
    flex-basis: 5rem;
    padding: 1rem;
    margin: 1rem 0;
  }

  .label {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    padding-left: .5rem;
  }

  .input {
    display: block;
    margin: auto;
    outline: none;
    padding: .5rem 1.5rem;
    border-radius: 1rem;
    border: none;
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0;
  }

  .input:focus {
    background-color: #aaa;
  }

  .btn {
    display: block;
    margin: auto auto 2rem;
    background-color: rgb(116, 26, 44);
    color: #eee;
    border: 0;
    padding: .5rem 3rem;
    border-radius: 1rem;
    font-size: 2rem;
    cursor: pointer;
    transition: transform .15s ease;
  }

  .btn:disabled {
    background-color: rgb(122, 82, 90)
  }

  .btn:hover {
    transform: rotate(5deg);
  }
</style>