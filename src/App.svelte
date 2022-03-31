<script>
	import { Router, Route } from 'svelte-routing';
	import Header from './layout/Header.svelte';
	import Main from './layout/Main.svelte';
	import Footer from './layout/Footer.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';

</script>

<Router>
	<Header />
	<Main>
		<Route path='/' component={Home} />
		<Route path='/about' component={About} />
	</Main>
	<Footer />
</Router>

<style>

</style>