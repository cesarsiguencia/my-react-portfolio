import React, { useEffect, useState, useRef } from "react";
import { opacityEffect } from "../utils/helpers";
import GitHubLogo from '../media/icons/github.svg'
import LaunchLogo from '../media/icons/launch.avif'
import BodyBtn from '../Components/Body-Btns/Body-Btns'

const projectPg = ({ singleApp, bodyBtnsData }) => {

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

                            <div className="row singleApp-block">
                                <div className="col align-ver">
                                    <div>
                                        <h4 className="left">Role: {singleApp.developer}</h4>

                                        <p className="body-texts left">{singleApp.description}</p>

                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {singleApp.technologies.map((tech, i) => {
                                                return (
                                                    <div key={i} style={{ margin: '5px 5px' }}>
                                                        <p className='technologies-names'>{tech}</p>
                                                    </div>
                                                )
                                            })}

                                        </div>

                                        <div>
                                            <a target='_blank' style={{display:'inline-block'}} href={`https://github.com/cesarsiguencia/${singleApp.name}`}>
                                                <div className="home-btns center" style={{ color: 'black', display: 'flex', width: '300px', margin: '15px auto' }}>

                                                    <p className="h5">Visit GitHub Repository</p>
                                                    <div className="align-ver">
                                                        <img alt='github logo' src={GitHubLogo} style={{ display: 'block', height: '35px', margin: '0 10px' }}></img>
                                                    </div>
                                                </div>
                                            </a>

                                            <a target='_blank'  style={{display:'inline-block'}} href={singleApp.url}>
                                                <div className="home-btns center" style={{ color: 'black', display: 'flex', width: '300px', margin: '15px auto' }}>

                                                    <p className="h5">Deploy App</p>
                                                    <div className="align-ver">
                                                        <img alt='a launch logo' src={LaunchLogo} style={{ display: 'block', height: '35px', margin: '0 10px' }}></img>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div style={{ padding: '15px 10px', border: '5px solid rgb(167, 2, 2)'}}>
                                            {singleApp.heroku_cred &&
                                                <div >
                                                    <p className="h5 left">This app requires credentials!</p>
                                                    <p className="body-texts left">To experience all the features of the app, <span className="red-font bold">create a new account</span> or <span className="red-font bold">use the sample credentials </span>of the test account below:</p>

                                                    <div style={{ margin: '15px auto' }}>
                                                        <p className="body-texts left bold">Username: <span className="green-font">{singleApp.heroku_cred.username}</span></p>
                                                        <p className="body-texts left bold"> Password or Zipcode: <span className="green-font">{singleApp.heroku_cred.password}</span></p>
                                                    </div>


                                                </div>
                                            }
                                        </div>

                                    </div>

                                </div>

                                <div className="col align-ver center">
                                    <div className='align-ver'>
                                    <div className="align-ver single-app-image-div">
                                        <img className='single-app-image' alt={`Full view of the ${returnedName} app`} src={require(`../media/app-images/${singleApp.name}.avif`)}></img>
                                    </div>
                                    </div>
                                 
                                    
                                </div>

                            </div>
                        </div>
                    </>
                }
                <br/>
                <div className="row">
                    <BodyBtn toPage={bodyBtnsData}></BodyBtn>
                </div>
            </div>
        </div>


    )
}

export default projectPg


