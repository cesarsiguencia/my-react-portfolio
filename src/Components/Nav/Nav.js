import React from "react";

import { NavHashLink } from 'react-router-hash-link'

import { hamburgerMenu } from "../../utils/helpers";

import developer_resume from '../../media/Cesar_Siguencia_Resume.pdf'

import doc_icon from "../../media/icons/document.avif"


const Nav = () => {

  const pages = [
    {
      name: "About Me",
      url: "#about"
    },
    {
      name: "Portfolio",
      url: "#projects"
    },
    {
      name: "Contact",
      url: "#contact"
    }
  ]

  return (
    <nav className="Navigator">
      <div className="mobile-toggle" id="mobile-menu" onClick={hamburgerMenu}>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
      </div>
      <div className="nav-links">


        {pages.map((page) => (
          <div className='navBtns' id="navtab" key={page.name}>
            <NavHashLink onClick={hamburgerMenu}  to={`/my-react-portfolio${page.url}`}>
              <p className='links' >{page.name}</p>
            </NavHashLink>
          </div>
        ))}

        <a className='navBtns' href={developer_resume} target="'' download" style={{ border:'2px solid white'}}>
          <p className='links' >Resume PDF</p>
          <div className='align-ver'>
            <img alt='document icon'src={doc_icon} style={{ display:'block', height: '35px', margin: '0 10px'  }} ></img>
          </div>
        
        </a>
      </div>
    </nav>
  )
} 

export default Nav