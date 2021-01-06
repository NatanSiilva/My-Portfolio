const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    };
};
showMenu('nav-toggle', 'nav-menu');






const navLink = document.querySelectorAll('.nav__link') ;
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(link => link.addEventListener('click', linkAction));









const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop +  sectionHeight) {
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active');
        }

    });
};


/*animação scroll-reveal*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* home */

sr.reveal('.home__title', {});

sr.reveal('.home__img', {origin:'right', delay: 400});


/*about*/

sr.reveal('.about__img', {delay:500});
sr.reveal('.about__subtitulo', {delay:300});
sr.reveal('.about__profession', {delay:400});
sr.reveal('.about__text', {delay:500});
sr.reveal('.about__social-icon', {delay:600, interval: 200});


/*skills*/

sr.reveal('.skills__subtitulo', {});
sr.reveal('.skills__name', {distance:"20px", delay:50, interval:100});
sr.reveal('.skills__img', {delay:400});

/*portfolio*/

sr.reveal('.portfolio__img', {delay:200});

/*Contact*/




sr.reveal('.content__tweet-text', {origin:'left', delay: 400});
sr.reveal('.tweet', {delay: 600});


sr.reveal('.content__tweet-text', {origin:'left', delay: 400});
sr.reveal('.tweet', {delay: 600});


function typeWrite(element) {
    const textoArray = element.innerText.split('');
    element.innerText = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            element.innerText += letra;
        }, 400 * i)
        console.log(letra)
    })
    

}

const title = document.querySelector(".home__title");

typeWrite(title);

