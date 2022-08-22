export function hamburgerMenu () {
    const btn = document.getElementById("mobile-menu")
    const menu = document.querySelector(".nav-links")

    btn.classList.toggle("active")
    menu.classList.toggle("mobile-effect")

    btn.addEventListener('click', function(){
        
        // menu.classList.add('mobile-effect')
    })

    console.log ("function working")
    console.log("hello")
}



