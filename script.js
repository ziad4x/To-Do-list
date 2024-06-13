const InputBox =document.querySelector("#myinput");
const LiContainer=document.querySelector(".list");
function addtask(){
let li = document.createElement("li");
li.innerHTML=InputBox.value;
LiContainer.appendChild(li);
let span = document.createElement("span");
span.innerHTML='\u00d7';
li.appendChild(span);
saveTasks();
}
// ************************* checked & remove**********************************
LiContainer.addEventListener("click",function(e){
if(e.target.tagName=="LI"){
    e.target.classList.toggle("active");
    saveTasks();
}
else if(e.target.tagName=="SPAN"){
    e.target.parentElement.remove();
    saveTasks();
}
},false);
// **************************** save tasks******************************
function saveTasks(){
    localStorage.setItem("data",LiContainer.innerHTML);
}
function showTasks(){
LiContainer.innerHTML=localStorage.getItem("data");
}
showTasks();