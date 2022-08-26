import React from 'react'

import image from '../media/me/IMG_2178-copy.png'

import landscape from '../media/me/landscape.png'

import bike from '../media/icons/cycling-bicycle.gif'

import spanish from '../media/icons/spanish.png'

import sparrow from '../media/icons/sparrow.gif'

const Home= () => {

    return(
        <div className="body-divs">
       
            <h3>About Me</h3>


            <div className="aboutme">
         
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

                <div className="aboutme-blocks">
                    <img className="profile" src={image} width="90%"/>
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
                 
                    <p className="aboutme--quotes">
                        "I won't have a problem if you hit high and miss, but I am going to have a real problem if you aim low and hit" 
                        <br/>
                        - Michaelangelo
                    </p>
                    <p className="aboutme--quotes">
                        "We are what you repeatedly do, excellence then, is not and act, but a habit" 
                        <br/>
                        - Aristotle 
                    </p>
                    <p className="aboutme--quotes">
                        When we hit out lowest point, we are open to the greatest change" - 
                        <br/>
                        Legend of Korra Nickelodeon Series
                    </p>
                </div>

                <div className="aboutme-blocks">
                    <div className="aboutme--titles">
                        <h3>
                            Fun and Random Facts
                        </h3>

                    </div>
                  
                    <p className="aboutme--facts">
                        1 - My favorite dish of all time is Mediterranean Grilled Octopus with roasted assorted baby potatoes in dashes of rosemary, pasley, garlic, and olive oil.

                        <br/>
                        <br/>

                        2 - I learned in college through a professor that I have perfect pitch. 

                        <br/>
                        <br/>

                        3 - I'm a little "old school". I like very old cars, enjoy collecting old tech, have a special place in my heart for tape cassetes, and all my favorite music comes from the 70s, 80s, and 90s, including rock, RnB and Hip Hop.
                    </p>
                </div>
            </div>

            <div>
                <img className="profile" src={landscape} width="70%"/>
            </div>
        </div>
    )
}

export default Home