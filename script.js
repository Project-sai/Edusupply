
document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".testimonial");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
   const darkModeToggle = document.getElementById("dark-mode-toggle");
 
   // storing dark mode state
   if (localStorage.getItem("dark-mode") === "enabled") {
       body.classList.add("dark-mode");
       darkModeToggle.innerText = "☀️"; 
   }
   // toggle dark mode
   darkModeToggle.addEventListener("click", function () {
       body.classList.toggle("dark-mode");
       if (body.classList.contains("dark-mode")) {
           localStorage.setItem("dark-mode", "enabled");
           darkModeToggle.innerText = "☀️"; 
       } else {
           localStorage.setItem("dark-mode", "disabled");
           darkModeToggle.innerText = "🌙"; 
       }
   });

   let index = 0;
    //  Slider
    function showSlide(i) {
        index = (i + slides.length) % slides.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));

    // auto slide
    setInterval(() => showSlide(index + 1), 5000);
    
    // mobile view buton Menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
