import React, { useRef, useEffect } from 'react'

import me from '../media/me/me-at-park.png'
import linkedin from '../media/icons/linkedin.png'
import mail from '../media/icons/mail-icon.png'

import ClickableIcons from '../Components/Click-Icons/Click-Icons'



const Contact = () => {

    const myRef = useRef()

    useEffect(() => {
        const gifsDiv = document.querySelector('.aboutme')

        if (gifsDiv) {
            let entry
            const observer = new IntersectionObserver((entries) => {
                entry = entries[0];
                console.log(entry)

                const gifs = document.querySelectorAll('.logos-icons')

                if (gifs) {
                    gifs.forEach((gif) => {
                        if (entry.isIntersecting === true) {
                            gif.style.scale = '0.7'
                        } else {
                            gif.style.scale = '0.2'
                        }
                    })
                }
            })
            observer.observe(myRef.current)
        }
    }, [])

    return (
        <div className="body-divs">
            <h3>Contact</h3>
            <div className='aboutme'>

                <div className='aboutme-blocks' ref={myRef}>
                    <p className="body-texts">Let's connect! Click on the email or linkedIn icons to send me a message. I will get back within twenty four hours. </p>

                    <ClickableIcons></ClickableIcons>

                    {/* <div className="logos" ref={myRef} width='50%' style={{ margin: '0 auto', justifyContent: 'space-around', height: '100px' }}>
                        <a className="icon-align" href="mailto:cesar.siguencia@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img className="logos-icons logos-contactpg" src={mail} width="50" />
                        </a>

                        <a className="icon-align" href="https://www.linkedin.com/in/c%C3%A9sar-siguencia-b71aabba/" target="_blank" rel="noopener noreferrer">
                            <img className="logos-icons logos-contactpg" src={linkedin} width="50" />
                        </a>
                    </div> */}
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