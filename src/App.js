import React, { useState } from 'react'
import './App.css';


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
      <Footer></Footer>

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