import React from 'react'
import resume from './cesar-siguencia-resume.pdf'

import image from './resume.png'

import html from '../media/icons/skills-icons/html5.png'
import css from '../media/icons/skills-icons/css3.png'
import js from '../media/icons/skills-icons/js.png'
import jquery from '../media/icons/skills-icons/jquery.png'
import graphql from '../media/icons/skills-icons/graphql.png'
import node from '../media/icons/skills-icons/nodejs.png'
import express from '../media/icons/skills-icons/express.png'
import mysql from '../media/icons/skills-icons/mysql.png'
import react from '../media/icons/skills-icons/react.png'
import sequelize from '../media/icons/skills-icons/sequelize.png'
import mongoose from '../media/icons/skills-icons/mongoose.png'
import bootstrap from '../media/icons/skills-icons/bootstrap.png'
import api from '../media/icons/skills-icons/api.png'
import mongodb from '../media/icons/skills-icons/mongodb.png'

const Resume = () => {

    return(
        <div className="body-divs">
            <div className="skills">
                <div className="skills-blocks"> 
                    <h3>Resume</h3>
                        <p className="body-texts">Click on the image below to download the PDF version</p>
                        <a href={resume} download><img src={image} width="75%"/>
                        </a>
                </div>
                
                <div className="skills-blocks">
                    <h3>Web Development Skills</h3>

                    <div className="skills--lists">
                        <div>
                            <h5>Front End</h5>
                 
                            <div className="technologies">
                                <img className="technologies-logos" src={html}/>
                                <img className="technologies-logos" src={css}/>
                                <img className="technologies-logos" src={js}/>
                                <img className="technologies-logos" src={jquery}/>
                                <img className="technologies-logos" src={bootstrap}/>
                                <img className="technologies-logos" src={react}/>

                               
                            </div>
                        </div>
                        <div>
                            <h5>Back End</h5>
                            <div className="technologies">
                                <img className="technologies-logos" src={api}/>
                                <img className="technologies-logos" src={node}/>
                                <img className="technologies-logos" src={express}/>
                                <img className="technologies-logos" src={mysql}/>
                                <img className="technologies-logos" src={sequelize}/>
                                <img className="technologies-logos" src={mongodb}/>
                                <img className="technologies-logos" src={mongoose}/>
                                <img className="technologies-logos" src={graphql}/>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
      
           
        </div>

        
    )
}

export default Resume