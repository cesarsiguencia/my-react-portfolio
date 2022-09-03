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


    window.addEventListener("mousemove", function(e){
        const bcg1 = document.querySelector(".hello")
        // const xAxis = e.clientX

        if(bcg1){
            
            const xAxis = e.clientX

  
            const name = xAxis
        
            console.log(name)
            bcg1Width = name + "px"
            bcg1.style.width = bcg1Width
            console.log(bcg1Width)
        }


        
      }) 

      return (
        <div className="home-div">
            <div className="home-bcgs">
                <img className="bcg-2" id="bcg-2" src={home2} width="100%"/>
                <div className="hello">
                    <img className="bcg-1" id="bcg-1" src={home}/>
                </div>

                
     
         
            </div>
        </div>
    )
    


}

export default Home