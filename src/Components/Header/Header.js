import React, { useState, useEffect } from 'react'

import Nav from '../../Components/Nav/Nav'

import Title from '../../media/title.gif'

import GitHub from '../../media/icons/github.svg'

import LinkedIn from '../../media/icons/linkedin.png'

import ClearMail from '../../media/icons/clear-mail.png'

import LearnMe from '../../media/icons/learn-about-me.gif'

import ProjectsBtn from '../../media/icons/view-projects.gif'

import { Link } from 'react-router-dom'

const Header = (props) => {

  const { portfolioClicked } = props

  const [titleClicked, setTitleClicked] = useState()
  const [navClicked, setNavClicked] = useState()

  if (portfolioClicked === true) {
    setTitleClicked(false)
    setNavClicked(true)
  }

  return (

    <header className="App-header">
      <div className="Header-contents">
        <p onClick={() => {
          setTitleClicked(true)
          setNavClicked(false)

        }}>
          <Link to="/my-react-portfolio"><img style={{ height: '100px', borderRadius: '25px' }} src={Title}></img></Link>
        </p>
        <Nav
          titleClicked={titleClicked}
          setTitleClicked={setTitleClicked}
          navClicked={navClicked}
          setNavClicked={setNavClicked}
        // portfolioClicked={portfolioClicked}

        >
        </Nav>

      </div>

      <div className='header-hero'>
        <div className='header-text'>

          <h1>My name is C<span>é</span>sar (pronunced Say-sar)</h1>
          <p>Full Stack Web Developer</p>
          <div className='header-icons-block'>
            <a href="https://github.com/cesarsiguencia" target="_blank" rel="noopener noreferrer">
              <img className='header-icons' src={GitHub}></img>
            </a>
            <a href="https://www.instagram.com/cezzienyc" target="_blank" rel="noopener noreferrer">
              <img className='header-icons' src={ClearMail}></img>
            </a>


            <a href="https://www.linkedin.com/in/cesar-siguencia/" target="_blank" rel="noopener noreferrer">
              <img className='header-icons' src={LinkedIn}></img>
            </a>


          </div>

          <div className='header-btns-blocks'>

            <img className='header-btns' src={LearnMe}></img>



            <img className='header-btns' src={ProjectsBtn}></img>

            
            
          </div>
        </div>
      </div>


    </header>
  )
}

export default Header
