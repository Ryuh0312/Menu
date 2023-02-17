const menu = document.querySelector(".menutoggle");
const navegacion = document.querySelector(".navegacion");
const list= document.querySelectorAll(".list");

menu.onclick = function () {
   navegacion.classList.toggle("open") 
};

function activator(){
    list.forEach((item)=>
        item.classList.remove("active"))
        this.classList.add("active")
}
list.forEach((item)=>item.addEventListener("click",activator))
