import React from 'react';

import github from '../../media/icons/github-white.png'

    const displayApp = () => {
        const applications = [
            // {   
            //     name: 'Weather-Dashboard', 
            //     description: 'Need to check full weather conditions of any city quickly? Use this application that will give you just that along with the temperature, wind speed, UV levels, and humidity. The user can also view the conditions up to five days from today. A convienient city search history is displayed for the user to compare conditions across multiple conditions. Application uses local storage and APIs from openweathermap.org',
            //     technologies: 'Javascript, HTML, CSS, Moment.js, Bootstrap, APIs',
            // },
            // {
            //     name:'Show-Me-My-Schedule',
            //     description:'Stay organized with all your tasks spread out throughout the day in traditional 9-5 blocks outlining your day. Blocks are color coded to show past, present, and future. Immediately edit a task or clear a task by saving it. ',
            //     technologies: 'Bootstrap, JavaScript, JQuery, Moment.js, CSS'
            // },
            // {
            //     name: 'Introductory-Javascript-Quiz',
            //     description: 'Test your javascript skills with this quick quiz I built! Test yourself as many times as you would like as the app saves your scores at the end of each quiz. But hurry, you only have 60 seconds to answer as many javascript questions as possible. Happy studying!',
            //     technologies: 'Javascript, HTML, CSS'
            // },
            // {
            //     name: 'Save-My-Notes',
            //     description: 'A classic note taking app that uses back end technologies to save your notes in their appropriate order.',
            //     technologies: 'NoSQL, Sequelize, Express, RESTful route'
            // },
            {
                name: '10000-Days',
                description: "A full stack website all about my special event I'm hosting for when I turn 10,000 days old. Learn more about the venue of choice and RSVP to save your spot! In addition, interact with invited guests who have confirmed their registation by sharing posts and loving other guests posts for users to hype up the event until the date arrives! Have fun responsibily!.",
                technologies: 'Express, Sequelize, MySQL, Bcrypt, Handlebars, Dotenv, HTML, CSS, Javascript',
                url: 'https://10000-days-production.up.railway.app/home',
                developer:'Sole Developer'
            },
            {
                name: 'Technify-In-Python',
                description: "A simple and intuitive social media website for tech enthusiasts to share valuable links with each other. Users can sign up to create, like, and comment on posts. Users have the freedom to delete and any of their posts while being logged in.",
                technologies: 'Python, Flask, PyMySQL, SQLAlchemy, Bcrypt, Dotenv, Gunicorn, HTML, CSS, Javascript',
                url: 'https://technify-by-cs.up.railway.app/',
                developer:'Sole Developer'
            },
            { 
                name: 'Taskmaster-Pro',
                description: 'Take notes the easy way using Taskmaster Pro, which uses Bootstrap and JQuery technologies. Created tasks can be edited, deleted, and assigned due dates which is color coded to show if a due date is approaching or past due. Tasks can also be dragged around the application interface to various statuses, including "Completed", "In Progress" or deleted to the trash bin below.',
                technologies: 'Javascript, JQuery, Moment.js,, Bootstrap, HTML, CSS',
                url: 'https://cesarsiguencia.github.io/taskmaster-pro/',
                developer:'Sole Developer'
            },
            {
                name: 'Dine-N-Wine',
                description: 'An application representing multiple hot plate recipes from all over the world! Users are able to save receipes that they like under "Favorites", filter receipes by category, or allow the application to pick one by random. In addition, users can look up for macronutrient information, ingredients, and amount per ingredient needed for the recipe that they choose.',
                technologies: 'HTML, CSS, Javascript, APIs',
                url: 'https://cesarsiguencia.github.io/dine-n-wine/',
                developer:' Front End Developer'
            }
        ]

        const generate = applications.map((app) => {
            var lowercaseName = app.name.toLowerCase()

            return(

                <div className="app-box" key={app.name}>
                    <div className="container_wrapper">
                        <div className="container--description">
                            

                            <div className="project-title">
                                <h3 className="project-title--frame">{app.name}</h3>
                            </div>

                            <h5>{app.developer}</h5>
                            <div>
                                <div className="developer-technologies">
                                    <p className="body-texts">{app.technologies}</p>
                        
                                </div>
                                <div className="developer-github">
                                    <a target="_blank" href={`https://github.com/cesarsiguencia/${lowercaseName}`}>
                                            <img className="github-links"  src={github}>
                                            </img>
                                    </a>
                                </div>
                            </div>

                       
                            
                        </div>
                    </div>
                    <div className="container_wrapper">
                        <div className="app_image">
                            <a target="_blank" href={app.url} >
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