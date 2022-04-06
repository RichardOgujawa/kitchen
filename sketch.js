const orange = "#ED553B";
const prod = document.getElementById("prod");
const productScroll = document.querySelector(".product");
const mobileMenu = document.querySelector(".mobileMenu");

const prodUl = document.querySelector(".prodUl");
const prodBtn = document.querySelector(".prodScroll");
var scrollOn = true;

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


/*MOBILE MENU SCROLL*/

prodBtn.addEventListener("click", () => {

    if (scrollOn == true) {
        scrollOn = !scrollOn;
        console.log("clicked");
        prodUl.style.maxHeight = "520px";
        prodUl.style.transition = "0.7s ease";
    } else {
        scrollOn = !scrollOn
        prodUl.style.maxHeight = "0px";
        prodUl.style.transition = "0.7s ease";
    }
});


/*MENU*/
const hamburgerCont = document.querySelector("#hamburgerCont");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const body1 = document.querySelector(".body");
const mobileMenuFS = document.querySelector(".mobileMenu");
var on = true;

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1170) {
        console.log("web");
        ham1.style.transform = "rotate(0deg)";
        ham2.style.transform = "rotate(0deg)";
        mobileMenu.style.display = "none";
        prodUl.style.maxHeight = "0px";
        scrollOn = true;
        on = true;  
    } else if (window.innerWidth <= 1170){
        console.log("mobile");
    }
});

hamburgerCont.addEventListener("click", () => {
if (window.innerWidth <= 1170){
    if (on == true) {
        on = !on;
        console.log("on");

        ham1.style.transform = "rotate(45deg)";
        ham2.style.transform = "translate(0px, -10px) rotate(-45deg)";
        body1.style.overflow = "hidden";

    } else if (on == false) {
        on = !on;
        console.log("off");

        ham1.style.transform = "rotate(0deg)";
        ham2.style.transform = "rotate(0deg)";
        body1.style.overflow = "scroll";
    }

    if (window.innerWidth <= 1170) {

        if (ham1.style.transform == "rotate(45deg)"){
                mobileMenu.style.display = "flex";
            } else if (ham1.style.transform ="rotate(0deg") {
                mobileMenu.style.display = "none";
            }
        }
    if (window.innerHeight > 1170) {
        if(ham1.style.transform == "rotate(45deg)"){
            ham1.style.transform == "rotate(0deg)";
        } else {

        }
    }
}

});


/*Cookies*/
const cookies = document.querySelector(".cookie");
const cookieBtn = document.getElementById("cookie-btn"); 

cookieBtn.addEventListener("click", () => {
    cookies.style.transform = "translate(250%, -100%)";
})

/*Agency vs. Client View*/
const agency = document.getElementById("agencyViewBtn"); 
const client = document.getElementById("clientViewBtn");
const img1 = document.getElementById("agencyViewImg");
const img2 = document.getElementById("clientViewImg");

client.addEventListener("click", ()=> {
    client.style.color = "white";
    client.style.border = `${orange} 2px solid`
    client.style.background = `${orange}`;
    agency.style.color = `${orange}`;
    agency.style.border = `${orange} 2px solid`
    agency.style.background = "white";
    img2.style.display="block";
    img1.style.display="none";
});

agency.addEventListener("click", ()=> {
    agency.style.color = "white";
    agency.style.border = "black 2px solid"
    agency.style.background = "black";
    client.style.color = "black";
    client.style.border = "black 2px solid"
    client.style.background = "white";
    img1.style.display="block";
    img2.style.display="none";
});






