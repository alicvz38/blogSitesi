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
document.querySelector(".kategoriler").addEventListener("click", (e) => {
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


let kt = document.querySelector(".kt");
let ktgr = document.querySelector(".altKat");
let durum = 0;

let arsiv = document.querySelector(".arsiv");
let altArsiv = document.querySelector(".altArsiv");
let durum2 = 0;

kt.addEventListener("click",()=>{
    if(durum == 0){
        ktgr.style.display = "block";
        altArsiv.style.display = "none";
        durum = 1;
        durum2 = 0;
    }else{
        ktgr.style.display = "none";
        durum = 0;
    }
});

arsiv.addEventListener("click",(e)=>{
    if(durum2 == 0){
        altArsiv.style.display = "block";
        ktgr.style.display = "none";
        durum2 = 1;
        durum = 0;
    }else{
        altArsiv.style.display = "none";
        durum2 = 0;
    }

    e.preventDefault();
});

let azalt = document.querySelector(".azalt");
let artir = document.querySelector(".artir");
let icerik = document.querySelectorAll(".icerik");
let fontsize = "20";

if(azalt != null){
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
}
if(artir != null){
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
}