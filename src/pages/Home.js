import React, { useState, useEffect } from "react"

import portrait1 from "../media/me/portrait-1.png"

import portrait2 from "../media/me/portrait-2.png"


const Home = () => {

    let backgroundWidth

    window.addEventListener("mousemove", function (e) {
        const backgroundDiv = document.querySelector(".home-bcgs-bg")

        if (backgroundDiv) {
            const xAxis = e.clientX || e.screenX
            const name = xAxis
            backgroundWidth = name + "px"
            backgroundDiv.style.width = backgroundWidth
        }
    })

    const screenWidth = document.body.clientWidth

    var homeParallax = () => {
        const backgroundParallax = document.querySelector('.home-bcgs-color')


        // if (screenWidth < 1000) {

        //     const backwards = () => {
        //         new Promise(() => {

        //             setTimeout(() => {
        //                 backgroundParallax.style = 'transform: translate(-25px)'
        //             }, 1000)

        //             setTimeout(() => {
        //                 backgroundParallax.style = 'transform: translate(0px)'
        //             }, 2000)

        //         })
        //     }

        //     function shiftBackground() {
        //         backgroundParallax.style = 'transform: translate(25px)';

        //         backwards()

        //     }
        //     shiftBackground()
        // }

        if (screenWidth < 1000) {
            backgroundParallax.style = 'filter: blur(10px)'

            setTimeout(() => {
                backgroundParallax.style = 'filter: blur(0px)'
            }, 1000)
        }
    }

    // const [count, setCount] = useState(0)

    var growFont = () => {

        const selectedFonts = document.querySelector('.home-transitions')

        if(screenWidth > 1000){
    
            selectedFonts.style = "font-size: 25px"
            setTimeout(() => {
                selectedFonts.style = "font-size: 20px"
            }, 1500)
        }


    }

    useEffect(() =>{
        const selectedFonts = document.querySelector('.home-transitions')
        setInterval(()=>{
            if(screenWidth > 1000){
    
                selectedFonts.style = "font-size: 25px"
                setTimeout(() => {
                    selectedFonts.style = "font-size: 20px"
                }, 1500)
            }
        }, 3000)

    })

    return (


        <div className="home-div">
            <div className="home-bcgs-color" onLoad={homeParallax}>
                <img className="bcg-2" id="bcg-2" src={portrait2} />

                <div className="hidden-intro">

                    <h3 >"Welcome to my page!</h3>

                    <h4>Hello, Hola, 你好!</h4>


                    <div className="hidden-blurb">
                        <h6 className="body-texts home-pg-font">Thank you for visiting my page. I hope you enjoy learning about me and will connect with me soon. Click the links above to be redirected. </h6>

                    </div>
                </div>
            </div>

            <div className="home-bcgs-bg" onLoad={growFont}>
                <img className="bcg-1" id="bcg-1" src={portrait1} width={backgroundWidth} />

                <div className="hidden-intro" >
                    <div>
                        <h6 className="body-texts home-pg-font home-transitions" >* Slide Mouse Horizontally! *</h6>
                    </div>
                </div>
            </div>

            <div className="pix-1000">

                <h3>"Welcome to my page!</h3>

                <h4>Hello, Hola, 你好!</h4>


                <div>
                    <h6 className="body-texts">Thank you for visiting my page. I hope you enjoy learning about me and will connect with me soon. Click the links above to be redirected. </h6>

                </div>
            </div>

            {/* <div className="home-bcgs">
                <img className="bcg-2" id="bcg-2" src={home} width="100%"/>

                <div className="bcg-1-bridge">
                    <img className="bcg-1" id="bcg-1" src={home2} width="100%"/>

                </div>

            </div> */}

        </div>

    )

}

export default Home

