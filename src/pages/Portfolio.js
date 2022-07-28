import React from 'react'

import Apps from '../Components/Apps/Apps'

const Portfolio = () => {

    return(
        <div className="body-divs">
            <h3>Portfolio</h3>
            <p className="body-texts">Hover over image to see a short description from one of my featured apps. 
            Click on the image below to deploy application link.</p>

            <div>
                <div className="app-box">
                    <div className="container_wrapper">
                        <div className="app-description">
                            <h5>NFT-y</h5>
                            <p>Back end developer</p>
                        </div>
                    </div>
                    <div className="container_wrapper">
                        <div className="app_image">
                 
                            <img className="container--picture" src={require(`../../src/media/app-images/nft-y.png`)}>
                            </img>  
                            <div className="container--overlay">
                                <p className="container---blurb"> This is a test for NFT-Y, lets see if this actually works, and if does, I'm going to be so phycsed! Please do!</p>  
                            </div> 
                                <a target="_blank" href='https://nft-y.herokuapp.com/'></a>
                        </div>
                    </div>
                  


                </div>


                
            </div>

            <div>
                <div class="app-box">
                    <div>
                         <h5 className='app-name'>Bootcamp-Social</h5>
                    </div>
                    <div className="container_wrapper">
                        <a target="_blank" href='https://bootcamp-social.herokuapp.com/' >
                            <img  className="container" src={require(`../../src/media/app-images/Bootcamp-Social.png`)} width="100%"></img>   
                            <div className="container--overlay">
                                <p className="container---blurb"> This is a test for NFT-Y, lets see if this actually works, and if does, I'm going to be so phycsed! Please do!</p>  
                            </div> 
                        </a>
                    </div>
                  
        
                </div>


                
            </div>
            <Apps ></Apps>
            
        </div>
    )
}

export default Portfolio