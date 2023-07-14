import React, { useRef, useEffect } from 'react'

import me from '../media/me/me-at-park.png'

import ClickableIcons from '../Components/Icons/Click-Icons'

import { scaleEffect } from '../utils/helpers'



const Contact = () => {

    const myRef = useRef()

    useEffect(() => {
        const contactsDiv = document.querySelector('.aboutme')
        const logos = document.querySelectorAll('.logos-icons')
        scaleEffect(contactsDiv, logos, myRef)
    }, [])

    return (
        <div className="body-divs">
            <h3>Contact</h3>
            <div className='aboutme'>

                <div className='aboutme-blocks' ref={myRef}>
                    <p className="body-texts">Let's connect! Click on the email or linkedIn icons to send me a message. I will get back within twenty four hours. </p>

                    <ClickableIcons></ClickableIcons>

                    <p className="body-texts"> The best way to reach me is by email or through a LinkedIn message. Please include your name and contact info as well.</p>
                </div>
                <div className='aboutme-blocks'>
                    <img className='profile' src={me} width="100%"></img>
                </div>
            </div>
        </div>
    )
}

export default Contact