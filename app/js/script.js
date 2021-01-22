const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector(".header");
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) { //close humburger menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        console.log('open hamburger : overlay close');



    } else { // open hamburger menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        console.log('open hamburger: overlay open');



    }
})