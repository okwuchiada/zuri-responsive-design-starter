const sideBar = () => {
    const side = document.querySelector('.side-bar');
    const navLinks = document.querySelector('.nav-links');


    side.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    })
}

sideBar();