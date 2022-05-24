import React from 'react'

import github from '../../media/icons/github.svg'
import linkedin from '../../media/icons/linkedin.png'
import instagram from '../../media/icons/instagram.png'


const Footer = () => {
    return(
        <footer className="App-footer">
          <p>Cesar Siguencia 2022</p>
          <div className="logos">
            <a href="https://github.com/cesarsiguencia" target="_blank" rel="noopener noreferrer">
              <img src={github} width="50"/>
            </a> 
            <a href="https://www.instagram.coom/cezzienyc" target="_blank" rel="noopener noreferrer">
              <img src={instagram} width="50"/>
            </a>
            <a href="https://www.linkedin.com/in/cesar-siguencia-b71aabba" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} width="50"/>
            </a>
          </div>
          <p>Copyright, All Rights Reserved</p>

      </footer>
    )
}

export default Footer