import React, { useState, useEffect } from 'react'

import image from '../media/me/IMG_2178-copy.png'

import landscape from '../media/me/home2.png'

import bike from '../media/icons/cycling-bicycle.gif'

import spanish from '../media/icons/spanish.png'

import sparrow from '../media/icons/sparrow.gif'

import QuoteCarousel from '../Components/Carousels/qoutes'

import FactsCarousel from '../Components/Carousels/facts'

// import { carouselButtons } from '../utils/helpers'

const About= () => {

    

    return(
        <div className="body-divs">
       
            <h3>About Me</h3>


            <div className="aboutme">

                <div className="aboutme-blocks">
                    <img className="profile" src={image} width="100%"/>
                </div>
         
                <div className="aboutme-blocks">
                    <p className="body-texts"> Thank you for visiting my page! I'm an aspiring web developer, music producer, and media content creater born and raised in NYC. Currently, I work at an East Harlem elementary school in administration and operations. 
                    <br/>
                    <br/>
                    I am a Full Stack Web Developer constantly practicing and learning new web development technologies. I enjoy creating productivity apps that help me stay organized and learning about design, the big reasons for why I decided to hop into the web development industry. The greatest reward since starting to code is the immense challenge that coding entails, but the more than satisfactory feeling one gets seeing their project come to full fruition the way it was imagined and being able to explain how it all works. This is what brings me inspiration, perserverance, and committment to continue with this fun and worthwhile industry. I am sure many can correlate with it!

                    <br/>
                    <br/>

                    Outside of my job and hobbies, you can find me weight training at the gym, running, cycling, cooking with loved ones, trying various ethnic cuisines around the city, or relaxing at uptown parks birdwatching and sightseeing. I identify as Latino and speak Spanish and English fluently. </p>


                    <div className="aboutme--gifs">
                        <img className="gifs" src={bike}>
                        </img>
                        <img className="gifs" src={spanish}>
                        </img>
                        <img className="gifs" src={sparrow}>
                        </img>
                    </div>

                </div>

             

            </div>
      
            
          
            <br/>
            <br/>


            <div className="aboutme">
                <div className="aboutme-blocks">
                    <div className="aboutme--titles">
                        <h3>
                            My Favorite Quotes
                        </h3>
                    </div>
                    <div className="carousel-border">
                        <QuoteCarousel></QuoteCarousel>
                    </div>
                    
                    
                </div>

                <div className="aboutme-blocks">
                    <div className="aboutme--titles">
                        <h3>
                            Fun and Random Facts
                        </h3>
                    </div>
                    <div className="carousel-border">
                    <FactsCarousel></FactsCarousel>
                    </div>
                    

                   
                
                </div>
            </div>

       
            <div className="aboutme">
                <div className="aboutme-blocks">
                    <img className="profile" src={landscape} width="100%"/>
                </div>
           
            </div>


         
        </div>
    )
}

export default About