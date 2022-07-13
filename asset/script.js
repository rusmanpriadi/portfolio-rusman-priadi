
// SCROLL
const header = document.querySelector('header')
function stikyNavbar(){
    header.classList.toggle('scrolled', window.pageYOffset > 0)
}
window.addEventListener('scroll', stikyNavbar)


$('.page').on('click', function(e) {
    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);
    $('html , body').animate({
    scrollTop: elemenTujuan.offset().top - 120
    });
    e.preventDefault();
});


// toggle
const bar = document.querySelector(".toggle-menu")
const listItem = document.querySelector(".list-item")
bar.addEventListener("click", () => {
    bar.classList.toggle("active")
    listItem.classList.toggle("active")
})


// slider
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        }