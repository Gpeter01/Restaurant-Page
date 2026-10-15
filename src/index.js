import './style.css'
import {createHomePage} from './homepage.js';

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', createHomePage);

createHomePage();