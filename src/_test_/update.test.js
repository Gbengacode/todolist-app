import updateList from '../_mocks_/updateList.js';

describe('Edit item in to do list', () => {
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
      description: 'three item',
      status: false,
      index: 3,
    },
  ];

  test('edit item', () => {
    document.body.innerHTML = "<ul><li data-id='3'>edited</li></ul>";
    const li = document.querySelector('li');
    const value = li.textContent;
    const id = li.getAttribute('data-id', 10);
    expect(updateList(id, list, value)).toBe('edited');
  });
});
