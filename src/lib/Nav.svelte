<script>
  export let onAddModal;
  import { Link } from 'svelte-routing';
  import NavLinks from './NavLinks.svelte';
</script>

<nav class="nav">
  <div class="logo">
    <Link to='/'>
      <h2 class="logo-title flex-center"> 	
        &#127968;</h2>
    </Link>
  </div>
  <NavLinks {onAddModal} />
</nav>

<style>
  .nav {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .logo {
    flex-basis: 15rem;
  }

  .logo-title {
    height: 100%;
    text-align: center;
    font-size: 6rem;
    align-items: center;
    font-weight: 900;
    letter-spacing: .1rem;
    transition: transform .15s ease-in-out;
    text-shadow: 2px 2px #333;
  }

  .logo-title:hover {
    transform: scale(0.95);
  }
</style>