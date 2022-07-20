/* Function that reveal the elements as the user scrolls down */
function reveal(){

    // revealElements receives .reveal-js (html class) value
    let revealElements = document.querySelectorAll(".reveal-js");

    for(i = 0; i < revealElements.length; i++){
    
        let windowHeight = window.innerHeight;
        let elementTop = revealElements[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add("active");
          } else {
            revealElements[i].classList.remove("active");
          }
    }
}

window.addEventListener("scroll", reveal);