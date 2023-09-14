import React, { useState, useEffect } from 'react'

import Nav from '../../Components/Nav/Nav'

import Title from '../../media/title.gif'



import { Link } from 'react-router-dom'

const Header = (props) => {

  const { portfolioClicked } = props

  const [titleClicked, setTitleClicked] = useState()
  const [navClicked, setNavClicked] = useState()

  if (portfolioClicked === true) {
    setTitleClicked(false)
    setNavClicked(true)
  }

  return (

    <header className="App-header">
      <div className="Header-contents">
        <p onClick={() => {
          setTitleClicked(true)
          setNavClicked(false)

        }}>
          <Link to="/my-react-portfolio"><img style={{ height: '100px', borderRadius: '25px' }} src={Title}></img></Link>
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
