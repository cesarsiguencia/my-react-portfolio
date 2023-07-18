import React, { useEffect } from "react"

import { Link } from 'react-router-dom'

import portrait1 from "../media/me/portrait-1.png"

import portrait2 from "../media/me/portrait-2.png"


const Home = (props) => {

    const { setPortfolioClicked} = props

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
        if (screenWidth < 1000) {
            backgroundParallax.style = 'filter: blur(10px)'

            setTimeout(() => {
                backgroundParallax.style = 'filter: blur(0px)'
            }, 500)
        }
    }

    var growFontEffect = useEffect(() => {
        const selectedFonts = document.querySelectorAll('.home-transitions')
        const portfolioHolder = document.querySelector('.button-holder')

        selectedFonts.forEach((font) => {
            if (screenWidth > 1000) {
                setInterval(() => {
                    // font.style = "font-size: 25px"
                    font.style.scale = "0.7"
                    portfolioHolder.style.backgroundColor = 'black'
                }, 1500)

                setInterval(() => {
                    // font.style = "font-size: 20px"
                    font.style.scale = "1"
                    portfolioHolder.style.backgroundColor = 'orange'
                }, 3000)
            }

        })

    }, [])



    return (

        <div onLoad={growFontEffect} className='home'>
            <div className="home-div">
                <div className="home-bcgs-color" onLoad={homeParallax}>
                    <img className="bcg-2" id="bcg-2" src={portrait2} />

                    <div className="hidden-intro">

                        <h3 >"Welcome to my page!</h3>

                        <h4>Hello, Hola, 你好!</h4>


                        <div className="hidden-blurb">
                            <h6 className="body-texts home-pg-font">Thank you for visiting my page! Check out the projects I have been working on!</h6>
                            {/* <div style={{border: '3px solid orange'}} href='./portfolio'>
                            <p className="body-texts">Go To My Porfolio</p>
                        </div> */}
                        </div>
                    </div>
                </div>

                <div className="home-bcgs-bg">
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
                        <h6 className="body-texts"> Thank you for visiting my page! Check out the projects I have been working on! </h6>
                    </div>
                </div>


            </div >

            <Link to='/my-react-portfolio/portfolio' onClick={()=> setPortfolioClicked(true)} >
                <div className="button-holder">
                    <p className="body-texts home-pg-font home-transitions portfolio-button">Go To My Porfolio!</p>
                </div>
            </Link>
        </div>


    )

}



export default Home

