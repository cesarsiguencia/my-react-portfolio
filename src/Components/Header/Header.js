import React, { useState } from 'react'

import Nav from '../../Components/Nav/Nav'

import { Link } from 'react-router-dom'

const Header = () => {

  const [titleClicked, setTitleClicked] = useState(false)

  const [navClicked, setNavClicked] = useState(false)

  return (

    <header className="App-header">
      <div className="Header-contents">
        <h1 onClick={() => {
          setTitleClicked(true)
          setNavClicked(false)
          }}>
          <Link to="/my-react-portfolio">César Siguencia</Link>
        </h1>
        <Nav
          setTitleClicked={setTitleClicked}
          navClicked={navClicked}
          setNavClicked={setNavClicked}
        >
        </Nav>

      </div>
    </header>
  )
}

export default Header
