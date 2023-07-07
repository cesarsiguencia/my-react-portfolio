import React, { useState, useEffect } from 'react'

import Nav from '../../Components/Nav/Nav'

import { Link } from 'react-router-dom'

const Header = () => {

  const [titleClicked, setTitleClicked] = useState()
  const [navClicked, setNavClicked] = useState()

  return (

    <header className="App-header">
      <div className="Header-contents">
        <h1 className="headings" onClick={() => {
          setTitleClicked(true)
          setNavClicked(false)

          }}>
          <Link to="/my-react-portfolio">César Siguencia</Link>
        </h1>
        <Nav
          titleClicked={titleClicked}
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
