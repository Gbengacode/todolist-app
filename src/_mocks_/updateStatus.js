import localStorageMock from './store.js';

export default (id, list, status) => {
  const currentList = list.map((item) => {
    if (item.index === parseInt(id, 10)) {
      item.status = !status;
    }
    return item;
  });

  localStorageMock.setItem('todo', currentList);
  return currentList[id - 1].status;
};
