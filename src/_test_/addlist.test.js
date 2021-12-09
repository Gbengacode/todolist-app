/**
 * @jest-environment jsdom
 */

import createNewList from '../_mocks_/addList.js';
import localStorageMock from '../_mocks_/store.js';

describe('Add new item to the list', () => {
  const list = [];
  test('Add an entry to the todo list', () => {
    document.body.innerHTML = "<input id='addTask' value='first item'/>";
    createNewList(list);
    expect(list).toHaveLength(1);
  });
  test('add item to do', () => {
    expect(localStorageMock.getItem('todo')).toHaveLength(1);
  });
  test('Add a second entry to the todo list', () => {
    document.body.innerHTML = "<input id='addTask' value='second item'/>";
    createNewList(list);
    expect(list[1].index).toBe(2);
  });
});
