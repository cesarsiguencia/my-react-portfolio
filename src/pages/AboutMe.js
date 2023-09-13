import React, {useRef, useEffect} from 'react'
import image from '../media/me/portrait-2.png'


import QuoteCarousel from '../Components/Carousels/qoutes'
import FactsCarousel from '../Components/Carousels/facts'
import { scaleEffect } from '../utils/helpers'
import Gifs from '../Components/Icons/Gif-Icons'

const About = () => {

    const myRef = useRef() 

    useEffect(()=>{
        const gifsHolder = document.querySelector('.aboutme--gifs')
        const gifs = document.querySelectorAll('.technologies-logos')
        scaleEffect(gifsHolder, gifs, myRef)
      },[])
    
    return (
        <div className="body-divs">

            <h3>About Me</h3>


            <div className="aboutme">

                <div className="aboutme-blocks">
                    <img className="profile" src={image} width="100%" />
                </div>

                <div className="aboutme-blocks">
                    <p className="body-texts"> I recently completed a coding bootcamp with Columbia University and received my certification in 2022. You can find me practicing and learning about new web development technologies consistently, which is reflected on my most recent projects shown in my portfolio and on my GitHub.
                    </p>
                    <br />

                    <p className="body-texts bold-and-left">Some of the current projects I am working on include the following: </p>
                    <br />
                    <br />
                    <p className="body-texts bold-and-left">1 - </p><p className="body-texts" style={{ display: 'inline' }}>
                        A sign up application for a special event I will be hosting in the fall of 2023 for when I turn exactly 10,000 days old!
                    </p>
                    <br />
                    <br />
                    <p className="body-texts bold-and-left">2 - </p><p className="body-texts" style={{ display: 'inline' }}>
                        A gallery website on my favorite spots in my neighborhood Washington Heights, which is iconic in the musical 'In The Heights'.
                    </p>
                    <br />
                    <br />
                    <p className="body-texts bold-and-left">3 - </p><p className='body-texts' style={{ display: 'inline' }}>
                        A MERN application promoting a new side business as an Apple product fixer, where I will showcase various projects on broken devices I have fixed, including iPods, iPhones, and Apple monitors. I will include a form for anyone to contact me and give me details about the service they wish to receive on their device.

                    </p>
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


            <div className="aboutme">
                <div className="aboutme-blocks">


                    <div ref={myRef} >
                            <Gifs></Gifs>
                        </div>

                    <p className="body-texts" ref={myRef}>
                        For almost five years, I've worked at an East Harlem elementary & middle school in operations, data management, office support, and even taught some electives! On the side, I enjoy cooking with loved ones, cycling, creating song samples on my computer, playing guitar and piano, bird watching, repairing technology devices, and practicing a consistent exercise regimen.
                        <br/>
                        <br/>
                        I identify as Latino and speak Spanish and English fluently with an intermediate profiency level in Chinese from courses I took in high school, college, and a summer study abroad. </p>


                </div>
            </div>
        </div>
    )
}

export default About