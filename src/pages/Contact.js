import React, { useState } from 'react'

import riverbank_morning from '../media/me/IMG_9110.png'

import github from '../media/icons/github.svg'
import linkedin from '../media/icons/linkedin.png'
import instagram from '../media/icons/instagram.png'

const Contact = () => {

return (
    <div className="body-divs">
        <h3>Contact</h3>
        <p className="body-texts">Let's connect! Please find my contact info here. I will get back within twenty four hours. Click on email to begin message.</p>

        <a className="links" href="mailto:cesar.siguencia@gmail.com">cesar.siguencia@gmail.com</a>
        
        <p className="body-texts"> The best way to reach me is by email or through a LinkedIn message. I can also be reached through Github and Instagram, links provided at the footer.</p>

        {/* <div className="logos-contactpg">
                <a className="icon-align" href="https://github.com/cesarsiguencia" target="_blank" rel="noopener noreferrer">
                    <img className="logos-icons" src={github} width="50"/>
                </a> 

                <a className="icon-align" href="https://www.instagram.com/cezzienyc" target="_blank" rel="noopener noreferrer">
              <img className="logos-icons" src={instagram} width="50"/>
                </a>

                <a className="icon-align" href="https://www.linkedin.com/in/c%C3%A9sar-siguencia-b71aabba/" target="_blank" rel="noopener noreferrer">
                    <img className="logos-icons" src={linkedin} width="50"/>
                </a>
        </div> */}

   

        <br>
        </br>
        <br>
        </br>
        
        <div>
            <img className="profile" src={riverbank_morning} width="75%"></img>
        </div>
       
    </div>



)

}

export default Contact