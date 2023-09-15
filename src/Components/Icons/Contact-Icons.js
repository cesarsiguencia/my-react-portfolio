import React from "react";

import GitHub from '../../media/icons/github.svg'

import LinkedIn from '../../media/icons/linkedin.png'

import ClearMail from '../../media/icons/clear-mail.png'

const ContactBlock = () => {

    const contactIcons = [
        {
            name: 'github',
            url:"https://github.com/cesarsiguencia",
            icon: GitHub
        },
        {
            name: 'email',
            url: "mailto:cd.siguencia@gmail.com",
            icon: ClearMail
        },
        {
            name: 'linkedIn',
            url: "https://www.linkedin.com/in/cesar-siguencia/",
            icon: LinkedIn
        }
    ]


    return (
        <div className='header-icons-block'>
            {contactIcons.map((method)=>{
                return(
                    <a key={method.name} href={method.url} target="_blank" rel="noopener noreferrer">
                        <img className='header-icons' alt={`${method.name} logo`} src={method.icon}></img>
                    </a>
                )
            })}
        </div>

    )
}

export default ContactBlock