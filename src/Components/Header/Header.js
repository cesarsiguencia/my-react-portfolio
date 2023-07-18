import React, { useState, useEffect } from 'react'

import Nav from '../../Components/Nav/Nav'

import { Link } from 'react-router-dom'

const Header = (props) => {

  const {portfolioClicked} = props

  const [titleClicked, setTitleClicked] = useState()
  const [navClicked, setNavClicked] = useState()

  if(portfolioClicked === true){
    setTitleClicked(false)
    setNavClicked(true)
  }

  return (

    <header className="App-header">
      <div className="Header-contents">
        <p className="headings h1" onClick={() => {
          setTitleClicked(true)
          setNavClicked(false)

          }}>
          <Link to="/my-react-portfolio">César Siguencia</Link>
        </p>
        <Nav
          titleClicked={titleClicked}
          setTitleClicked={setTitleClicked}
          navClicked={navClicked}
          setNavClicked={setNavClicked}
          // portfolioClicked={portfolioClicked}

        >
        </Nav>

      </div>
    </header>
  )
}

export default Header
