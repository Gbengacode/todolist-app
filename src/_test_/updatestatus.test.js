import updateStatus from '../_mocks_/updateStatus.js';

describe('Update status of item in to do list', () => {
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

  test('update status', () => {
    document.body.innerHTML = "<ul><li data-id='3'>edited</li></ul>";
    const li = document.querySelector('li');
    const id = li.getAttribute('data-id', 10);
    const { status } = list[2];
    expect(updateStatus(id, list, status)).toBe(!status);
  });
});
