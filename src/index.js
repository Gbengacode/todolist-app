import './css/main.css';
import Items from './data.js';
import template from './template.js';
import {
  saveUpdate,
  fetchItems,
  addItem,
  editItem,
  clearItems,
} from './action.js';

const container = document.querySelector('.container');
const form = document.createElement('form');
const input = document.createElement('input');
const ul = document.createElement('ul');
const p = document.createElement('p');
const button = document.createElement('button');
button.setAttribute('type', 'button');
button.className = 'clear';
button.textContent = 'Clear all completed';
input.setAttribute('type', 'text');
input.setAttribute('name', 'item');
input.setAttribute('placeholder', 'Add to your list');
form.appendChild(input);
container.appendChild(form);
container.appendChild(ul);
template(Items, container, ul, button, p);
fetchItems(Items);
saveUpdate();
editItem();
clearItems();
addItem(form, ul, container, button);
