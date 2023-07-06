import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

import { hamburgerMenu } from "../../utils/helpers";


const Nav = (props) => {
  const {
    // setTitleClicked,
    navClicked,
    setNavClicked,
    titleClicked,
    setTitleClicked,
  } = props





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

  let urlInfoAtLoad


  const urlSplit = window.location.href.split('/')
  const lastIndex = urlSplit[urlSplit.length - 1] 
  console.log(lastIndex)
  
  if(lastIndex !== 'my-react-portfolio'){
    console.log('not home!!')

    urlInfoAtLoad = {
      condition: true,
      urlSub: lastIndex
    }
  } else {
    urlInfoAtLoad = {
      condition: false,
      urlSub: 'dummy'
    }
  }

  // const [urlIsSub, setUrlIsSub] = useState({urlInfoAtLoad})







  // console.log(urlIsSub, 'navPage')

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

  let currentIndex

  const loadedPage = urlInfoAtLoad.urlSub
  console.log(loadedPage)

  if(loadedPage){
    console.log(loadedPage, 'current Pg')

    pages.forEach((page) => {
      if(page.url === loadedPage){
        currentIndex = pages.indexOf(page)
        console.log(currentIndex)
      }
    })
  }

  var newIndex = parseInt(currentIndex)
  console.log(newIndex)







  const [selectedPage, setSelectedPage] = useState(pages[newIndex])


  // useEffect(() =>{
  //   if(loadedPage){
  //     console.log(loadedPage, 'current Pg')
  
  
  //     pages.forEach((page) => {
  //       if(page.url === loadedPage){
  //         x = page
  //         setSelectedPage(pages[1])
  //         console.log(selectedPage, 'this was picked')
  //       }

  //     })
      
  
  //   }
  
  // }, [selectedPage])
  

  console.log(selectedPage, 'first rendered')




  console.log(  urlInfoAtLoad.condition)
  useEffect(()=>{
    if(urlInfoAtLoad.condition === false){
      setTitleClicked(true)
      setNavClicked(false)
  } else {
    setTitleClicked(false)
    setNavClicked(true)
  }
  })






  // console.log(selectedPage, 'selectedPage console')

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
          <h2 id="navtab" key={page.name}
            onClick={() => {
              setSelectedPage(page)
              // setTitleClicked(false)
              // setNavClicked(true)
            }}>
            <Link onClick={hamburgerMenu} to={`/my-react-portfolio/${page.url}`}>
              <h2 className=
                {`links ${!selectedPage ? ( selectedPage == "") : (selectedPage.name === page.name && !titleClicked && navClicked && 'links-selected')}`}>{page.name}</h2>
            </Link>
          </h2>
        ))}
        {/* <h2 id="navtab">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/aboutme">
                <h2 className="links">About Me</h2>
              </Link>
            </h2>
            <h2 id="navtab">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/portfolio">
                <h2 className="links">Portfolio</h2>
              </Link>
            </h2>
            <h2 id="navtab"> 
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/contact">
                <h2 className="links">Contact</h2>
              </Link>
            </h2>
            <h2 id="navtab">
              <Link onClick={hamburgerMenu} to="/my-react-portfolio/resume">
                <h2 className="links">Resume & Skills</h2>
              </Link>
            </h2> */}
      </div>
    </nav>
  )
}

export default Nav