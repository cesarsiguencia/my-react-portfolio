import React, { useState } from 'react'

import riverbank_morning from '../media/me/IMG_9110.png'

const Contact = () => {

return (
    <div className="body-divs">
        <h3>Contact</h3>
        <p className="body-texts">Please find my contact info here. I will get back within twenty four hours.</p>
        
        <p className="body-texts"> The best way to reach me is by email or through a LinkedIn message. All available personal links can be found at the footer of this website.</p>

        <p className="body-texts">Click on email to begin message.</p>

        <a className="links" href="mailto:cesar.siguencia@gmail.com">cesar.siguencia@gmail.com</a>

        <br>
        </br>
        <br>
        </br>
        
        <div>
            <img src={riverbank_morning} width="75%"></img>
        </div>
       
    </div>



)

}

export default Contact