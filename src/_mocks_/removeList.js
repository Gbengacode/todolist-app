import localStorageMock from './store.js';

export default (todo, tasks) => {
  const { index } = todo;
  const currentTasks = tasks.filter((todo) => todo.index !== index);
  tasks.forEach((object, index) => {
    object.index = index + 1;
  });
  localStorageMock.setItem('todo', currentTasks);
  return currentTasks;
};
