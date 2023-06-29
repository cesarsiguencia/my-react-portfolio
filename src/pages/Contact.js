import React, { useState } from 'react'

import riverbank_morning from '../media/me/IMG_9110.png'


const Contact = () => {

return (
    <div className="body-divs">
        <h3>Contact</h3>
        <p className="body-texts">Let's connect! Please find my contact info here. I will get back within twenty four hours. </p>

        <a className="links" href="mailto:cesar.siguencia@gmail.com">Email: Click HERE to begin message.</a>
        <br></br>
        <br></br>
        <a className="links" href="https://www.linkedin.com/in/cesar-siguencia">LinkedIn: César Siguencia </a>
        
        <p className="body-texts"> The best way to reach me is by email or through a LinkedIn message.</p>
   

        {/* <br></br>
        <br></br>
        
        <div>
            <img className="profile" src={riverbank_morning} width="75%"></img>
        </div> */}
       
    </div>

)

}

export default Contact