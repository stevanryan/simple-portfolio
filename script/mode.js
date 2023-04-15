const button = document.querySelector('.icon');
const header = document.querySelector('header');

const body = document.querySelector('body');
let stevanMode = document.getElementById('stevan');
const allA = document.querySelectorAll('header nav ul li a');
const mainCover = document.querySelectorAll('.main-cover');

let toggle = false;
button.addEventListener('click', () => {
    toggle = !toggle;
    if (toggle) {
        // if (window.scrollY > 0) {
        //     const icon = document.querySelector('.icon');
        //     button.style.backgroundImage = 'url(assets/img-logo/moon-solid-120.png)';
        // }
    
        // if (window.scrollY === 0) {
        //     const icon = document.querySelector('.icon');
        //     icon.style.backgroundImage = 'url(assets/img-logo/moon-regular-120-w.png)';
        // }
        button.style.backgroundImage = 'url(assets/img-logo/moon-solid-120.png)';

        body.classList.add('darkBgOn');
        stevanMode.style.color = '#fff';
        for (const singleA of allA) {
            singleA.classList.add('darkOn');
        }
        for (const mainColor of mainCover) {
            mainColor.classList.add('darkOn');
        }
    } else {
        // if (window.scrollY > 0) {
        //     const icon = document.querySelector('.icon');
        //     icon.style.backgroundImage = 'url(assets/img-logo/moon-regular-120-w.png)';
        // }
    
        // if (window.scrollY === 0) {
        //     const icon = document.querySelector('.icon');
        //     icon.style.backgroundImage = 'url(assets/img-logo/moon-regular-120.png)';
        // }
        button.style.backgroundImage = 'url(assets/img-logo/moon-regular-120.png)';

        body.classList.remove('darkBgOn');
        stevanMode.style.color = '#1f1f1f';
        for (const eachA of allA) {
            eachA.classList.remove('darkOn');
        }
        for (const mainColor of mainCover) {
            mainColor.classList.remove('darkOn');
        }
    }
});
