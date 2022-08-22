export function hamburgerMenu () {
    const btn = document.getElementById("mobile-menu")
    const menu = document.querySelector(".nav-links")
    // const hamburgerLines = document.querySelector(".mobile-options")

    btn.classList.toggle("active")
    menu.classList.toggle("mobile-effect")
    // hamburgerLines.classList.toggle("x-effect")

}



