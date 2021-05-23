const slider=document.getElementById("slider")
const value=document.querySelector(".value")
const box=document.getElementById("box")



slider.addEventListener("input",slide)

function slide(){
    // console.log(slider.value);
    value.textContent=slider.value
    
box.style.transform=`translateY(${(slider.value)*3}px) rotate(${(slider.value)*5}deg) scale(${((slider.value)/100)+.5})`
    // box.style.transform=``
    // box.style.transform=`rotate(${slider.value}deg)`
}