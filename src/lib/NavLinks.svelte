<script>
  import { Link } from 'svelte-routing';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleClick = () => dispatch('openAdd');
</script>

<ul class="links">
  <li class="link" on:click={handleClick}>
    <span class="link-text flex-center">Create</span>
  </li>
  <li class="link">
      <Link to='/about'>
      <span class="link-text flex-center">About</span>
    </Link>
  </li>
</ul>

<style>
  .links {
    flex-basis: 20rem;
    display: flex;
    justify-content: space-around;
  }

  .link {
    height: 100%;
  }

  .link-text {
    height: 100%;
    padding: 0 1rem;
    cursor: pointer;
    user-select: none;
    transition: opacity .15s ease;
    font-size: 2rem;
  }

  .link-text:hover {
    opacity: .75;
  }
</style>