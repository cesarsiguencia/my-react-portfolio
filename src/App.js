import React, { useState, useEffect } from 'react'
import './App.css';
import './loader.css'
// import $ from 'jquery'
import LoadingPg from './Components/Loading/Loading'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'))
const AboutMe = React.lazy(() => import('./pages/AboutMe'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Resume = React.lazy(() => import('./pages/Resume'))
// const Footer = React.lazy(()=> import('./Components/Footer/Footer'))

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 1000)

    setTimeout(()=>{
      const application = document.querySelector('.App')
      if(application){
        application.style.opacity = 1

      }
    }, 1200)
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
      name: "Resume & Skills"
    }
  ]

  const [currentPage, setCurrentPage] = useState(pages)

  var grayScaleLoad = function () {
    const theBody = document.querySelector('.body-divs')
    const homeBody = document.querySelector('.home')

    if (theBody) {
      theBody.addEventListener("touchmove", () => {
        theBody.style = 'filter: grayscale(0%)';
        theBody.style.opacity = 1

      })
      theBody.addEventListener("mouseover", () => {
        theBody.style = 'filter: grayscale(0%)';
        theBody.style.opacity = 1
      })
      theBody.addEventListener("mouseout", () => {
        theBody.style = 'filter: grayscale(100%)'
        theBody.style.opacity = 1
      })
    }

    if (homeBody) {
      homeBody.style.opacity = 1
    }
  }

  var pageEffects = function () {
    window.scrollTo(0, 0)


    const bodyDiv = document.querySelector('.body-divs')
    if (bodyDiv) {
      bodyDiv.style.opacity = 1
    }
  }

  const [portfolioClicked, setPortfolioClicked] = useState(false)

  return (
    <Router >
      {
        loading ?
          (
            <LoadingPg></LoadingPg>
          ) : (

            <div className="App" onLoad={pageEffects}>
              <Header
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                portfolioClicked={portfolioClicked}
              ></Header>
              <div onLoad={grayScaleLoad}>
                <Routes>
                  <Route setPortfolioClicked={setPortfolioClicked}
                    path="/my-react-portfolio"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}
                    ><Home /></React.Suspense>}
                  />
                  <Route
                    path="/my-react-portfolio/aboutme"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}><AboutMe /></React.Suspense>}
                  />
                  <Route
                    path="/my-react-portfolio/portfolio"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}><Portfolio /></React.Suspense>}
                  />
                  <Route
                    path="/my-react-portfolio/contact"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}><Contact /></React.Suspense>}
                  />
                  <Route
                    path="/my-react-portfolio/resume"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}><Resume /></React.Suspense>}
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