import React, { useState } from 'react'

import riverbank_morning from '../media/me/IMG_9110.png'


const Contact = () => {

return (
    <div className="body-divs">
        <h3>Contact</h3>
        <p className="body-texts">Let's connect! Please find my contact info here. I will get back within twenty four hours. Click on email to begin message.</p>

        <a className="links" href="mailto:cesar.siguencia@gmail.com">cesar.siguencia@gmail.com</a>
        
        <p className="body-texts"> The best way to reach me is by email or through a LinkedIn message. Social media links are provided at the footer.</p>
   

        <br></br>
        <br></br>
        
        <div>
            <img className="profile" src={riverbank_morning} width="75%"></img>
        </div>
       
    </div>

)

}

export default Contact