import React, {useState, useEffect} from "react"

import home from "../../media/me/home.png"

import home2 from "../../media/me/home-orange.png"

// import portrait1 from "../../media/me/portrait-1.png"

// import portrait2 from "../../media/me/portrait-2.png"

const BackgroundEffect= () => {



        let backgroundWidth

        window.addEventListener("mousemove", function(e){
            const backgroundDiv = document.querySelector(".hello")
            // const xAxis = e.clientX
      
            if(backgroundDiv){
                
                const xAxis = e.clientXxs
      
      
                const name = xAxis
            
                console.log(name)
                backgroundWidth = name + "px"
                backgroundDiv.style.width = backgroundWidth
                console.log(backgroundWidth)
            }
            
          }) 

          return (
            <div className="home-bcgs">
                <img className="bcg-2" id="bcg-2" src={home2} width="100%"/>

                <div className="personal">
                    <img className="bcg-1" id="bcg-1" src={home} />
                </div>

            </div>
          )
    
 


}

export default BackgroundEffect