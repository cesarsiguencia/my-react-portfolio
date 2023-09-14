import React, { useRef, useEffect } from 'react'
import Icons from '../Components/Icons/Tech-Icons'
import image from '../media/resume.png'
import ClickableIcons from '../Components/Icons/Click-Icons'
import { scaleEffect } from '../utils/helpers'

const Resume = () => {
    // const docRef = useRef()
    // const techRef = useRef()

    // useEffect(() => {
    //     const techDiv = document.querySelector('.skills')
    //     const docIcon = document.querySelectorAll('.logos-icons')
    //     const logos = document.querySelectorAll('.technologies-logos')

    //     scaleEffect(techDiv, docIcon, docRef)
    //     scaleEffect(techDiv, logos, techRef)
    // }, [])

    return (
        <div className="body-divs">
            <div className="skills">
                <div className="skills-blocks">
                    <h3>Resume</h3>
                    <p className="body-texts">Click on the document icon to download the PDF version.</p>

                    <ClickableIcons></ClickableIcons>

                    <p className="body-texts bold-and-left">Languages</p>
                    <p className="body-texts">Fluent in Spanish, Intermediate literacy in Mandarin Chinese.</p>
                    <br />

                    <img className="resume-style" src={image} width="75%" />
                    <br />
                </div>

                <div className="skills-blocks" >
                    <h3>Web Development Skills</h3>

                    <div className="skills--lists" >
                        <Icons></Icons>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resume