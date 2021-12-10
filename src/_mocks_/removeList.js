import localStorage from './store.js';

export default (index, list) => {
  const currentList = list.filter((list) => list.index !== index);
  list.forEach((item, index) => {
    item.index = index + 1;
  });
  localStorage.setItem('todo', JSON.stringify(currentList));
  return currentList;
};
