<script>
	import { Router, Route } from 'svelte-routing';
	import { getTodosFromStorage, setTodosToStorage } from './storage';
	import { onMount } from 'svelte';
	import Header from './layout/Header.svelte';
	import Main from './layout/Main.svelte';
	import Footer from './layout/Footer.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';

	let todos = [];
	$: id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 0;
	let modal = {
    show: false,
    edit: null,
		editText: ''
  };

  onMount(() => {
		todos = getTodosFromStorage();
    id = todos.length;
  })

	const closeModal = () => {
    return modal.show = false;
  };

	const toggleCheck = ({detail: {id}}) => {
    const todo = todos.find(t => t.id === id);
    todo.done = !todo.done;

    todos=todos;
		return setTodosToStorage(todos);
  };

	const addTodo = ({detail: {text}}) => {
    todos = [{text, id, done: false}, ...todos];

		setTodosToStorage(todos);
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

		setTodosToStorage(todos);
		return closeModal();
	};

	const deleteTodo = ({detail: {id}}) => {
		todos = todos.filter(t => t.id !== id);
		return setTodosToStorage(todos);
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