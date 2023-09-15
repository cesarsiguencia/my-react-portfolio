import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

import { NavHashLink } from 'react-router-hash-link'

import { hamburgerMenu } from "../../utils/helpers";

import developer_resume from '../../media/Cesar_Siguencia_Resume.pdf'

import doc_icon from "../../media/icons/document.png"


const Nav = (props) => {
  // const {
  //   navClicked,
  //   setNavClicked,
  //   titleClicked,
  //   setTitleClicked,
  // } = props

  const pages = [
    {
      name: "About Me",
      url: "#about"
    },
    {
      name: "Portfolio",
      url: "#projects"
    },
    {
      name: "Contact",
      url: "#contact"
    },
    // {
    //   name: "Resume PDF ",
    //   url: developer_resume,
    //   target: `'' download`,
    //   icon: doc_icon
    // }
  ]

  // let subUrlObjectAtLoad
  // const urlsArray = window.location.href.split('/')
  // const urlOfSubPage = urlsArray[urlsArray.length - 1] 

  // if(urlOfSubPage!== 'my-react-portfolio'){
  //   subUrlObjectAtLoad = {
  //     urlSub: urlOfSubPage,
  //     urlSubLoaded: true
  //   }
  // } else {
  //   subUrlObjectAtLoad = {
  //     urlSub: "not a urlSub",
  //     urlSubLoaded: false
  //   }
  // }

  // let currentIndex
  // const loadedPage = subUrlObjectAtLoad.urlSub

  // if(loadedPage){
  //   pages.forEach((page) => {
  //     if(page.url === loadedPage){
  //       currentIndex = pages.indexOf(page)
  //     }
  //   })
  // }

  // const [selectedPage, setSelectedPage] = useState(pages[currentIndex])

  // useEffect(()=>{
  //   if(subUrlObjectAtLoad.urlSubLoaded === false){
  //     setTitleClicked(true)
  //     setNavClicked(false)
  //   } else {
  //     setTitleClicked(false)
  //     setNavClicked(true)
  //   }
  // },[subUrlObjectAtLoad])

  return (
    <nav className="Navigator">
      <div className="mobile-toggle" id="mobile-menu" onClick={hamburgerMenu}>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
      </div>
      <div className="nav-links">


        {pages.map((page) => (
          <div className='h2 navBtns' id="navtab" key={page.name}>
            <NavHashLink onClick={hamburgerMenu} style={{ display: 'flex', padding: '10px 10px' }} to={`/my-react-portfolio${page.url}`}>
              <p className='links' >{page.name}</p>
            </NavHashLink>
          </div>
        ))}

        <a className='h2 navBtns' href={developer_resume} target="'' download" style={{ display: 'flex', border:'2px solid white', padding: '10px 10px' }}>
          <p className='links' >Resume PDF</p>
          <img src={doc_icon} style={{ height: '35px', margin: '0 10px'  }}></img>
        </a>
      </div>
    </nav>
  )
}

export default Nav