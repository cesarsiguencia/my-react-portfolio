import React from 'react'

import image from '../media/me/IMG_2178-copy.png'

const Home= () => {

    return(
        <div className="body-divs">
            <div>
                <img src={image} width="75%"/>
            </div>
            <h3>About Me</h3>
            <p className="body-texts"> Thank you for visiting my page! I'm an aspiring web developer, music producer, and media content creater born and raised in NYC. Currently, I work at an East Harlem elementary school as an administrator. While the majority of my work experience is education related, you can find my other career oriented experiences by visiting my resume tab above!
            <br/>
            <br/>
            Outside of my job and hobbies, you can find me weight training at the gym, running, cycling, cooking with loved ones, trying various ethnic cuisines around the city, or relaxing at uptown parks birdwatching and sightseeing.</p>
        </div>
    )
}

export default Home