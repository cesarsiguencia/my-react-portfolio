import React from 'react'
import resume from 'resume.png'

const Resume = () => {

    return(
        <div>
            <p>Resume!!!</p>
            <a href={resume} download><img src={resume} width="50"/>
            </a>
        </div>
    )
}

export default Resume