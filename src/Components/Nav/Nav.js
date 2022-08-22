import React from "react";

import { Link } from 'react-router-dom';

import { hamburgerMenu } from "../../utils/button";


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
              <Link id="navtab" to="/">About Me
              </Link>
            </h2>
            <h2 id="navtab" className="links">
              <Link to="/portfolio">Portfolio
              </Link>
            </h2>
            <h2 id="navtab" className="links"> 
              <Link to="/contact">Contact
              </Link>
            </h2>
            <h2 id="navtab" className="links">
              <Link to="/resume">Resume
              </Link>
            </h2>
          </div>
        
        </nav>
    )
}

export default Nav