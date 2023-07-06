import React, { useState, useEffect } from 'react'

import Nav from '../../Components/Nav/Nav'

import { Link } from 'react-router-dom'

const Header = () => {

  const [titleClicked, setTitleClicked] = useState()
  const [navClicked, setNavClicked] = useState()





  // useEffect(() => {

  //   const url = window.location.href.split('/')
  //   const lastIndex = url[url.length - 1] 
  
  //   console.log(lastIndex)

  //   if(lastIndex !== 'my-react-portfolio'){
  //     console.log('not home!!')
  //     setUrlIsSub({
  //       condition: true,
  //       page: lastIndex
  //     })
  //   } else {
  //     setUrlIsSub({
  //       condition:false,
  //       page: null
  //     })
  //   }
  //   console.log(urlIsSub, 'headerpage')
  // })


  // const url = window.location.href.split('/')
  // const lastIndex = url[url.length - 1] 

  // console.log(lastIndex)
  
  // if(lastIndex !== 'my-react-portfolio'){
  //   console.log('not home!!')
  //   setUrlIsSub({
  //     condition: true,
  //     page: lastIndex
    
  //   })

  // } else {
  //   setUrlIsSub({
  //     condition:false,
  //     page: null
  //   })

  // }






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
          // setTitleClicked={setTitleClicked}
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
