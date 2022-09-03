import React, {useState, useEffect} from "react"

import home from "../media/me/home.png"

import home2 from "../media/me/home-orange.png"

// import { backgroundEffect } from "../utils/helpers"

const Home = () => {

    // const backgroundEffect = (() => {
    //     const bcg1 = document.querySelector("#bcg-1")

    //     window.addEventListener("mousemove", function(e){
    //       const bcg1Width = e.clientX + "px"
    //       bcg1.style.width = bcg1Width
    //     }) 
    // })

    // const bcg1 = document.querySelector("#bcg-1")

    

    let bcg1Width

    // const [currentWidth, setCurrentWidth] = useState(0)
    

    window.addEventListener("mousemove", function(e){
        const bcg1 = document.querySelector("#bcg-1")
        // const xAxis = e.clientX


            const xAxis = e.clientX

  
            const name = xAxis/20
        
            console.log(name)
            bcg1Width = name + "%"
            bcg1.style.width = bcg1Width
            console.log(bcg1Width)
        
      }) 

      return (
        <div className="home-div">
            <div className="home-bcgs">
                <img className="background bcg-2" id="bcg-2" src={home2}/>
                <img className="background bcg-1" id="bcg-1" src={home} width={bcg1Width}/>
            </div>
        </div>
    )
    


}

export default Home