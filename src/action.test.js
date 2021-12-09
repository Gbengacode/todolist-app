import {addItem} from './action.js'

test("Add one item to todo list", () => {
 document.body.innerHTML = `
   <div class="container">
     <div class="sub-container">
       <h1>Today's to do</h1>
       <i class="fas fa-sync-alt refresh"></i>
     </div>
     <form><input type="text" value="test"></form>
     <ul></ul>
     <button type="button" class="clear">Clear all completed</button>
   </div>`;
const container = document.querySelector(".container");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
addItem(form, ul, container, button);
form.submit();
const li = document.querySelectorAll("li");
  expect(li).toHaveLength(1);
})


