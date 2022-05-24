import React from 'react'
import resume from './cesar-siguencia-resume.pdf'

import image from './resume.png'

const Resume = () => {

    return(
        <div className="body-divs">
            <h3>Resume</h3>
            <p className="body-texts">Click on the image below to download the PDF version</p>
            <a href={resume} download><img src={image} width="50%"/>
            </a>
        </div>
    )
}

export default Resume