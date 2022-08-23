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

            <div className="skills">
                <h3>Web Development Skills</h3>
                <div className="skills--lists">
                    <div className="skills---divs">
                        <p className="body-texts">Front End</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Jquery</li>
                                <li>Bootstrap</li>
                                <li>React</li>
                            </ul>
                    </div>

                    <div className="skills---divs">
                        <p className="body-texts">Back End</p>
                            <ul>
                                <li>APIs</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL, Sequelize</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>REST</li>
                                <li>GraphQL</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Resume