import localStorageMock from './store.js';

export default (id, list, value) => {
  const currentList = list.map((item) => {
    if (item.index === parseInt(id, 10)) {
      item.description = value;
    }
    return item;
  });

  localStorageMock.setItem('todo', currentList);
  return currentList[id - 1].description;
};
