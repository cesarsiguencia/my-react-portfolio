import React from 'react'
import ContactBlock from '../Icons/Contact-Icons'

const Footer = () => {
    return(
        <footer className="App-footer">
          <div className="footer-font align-ver center">
            <p className="body-texts">Developed By César Siguencia using React</p>
          </div>

          <ContactBlock></ContactBlock>

          <div className="footer-font align-ver center">
            <p className="body-texts">©Copyright 2023, All Rights Reserved</p>
          </div>
      </footer>
    )
}

export default Footer