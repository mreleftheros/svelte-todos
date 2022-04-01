export const getTodosFromStorage = () => {
  console.log(localStorage.getItem('todos'))
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const setTodosToStorage = (todos) => {
  return localStorage.setItem('todos', JSON.stringify(todos));
}