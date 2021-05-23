const burger=document.querySelector(".burger")
let links=document.querySelector(".links")
console.log(links);

burger.addEventListener('click',openBerger)
function openBerger(){
    console.log("open");
    links.classList.toggle("linksB")
}