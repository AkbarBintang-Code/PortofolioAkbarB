// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
  
    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
  };
  
  navSlide();
  
  // Clear form before unload
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(".paragrap", {
      speed : 150
    })
    .pause(1000)
    .delete(63)
    .type('Im Bachelor of Information Systems graduate from Dinamika University Surabaya')
    .type(' Interested in designing intuitive interfaces and building interactive and responsive websites.')
    .go();
  });

  const sr = ScrollReveal({
    distance: '80px',
    duration: 2500,
    delay: 200,
    reset: true,
  });

  sr.reveal('.main-container .hero-left', { origin: 'left' });
  sr.reveal('.main-container .hero-right', { origin: 'right' });
  sr.reveal('#services .pre-title', { origin: 'top' });
  sr.reveal('#services .services-title', { origin: 'top' });
  sr.reveal('#services .service', { origin: 'bottom', interval: 200 });
  sr.reveal('#portfolios .pre-title', { origin: 'top' ,interval: 200 });
  sr.reveal('#portfolios .section-title', { origin: 'top' ,interval: 200 });
  sr.reveal('#portfolios .portfolio', { origin: 'bottom', interval: 200 });
  sr.reveal('#portfolios-2 .portfolio', { origin: 'bottom', interval: 200 });
  sr.reveal('#skills .pre-title', { origin: 'top' });
  sr.reveal('#skills .section-title', { origin: 'top' });
  sr.reveal('#skills .skills-left .education', { origin: 'left', interval: 200 });
  sr.reveal('#skills .skills-right', { origin: 'right', delay: 400 });
  sr.reveal('#skills .skills-list ul li', { origin: 'bottom', interval: 100 });
  sr.reveal('#certificates .pre-title', { origin: 'top' });
  sr.reveal('#certificates .section-title', { origin: 'top' });
  sr.reveal('#certificates .certificate', { origin: 'bottom', interval: 200 });
  sr.reveal('#contact .contact-left', { origin: 'left', delay: 200 });
  sr.reveal('#contact .contact-right', { origin: 'right', delay: 400 });
  sr.reveal('#contact .contact-item', { origin: 'bottom', interval: 200 });
  sr.reveal('#contact .btn-submit', { origin: 'bottom', delay: 600 });

  const blobs = document.querySelectorAll('.blob');

  function moveBlob(blob) {
    // Tentukan batas layar agar blob bergerak di sekitar tepi layar
    const maxX = window.innerWidth - blob.offsetWidth;
    const maxY = window.innerHeight - blob.offsetHeight;

    // Gerakkan secara acak ke posisi baru dalam batas layar
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    blob.style.transform = `translate(${x}px, ${y}px)`;
  }

  function animateBlobs() {
    blobs.forEach(blob => moveBlob(blob));
  }

  // Animasi pertama kali
  animateBlobs();

  // Ulangi animasi tiap 2 detik
  setInterval(animateBlobs, 2000);

