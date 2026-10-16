import { setPageTitle } from "./homepage.js";

function createAboutPage() {
    setPageTitle('About us | Restaurant Page');
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = `
       <div>
            <h2><i>About us</i></h2>
            <p>
                We make the best snacks across the continents, delivering nourishing goodness to the world while looking good at it.
                It goes a lot deeper than that. It's a journey of a lifetime but I believe we'll get there. We believe everyone will acheive greatness and we are here to nourish you on your journey.
                
            </p>
        </div>`;
    const menuButton = document.querySelector('.menu');
    menuButton.style.color = 'white';

    const homeButton = document.querySelector('.home');
    homeButton.style.color = 'white';

    const aboutButton = document.querySelector('.about');
    aboutButton.style.color = 'rgba(255, 255, 255, 0.5)';
}

export { createAboutPage };
