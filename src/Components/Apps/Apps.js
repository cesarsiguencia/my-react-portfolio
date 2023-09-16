import React, { useEffect } from 'react';
// import github from '../../media/icons/github-white.png'

import {Link} from 'react-router-dom'

const displayApp = ({applications, setProjectTrigger, setDetectProjectBtnId}) => {

    const generate = applications.map((app, i) => {
        const lowercaseName = app.name.toLowerCase()
        const formattedNames = app.name.split('-')
        const displayedNames = formattedNames.join(' ')

        const projectHandler = (e, projectId) =>{
            console.log(e.target)
            const projectBtn = document.querySelector(`[project-id='${projectId}']`)

            if(projectBtn){
                projectBtn.style.display = 'flex'
                projectBtn.style.height = '100%'
                projectBtn.style.width = '100%'
            }

            setDetectProjectBtnId(projectId)
            setProjectTrigger(true)
        }

        return (

            <div className="app-box" key={i}  onClick={(e)=>projectHandler(e,i)} >
                <div className="container_wrapper">
                    <div className="app_image">
                        <div>
                            <img alt={`A screenshot of ${app.name} app`} className="container--picture" src={require(`../../media/app-images/${app.name}.avif`)}  >
                            </img>


                            <div className='container--overlay' app-id={i}>
                                <div className='container--content' style={{ color: 'white' }}>

                                    <p className='h5'>{displayedNames}</p>

                                    <p className='body-texts'>{app.short_des}</p>
                                </div>
                            </div>

                            <div className='app-options-box' project-id={i}>
                                <a className='app-options align-ver center' style={{backgroundColor:'rgba(20, 194, 204, 0.8)'}}  target='_blank' href={app.url} >
                                    <div className='projectBtns'>
                                    <p className='links h3'>Deploy App</p>
                                    </div>
                                    
                                </a>

                                <Link to={`/my-react-portfolio/${app.name}`} className='app-options align-ver center' style={{backgroundColor:'rgba(255, 165, 0, 0.8)'}}>
                                    <div className='projectBtns'>
                                    <p className='links h3'>Learn More</p>
                                    </div>
                                    
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    })

    return (
        <div className='row projects-display'>
            {generate}
        </div>
    )
}
export default displayApp;