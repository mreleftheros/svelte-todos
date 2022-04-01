<script>
  import { navigate } from 'svelte-routing';

  const handleClick = () => navigate('/');
</script>

<section>
  <p class="para">This is a test page</p>
  <button class="btn" on:click={handleClick}>Go to the Homepage</button>
</section>

<style>
  .para {
    text-align: center;
    font-size: 3rem;
    margin: 2rem auto;
  }
  .btn {
    display: block;
    margin: auto;
    background: crimson;
    color: #eee;
    font-size: 2rem;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    border: 0;
    font-weight: bolder;
  }
</style>