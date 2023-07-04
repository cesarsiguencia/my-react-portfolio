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
            <h2 id="navtab">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/aboutme">
                <h2 className="links links-selected">About Me</h2>
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
            </h2>
          </div>
        
        </nav>
    )
}

export default Nav