let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.navbar');
let lines = document.querySelectorAll('.toggle div');


toggle.addEventListener("click", () =>{
    // SHOW NAV
    nav.classList.toggle('nav-active')
    lines.forEach(function(line){
        toggle.classList.toggle('toggler')
    })

    
})