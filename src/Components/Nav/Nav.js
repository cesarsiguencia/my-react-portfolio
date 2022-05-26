import React from "react";

import { Link } from 'react-router-dom';

const Nav = () => {



    // const [currentNav, setCurrentNav ] = useState()
      
  
    
    // if(tabName)
  
 
    return(
        <nav className="Navigator">
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
        
        </nav>
    )
}

export default Nav

//className={`mx-2 ${contactSelected && 'navActive'}`}