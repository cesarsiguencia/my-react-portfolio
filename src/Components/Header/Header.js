import React from 'react'

import Nav from '../../Components/Nav/Nav'

import Title from '../../media/icons/gifs/title.gif'

import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className="App-header">
      <div className="Header-contents">

        <Link to="/my-react-portfolio" className='align-ver center'><img alt="Gif of Cesar's name typed out as logo of site"style={{ height: '100px', borderRadius: '10px' }} src={Title}></img></Link>

        <Nav></Nav>
      </div>
    </header>
  )
}

export default Header
