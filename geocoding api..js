let latitude;
let longitude;
const lat=document.querySelector("#lat")
const long=document.querySelector("#long")
const city=document.querySelector("#city")
const temp=document.querySelector("#temp")
const des=document.querySelector("#des")



console.log(lat);
console.log(long);
console.log(city);
console.log(temp);
console.log(des);



if (navigator.geolocation) {
    console.log("geolocation is availabe!"); 
    navigator.geolocation.getCurrentPosition((position) => {
        latitude=position.coords.latitude;
         longitude=position.coords.longitude
   //latitude
   lat.textContent=position.coords.latitude
  //long
   long.textContent=position.coords.longitude
let api=`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=aabc189a557994c427455e7f723a88db`
fetch(api)
.then(data=>{

    return data.json()
})
.then(data=>{
    console.log(data);
    let cityname=data.name;
    console.log(cityname);
    city.textContent=cityname
    temp.textContent=data.main.temp
    des.textContent=data.weather[0].main
})

}); 
}else{
    console.log("its not supported in your browser!");
}

