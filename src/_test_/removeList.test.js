import removeItem from '../_mocks_/removeList.js';

describe('remove a item from the list', () => {
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
    const { index } = list[1];
    expect(removeItem(index, list)).toHaveLength(2);
  });
});
