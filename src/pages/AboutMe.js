import React, { useState, useEffect } from 'react'

import image from '../media/me/IMG_2178-copy.png'

import landscape from '../media/me/home2.png'

import bike from '../media/icons/cycling-bicycle.gif'

import spanish from '../media/icons/spanish.png'

import sparrow from '../media/icons/sparrow.gif'

import QuoteCarousel from '../Components/Carousels/qoutes'

import FactsCarousel from '../Components/Carousels/facts'


const About= () => {

    

    return(
        <div className="body-divs">
       
            <h3>About Me</h3>


            <div className="aboutme">

                <div className="aboutme-blocks">
                    <img className="profile" src={image} width="100%"/>
                </div>
         
                <div className="aboutme-blocks">
                    <p className="body-texts">I'm an aspiring web developer, music producer, and media content creator born and raised in NYC. Currently, I work at an East Harlem elementary school in administration and operations. I manage tuition, scholarships, internal school and student data, and work with a variety of students ranging from Pre-Kindergarten 3 to 8th grade.
                    <br/>
                    <br/>
                    I am a full stack web developer constantly practicing and learning new web development technologies. I recently completed a coding bootcamp with Columbia University I enjoy creating productivity apps that help me stay organized and learning about design, which are the big reasons for why I decided to hop into the web development industry. I enjoy coding because the feeling of seeing your hard work and creativity come to full fruition is a reward in itself and being able to explain the technologies behind my work brings me great satisfaction.
                  
                  
                    </p>
                    <p className="body-texts bold-and-left">
                    <br/>
                 
                    Some of the current projects I am working on include the following:
                    <br/>

        
                 
                    <br/>

                    1 - A blog and sign up application for a special event I will be hosting in the fall of 2023 for when I turn exactly 10,000 days old!
                   
                    <br/>
                    <br/>
                    2 - A social media website outlining my journey coding post bootcamp graduation.
                    <br/>
                    <br/>
                    3 - A website showcasing the various CSS buttons, swtiches, sliders, and other event triggering actions that I have practiced and learned that display an enjoyable and eye captivating user experience on my various projects.

                    <br/>
                    <br/>
                    </p>
                    

                    <p className="body-texts">
                    Outside of my job and hobbies, you can find me weight training at the gym, running, cycling, cooking with loved ones, trying various ethnic cuisines around the city, or relaxing at uptown parks birdwatching and sightseeing. I identify as Latino and speak Spanish and English fluently. I can read and speak Chinese at an intermediate level from courses I took in high school, college, and a summer study abroad. </p>


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
                    <img className="profile" src={landscape} width="100%"/>
                </div>
           
            </div>


         
        </div>
    )
}

export default About