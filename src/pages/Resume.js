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

            <div className="skills-block">
                <h3>Web Development Skills</h3>
                <div className="skill-lists">
                    <div className="list-divs">
                    <p className="body-texts">Front End</p>
                
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Jquery</li>
                        <li>Bootstrap</li>
                        <li>React</li>
        
                    </div>

                    <div className="list-divs">
                    <p className="body-texts">Back End</p>
                    
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Resume