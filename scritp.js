// Tıklandığında sayfa yenilemesi yapmayan kod.
// İlkinde menü açılışı, ikincisinde de kategori açılışı olacak.
let prevent = document.querySelectorAll(".prevent");

for (let i = 0; i < prevent.length; i++) {
    prevent[i].addEventListener("click", (e) => {
        e.preventDefault();
    });
}

let bar = document.querySelector(".fa-bars");
let leftMenu = document.querySelector(".leftMenu");
let kapat = document.querySelector(".fa-chevron-left");

bar.addEventListener("click", () => {
    leftMenu.style.left = "0px";
});

kapat.addEventListener("click", () => {
    leftMenu.style.left = "-300px";
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1400:{
                items:4,
                loop: false
            }
        }
    });
});