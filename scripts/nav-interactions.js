// Nav Scroll Down

const nav = document.querySelector(".nav-container");
let lastScroll = window.scrollY;

window.addEventListener("scroll", () =>{

    if (lastScroll < window.scrollY)
    {
        nav.classList.add("hidden")    
    }
    else
    {
        nav.classList.remove("hidden")
    }

    lastScroll = window.scrollY;
})


// Hamburger List Click

const check = document.querySelector("#menu");
const list = document.querySelectorAll(".link-list");

check.onclick = () => {

    if(check.checked === true)
    {
        nav.classList.add("active")
    }
    else
    {
        nav.classList.remove("active")
    }

}

list.forEach(l => l.addEventListener("click", function(){ 
    nav.classList.remove("active")
}))

