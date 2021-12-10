import createNewList from '../_mocks_/addList.js';
import localStorage from '../_mocks_/store.js';

describe('Add new item to the list', () => {
  const list = [];
  test('Add an entry to the todo list', () => {
    document.body.innerHTML = "<input class='addItem' value='first item'/>";
    const item = document.querySelector('.addItem');
    createNewList(list, item);
    expect(list).toHaveLength(1);
  });
  test('add item to do', () => {
    expect(JSON.parse(localStorage.getItem('todo'))).toHaveLength(1);
  });
});
