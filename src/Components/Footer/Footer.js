import React from 'react'

import github from '../../media/icons/github.svg'
import linkedin from '../../media/icons/linkedin.png'
import instagram from '../../media/icons/instagram.png'


const Footer = () => {
    return(
        <footer className="App-footer">
          <div className="footer-font">
            <p>By Cesar Siguencia,  Powered by React</p>
          </div>
          
          <div className="logos">
            <a href="https://github.com/cesarsiguencia" target="_blank" rel="noopener noreferrer">
              <img src={github} width="50"/>
            </a> 
            <a href="https://www.instagram.com/cezzienyc" target="_blank" rel="noopener noreferrer">
              <img src={instagram} width="50"/>
            </a>
            <a href="https://www.linkedin.com/in/c%C3%A9sar-siguencia-b71aabba/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} width="50"/>
            </a>
          </div>

          <div className="footer-font">
            <p>©Copyright 2022, All Rights Reserved</p>
          </div>
      </footer>
    )
}

export default Footer