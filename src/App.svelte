<script>
	import { Router, Route } from 'svelte-routing';
	import { getTodosFromStorage, setTodosToStorage } from './storage';
	import Header from './layout/Header.svelte';
	import Main from './layout/Main.svelte';
	import Footer from './layout/Footer.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';

	let todos = getTodosFromStorage();
	let modal = null;
	let filter = 'all';
	$: id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 0;
	$: setTodosToStorage(todos);
	$: filteredTodos = filter === 'done' ? todos.filter(t => t.done) : filter === 'undone' ? todos.filter(t => !t.done) : null;

	const openAddModal = () => modal = {type: 'add'};

	const openEditModal = (id, text) => modal = {type: 'edit', id, text};

	const closeModal = () => modal = null;

	const toggleDone = (id) => {
    const todo = todos.find(t => t.id === id);
    todo.done = !todo.done;
    return todos=todos;
  };

	const addTodo = (text) => {
    todos = [{text, id, done: false}, ...todos];

    return closeModal();
  };

	const editTodo = text => {
		const todo =  todos.find(t => t.id === modal.id);
		todo.text = text;
		todos = todos;

		return closeModal();
	};

	const deleteTodo = (id) => todos = todos.filter(t => t.id !== id);

	const setFilter = newFilter => filter = newFilter;
</script>

<Router>
	<Header onAddModal={openAddModal} />
	<Main>
		<Route path='/'>
			<Home todos={filteredTodos || todos} onToggle={toggleDone} onEditModal={openEditModal} onEdit={editTodo} onDelete={deleteTodo} onAdd={addTodo} onCloseModal={closeModal} {modal} {filter} onFilter={setFilter} />
		</Route>
		<Route path='/about' component={About} />
	</Main>
	<Footer />
</Router>