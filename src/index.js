import './style.css'
import {createHomePage} from './homepage.js';
import {createMenuPage} from './menu.js';

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', createHomePage);

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', createMenuPage);

createHomePage();