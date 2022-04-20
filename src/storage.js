export const getTodosFromStorage = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const setTodosToStorage = todos => {
  return localStorage.setItem('todos', JSON.stringify(todos));
};
