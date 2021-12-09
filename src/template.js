export default (Items, container, ul, button) => {
  if (localStorage.getItem('items')) {
    const items = JSON.parse(localStorage.getItem('items'));
    items.forEach((item) => {
      if (item.completed) {
        ul.innerHTML += `<li><span><i class="far fa-check-square check " data-id=${item.index}></i><p>${item.description}</p></span> <i class="fa fa-trash trash" aria-hidden="true"></i></li> `;
      } else {
        ul.innerHTML += `<li><span><i class="far fa-square check " data-id=${item.index}></i><p>${item.description}</p> </span> <i class="fa fa-trash trash" aria-hidden="true"></i></li>`;
      }
    });

    container.appendChild(ul);
    container.appendChild(button);
  }
};
