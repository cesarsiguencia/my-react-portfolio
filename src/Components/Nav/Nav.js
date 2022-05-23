import React from "react";

import { Link } from 'react-router-dom';

const Nav = (props) => {
    // const {
    //     contactSelected,
    //     setContactSelected
    //   } = props; 
    return(
        <nav className="Navigator">
            <p className="links">
              <Link to="/">About Me
              </Link>
            </p>
            <p className="links">
              <Link to="/portfolio">Portfolio
              </Link>
            </p>
            <p className="links"> 
              <Link to="/contact">Contact
              </Link>
            </p>
            <p className="links">
              <Link to="/resume">Resume
              </Link>
            </p>
        
        </nav>
    )
}

export default Nav

//className={`mx-2 ${contactSelected && 'navActive'}`}