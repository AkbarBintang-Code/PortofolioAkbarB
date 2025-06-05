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
   document.addEventListener("DOMContentLoaded", function() {
    // Other existing JavaScript code here...

    if (document.querySelector('.dynamic-text')) {
        new TypeIt(".dynamic-text", {
            strings: ["intuitive designs", "responsive websites", "engaging experiences", "functional applications"],
            speed: 150, // Meningkatkan kecepatan pengetikan (nilai lebih tinggi = lebih cepat)
            deleteSpeed: 150, // Meningkatkan kecepatan penghapusan (nilai lebih tinggi = lebih cepat)
            breakLines: false,
            loop: true,
            nextStringDelay: 300, // Mengurangi jeda antar string
            // Fungsi afterString dihapus untuk memanfaatkan default looping TypeIt
        }).go();
    }

    // Other existing JavaScript code here...
});

const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) { // Pastikan tombol ditemukan di DOM
        window.addEventListener('scroll', function() {
            // Tampilkan tombol jika scroll lebih dari 200px dari atas
            if (window.pageYOffset > 200) {
                scrollTopBtn.style.display = 'flex'; // Gunakan 'flex' karena kita ingin center ikon
                scrollTopBtn.style.opacity = '1';
            } else {
                scrollTopBtn.style.opacity = '0';
                // Set display to 'none' after transition to ensure it doesn't block clicks
                setTimeout(() => {
                    scrollTopBtn.style.display = 'none';
                }, 300); // Match transition duration
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Membuat scroll menjadi halus
            });
        });
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