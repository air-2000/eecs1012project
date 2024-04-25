var scrollAmount = 0;
var scrollperClick;

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var menuOptions = document.querySelector('.menu-options');

    //Hamburger menu
    menuIcon.addEventListener('click', function() {
        menuOptions.classList.toggle('active');
    });
});
//failed attempt at making navigation buttons for the carousel
let slides = document.querySelector(".posters");

function rightbutton() {
    if (scrollAmount <= slides.scrollWidth - slides.clientWidth){
        slides.scrollTo({
            top:0,
            left:(scrollAmount += scrollperClick),
            behavior:"smooth"
        })
    }
}

function leftbutton() {
    slides.scrollTo({
        top:0,
        left:(scrollAmount -= scrollperClick),
        behavior:"smooth"
    })

    if(scrollAmount < 0){
        scrollAmount = 0;
    }
}
