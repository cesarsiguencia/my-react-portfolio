import React from 'react'

import GitHub from '../../media/icons/github.svg'

import LinkedIn from '../../media/icons/linkedin.avif'

import ClearMail from '../../media/icons/clear-mail.avif'

const Contact = () => {

    const contactDivs = [
        {
            name: 'Email',
            title: 'cd.siguencia@gmail.com',
            icon: ClearMail,
            url: "mailto:cd.siguencia@gmail.com",
            des: 'Email is the quickest way to contact me. I respond under 24 hours. Click icon to immediately message me.'
        },
        {
            name: 'LinkedIn',
            title: 'linkedin.com/in/cesar-siguencia',
            icon: LinkedIn,
            url: "https://www.linkedin.com/in/cesar-siguencia/",
            des: 'Click icon, contact me, and view my entire career profile.'
        },
        {
            name: 'GitHub',
            title: 'github.com/cesarsiguencia',
            icon: GitHub,
            url: "https://github.com/cesarsiguencia",
            des: 'Click icon, contact me, and view my 30+ repositories.'
        }
    ]

    return (
        <div className="col contact-block" id="contact-block">
            {contactDivs.map((contact) => {
                return (
                    <div className="row contact-list" key={contact.title}>
                        <div className='align-ver contact-logos' style={{justifyContent:'center'}}>
                        <a href={contact.url} target="_blank" rel="noopener noreferrer">
                            <img alt={`${contact.name} logo`}className='header-icons effect-icons' src={contact.icon}></img>
                        </a>
                        </div>


                        <div className="left align-ver contact-des">
                            <div>

                            <h6>{contact.title}</h6>
                            <p className="body-texts">{contact.des}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Contact