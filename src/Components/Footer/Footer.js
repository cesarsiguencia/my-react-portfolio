import React from 'react'
import github from '../../media/icons/github.svg'
import linkedin from '../../media/icons/linkedin.png'
import ClearMail from '../../media/icons/clear-mail.png'


const Footer = () => {
    return(
        <footer className="App-footer">
          <div className="footer-font align-ver center">
            <p className="body-texts">Developed By César Siguencia using React</p>
          </div>
          
          <div className="footer-icons">
            <a className="icon-align" href="https://github.com/cesarsiguencia" target="_blank" rel="noopener noreferrer">
              <img className="footer-icons-img" src={github} width="50"/>
            </a> 
            <a className="icon-align" href="mailto:cd.siguencia@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className="footer-icons-img" src={ClearMail} width="50"/>
            </a>
            <a className="icon-align" href="https://www.linkedin.com/in/cesar-siguencia/" target="_blank" rel="noopener noreferrer">
              <img className="footer-icons-img" src={linkedin} width="50"/>
            </a>
          </div>

          <div className="footer-font align-ver center">
            <p className="body-texts">©Copyright 2023, All Rights Reserved</p>
          </div>
      </footer>
    )
}

export default Footer