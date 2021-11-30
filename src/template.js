export default (Items, container, ul) => {
  Items.forEach((item) => {
    ul.innerHTML += `<li><span><i class="far fa-square"></i>${item.description} </span> <i class="fa fa-ellipsis-v" aria-hidden="true"></i></li> `;
  });

  
  container.appendChild(ul);
  
  container.innerHTML += `
  
  <div class="clear"><p>Clear all completed</p></div>
      
      
  `;
};
