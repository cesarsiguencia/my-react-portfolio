import React from 'react'

import Apps from '../Components/Apps/Apps'


const Portfolio = () => {

    return(
        <div className="body-divs">
            <h3>Portfolio</h3>
                <p className="body-texts">Hover cursor over image or hold and slide on image with your mobile to see a short description from one of my featured apps. 
                Click on the image below to deploy application link. Click corresponding github logo to be redirected to its GitHub repository.</p>
            <Apps ></Apps>
        </div>
    )
}

export default Portfolio