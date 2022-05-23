import React, { useState } from 'react'
import './App.css';

import Nav from './Components/Nav/Nav'

import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Home from './pages/Home'
import Resume from './pages/Resume'
// import Portfolio from './Components/Portfolio/Portfolio';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [contactSelected, setContactSelected] = useState(false); 

  const [portfolioSelected, setPortfolioSelected] = useState(false);


  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div className="Header-contents">

        
        <p>
          Cesar Siguencia
        </p>
        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          // portfolioSelected={portfolioSelected}
          // setPortfolioSelected={setPortfolioSelected}
          >


        </Nav>
        </div>
      </header>
      <div className="App-body">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
    
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />


          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/resume"
            element={<Resume />}
          />

        </Routes>
          
      </div>


      <footer className="App-footer">
        <a href="https://github.com/cesarsiguencia">GITHUB: cesarsiguencia</a> <a href="https://www.linkedin.com/in/cesar-siguencia-b71aabba">LINKEDIN: Cesar Siguencia</a>
      </footer>
    </div>
    </Router>
  );
}

export default App;

//        {/* <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a> */}