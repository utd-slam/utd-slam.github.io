// Adds link to team page for 'SLAMERS' option in the menu header
$(function() {
    var elements = document.getElementsByClassName("dropdown-toggle");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(){
            window.location.href = this.getAttribute("href");
        });
    }

    var nav = document.getElementsByClassName("nav")[0];
    for (var i = 0; i < elements.length; i++) {
        nav[i].addEventListener('click', function(){
            nav[i].classList.add("active");
        });
    }
});