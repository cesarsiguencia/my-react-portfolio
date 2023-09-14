import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

import { hamburgerMenu } from "../../utils/helpers";

import developer_resume from '../../media/Cesar_Siguencia_Resume.pdf'


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
    {
      name: "Resume PDF ",
      url: developer_resume,
      target: `'' download`
    }
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
    <nav className="Navigator" 
    
    // onClick={()=>{
    //   setNavClicked(true)
    //   setTitleClicked(false)
    //   }}
      
      >
      <div className="mobile-toggle" id="mobile-menu" onClick={hamburgerMenu}>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
      </div>
      <div className="nav-links">
        {pages.map((page) => (
          <div className='h2' id="navtab" key={page.name}
            // onClick={() => {
            //   setSelectedPage(page)
            // }}
            
            >
            <a onClick={hamburgerMenu} href={page.url} target={`${page.target ? (`'' download`) : (``)}`} >
              <p 
              
              // className=
              //   {`links ${!selectedPage ? ( selectedPage == "") : (selectedPage.name === page.name && !titleClicked && navClicked && 'links-selected')}`}
                
                className="links links-selected"

  
                >
                  
                  {page.name}</p>
            </a>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Nav