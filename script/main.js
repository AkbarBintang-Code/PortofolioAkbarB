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
  