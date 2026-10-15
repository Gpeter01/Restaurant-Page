import './style.css'
import {createHomePage} from './homepage.js';
import {createMenuPage} from './menu.js';
import {createAboutPage} from './about.js';
const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', createHomePage);

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', createMenuPage);

const aboutButton = document.querySelector('.about');
aboutButton.addEventListener('click', createAboutPage);

createHomePage();