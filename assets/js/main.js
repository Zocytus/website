/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("shadow-header")
        : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
    e.preventDefault();
    emailjs
        .sendForm(
            "service_81g7gdy",
            "template_gmn2dh5",
            "#contact-form",
            "Nn8K_-Gv09202f96o"
        )
        .then(
            () => {
                contactMessage.textContent = "Message sent successfully";

                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000);
                contactForm.reset();
            },
            () => {
                contactMessage.textContent = "Message not send (sever error)";
            }
        );
};
contactForm.addEventListener("submit", sendEmail);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});
sr.reveal(
    `.home__perfil,
            .about__image,
            .contact__email,
            `,
    { origin: "right" }
);
sr.reveal(
    `.home__name, 
    .home__info,
    .about__container ,
    .section__title-1,
    .about__info,
    .contact__social,
    .contact__data`,
    { origin: "left" }
);
sr.reveal(`.services__card,projects__card`, { interval: 100 });
