const prod = document.getElementById("prod");
const productScroll = document.querySelector(".product");
const mobileMenu = document.querySelector(".mobileMenu");

/*Menu Scroll Anim*/
window.addEventListener("scroll", () => {
    const scrolled = Math.ceil(window.scrollY);
    const menuH = document.querySelector(".nav");

    if (scrolled >= 20) {
        console.log(scrolled);

        menuH.style.height = "11vh";
        productScroll.style.top = "9%";
        productScroll.style.left = prod.style.left;
        mobileMenu.style.top = "11vh";
        mobileMenu.style.height = "89vh";

    }

    else {
        menuH.style.height = "17vh";
        productScroll.style.top = "12%";
        productScroll.style.left = prod.style.left;
        mobileMenu.style.top = "20vh";
        mobileMenu.style.height = "83vh";
    }
});

window.addEventListener("resize", ()=> {
    if (window.innerWidth = 1170) {
        console.log("resize");
        mobileMenu.style.display = "none";

        //NOW DO IF THE HAMBURGER ICON IS A CROSS, UNCROSS IT.
    } else {
    }
});

prod.addEventListener("mouseenter", () => {
    // productScroll.style.display = "block";
    productScroll.style.opacity = "1";
    productScroll.style.zIndex = "200";

});

productScroll.addEventListener("mouseenter", () => {
    // productScroll.style.display = "block";
    productScroll.style.opacity = "1";
    productScroll.style.zIndex = "200";

});

prod.addEventListener("mouseleave", () => {
    // productScroll.style.display = "none";
    productScroll.style.opacity = "0";
    productScroll.style.zIndex = "-99";

});

productScroll.addEventListener("mouseleave", () => {
    // productScroll.style.display = "none";
    productScroll.style.opacity = "0";
    productScroll.style.zIndex = "-99";
});

/*MENU*/
const hamburgerCont = document.querySelector("#hamburgerCont");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const body1 = document.querySelector(".body");
const mobileMenuFS = document.querySelector(".mobileMenu");
var on = true;

hamburgerCont.addEventListener("click", () => {
    if (on == true) {
        on = !on;
        mobileMenuFS.style.display = "flex";
    } else if (on == false) {
        on =!on;
        mobileMenuFS.style.display = "none";
    }
    //HAM1
    ham1.classList.toggle("ham1Act");

    //HAM2
    ham2.classList.toggle("ham2Act");

    body1.classList.toggle("overflow");



});



/*MOBILE MENU SCROLL*/
const prodUl = document.querySelector(".prodUl");
const prodBtn = document.querySelector(".prodScroll");
var scrollOn = true;

prodBtn.addEventListener("click", () => {

    if (scrollOn == true) {
        scrollOn = !scrollOn
        console.log("clicked");
        prodUl.style.maxHeight = "520px";
        prodUl.style.transition = "0.7s ease";
    } else {
        scrollOn = !scrollOn
        prodUl.style.maxHeight = "0px";
        prodUl.style.transition = "0.7s ease";
    }
});



/*Cookies*/
const cookies = document.querySelector(".cookie");

cookies.addEventListener("click", () => {
    cookies.style.transform = "translate(250%, -100%)";
})






