

export function LowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  
export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function grabTabName(e){
  const element = document.getElementsByTagName("h3")
  console.log(element[0].innerHTML)
  const tabName = element[0].innerHTML

  const hello = e.target.matches(".navtab")
  console.log(hello)
  // if(tabName)
}

export function hamburgerMenu () {
  const btn = document.getElementById("mobile-menu")
  const menu = document.querySelector(".nav-links")

  btn.classList.toggle("active")
  menu.classList.toggle("mobile-effect")
}

// export function backgroundEffect () {
//   const bcg1 = document.querySelector("#bcg-1")

//   window.addEventListener("mousemove", function(e){
//     const width = e.clientX + "px"
//     bcg1.style.width = width
//   })
// }

// export function carouselButtons (){
//   document.querySelectorAll(".carousel").forEach(carousel => {
//     const items = carousel.querySelectorAll(".carousel-item")
  
//     const buttonsHtml = Array.from(items, () => {
//       return `<span class="carousel-button"></span>`
//     })
  
//     carousel.insertAdjacentHTML("beforeend", `
//       <div class="carousel-nav">
//         ${buttonsHtml.join("")}
//         </div>
//         `)

//         console.log("working")
  
//   })

// }




