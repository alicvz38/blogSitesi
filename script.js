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
    slideTransition: "linear",
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed:5000,
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

let azalt = document.querySelector(".azalt");
let artir = document.querySelector(".artir");
let icerik = document.querySelectorAll(".icerik");
let fontsize = "20";


azalt.addEventListener("click",(e)=>{
    if(fontsize > 16){
        fontsize--;
    }
    pixel = fontsize+"px"
    for(let i = 0; i < icerik.length; i++){
        icerik[i].style.fontSize = pixel;
    }
    e.preventDefault();
});
artir.addEventListener("click",(e)=>{
    if(fontsize <= 28){
        fontsize++;
    }
    pixel = fontsize+"px"
    for(let i = 0; i < icerik.length; i++){
        icerik[i].style.fontSize = pixel;
    }
    e.preventDefault();
});
