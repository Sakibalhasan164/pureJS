const burger=document.querySelector(".burger");
const nav=document.querySelector(".nav-links")
const anchor=document.getElementsByTagName("a")
console.log(nav);
burger.addEventListener("click",sohwBurger)

function sohwBurger(){
    console.log("click");
nav.classList.toggle("burgerclick")  
for(i=0;i<anchor.length;i++){
    anchor[i].classList.toggle("anchor")
}  

}