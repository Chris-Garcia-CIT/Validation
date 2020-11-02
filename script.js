var contentEle = document.body.querySelector(".content");

var submit = document.body.querySelector(".submit");
var inputBox = document.body.querySelector(".text");
var messageBox = document.body.querySelector(".message");
var noteBox = document.body.querySelector(".notes");
var list = [];

document.body.querySelector(".submit").addEventListener("click", function(){
  if(inputBox.value=="coolStudent123"){
    messageBox.innerHTML="Welcome Cool Student"
    inputBox.style.display = "none";
    submit.style.display = "none";
    makeView();  
  }else{
    messageBox.innerHTML="No Not Cool Student";
  }})
 
function makeView(){
  noteBox.innerHTML="";
  var b = document.createElement("BUTTON");
  var n = document.createTextNode("AddNotes");
  b.appendChild(n);
  document.body.appendChild(b); 
}