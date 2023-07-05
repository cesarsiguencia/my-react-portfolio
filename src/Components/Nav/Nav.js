import React, { useState } from "react";

import { Link } from 'react-router-dom';

import { hamburgerMenu } from "../../utils/helpers";


const Nav = (props) => {
  const {
    setTitleClicked,
    navClicked,
    setNavClicked
  } = props

  const pages = [
    {
      name: "About Me",
      url: "aboutme"
    },
    {
      name: "Portfolio",
      url: "portfolio"
    },
    {
      name: "Contact",
      url: "contact"
    },
    {
      name: "Resume & Skills",
      url: "resume"
    }
  ]

  const [selectedPage, setSelectedPage] = useState(pages)

  return (
    <nav className="Navigator">
      <div className="mobile-toggle" id="mobile-menu" onClick={hamburgerMenu}>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
      </div>
      <div className="nav-links">
        {pages.map((page) => (
          <h2 id="navtab" key={page.name}
            onClick={() => {
              setSelectedPage(page)
              setTitleClicked(false)
              setNavClicked(true)
            }}>
            <Link onClick={hamburgerMenu} to={`/my-react-portfolio/${page.url}`}>
              <h2 className=
                {`links ${selectedPage.name === page.name && navClicked && 'links-selected'}`}>{page.name}</h2>
            </Link>
          </h2>
        ))}
        {/* <h2 id="navtab">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/aboutme">
                <h2 className="links">About Me</h2>
              </Link>
            </h2>
            <h2 id="navtab">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/portfolio">
                <h2 className="links">Portfolio</h2>
              </Link>
            </h2>
            <h2 id="navtab"> 
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/contact">
                <h2 className="links">Contact</h2>
              </Link>
            </h2>
            <h2 id="navtab">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/resume">
                <h2 className="links">Resume & Skills</h2>
              </Link>
            </h2> */}
      </div>
    </nav>
  )
}

export default Nav