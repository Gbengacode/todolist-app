import localStorageMock from './store.js';

export default (list) => {
  const currentList = list.filter((item) => item.status !== true);
  localStorageMock.setItem('todo', currentList);
  return currentList;
};
