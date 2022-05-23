import React, { useState } from 'react'
import './App.css';

import Nav from './Components/Nav/Nav'

import Contact from './Components/Contact/Contact'
// import Portfolio from './Components/Portfolio/Portfolio';

function App() {

  const [contactSelected, setContactSelected] = useState(false); 

  const [portfolioSelected, setPortfolioSelected] = useState(false);


  return (
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
            <p> test</p>
        
        
            <Contact contactSelected={contactSelected}></Contact>
          



   


            
        


      </div>


      <footer className="App-footer">
        <a href="https://github.com/cesarsiguencia">GITHUB: cesarsiguencia</a> <a href="https://www.linkedin.com/in/cesar-siguencia-b71aabba">LINKEDIN: Cesar Siguencia</a>
      </footer>
    </div>
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