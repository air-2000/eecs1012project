


document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var menuOptions = document.querySelector('.menu-options');

    menuIcon.addEventListener('click', function() {
        menuOptions.classList.toggle('active');
    });
});
