let i=0;
const images=document.getElementsByClassName("img")
// let imgArray=["tiger.jpg","deer.jpg","elephant.jpg"]
console.log(images);



setInterval(showImg,1000)


function showImg(){
    
    // images.src=imgArray[i]
     images[i].style.display="block"

    if(i<2){
        i++
        // images[i].classList.add("imgme")
        
    }else{
        i=0;
    }
    console.log(i);
    // images[i].style.display="none"
}
// images[i].style.display="none"