import React from "react";

import { Link } from 'react-router-dom';

const Nav = (props) => {
    // const {
    //     contactSelected,
    //     setContactSelected
    //   } = props; 
    return(
        <nav className="Navigator">
            <h2 className="links">
              <Link to="/">About Me
              </Link>
            </h2>
            <h2 className="links">
              <Link to="/portfolio">Portfolio
              </Link>
            </h2>
            <h2 className="links"> 
              <Link to="/contact">Contact
              </Link>
            </h2>
            <h2 className="links">
              <Link to="/resume">Resume
              </Link>
            </h2>
        
        </nav>
    )
}

export default Nav

//className={`mx-2 ${contactSelected && 'navActive'}`}