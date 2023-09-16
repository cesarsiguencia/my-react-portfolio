import React, { useRef, useEffect } from 'react'

import QuoteCarousel from '../Components/Carousels/qoutes'
import FactsCarousel from '../Components/Carousels/facts'
import { opacityEffect, scaleEffect } from '../utils/helpers'
import Gifs from '../Components/Icons/Gif-Icons'
import AboutProjects from '../Components/About-Blocks/About-projects'
import BodyBtn from '../Components/Body-Btns/Body-Btns'

const About = ({bodyBtnsData}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const aboutOpa = useRef()
    useEffect(() => {
        const aboutDiv = document.querySelector('#about-pg')
        opacityEffect(aboutDiv, aboutOpa)
    }, [])

    const myRef = useRef()
    useEffect(() => {
        const gifsHolder = document.querySelector('.aboutme-gifs-block')
        const gifs = document.querySelectorAll('.gifs')
        scaleEffect(gifsHolder, gifs, myRef)
    }, [])

    return (
        <div className='App-body'>
            <div className="body-divs" id="about-pg" ref={aboutOpa}>

                <div className='left'>
                    <div className='title-block left'>
                        <div className='title'>
                            <h2>More About Me</h2>
                        </div>
                    </div>

                    
                        <p className="body-texts"> I recently completed a coding bootcamp with Columbia University and received my certification in 2022. You can find me practicing and learning about new web development technologies consistently, which is reflected on my most recent projects shown in my portfolio and on my GitHub.
                        </p>
                        <br />
                        <div>
                            <p className="body-texts bold">Some of the current projects I am working on include the following: </p>
                            <AboutProjects></AboutProjects>
                        </div>

                        <div className='row'> 
                            <BodyBtn toPage={bodyBtnsData.to_projects}></BodyBtn>
                        </div>
                        
                </div>

                <div className="facts-quotes">
                    <div className="aboutme-blocks">
                        <div>
                            <h3>
                                My Favorite Quotes
                            </h3>
                        </div>
                        <div className="aboutme--carousel">
                            <QuoteCarousel></QuoteCarousel>
                        </div>
                    </div>

                    <div className="aboutme-blocks">
                        <div>
                            <h3>
                                Fun and Random Facts
                            </h3>
                        </div>
                        <div className="aboutme--carousel">
                            <FactsCarousel></FactsCarousel>
                        </div>
                    </div>
                </div>

                <div className='left'>
                    <div className='title-block left'>
                        <div className='title'>
                            <h2>So why did I choose coding?</h2>
                        </div>
                    </div>

                    <p className="body-texts">
                        <br />
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
                        <br/>
                        <div className='row'>
                        <BodyBtn toPage={bodyBtnsData.home}></BodyBtn>
                        </div>
                    
                </div>
            </div>



        </div>

    )
}

export default About