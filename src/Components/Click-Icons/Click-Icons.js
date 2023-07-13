import React from "react";

import document_image from '../../media/icons/document.png'
import linkedIn from '../../media/icons/linkedin.png'
import mail from '../../media/icons/mail-icon.png'
import developer_resume from '../../pages/Cesar_Siguencia-Resume-Developer.pdf'

const clickableIcons = () => {
    const urlsArray = window.location.href.split('/')
    const urlOfSubPage = urlsArray[urlsArray.length - 1]

    let iconsArray

    if (urlOfSubPage == 'contact') {
        iconsArray = [
            {
                image: linkedIn,
                url: "https://www.linkedin.com/in/c%C3%A9sar-siguencia-b71aabba/",
                target: true
            },
            {
                image: mail,
                url: "mailto:cesar.siguencia@gmail.com",
                target: true
            }
        ]
    }

    if (urlOfSubPage == 'resume') {
        iconsArray = [
            {
                image: document_image,
                url: developer_resume,
                target: false
            }
        ]
    }

    return(
        <div className="logos" style={{ margin: '0 auto', justifyContent: 'space-around', height: '150px' }}>
            {iconsArray.map((icon)=>{
                return <a className="icon-align" href={icon.url} 

                target={`${icon.target ? (`'_blank' rel='noopener noreferrer'`) : (`'' download`)}`}  
                                
                key={icon.image}>
                    <img className='logos-icons' src={icon.image}/>
            </a>
            })}
        </div>
    )

}

export default clickableIcons