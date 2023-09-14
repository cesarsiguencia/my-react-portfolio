import React, { useEffect } from "react"

import { Link } from 'react-router-dom'

// import portrait1 from "../media/me/portrait-1.png"

// import portrait2 from "../media/me/portrait-2.png"

import GitHub from '../media/icons/github.svg'

import LinkedIn from '../media/icons/linkedin.png'

import ClearMail from '../media/icons/clear-mail.png'

import Icons from '../Components/Icons/Tech-Icons'

import Portrait from '../media/me/portrait.png'
import image from '../media/resume.png'
import ClickableIcons from '../Components/Icons/Click-Icons'


const Home = (props) => {

    const { setPortfolioClicked } = props

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

        <div>
            <div className='header-hero'>
                <div className='header-text'>

                    <h1>My name is C<span className='red-font'>é</span>sar (pronunced Say-sar)</h1>
                    <p>Full Stack Web Developer</p>
                    <p className='header-slogan'><strong className='red-font'>C</strong>reative At Heart, <strong className='red-font'>C</strong>onstantly Learning, <strong className='red-font'>Challenges Conquered</strong></p>
                    <div className='header-icons-block'>
                        <a href="https://github.com/cesarsiguencia" target="_blank" rel="noopener noreferrer">
                            <img className='header-icons' src={GitHub}></img>
                        </a>
                        <a href="https://www.instagram.com/cezzienyc" target="_blank" rel="noopener noreferrer">
                            <img className='header-icons' src={ClearMail}></img>
                        </a>


                        <a href="https://www.linkedin.com/in/cesar-siguencia/" target="_blank" rel="noopener noreferrer">
                            <img className='header-icons' src={LinkedIn}></img>
                        </a>


                    </div>

                    <div className='header-btns-blocks'>
                        <a className='header-btns learn-me' href='#about'></a>

                        <a className='header-btns view-projects' href='#projects'></a>



                    </div>
                </div>
            </div>

            <div className='App-body'>
                <div className='body-divs about-home' id='about'>
                    <div className='about-pg-title-block'>
                        <div className='about-pg-title'>
                            <h2>Intro & Skills</h2>
                        </div>
                    </div>

                    <div className='body-content'>
                        <div className='row'>
                            <img src={Portrait} style={{ height: '250px', borderRadius: '100px' }}></img>

                            <div style={{width: '600px'}}>
                                <p className="body-texts" style={{textAlign:'left'}}> I recently completed a coding bootcamp with Columbia University and received my certification in 2022. You can find me practicing and learning about new web development technologies consistently, which is reflected on my most recent projects shown in my portfolio and on my GitHub. </p>
                                <br/>
                                <Link to="/my-react-portfolio/about">
                                    <div className="home-btns">
                                        <h6>Still Curious? Read My Full Bio!</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col skills-blocks">
                            <h4>Web Development Skills</h4>

                            <div className="skills--lists" >
                                <Icons></Icons>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='body-divs projects-home' id='projects'>
                    <div className='about-pg-title-block'>
                        <div className='about-pg-title'>
                            <h2>Projects</h2>
                        </div>
                    </div>

                    <div className='skills'>
                        <div>
                            <p>HELLO</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}



export default Home

