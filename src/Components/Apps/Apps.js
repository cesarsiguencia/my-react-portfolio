import React from 'react';

    const displayApp = () => {
        const applications = [
            {   
                name: 'Weather-Dashboard', 
                description: 'Need to check full weather conditions of any city quickly? Use this application that will give you just that along with the temperature, wind speed, UV levels, and humidity. The user can also view the conditions up to five days from today. A convienient city search history is displayed for the user to compare conditions across multiple conditions. Application uses local storage and APIs from openweathermap.org'
            },
            { 
                name: 'Taskmaster-Pro',
                description: 'Take notes the easy way using Taskmaster Pro, which uses Bootstrap and Jquery technologies. Created tasks can be edited, deleted, and assigned due dates which is color coded to show if a due date is approaching or past due. Tasks can also be dragged around the application interface to various statuses, including "Completed", "In Progress" or deleted to the trash bin below.'
            },
            {
                name: 'Introductory-Javascript-Quiz',
                description: 'Test your javascript skills with this quick quiz I built! Test yourself as many times as you would like as the app saves your scores at the end of each quiz. But hurry, you only have 60 seconds to answer as many javascript questions as possible. Happy studying!'
            },
            // {
            //     name:'',
            //     description:''
            // }
        ]

        const generate = applications.map((app) => {
            var lowercaseName = app.name.toLowerCase()

            return(

                <div className="app-box">
                    <div className="container_wrapper">
                        <div className="app-description">
                            <h3>{app.name}</h3>
                            <p>Sole developer</p>
                        </div>
                    </div>
                    <div className="container_wrapper">
                        <div className="app_image">
                            <a target="_blank" href={`https://cesarsiguencia.github.io/${lowercaseName}`} >
                                <img className="container--picture" src= {require(`../../media/app-images/${app.name}.png`)} >
                                </img>  
                                <div className="container--overlay">
                                    <p className="container---blurb"> {app.description}</p>  
                                </div> 
                            </a>
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div>{generate}</div>
        )



     
}
export default displayApp;