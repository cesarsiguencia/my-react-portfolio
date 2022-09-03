import React, { useState } from 'react'
import './App.css';

import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Home from './pages/Home'
import Resume from './pages/Resume'
import Footer from './Components/Footer/Footer'
// import Portfolio from './Components/Portfolio/Portfolio';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {


  return (
    <Router>
    <div className="App">
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
    </Router>
  );
}

export default App;