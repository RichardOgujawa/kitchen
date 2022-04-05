const prod = document.getElementById("prod");
const productScroll = document.querySelector(".product");

/*Menu Scroll Anim*/
window.addEventListener("scroll", () => {
    const scrolled = Math.ceil(window.scrollY);
    const menuH = document.querySelector(".nav"); 

    if (scrolled >= 20) {
        console.log(scrolled);

        menuH.style.height="11vh"; 
        productScroll.style.top = "9%";
        productScroll.style.left = prod.style.left;
    }

    else {
        menuH.style.height = "17vh";
        productScroll.style.top = "12%";
        productScroll.style.left = prod.style.left;
    }        
});

prod.addEventListener("mouseenter", ()=>{
    // productScroll.style.display = "block";
    productScroll.style.opacity = "1";
    productScroll.style.zIndex = "200";

});

productScroll.addEventListener("mouseenter", ()=>{
    // productScroll.style.display = "block";
    productScroll.style.opacity = "1";
    productScroll.style.zIndex = "200";

});

prod.addEventListener("mouseleave", ()=>{
    // productScroll.style.display = "none";
    productScroll.style.opacity = "0";
    productScroll.style.zIndex = "-99";

});

productScroll.addEventListener("mouseleave", ()=>{
    // productScroll.style.display = "none";
    productScroll.style.opacity = "0";
    productScroll.style.zIndex = "-99";

});




