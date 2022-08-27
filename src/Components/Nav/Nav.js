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
            <h2 className="links">
              <Link onClick={hamburgerMenu} id="navtab" to="/">About Me
              </Link>
            </h2>
            <h2 id="navtab" className="links">
              <Link onClick={hamburgerMenu} to="/portfolio">Portfolio
              </Link>
            </h2>
            <h2 id="navtab" className="links"> 
              <Link onClick={hamburgerMenu} to="/contact">Contact
              </Link>
            </h2>
            <h2 id="navtab" className="links">
              <Link onClick={hamburgerMenu} to="/resume">Resume & Skills
              </Link>
            </h2>
          </div>
        
        </nav>
    )
}

export default Nav