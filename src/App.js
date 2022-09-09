import React, { useState } from 'react'
import './App.css';
import './loader.css'
import $ from 'jquery'


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

  $(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow")
  })

  


  return (


    
    <Router >




      
    <div className="App" >







      <Header></Header>
      <div className="App-body">
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

    <div className="loader-wrapper" >
      <div className="loader-box">
        <div className="loader">

        
        </div>
        <br/>
        <h3>I am loading!</h3>
      </div>
   

    </div>
    </Router>
  );
}

export default App;