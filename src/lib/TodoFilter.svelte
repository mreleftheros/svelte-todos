<script>
  export let filter = 'all', onFilter;
  
  $: onFilter(filter);
</script>

<div class="wrapper">
  <label class="box" class:active={filter === 'all'}>
    <input class="radio" type="radio" bind:group={filter} name="filter" value="all">
    <span class="text">All</span>
  </label>
  <label class="box" class:active={filter === 'done'}>
    <input class="radio" type="radio" bind:group={filter} name="filter" value="done">
    <span class="text">Done</span>
  </label>
  <label class="box" class:active={filter === 'undone'}>
    <input class="radio" type="radio" bind:group={filter} name="filter" value="undone">
    <span class="text">Undone</span>
  </label>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  .box {
    display: block;
    position: relative;
    width: 15rem;
    padding: 1rem;
    background-color: rgba(3, 3, 3, 1);
    opacity: .5;
    border-radius: 1rem;
    cursor: pointer;
    margin: 0 2rem;
  }

  .radio {
    position: absolute;
    visibility: hidden;
  }

  .text {
    display: block;
    text-align: center;
    font-size: 2rem;
    user-select: none;
  }

  .active {
    opacity: 1;
  }
</style>