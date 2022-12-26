let merge = document.querySelectorAll('merge');
let navLinks = document.querySelectorAll('.v');
window.onscroll = () => {
    Selection.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let hieght = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.v[href*=' + id + ']').classList.add('active');
            });
        }

    });
};