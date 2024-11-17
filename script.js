let bar = document.querySelector(".bar");
let kapat = document.querySelector(".kapat");
let sidebar = document.querySelector(".sideBar");

bar.addEventListener("click", (e) => {
    sidebar.style.left = "0px";
    e.preventDefault();
});
kapat.addEventListener("click",(e)=>{
    sidebar.style.left = "-320px";
    e.preventDefault();

});
document.querySelector(".kategori").addEventListener("click", (e) => {
    e.preventDefault();
});

$('.slideerHaber').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1100:{
            items:3
        }
    }
});