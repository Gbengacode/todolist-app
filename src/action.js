export const fetchItems = () => {
  window.addEventListener('load', () => {
    if (!localStorage.getItem('items')) {
      localStorage.setItem('items', '[]');
    }
  });
};

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
  fetchItems();
};

export const editItem = () => {
  const ps = document.querySelectorAll('p');
  ps.forEach((p) => {
    p.addEventListener('click', (e) => {
      const ptag = e.target;
      const content = e.target.textContent;
      const span = e.target.parentElement;
      e.target.remove();
      const input = document.createElement('input');
      input.className = 'entry';
      input.setAttribute('type', 'text');
      input.setAttribute('value', content);
      span.append(input);
      const entry = document.querySelector('.entry');
      entry.focus();
      entry.setSelectionRange(-1, -1);
      entry.addEventListener('blur', (e) => {
        const id = e.target.parentElement.children[0].getAttribute('data-id', 10);
        span.children[1].remove();
        ptag.textContent = e.target.value;
        span.appendChild(ptag);
        const store = JSON.parse(localStorage.getItem('items'));
        store.forEach((s) => {
          if (s.index === parseInt(id, 10)) {
            s.description = e.target.value;
            localStorage.setItem('items', JSON.stringify(store));
          }
        });
      });
    });
  });
};

export const deleteItem = () => {
  const trashes = document.querySelectorAll('.trash');
  trashes.forEach((trash) => {
    trash.addEventListener('click', (e) => {
      const delId = e.target.parentElement.firstChild.firstChild.getAttribute('data-id', 10);

      const store = JSON.parse(localStorage.getItem('items'));
      for (let i = 0; i < store.length; i += 1) {
        if (store[i].index === parseInt(delId, 10)) {
          store.splice(i, 1);
        }
      }
      const ul = document.querySelector('ul');
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      const reset = store.map((list, index) => {
        list.index = index + 1;
        return list;
      });

      localStorage.setItem('items', JSON.stringify(reset));
      const newItem = JSON.parse(localStorage.getItem('items'));
      ul.innerHTML = '';
      newItem.forEach((item) => {
        ul.innerHTML += `<li><span><i class="far fa-square check " data-id=${item.index}></i><p>${item.description}</p> </span> <i class="fa fa-trash trash" aria-hidden="true"></i></li>`;
      });
      window.location.reload();
    });
  });
};

export const addItem = (form, ul, container, button) => {
  const item = form.elements[0].value;
  const Items = JSON.parse(localStorage.getItem('items')) || [];
  const itemObj = {
    description: item,
    completed: false,
    index: Items.length + 1,
  };
  Items.push(itemObj);
  const input = document.querySelector('input');
  input.value = '';
  ul.innerHTML += `<li><span><i class="far fa-square check " data-id=${itemObj.index}></i><p>${itemObj.description}</p> </span> <i class="fa fa-trash trash" aria-hidden="true"></i></li>`;
  container.appendChild(button);
  localStorage.setItem('items', JSON.stringify(Items));
  saveUpdate();
  editItem();
  deleteItem();
};

export const clearItems = () => {
  const clear = document.querySelector('.clear');
  const ul = document.querySelector('ul');
  clear.addEventListener('click', () => {
    const store = JSON.parse(localStorage.getItem('items'));
    const items = store.filter((s) => s.completed !== true);
    const newItems = items.map((list, index) => {
      list.index = index + 1;
      return list;
    });

    ul.innerHTML = '';
    items.forEach((item) => {
      ul.innerHTML += `<li><span><i class="far fa-square check " data-id=${item.index}></i><p>${item.description}</p> </span> <i class="fa fa-trash-alt trash" aria-hidden="true"></i></li>`;
    });
    localStorage.setItem('items', JSON.stringify(newItems));
    saveUpdate();
    editItem();
    deleteItem();
  });
};
