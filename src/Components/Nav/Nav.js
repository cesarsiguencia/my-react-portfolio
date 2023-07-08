import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

import { hamburgerMenu } from "../../utils/helpers";


const Nav = (props) => {
  const {
    navClicked,
    setNavClicked,
    titleClicked,
    setTitleClicked,
  } = props

  const pages = [
    {
      name: "About Me",
      url: "aboutme"
    },
    {
      name: "Portfolio",
      url: "portfolio"
    },
    {
      name: "Contact",
      url: "contact"
    },
    {
      name: "Resume & Skills",
      url: "resume"
    }
  ]

  let subUrlObjectAtLoad
  const urlsArray = window.location.href.split('/')
  const urlOfSubPage = urlsArray[urlsArray.length - 1] 
  
  if(urlOfSubPage!== 'my-react-portfolio'){
    subUrlObjectAtLoad = {
      urlSub: urlOfSubPage,
      urlSubLoaded: true
    }
  } else {
    subUrlObjectAtLoad = {
      urlSub: "not a urlSub",
      urlSubLoaded: false
    }
  }

  let currentIndex
  const loadedPage = subUrlObjectAtLoad.urlSub

  if(loadedPage){
    pages.forEach((page) => {
      if(page.url === loadedPage){
        currentIndex = pages.indexOf(page)
      }
    })
  }

  const [selectedPage, setSelectedPage] = useState(pages[currentIndex])
  
  useEffect(()=>{
    if(subUrlObjectAtLoad.urlSubLoaded === false){
      setTitleClicked(true)
      setNavClicked(false)
    } else {
      setTitleClicked(false)
      setNavClicked(true)
    }
  })

  return (
    <nav className="Navigator" onClick={()=>{
      setNavClicked(true)
      setTitleClicked(false)
      }}>
      <div className="mobile-toggle" id="mobile-menu" onClick={hamburgerMenu}>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
        <div className="mobile-options"></div>
      </div>
      <div className="nav-links">
        {pages.map((page) => (
          <p className='h2' id="navtab" key={page.name}
            onClick={() => {
              setSelectedPage(page)
            }}>
            <Link onClick={hamburgerMenu} to={`/my-react-portfolio/${page.url}`}>
              <p className=
                {`links ${!selectedPage ? ( selectedPage == "") : (selectedPage.name === page.name && !titleClicked && navClicked && 'links-selected')}`}>{page.name}</p>
            </Link>
          </p>
        ))}
      </div>
    </nav>
  )
}

export default Nav

    // useEffect(() => {
    //   const urlSplit = window.location.href.split('/')
    //   const lastIndex = urlSplit[urlSplit.length - 1] 
    //   console.log(lastIndex)
      
    //   if(lastIndex !== 'my-react-portfolio'){
    //     console.log('not home!!')
    //     setUrlIsSub({
    //       condition: true,
    //       urlSub: lastIndex
    //     })
    
    //   } else {
    //     return undefined
    
    //   }
    // }, [])