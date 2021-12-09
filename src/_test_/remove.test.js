import deleteItem from '../_mocks_/removeList.js';

describe('remove a task from the list', () => {
  const list = [
    {
      description: 'first ittem',
      status: false,
      index: '1',
    },
    {
      description: 'second item',
      status: false,
      index: '2',
    },
    {
      description: 'three item',
      status: false,
      index: '3',
    },
  ];
  test('remove an item from the list', () => {
    const todo = list[1];
    expect(deleteItem(todo, list)).toHaveLength(2);
  });
});
