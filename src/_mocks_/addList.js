import localStorage from './store.js';

export default (list, item) => {
  const newItem = {
    description: item,
    completed: false,
    index: list.length + 1,
  };
  list.push(newItem);
  localStorage.setItem('todo', JSON.stringify(list));
};
