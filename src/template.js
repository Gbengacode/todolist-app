export default (Items, container, ul) => {
  if (localStorage.getItem('items')) {
    const items = JSON.parse(localStorage.getItem('items'));
    items.forEach((item) => {
      if (item.completed) {
        ul.innerHTML += `<li><span><i class="far fa-check-square check " data-id=${item.index}></i>${item.description} </span> <i class="fa fa-ellipsis-v" aria-hidden="true"></i></li> <hr/>`;
      } else {
        ul.innerHTML += `<li><span><i class="far fa-square check " data-id=${item.index}></i>${item.description} </span> <i class="fa fa-ellipsis-v" aria-hidden="true"></i></li> <hr/>`;
      }
    });

    container.appendChild(ul);
    container.innerHTML += `
    <button type="button" class="clear">Clear all completed </button>
      
  `;
  } else {
    Items.forEach((item) => {
      if (item.completed) {
        ul.innerHTML += `<li><span><i class="far fa-check-square check " data-id=${item.index}></i>${item.description} </span> <i class="fa fa-ellipsis-v" aria-hidden="true"></i></li> <hr/>`;
      } else {
        ul.innerHTML += `<li><span><i class="far fa-square check " data-id=${item.index}></i>${item.description} </span> <i class="fa fa-ellipsis-v" aria-hidden="true"></i></li> <hr/>`;
      }
    });

    container.appendChild(ul);
    container.innerHTML += `
    <button type="button" class="clear">Clear all completed </button>
      
  `;
  }
};
