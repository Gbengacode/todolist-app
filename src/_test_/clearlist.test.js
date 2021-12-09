import clearList from '../_mocks_/clearList.js';

describe('clear  completed to do list', () => {
  const list = [
    {
      description: 'first ittem',
      status: false,
      index: 1,
    },
    {
      description: 'second item',
      status: false,
      index: 2,
    },
    {
      description: 'edit',
      status: true,
      index: 3,
    },
  ];
  test('clear complete list', () => {
    expect(clearList(list)).toHaveLength(2);
  });
});
