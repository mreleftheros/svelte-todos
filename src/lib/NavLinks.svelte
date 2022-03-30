<script>
  import { Link } from 'svelte-routing';
</script>

<ul class="links">
  <li class="link">
    <span class="link-text flex-center">New</span>
  </li>
  <Link to='/about'>
    <li class="link">
      <span class="link-text flex-center">About</span>
    </li>
  </Link>
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
  }

  .link-text:hover {
    opacity: .75;
  }
</style>