import React, { useState, useEffect } from 'react'

import Nav from '../../Components/Nav/Nav'

import Title from '../../media/icons/gifs/title.gif'



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
        <div onClick={() => {
          setTitleClicked(true)
          setNavClicked(false)

        }}>
          <Link to="/my-react-portfolio" className='align-ver center'><img style={{ height: '100px', borderRadius: '10px' }} src={Title}></img></Link>
        </div>
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
