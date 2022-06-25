"use strict";

let addToDo=document.querySelector(".btn");
let ToDos=document.querySelector(".toDos");
let inputText=document.querySelector(".inputText");

addToDo.addEventListener("click",function()
{
let paragragh=document.createElement("p");
paragragh.innerText=inputText.value;
paragragh.classList.add("paragraph-style");
ToDos.appendChild(paragragh);
//will remove the text written in textbox after we click
inputText.value="";

paragragh.addEventListener("click",function()
{
    paragragh.style.textDecoration="line-through";
    paragragh.style.color="#c5d1d4";
});
paragragh.addEventListener("dblclick",function()
{
    ToDos.removeChild(paragragh);
});

});