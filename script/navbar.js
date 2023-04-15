// Hamburger navigaton bar (mobile mode)
const hamburgerToggle = document.querySelector('.hamburger');
const nav = document.querySelector('.center-nav ul');
const modeIcon = document.querySelector('#change-mode');

hamburgerToggle.addEventListener('click', function() {
	hamburgerToggle.classList.toggle('active');
	hamburgerToggle.classList.toggle('activeBar');
	nav.classList.toggle('active');
});

// Automatically close after clicking
document.querySelectorAll('nav ul li a').forEach(n => n.
	addEventListener('click', function() {
	hamburgerToggle.classList.remove('active');
	nav.classList.remove('active');
}))

// Navigation bar scrolling animation
const stevanNav = document.getElementById('stevan');

window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

	// if (window.scrollY > 0) {
	// 	const icon = document.querySelector('.icon');
	// 	icon.style.backgroundImage = 'url(assets/img-logo/moon-regular-120-w.png)';
	// }

	// if (window.scrollY === 0) {
	// 	const icon = document.querySelector('.icon');
	// 	icon.style.backgroundImage = 'url(assets/img-logo/moon-regular-120.png)';
	// }

    nav.classList.remove('active');
	hamburgerToggle.classList.remove('activeBar');
});

// Others


// Dark Mode
const button = document.querySelector('.icon');
const header = document.querySelector('header');

const body = document.querySelector('body');
let stevanMode = document.getElementById('stevan');
const allA = document.querySelectorAll('header nav ul li a');
const mainCover = document.querySelectorAll('.main-cover');

const experienceBg = document.querySelector('.experience-bg');

let toggle = false;
button.addEventListener('click', (e) => {
    toggle = !toggle;
    if (toggle) {
        button.style.backgroundImage = 'url(assets/img-logo/moon-solid-120.png)';

        body.classList.add('darkBgOn');
        stevanMode.style.color = '#fff';
        for (const singleA of allA) {
            singleA.classList.add('darkOn');
        }
        for (const mainColor of mainCover) {
            mainColor.classList.add('darkOn');
        }

        experienceBg.style.boxShadow = '0px 0px 10px 0px rgba(255, 255, 255, 0.3)';
        experienceBg.style.border = '1px solid #fff';
    } else {
        button.style.backgroundImage = 'url(assets/img-logo/moon-regular-120.png)';

        body.classList.remove('darkBgOn');
        stevanMode.style.color = '#1f1f1f';
        for (const eachA of allA) {
            eachA.classList.remove('darkOn');
        }
        for (const mainColor of mainCover) {
            mainColor.classList.remove('darkOn');
        }

        experienceBg.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.3)';
        experienceBg.style.border = '1px solid #1f1f1f';
    }
});

// if (window.scrollY > 0) {
//     const icon = document.querySelector('.icon');
//     button.style.backgroundImage = 'url(assets/img-logo/moon-solid-120.png)';
// }

// if (window.scrollY === 0) {
//     const icon = document.querySelector('.icon');
//     icon.style.backgroundImage = 'url(assets/img-logo/moon-regular-120-w.png)';
// }
