import React from 'react'

import Nav from '../../Components/Nav/Nav'

import { Link } from 'react-router-dom'

const Header = () => {

return(

    <header className="App-header">
      <div className="Header-contents">

      
      <h1>
        <Link to="/my-react-portfolio">César Siguencia</Link>

      </h1>
      <Nav>


      </Nav>
      
      </div>
    </header>
    )
}

export default Header
