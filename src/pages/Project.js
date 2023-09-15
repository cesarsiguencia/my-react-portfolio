import React, { useEffect, useState, useRef } from "react";
import { opacityEffect } from "../utils/helpers";
import GitHubLogo from '../media/icons/github.svg'

const projectPg = ({ singleApp }) => {

    const [returnedName, setReturnedName] = useState()

    useEffect(() => {
        const lowercaseName = singleApp.name.toLowerCase()
        const formattedNames = singleApp.name.split('-')
        const displayedNames = formattedNames.join(' ')
        console.log(displayedNames)
        setReturnedName(displayedNames)
    }, [])

    const projectOpa = useRef()
    useEffect(() => {
        const appPage = document.querySelector('#project-pg')
        opacityEffect(appPage, projectOpa)
    }, [])

    return (
        <div className='App-body' ref={projectOpa}>
            <div className="body-divs" id='project-pg'>
                {
                    returnedName &&
                    <>
                    <div  >
                        <div className='title-block left'>
                            <div className='title'>
                                <h2>{returnedName}</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <h4 className="left">Role: {singleApp.developer}</h4>

                                <p className="body-texts left">{singleApp.description}</p>

                                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                    {singleApp.technologies.map((tech, i)=>{
                                        return(
                                            <div key={i} style={{margin:'5px 5px'}}>
                                                 <p className='technologies-names'>{tech}</p>
                                            </div>
                                           
                                        )
                                    })}
                                   
                                </div>

                                <div className="left">
                                    <a target='_blank' href={`https://github.com/cesarsiguencia/${singleApp.name}`}>
                                    <img alt='github logo' src={GitHubLogo} style={{width: '75px', height: '75px', borderRadius: '100px'}}></img>

                                    </a>
                                   
                                </div>

                                <div>
                                    {singleApp.heroku_cred && 
                                        <div>
                                            <h5 className="left">This app requires credentials!</h5>
                                            <p className="body-texts left">To experience all the features of the app, create a new account or use the sample credentials of the test account below:</p>
                                            <br/>
                                            <p className="body-texts left">Username: <span className="bold red-font">{singleApp.heroku_cred.username}</span></p>
                                            <p className="body-texts left"> Password or Zipcode: <span className="bold red-font">{singleApp.heroku_cred.password}</span></p>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="col">
                                <img style={{ height: '600px', width: '450px' }} alt={`Full view of the ${returnedName} app`} src={require(`../media/app-images/${singleApp.name}.avif`)}></img>
                            </div>

                        </div>
                    </div>
                    </>
                }
            </div>
        </div>


    )
}

export default projectPg


