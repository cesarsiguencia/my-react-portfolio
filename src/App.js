import React, { useState, useEffect } from 'react'
import './App.css';
// import $ from 'jquery'
import LoadingPg from './Components/Loading/Loading'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'))
const AboutMe = React.lazy(() => import('./pages/AboutMe'))
const Portfolio = React.lazy(() => import('./Components/Home-Blocks/Portfolio'))
const Contact = React.lazy(() => import('./Components/Home-Blocks/Contact'))
// const Footer = React.lazy(()=> import('./Components/Footer/Footer'))

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 1000)

    setTimeout(() => {
      const application = document.querySelector('.App')
      if (application) {
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


  const [portfolioClicked, setPortfolioClicked] = useState(false)

  return (
    <Router >
      {
        loading ?
          (
            <LoadingPg></LoadingPg>
          ) : (

            <div className="App">
              <Header
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                portfolioClicked={portfolioClicked}
              ></Header>
              <div>
                <Routes>
                  <Route setPortfolioClicked={setPortfolioClicked}
                    path="/my-react-portfolio"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}
                    ><Home /></React.Suspense>}
                  />

                  <Route
                    path="/my-react-portfolio#about"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}><Home /></React.Suspense>}
                  />


                  <Route
                    path="/my-react-portfolio/aboutme"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}><AboutMe /></React.Suspense>}
                  />

                  {/* <Route
                    path="/my-react-portfolio/portfolio"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}><Portfolio /></React.Suspense>}
                  /> */}
                  {/* <Route
                    path="/my-react-portfolio/contact"
                    element={<React.Suspense fallback={<LoadingPg></LoadingPg>}><Contact /></React.Suspense>}
                  /> */}
                
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