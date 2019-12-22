let currentSlide = 0;
    slides = document.querySelectorAll(".slides"),
    leftArrow = document.querySelector(".carousel-btn-prev"),
    rightArrow = document.querySelector(".carousel-btn-next");
    
let clearSlides = () => {
    for ( let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}

let displaySlides = () => {
    clearSlides();
    slides[0].style.display = "block";
}

let slideLeft = () => {
    clearSlides();
    slides[currentSlide - 1].style.display = "block";
    currentSlide--;
}

let slideRight = () => {
    clearSlides();
    slides[currentSlide + 1].style.display = "block";
    currentSlide++;
}

leftArrow.addEventListener("click", function() {
    if (currentSlide == 0) {
        currentSlide = slides.length;
    }
    slideLeft();
})

rightArrow.addEventListener("click", function() {
    if (currentSlide == slides.length - 1) {
        currentSlide = -1;
    }
    slideRight();
})

displaySlides();