import { setPageTitle } from "./homepage.js";

function createMenuPage() {
    setPageTitle('Menu | Restaurant Page');
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = `
    <div>
            <h2><i>Our Restaurant Menu</i></h2>
            <p>
                <i>These are just a few, there are loads more where these came from.</i>
            </p>
        </div>
        <div>
            <h2><i>Sausages</i></h2>
            <p>
                Your favourite good sausages. C'monn who just doesn't love one?
            </p>
        </div>

        <div>
            <h2><i>Sandwiches</i></h2>

            <p>Yummy sandwiches, it's just the plain recipe for a great day. 
                Trust me, I'd know.
            </p>
        </div>`;
    const menuButton = document.querySelector('.menu');
    menuButton.style.color = 'rgba(255, 255, 255, 0.5)';

    const homeButton = document.querySelector('.home');
    homeButton.style.color = 'white';

    const aboutButton = document.querySelector('.about');
    aboutButton.style.color = 'white';
};

export { createMenuPage };