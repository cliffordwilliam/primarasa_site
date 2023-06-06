var carouselContainer = document.querySelector(".carousel-container");
var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");

var slides = Array.from(carouselContainer.querySelectorAll(".carousel-slide"));
var totalSlides = slides.length;
var currentSlide = 0;

function showSlide() {
    slides.forEach(function(slide) {
    slide.style.display = "none";
    });
    slides[currentSlide].style.display = "block";
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide();
