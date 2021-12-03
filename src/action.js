export const saveUpdate = () => {
  const checks = document.querySelectorAll('.check');

  checks.forEach((check) => {
    check.addEventListener('click', () => {
      if (check.classList.contains('fa-square')) {
        check.classList.replace('fa-square', 'fa-check-square');
        const id = parseInt(check.getAttribute('data-id'), 10);
        const Items = JSON.parse(localStorage.getItem('items'));
        const target = Items.find((item) => item.index === id);
        target.completed = true;
        localStorage.setItem('items', JSON.stringify(Items));
      } else {
        const Items = JSON.parse(localStorage.getItem('items'));
        check.classList.replace('fa-check-square', 'fa-square');
        const id = parseInt(check.getAttribute('data-id'), 10);
        const target = Items.find((item) => item.index === id);
        target.completed = false;
        localStorage.setItem('items', JSON.stringify(Items));
      }
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
export const editItem = () => {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      dot.className = '';
      dot.className = 'fa fa-trash-alt trash';
      const li = e.target.parentElement;
      const content = li.children[0].children[1].textContent;
      const input = document.createElement('input');
      input.className = 'entry';
      input.setAttribute('type', 'text');
      input.setAttribute('value', content);

      const item = li.children[0].children[1];
      li.children[0].removeChild(li.children[0].children[1]);
      li.children[0].append(input);
      const entry = document.querySelector('.entry');
      entry.focus();
      entry.setSelectionRange(-1, -1);
      entry.addEventListener('blur', (e) => {
        const id = li.children[0].firstChild.getAttribute('data-id', 10);
        li.children[0].removeChild(input);
        item.textContent = e.target.value;
        li.children[0].appendChild(item);
        const store = JSON.parse(localStorage.getItem('items'));
        store.forEach((s) => {
          if (s.index === parseInt(id, 10)) {
            s.description = e.target.value;
            localStorage.setItem('items', JSON.stringify(store));
          }
        });
      });

      const trash = document.querySelector('.trash');
      trash.addEventListener('click', () => {
        const store = JSON.parse(localStorage.getItem('items'));
        const id = li.children[0].firstChild.getAttribute('data-id');

        for (let i = 0; i < store.length; i += 1) {
          if (store[i].index === parseInt(id, 10)) {
            store.splice(i, 1);
          }
        }

        localStorage.setItem('items', JSON.stringify(store));
        li.parentElement.removeChild(li);
      });
    });
  });
};

export const addItem = (ul, container, button) => {
  window.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const item = form.get('item');
    if (item.trim() === '') return;
    const Items = JSON.parse(localStorage.getItem('items'));
    const itemObj = {
      description: item,
      completed: false,
      index: Items.length + 1,
    };
    Items.push(itemObj);
    const input = document.querySelector('input');
    input.value = '';
    ul.innerHTML += `<li><span><i class="far fa-square check " data-id=${itemObj.index}></i><p>${itemObj.description}</p> </span> <i class="fa fa-ellipsis-v dot" aria-hidden="true"></i></li>`;
    container.appendChild(button);
    localStorage.setItem('items', JSON.stringify(Items));
    saveUpdate();
    editItem();
  });
};

export const clearItems = () => {
  const clear = document.querySelector('.clear');
  const ul = document.querySelector('ul');
  clear.addEventListener('click', () => {
    const store = JSON.parse(localStorage.getItem('items'));
    const items = store.filter((s) => s.completed !== true);
    ul.innerHTML = '';
    items.forEach((item) => {
      ul.innerHTML += `<li><span><i class="far fa-square check " data-id=${item.index}></i><p>${item.description}</p> </span> <i class="fa fa-ellipsis-v dot" aria-hidden="true"></i></li>`;
    });
    localStorage.setItem('items', JSON.stringify(items));
    saveUpdate();
    editItem();
  });
};
