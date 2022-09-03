import React from "react";

import { Link } from 'react-router-dom';

import { hamburgerMenu } from "../../utils/helpers";


const Nav = () => {

  // function toggleMobile(){
  //   if(e.target.name === "hamburger" ){

  //   }
  // }
 
    return(
        <nav className="Navigator">
          <div className="mobile-toggle" id="mobile-menu" onClick={hamburgerMenu}>
            <div className="mobile-options"></div>
            <div className="mobile-options"></div>
            <div className="mobile-options"></div>
          </div>
          <div className="nav-links">  
            <h2 id="navtab" className="links">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/aboutme">About Me
              </Link>
            </h2>
            <h2 id="navtab" className="links">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/portfolio">Portfolio
              </Link>
            </h2>
            <h2 id="navtab" className="links"> 
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/contact">Contact
              </Link>
            </h2>
            <h2 id="navtab" className="links">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/resume">Resume & Skills
              </Link>
            </h2>
          </div>
        
        </nav>
    )
}

export default Nav