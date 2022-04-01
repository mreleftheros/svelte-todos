<script>
  import Nav from '../lib/Nav.svelte';
</script>

<header class="header">
  <Nav on:openAdd />
</header>

<style>
  .header {
    grid-area: h;
    box-shadow: 0 0 5px #333;
  }
</style>