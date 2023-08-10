import React from 'react';
import github from '../../media/icons/github-white.png'

const displayApp = () => {
    const applications = [
        {
            name: '10000-Days',
            description: "A full stack website all about my special event I'm hosting for when I turn 10,000 days old. Learn more about the venue of choice and RSVP to save your spot! Interact with invited guests who have confirmed their registation by sharing posts and loving posts to hype up the excitement for this once in a lifetime night! Login in with email: testbot@gmail.com and password:password to try it out!",
            technologies: 'Express, Sequelize, MySQL, Bcrypt, Handlebars, Dotenv, link-preview-js, HTML, CSS, Javascript',
            url: 'https://cs-10000-days-33ee2045b3a6.herokuapp.com/',
            developer: 'Sole Developer'
        },
        {
            name: 'Technify-In-Python',
            description: "A simple and intuitive social media website for tech enthusiasts to share valuable links with each other. Users can sign up to create, like, and comment on posts. Users have the freedom to delete and edit any of their posts while being logged in. Login in with email: testbot@gmail.com and password:password to try it out!",
            technologies: 'Python, Flask, PyMySQL, SQLAlchemy, Bcrypt, Dotenv, Gunicorn, HTML, CSS, Javascript',
            url: 'https://technify-in-python-cce9848f5fbf.herokuapp.com/',
            developer: 'Sole Developer'
        },
        {
            name: 'Taskmaster-Pro',
            description: 'Take notes the easy way using Taskmaster Pro. Created tasks can be edited, deleted, and assigned due dates which is color coded to show if a due date is approaching or past due. Tasks can also be dragged around the application interface to various statuses, including "Completed", "In Progress" or the trash bin.',
            technologies: 'Javascript, JQuery, Moment.js,, Bootstrap, HTML, CSS',
            url: 'https://cesarsiguencia.github.io/taskmaster-pro/',
            developer: 'Sole Developer'
        },
        {
            name: 'React-Photo-Port',
            description: 'My first client side project using React. A simple photo gallery website using stock photos. The contact form grabs data and logs it into the console.',
            technologies: 'ReactJS, Javascript',
            url: 'https://cesarsiguencia.github.io/react-photo-port/',
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



// Old Apps commented out 

{/* <div className="app-box">
    <div className="container_wrapper">
        <div className="container--description">
            
            <div className="project-title">
                <h3 className="project-title--frame"> NFT-y</h3> 
            </div>
            
            <h5>Back end developer</h5>
            <div>
                <div className="developer-technologies">
                    <p className="body-texts">MySQL2, Sequelize, Node.js, Bcrypt, Express, RESTful API's, Env, Dotenv</p>
                </div>

                <div className="developer-github">
                    <a target="_blank" href="https://github.com/K-G-J/nft-y">
                        <img className="github-links" src={github}>
                        </img>
                    </a>
                </div>
            </div>
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
</div> */}

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