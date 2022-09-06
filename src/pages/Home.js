import React, {useState, useEffect} from "react"

import home from "../media/me/home.png"

import home2 from "../media/me/home-orange.png"

import portrait1 from "../media/me/portrait-1.png"

import portrait2 from "../media/me/portrait-2.png"

// import { backgroundEffect } from "../utils/helpers"

// import Portraits from "../Components/Backgrounds/Portraits.js"

// import Bridges from "../Components/Backgrounds/Landscapes.js"

const Home = () => {

    // const backgroundEffect = (() => {
    //     const bcg1 = document.querySelector("#bcg-1")

    //     window.addEventListener("mousemove", function(e){
    //       const bcg1Width = e.clientX + "px"
    //       bcg1.style.width = bcg1Width
    //     }) 
    // })

    // const bcg1 = document.querySelector("#bcg-1")

    // let portrait1Width

    // window.addEventListener("mousemove", function(e){
    //   const port1 = document.querySelector(".personal")
    //   // const xAxis = e.clientX

    //   if(port1){
          
    //       const xAxis = e.clientX


    //       const name = xAxis
      
    //       console.log(name)
    //       portrait1Width = name + "px"
    //       port1.style.width = portrait1Width
    //       console.log(portrait1Width)
    //   }
      
    // }) 

    // let bcg1Width


    // window.addEventListener("mousemove", function(e){
    //     const bcg1 = document.querySelector(".hello")
    //     // const xAxis = e.clientX

    //     if(bcg1){
            
    //         const xAxis = e.clientX

  
    //         const name = xAxis
        
    //         console.log(name)
    //         bcg1Width = name + "px"
    //         bcg1.style.width = bcg1Width
    //         console.log(bcg1Width)
    //     }


        
    //   }) 

    let backgroundWidth

    window.addEventListener("mousemove", function(e){
        const backgroundDiv = document.querySelector(".hello")
        // const xAxis = e.clientX
  
        if(backgroundDiv){
            
            const xAxis = e.clientX
  
  
            const name = xAxis
        
            console.log(name)
            backgroundWidth = name + "px"
            backgroundDiv.style.width = backgroundWidth
            console.log(backgroundWidth)
        }
        
      }) 



      return (
        // <div className="home-div">
        //     <div className="home-bcgs">
        //         <img className="bcg-2" id="bcg-2" src={portrait2} width="100%"/>

        //         <div className="hello personal">
        //             <img className="bcg-1" id="bcg-1" src={portrait1} />
        //             {/* <div className="mouse">
        //             <p className="body-texts">* Slide Mouse Horizontally! *</p>
        //             </div> */}
        //         </div>

        //     </div>

        //     <div className="home-bcgs">

        //         <img className="bcg-2" id="bcg-2" src={home2} width="100%"/> 

        //             {/* <div className ="hidden-intro">
                    
        //                 <h3>Welcome to my page!</h3>
        //                 <div className="hidden-blurb">
        //                 <p className="body-texts">And welcome to my favorite view in my hometown, Hamilton Heights, NYC! Click the links above to be redirected</p>

        //                 <div>

        //                 </div>
        //                 </div>
            
        //             </div>  */}


            
          
        //         <div className="hello">
        //             <img className="bcg-1" id="bcg-1" src={home} />
        //             <div className="mouse">
        //             <p className="body-texts">* Slide Mouse Horizontally! *</p>
        //             </div>
        //         </div>

          

   
     
         
        //     </div>
        // </div>

        <div className="home-div">
            <div className="home-bcgs">
                <img className="bcg-2" id="bcg-2" src={portrait2} width="100%"/>

                <div className="hidden-intro">
    
                    <h3>Welcome to my page</h3>

                    <h5>Hello, Hola, 你好!</h5>
   

                    <div className="hidden-blurb">
                        <h6 className="body-texts hidden-texts">Thank you for visiting my page. I hope you enjoy learning about me and will connect with me soon. Click the links above to be redirected. </h6>
    
        
    
                        <h6 className="body-texts">And welcome to my favorite view ever located footsteps from my home, Hamilton Heights, NYC! Scroll down below. </h6>

                    </div>
                </div>

                <div className="hello">
                    <img className="bcg-1" id="bcg-1" src={portrait1} />
                    <div className="hidden-intro">
                        <div>
                            <h6 className="body-texts hidden-texts">* Slide Mouse Horizontally! *</h6>
                        </div>
        

                    </div>
                </div>

            </div>

            <div className="home-bcgs">
                <img className="bcg-2" id="bcg-2" src={home} width="100%"/>

                <div className="personal">
                    <img className="bcg-1" id="bcg-1" src={home2} width="100%"/>

                </div>

            </div>
            
        </div>

    )

}

export default Home

