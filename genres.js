
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menuOptions = document.querySelector('.menu-options');

menuToggle.addEventListener('change', function() {
        if (this.checked) {
            menuOptions.classList.add('active');
        } else {
            menuOptions.classList.remove('active');
        }
    });
});
