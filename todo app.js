const input=document.getElementById("input")
const submit=document.getElementById("submit")
 const ul=document.getElementById("ul")

submit.addEventListener("click",addTodo)


function addTodo(){
//cteate a new li

if(input.value){
    //creating a li
    let li=document.createElement("li")
    let node=document.createTextNode(input.value)
    li.appendChild(node)
    li.classList.add("li")
    //creating a button
    const delit=document.createElement("button")
    const delitNode=document.createTextNode("X")
    delit.appendChild(delitNode)
    delit.classList.add("delit")

   //appending them to the ul div
   
    ul.appendChild(li)
    li.appendChild(delit) 

}
input.value=""

}

//delit the items
ul.addEventListener('click',delitItem)

function delitItem(e){
    // console.log(e);
if(e.target.className==="delit"){
    let item=e.target.parentElement
    ul.removeChild(item)
}



}