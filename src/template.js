export default (Items, container, ul) => {
  Items.forEach((item) => {
    ul.innerHTML += `<li><span><i class="far fa-square"></i>${item.description} </span> <i class="fa fa-ellipsis-v" aria-hidden="true"></i></li> <hr/>`;
  });

  container.appendChild(ul);
  container.innerHTML += `
    <button type="button" class="clear">Clear all completed </button>
      
  `;
};
