import React from 'react';
import github from '../../media/icons/github-white.png'

const displayApp = () => {
    const heroku_about = "Create an account to test all my app features or login with the sample credentials below:"

    

    const heroku_disclaimer = "In rare cases, Heroku apps that have been inactive for some time may return an Internal Server Error on the first try. Please don't be discouraged! Simply reload the app again no more than five times. Your understanding is greatly appreciated in advance!"

    const applications = [
        {
            name: 'iCanFixIt',
            description: "This is a full stack MERN website for my side business fixing broken electronic devices. From a young age, I've been fascinated with tearing down my portable devices and have decided to fix or upgrade a few I had in storage by myself. Eventually, others noticed and wanted my services on their devices. I specialize on a variety of Apple products with screen and battery replacements, but not limited to those services.",
            technologies: 'MERN model, MongoDB, Express, React, Node, Mongoose, React Bootstrap, React Router Dom, Dotenv, Concurrently, Cloudinary API Images, CSS, Javascript',
            url: 'https://icanfixit-by-cs-a17c7a1ff29b.herokuapp.com/',
            developer: 'Sole Developer',
            heroku_cred: {
                username: 'cez@gmail.com',
                password: '10001'
            }
        },
        {
            name: '10000-Days',
            description: "A full stack website all about my special event I'm hosting for when I turn 10,000 days old. Learn more about the venue of choice and RSVP to save your spot! Interact with invited guests who have confirmed their registation by sharing posts and loving posts to hype up the excitement for this once in a lifetime night! Login in with the sample credentials provided!",
            technologies: 'MVC model, Express, Sequelize, PostgreSQL, Handlebars, Node, Bcrypt, Dotenv, link-preview-js, HTML, CSS, Javascript',
            url: 'https://cs-10000-days-33ee2045b3a6.herokuapp.com/',
            developer: 'Sole Developer',
            heroku_cred: {
                username: 'testbot@gmail.com',
                password: 'password'
            }
        },
        {
            name: 'Technify-In-Python',
            description: "A simple and intuitive social media website for tech enthusiasts to share valuable links with each other. Users can sign up to create, like, and comment on posts. Users have the freedom to delete and edit any of their posts while being logged in. Login in with the sample credentials provided!",
            technologies: 'Python, Flask, PyMySQL, SQLAlchemy, Bcrypt, Dotenv, Gunicorn, HTML, CSS, Javascript',
            url: 'https://technify-in-python-cce9848f5fbf.herokuapp.com/',
            developer: 'Sole Developer',
            heroku_disclaimer: heroku_disclaimer,
            heroku_cred: {
                username: 'testbot@gmail.com',
                password: 'password'
            }
        },
        {
            name: 'Taskmaster-Pro',
            description: 'Take notes the easy way using Taskmaster Pro. Created tasks can be edited, deleted, and assigned due dates which is color coded to show if a due date is approaching or past due. Tasks can also be dragged around the application interface to various statuses, including "Completed", "In Progress" or the trash bin.',
            technologies: 'Javascript, JQuery, Moment.js,, Bootstrap, HTML, CSS',
            url: 'https://cesarsiguencia.github.io/taskmaster-pro/',
            developer: 'Sole Developer'
        },
        {
            name: "Dine-N-Wine",
            description: 'An application representing multiple hot plate recipes from all over the world! Users are able to save receipes under "Favorites", filter receipes by category, or allow the application to pick one by random. In addition, users can look up for macronutrient information, ingredients, and dosages.',
            technologies: 'HTML, CSS, PureCSS, Javascript, APIs',
            url: 'https://cesarsiguencia.github.io/dine-n-wine/',
            developer: 'GROUP PROJECT: Front End Developer'
        },
        {
            name: 'Weather-Dashboard',
            description: 'Need to check full weather conditions of any city quickly? Use this application that will give you just that along with the temperature, wind speed, UV levels, and humidity. The user can also view the conditions up to five days from today. A convienient city search history is displayed for the user to compare conditions across multiple conditions.',
            technologies: 'Javascript, HTML, CSS, Moment.js, Bootstrap, APIs',
            url: 'https://cesarsiguencia.github.io/weather-dashboard/',
            developer: 'Sole Developer'
        }
    ]

    const generate = applications.map((app) => {
        const lowercaseName = app.name.toLowerCase()
        const formattedNames = app.name.split('-')
        const displayedNames = formattedNames.join(' ')

        return (

            <div className="app-box" key={app.name}>
                <br />
                <div className="container_wrapper">
                    <div className="container--description">


                        <div className="project-title">
                            <h3 className="project-title--frame">{displayedNames}</h3>
                        </div>

                        <h5>{app.developer}</h5>
                        <div>
                            <div className="developer-technologies">
                                <p className="body-texts">{app.technologies}</p>

                            </div>

                            {
                                app.heroku_disclaimer &&
                                (
                                    <div className="developer-technologies">
                                        <p className='body-texts-heroku'>{app.heroku_disclaimer}</p>
                                    </div>              
                                )
                            }

                            {
                                app.heroku_cred &&
                                (
                                    <div className="developer-technologies">
                                        <p className='body-texts-creds' style={{color:'green'}}>{heroku_about}</p>
                                        <p className='body-texts-creds'>Username: {app.heroku_cred.username}</p>
                                        <p className='body-texts-creds'>Password or Zipcode: {app.heroku_cred.password}</p>
                                    </div>              
                                )
                            }



                           

                            <div className="developer-github">
                                <a target="_blank" href={`https://github.com/cesarsiguencia/${lowercaseName}`}>
                                    <img className="github-links" src={github}>
                                    </img>
                                </a>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="container_wrapper">
                    <div className="app_image">
                        <a target="_blank" href={app.url} >
                            <img className="container--picture" src={require(`../../media/app-images/${app.name}.png`)} >
                            </img>
                            <div className="container--overlay">
                                <p className="container---blurb"> {app.description}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <br />
            </div>
        )
    })

    return (
        <div>
            <br />
            {generate}
        </div>
    )
}
export default displayApp;