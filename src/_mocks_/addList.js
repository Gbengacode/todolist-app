import localStorageMock from './store.js';

export default (tasks) => {
  const newTask = {
    description: document.getElementById('addList').value,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  localStorageMock.setItem('todo', tasks);
};
