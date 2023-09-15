import React, { useState, useEffect } from 'react'
import './App.css';
import LoadingPg from './Components/Loading/Loading'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'))
const AboutMe = React.lazy(() => import('./pages/AboutMe'))

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

  return (
    <Router >
      {
        loading ?
          (
            <LoadingPg></LoadingPg>
          ) : (

            <div className="App">
              <Header
              ></Header>
              <div>
                <Routes>
                  <Route
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