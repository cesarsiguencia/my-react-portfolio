import React, { useState, useEffect, useRef, useCallback} from 'react'
import './App.css';
import './loader.css'
// import $ from 'jquery'


import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Home from './pages/Home'
import Resume from './pages/Resume'
import Footer from './Components/Footer/Footer'
// import { loader } from './utils/helpers'
// import Portfolio from './Components/Portfolio/Portfolio';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';



function App() {

  // $(window).on("load", function(){
  //   $(".loader-wrapper").fadeOut("slow")
  // })

  // $(window).on("mobileinit", function(){
  //   $(".loader-wrapper").fadeOut("slow")
  // })



  // window.addEventListener("load", () => {
  //   const LoadAni = document.querySelector('.loader-wrapper')
  //   LoadAni.style.opacity = 0
  // } )



  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 2000)

  }, [])

  const pages = [
    {
      name: "About Me"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name:"Resume & Skills"
    }
  ]

  const [currentPage, setCurrentPage] = useState(pages)

  var grayScaleLoad = function(){
    const image = document.querySelector('.profile')

    if(image){
      const theBody = document.querySelector('.App-body')

      theBody.addEventListener("touchmove", ()=>{
        image.style = 'filter: grayscale(0%)'
      })
      theBody.addEventListener("mouseover", ()=>{
        image.style = 'filter: grayscale(0%)'
      })


    }
  }


  var transparentEffect = function(){
    const bodyDiv = document.querySelector('.body-divs')
    if(bodyDiv){
      bodyDiv.style = 'opacity: 1'
    }
  }



  return (
    <Router >
      {
        loading ?
          (
            <div className="loader-wrapper">
              <div className="loader-box">
                <div className="loader">
                </div>
                <br />
                <p className='h1 links'>I am loading!</p>
              </div>
            </div>

          ) : (
            <div className="App" onLoad={transparentEffect}>
              <Header
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              ></Header>
              <div className="App-body" onLoad={grayScaleLoad} >
                <Routes>
                  <Route
                    path="/my-react-portfolio"
                    element={<Home />}
                  />

                  <Route

                    path="/my-react-portfolio/aboutme"
                    element={<AboutMe />}
                  />

                  <Route
                    path="/my-react-portfolio/portfolio"
                    element={<Portfolio />}
                  />


                  <Route
                    path="/my-react-portfolio/contact"
                    element={<Contact />}
                  />

                  <Route
                    path="/my-react-portfolio/resume"
                    element={<Resume />}
                  />
                </Routes>
              </div>
              <Footer></Footer>
            </div>
          )
      }
    </Router>
  );
}

export default App;