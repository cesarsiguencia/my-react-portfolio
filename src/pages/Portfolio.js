import React from 'react'

import Apps from '../Components/Apps/Apps'

const Portfolio = () => {

    return(
        <div className="body-divs">
            <h3>Portfolio</h3>
            <p className="body-texts">Click on the image below to deploy application link</p>

            <div>
                <div>
                    <a  target="_blank" href='https://nft-y.herokuapp.com/' >
                        <img  className="container" src={require(`../../src/media/app-images/nft-y.png`)} width="45%"></img>    
                        
                    </a>
                    <div>
                        <h5 className='app-name'>NFT-y</h5>
                    </div>

                </div>


                
            </div>

            <div>
                <div>
                    <a  target="_blank" href='https://bootcamp-social.herokuapp.com/' >
                        <img  className="container" src={require(`../../src/media/app-images/Bootcamp-Social.png`)} width="45%"></img>    
                        
                    </a>
                    <div>
                        <h5 className='app-name'>Bootcamp-Social</h5>
                    </div>

                </div>


                
            </div>
            <Apps ></Apps>
            
        </div>
    )
}

export default Portfolio