var sidenavbar = document.querySelector(".side-navbar");

function showNavbar(){
    sidenavbar.style.left="0"
}

function closeNavbar(){
    sidenavbar.style.left="-60%"
}


var enterText=""
var container = document.querySelector("div")
var elements = container.querySelectorAll("h1")
console.log(elements)