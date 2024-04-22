
var slides = document.querySelectorAll(".posters img");
var activeSlide = slides[1];
let SlideIndex = 1;

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var menuOptions = document.querySelector('.menu-options');

    slides = document.querySelectorAll(".posters img");
    activeSlide = slides[1];

    menuIcon.addEventListener('click', function() {
        menuOptions.classList.toggle('active');
    });
});


function showSlide(index){
    if(index >= slides.length){
        SlideIndex = 0;
    }

    else if(index < 0){
        SlideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("activeposter");
    });

    slides[SlideIndex].classList.add("activeposter");
}

function rightbutton() {
    SlideIndex++;
    showSlide(SlideIndex);
    console.log(SlideIndex);
}

function leftbutton() {
    SlideIndex--;
    showSlide(SlideIndex);
    console.log(SlideIndex);
}
