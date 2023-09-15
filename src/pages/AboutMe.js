import React, { useRef, useEffect } from 'react'


import QuoteCarousel from '../Components/Carousels/qoutes'
import FactsCarousel from '../Components/Carousels/facts'
import { opacityEffect, scaleEffect } from '../utils/helpers'

import camera from '../media/icons/gifs/camera.gif'
import wrench from '../media/icons/gifs/wrench.gif'
import balloons from '../media/icons/gifs/ballons.gif'

import Gifs from '../Components/Icons/Gif-Icons'

const About = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const aboutOpa = useRef()
    useEffect(() => {
        const aboutDiv = document.querySelector('#about-pg')
        opacityEffect(aboutDiv, aboutOpa)
    }, [])

    const myRef = useRef()
    useEffect(() => {
        const gifsHolder = document.querySelector('.aboutme--gifs')
        const gifs = document.querySelectorAll('.gifs')
        scaleEffect(gifsHolder, gifs, myRef)
    }, [])

    return (
        <div className='App-body'>
            <div className="body-divs" id="about-pg" ref={aboutOpa}>

                <div className='title-block left'>
                    <div className='title'>
                        <h2>More About Me</h2>
                    </div>
                </div>


                <div style={{ margin: '15px 0' }}>
                    <div className='left'>
                        <p className="body-texts"> I recently completed a coding bootcamp with Columbia University and received my certification in 2022. You can find me practicing and learning about new web development technologies consistently, which is reflected on my most recent projects shown in my portfolio and on my GitHub.
                        </p>
                        <br />
                        <div>
                            <p className="body-texts bold">Some of the current projects I am working on include the following: </p>

                            <div className='about-projects'>
                                <div className='align-ver'>
                                    <p className="body-texts">
                                        <span className='body-texts bold'>1: </span>
                                        A sign up application for a special event I will be hosting in the fall of 2023 for when I turn exactly <span className='red-font bold'>10,000 days old</span>!
                                    </p>
                                </div>


                                <div className='align-ver'>
                                    <img className='projects-logos' src={balloons}></img>
                                </div>
                            </div>

                            <div className='about-projects'>
                                <div className='align-ver'>
                                    <p className="body-texts">
                                        <span className='body-texts bold'>2: </span>
                                        A gallery website on my favorite spots in my neighborhood  <span className='red-font bold' >Washington Heights</span>, which is iconic in the musical 'In The Heights'.
                                    </p>
                                </div>


                                <div className='align-ver'>
                                    <img className='projects-logos' src={camera}></img>
                                </div>

                            </div>

                            <div className='about-projects'>
                                <div className='align-ver'>
                                    <p className='body-texts'>
                                        <span className='body-texts bold'>3: </span>
                                        A MERN application promoting a  <span className='red-font bold'>new side business</span> as an Apple product repairman, where I will showcase various broken devices I have fixed, including iPods, iPhones, and Apple monitors. 

                                    </p>
                                </div>

                                <div className='align-ver'>
                                    <img className='projects-logos' src={wrench}></img>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>

                <div className="aboutme">
                    <div className="aboutme-blocks">
                        <div className="aboutme--titles">
                            <h3>
                                My Favorite Quotes
                            </h3>
                        </div>
                        <div className="aboutme--carousel">
                            <QuoteCarousel></QuoteCarousel>
                        </div>
                    </div>

                    <div className="aboutme-blocks">
                        <div className="aboutme--titles">
                            <h3>
                                Fun and Random Facts
                            </h3>
                        </div>
                        <div className="aboutme--carousel">
                            <FactsCarousel></FactsCarousel>
                        </div>
                    </div>
                </div>


                <div>
                    <div className='left'>

                    <div className='title-block left'>
                    <div className='title'>
                        <h2>So why did I choose coding?</h2>
                    </div>
                </div>

             

                        <p className="body-texts">
                            <br/>
                            When coding, there are undoubtly many challenges, especially when one implements technologies still very foreign to them. But I never get tired of the feel-good/satisfying instant moment I get when something works the way I intended after debugging for some time! It's a simple, yet proud feeling that any developer I'm sure will understand.
                            <br />
                            <br />
                            I have always been curious to see how and why something works. Because of this inquisitive nature, I am able to be persistent, so I know that my success in any developer challenge will be inevitable. This is the fulfillment building applications gives me and why challenges fuel these passions even more. </p>
                        <br />
                        <br />

                        
                    <div className='title-block left'>
                    <div className='title'>
                        <h2>Work & Hobbies</h2>
                    </div>
                </div>
                        <div ref={myRef} >
                            <Gifs></Gifs>
                        </div>

                        <p className="body-texts" ref={myRef}>
                            For almost five years, I've worked at an East Harlem elementary & middle school in operations, data management, office support, and even taught some electives! On the side, I enjoy cooking with loved ones, cycling, creating song samples on my computer, playing guitar and piano, bird watching, repairing technology devices, and practicing a consistent exercise regimen.
                            <br />
                            <br />
                            I identify as Latino and speak Spanish and English fluently with an intermediate profiency level in Chinese from courses I took in high school, college, and a summer study abroad. </p>


                    </div>
                </div>
            </div>


        </div>

    )
}

export default About