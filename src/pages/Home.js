import React, { useEffect, useRef } from "react"

import { Link } from 'react-router-dom'

import ContactBlock from "../Components/Icons/Contact-Icons"

import Icons from '../Components/Icons/Tech-Icons'

import Portrait from '../media/me/portrait.png'

import ContactHomeDiv from '../Components/Home-Blocks/Contact'

import PortfolioDiv from "../Components/Apps/Apps"

import { opacityEffect, scaleEffect } from "../utils/helpers"

const Home = () => {

    const aboutOpa = useRef()
    const projectsOpa = useRef()
    const contactOpa = useRef()

    useEffect(()=>{
        const aboutDiv = document.querySelector('#about')
        const projectsDiv = document.querySelector('#projects')
        const contactsDiv = document.querySelector('#contact')
        
        opacityEffect(aboutDiv, aboutOpa)
        opacityEffect(projectsDiv, projectsOpa)
        opacityEffect(contactsDiv, contactOpa)
    }, [])


    const skillsScale = useRef()
    const projectsScale = useRef()
    const contactScale = useRef()

    useEffect(() => {
        const skillsHolder = document.querySelector('.skills')
        const skillsLogos = document.querySelectorAll('.technologies-box')

        const projectsHolder = document.querySelector('#projects')
        const projectApps = document.querySelectorAll('.app-box')

        const contactHolder = document.querySelector('#contact-block')
        const contactIcons = document.querySelectorAll('.contact-list')

        scaleEffect(skillsHolder, skillsLogos, skillsScale)
        scaleEffect(projectsHolder, projectApps, projectsScale)
        scaleEffect(contactHolder, contactIcons, contactScale)
    }, [])



    return (

        <div>
            <div className='header-hero'>
                <div className='header-text'>

                    <h1>My name is C<span className='red-font'>é</span>sar (pronunced Say-sar)</h1>
                    <p>Full Stack Web Developer</p>
                    <p className='header-slogan'><strong className='red-font'>C</strong>reative At Heart, <strong className='red-font'>C</strong>onstantly Learning, <strong className='red-font'>Challenges Conquered</strong></p>
                   <ContactBlock></ContactBlock>

                    <div className='header-btns-blocks'>
                        <a className='header-btns learn-me' href='#about'></a>
                        <a className='header-btns view-projects' href='#projects'></a>
                    </div>
                </div>
            </div>

            <div className='App-body'>
                <div className='body-divs about-home' id='about' ref={aboutOpa}>
                    <div className='title-block left'>
                        <div className='title'>
                            <h2>Intro & Skills</h2>
                        </div>
                    </div>

                    <div className='section-content'>
                        <div className='row about-box'>
                            <div className="align-ver">
                                <img src={Portrait} style={{ display:'inline-block', height: '250px', borderRadius: '100px', margin: '0 auto'}}></img>
                            </div>
                            

                            <div className='align-ver about-des'>
                                <div>
                                <p className="body-texts left"> Welcome! I create <span className="red-font bold">full stack web applications</span> with an emphasis on <span className="red-font bold"></span>productivity and social media. I completed a Full Stack Web Developer course from <span className="red-font bold"> Columbia University</span> in 2022 where I learned various of the latest and essential developer technologies (see list below). I'm a <span className="red-font bold">life long New Yorker</span> with a knack for music and electronic repairs. Please view my featured projects and if you would like to connect, contact me using any of my contact links. <span className="red-font bold">Can't wait to hear from you!</span> </p>
                                <br />
                                <Link to="/my-react-portfolio/aboutme">
                                    <div className="home-btns" style={{color: 'black'}}>
                                        <h5>Still Curious? Read My Full Bio!</h5>
                                    </div>
                                </Link>
                                </div>
                              

                            </div>
                        </div>

                        <div className="col" ref={skillsScale}>
                            <h4>Web Development Skills</h4>

                            <div className="skills" >
                                <Icons></Icons>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='body-divs projects-home' id='projects' ref={projectsOpa}>
                    <div className='title-block left'>
                        <div className='title'>
                            <h2>Projects</h2>
                        </div>
                    </div>

                    <div className="section-content" ref={projectsScale}>
                    <p className="body-texts left">Hover cursor over image or hold and slide on image to preview image of app. Click on image below to deploy app.</p>
                            <PortfolioDiv></PortfolioDiv>
                    </div>

                </div>

                <div className='body-divs contact-home' id='contact' ref={contactOpa}>
                    <div className='title-block left'>
                        <div className='title'>
                            <h2>Contact Me</h2>
                        </div>
                    </div>

                    <div className="section-content" ref={contactScale}>
                        <ContactHomeDiv></ContactHomeDiv>
                    </div>

                </div>
            </div>
        </div>

    )
}



export default Home

