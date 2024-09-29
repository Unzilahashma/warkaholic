let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.opacity = "0";
    });
    
    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Show the current slide
    slides[slideIndex - 1].style.opacity = "1";
    
    // Change the slide every 5 seconds
    setTimeout(showSlides, 5000);
}

// Start the slideshow
showSlides();

// Navbar Scroll Effect
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};