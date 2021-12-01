import './css/main.css';
import Items from './data.js';
import template from './template.js';

const container = document.querySelector('.container');
const form = document.createElement('form');
const input = document.createElement('input');
const ul = document.createElement('ul');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Add to your list');
form.appendChild(input);
container.appendChild(form);
template(Items, container, ul);
