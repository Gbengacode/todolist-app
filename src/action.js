export const saveUpdate = (Items) => {
  document.addEventListener('DOMContentLoaded', () => {
    const checks = document.querySelectorAll('.check');
    checks.forEach((check) => {
      check.addEventListener('click', () => {
        if (check.classList.contains('fa-square')) {
          check.classList.replace('fa-square', 'fa-check-square');
          const id = parseInt(check.getAttribute('data-id'), 10);
          const target = Items.find((item) => item.index === id);
          target.completed = true;

          localStorage.setItem('items', JSON.stringify(Items));
        } else {
          check.classList.replace('fa-check-square', 'fa-square');
          const id = parseInt(check.getAttribute('data-id'), 10);
          const target = Items.find((item) => item.index === id);
          target.completed = false;
          localStorage.setItem('items', JSON.stringify(Items));
        }
      });
    });
  });
};

export const fetchItems = (Items) => {
  window.addEventListener('load', () => {
    if (!localStorage.getItem('items')) {
      localStorage.setItem('items', '[]');
    } else {
      const items = JSON.parse(localStorage.getItem('items'));
      Items.length = 0;
      items.forEach((item) => {
        Items.push(item);
      });
    }
  });
};
