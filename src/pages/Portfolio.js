import React from 'react'

import Apps from '../Components/Apps/Apps'

import github from '../media/icons/github-white.png'


const Portfolio = () => {

    return(
        <div className="body-divs">
            <h3>Portfolio</h3>
            <p className="body-texts">Hover over image to see a short description from one of my featured apps. 
            Click on the image below to deploy application link. Click corresponding github logo to be redirected to it's github repository.</p>

   
                <div className="app-box">
                    <div className="container_wrapper">
                        <div className="app-description">
                            
                            <div className="project-title">
                            <h3>NFT-y</h3>
                                <a target="_blank" href="https://github.com/K-G-J/nft-y">
                                    <img className="github-links" width="15%" src={github}>
                                    </img>
                                </a>
                            </div>
                            <p>Back end developer</p>
                            <p className="body-texts">MySQL2, Sequelize, Node.js, Bcrypt, Express, RESTful API's, Dotenv, Env</p>
                            
                            <a target="_blank" href="https://github.com/K-G-J/nft-y">
                            
                            </a>
                        </div>
                    </div>
                    <div className="container_wrapper">
                        <div className="app_image">
                            <a target="_blank" href='https://nft-y.herokuapp.com/'>
                                <img className="container--picture" src={require(`../../src/media/app-images/nft-y.png`)}>
                                </img>  
                                <div className="container--overlay">
                                    <p className="container---blurb">Browse through some of the most popular trending NFT groups at the moment, including Bored Ape Yacht Club, and learn about how these new artwork technologies work! Create an account to save NFTs to your favorites and chat with other members about NFT buying and selling opportunities. </p>  
                                </div> 
                            </a>
                        </div>
                    </div>
                </div>

                
 

  
                <div className="app-box">
                    <div className="container_wrapper">
                        <div className="app-description">
                            

                            <div className="project-title">
                                <h3>Dine-N-Wine</h3>
                                <a target="_blank" href="https://github.com/cesarsiguencia/dine-n-wine">
                                    <img className="github-links" width="15%" src={github}>
                                    </img>
                                </a>
                            </div>

                            <p>Front end developer</p>
                            <p className="body-texts">HTML, CSS, Javascript, APIs</p>
                        </div>
                    </div>
                    <div className="container_wrapper">
                        <div className="app_image">
                            <a target="_blank" href='https://cesarsiguencia.github.io/dine-n-wine/'>
                                <img className="container--picture" src={require(`../../src/media/app-images/dine-n-wine.png`)}>
                                </img>  
                                <div className="container--overlay">
                                    <p className="container---blurb"> An application representing multiple hot plate recipes from all over the world! Users are able to save receipes that they like under "Favorites", filter receipes by category, or allow the application to pick one by random. In addition, users can look up for macronutrient information, ingredients, and amount per ingredient needed for the recipe that they choose.</p>  
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