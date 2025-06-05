document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navbar = document.getElementById('navbar');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Close mobile nav when a link is clicked
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                burger.classList.remove('toggle');
            }
        });
    });

    // Dynamic Rotating Text for Hero Section
    if (document.querySelector('.dynamic-text')) {
        new TypeIt(".dynamic-text", {
            strings: ["intuitive designs", "responsive websites", "engaging experiences", "functional applications"], ["intuitive designs", "responsive websites", "engaging experiences", "functional applications"],
            speed: 100,
            deleteSpeed: 50,
            breakLines: false,
            loop: true,
            nextStringDelay: 750,
            afterString: function (step, instance) {
                // To ensure a smooth loop without abrupt jumps
                if (instance.options.loop && step.index === instance.options.strings.length - 1) {
                    instance.type('', { delay: 1000 }).go(); // Add a short delay before looping
                }
            }
        }).go();
    }


    // ScrollReveal animations
    ScrollReveal().reveal('.hero-left', {
        delay: 300,
        distance: '50px',
        origin: 'left',
        easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.hero-right', {
        delay: 300,
        distance: '50px',
        origin: 'right',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.service-card', {
        interval: 100,
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.portfolio-card', {
        interval: 100,
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.education-item', {
        interval: 150,
        distance: '30px',
        origin: 'left',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.skills-right p, .skills-list', {
        delay: 200,
        distance: '30px',
        origin: 'right',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.certificate-card', {
        interval: 100,
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.contact-left', {
        delay: 200,
        distance: '50px',
        origin: 'left',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.contact-right', {
        delay: 200,
        distance: '50px',
        origin: 'right',
        easing: 'ease-in-out'
    });
});