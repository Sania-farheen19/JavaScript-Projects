const dots = document.querySelector(".three-dots");
const container = document.querySelector(".container");
const cut = document.querySelector(".cut");

dots.addEventListener("click",()=>{
    dots.style.boxShadow = "3px 3px 8px yellow,-3px -3px 8px yellow";

    container.style.width = "25vw";
})
cut.addEventListener("click",()=>{
    dots.style.boxShadow = "none";
    container.style.width = "0";

})
