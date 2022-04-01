<script>
	import { Router, Route } from 'svelte-routing';
	import { onMount } from 'svelte';
	import Header from './layout/Header.svelte';
	import Main from './layout/Main.svelte';
	import Footer from './layout/Footer.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';

	let todos = [
    {id: 0, text: 'Hello World', done: false},
    {id: 1, text: 'Hello World 1', done: true},
    {id: 2, text: 'Hello World 2', done: false},
  ];
	let id;
	let modal = {
    show: false,
    edit: null,
		editText: ''
  };

  onMount(() => {
    id = todos.length;
  })

	const closeModal = () => {
    return modal.show = false;
  };

	const toggleCheck = ({detail: {id}}) => {
    const todo = todos.find(t => t.id === id);
    todo.done = !todo.done;

    return todos=todos;
  };

	const addTodo = ({detail: {text}}) => {
    todos = [{text, id: id++, done: false}, ...todos];

    return closeModal();
  };

  const editTodo = ({detail: {id, text}}) => {
		modal.edit = id;
    modal.editText = text;
		return modal.show = true;
  };

	const openAddModal = () => {
		modal.edit = null;
		modal.editText = '';
		return modal.show = true;
	}

	const setTodo = ({detail: {id, text}}) => {
		const todo =  todos.find(t => t.id === id);
		todo.text = text;

		todos = todos;
		return closeModal();
	};

	const deleteTodo = ({detail: {id}}) => {
		return todos = todos.filter(t => t.id !== id);
	};
</script>

<Router>
	<Header on:openAdd={openAddModal} />
	<Main>
		<Route path='/'>
			<Home {todos} on:check={toggleCheck} on:edit={editTodo} on:set={setTodo} on:trash={deleteTodo} on:add={addTodo} on:close={closeModal} {...modal} />
		</Route>
		<Route path='/about' component={About} />
	</Main>
	<Footer />
</Router>

<style>

</style>