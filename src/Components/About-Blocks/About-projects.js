import React from "react";
import camera from '../../media/icons/gifs/camera.gif'
import wrench from '../../media/icons/gifs/wrench.gif'
import balloons from '../../media/icons/gifs/ballons.gif'

const AboutProjects = () => {
    const projects = [
        {
            name: '1',
            first_des: `A sign up application for a special event I will be hosting in the fall of 2023 for when I turn exactly `,
            red_font: '10,000 days old.',
            second_des: '',
            icon: balloons
        },
        {
            name: '2',
            first_des: `A gallery website on my favorite spots in my neighborhood `,
            red_font: 'Washington Heights',
            second_des: `, which is iconic in the musical 'In The Heights'.`,
            icon: camera
        },
        {
            name: '3',
            first_des: `A MERN application promoting a `,
            red_font: 'new side business',
            second_des: ` as an Apple product repairman, where I will showcase various broken devices I have fixed, including iPods, iPhones, and Apple monitors.`,
            icon: wrench
        }

    ]
    return (
        <div>
            {
                projects.map((app) => {
                    return (
                        <div key={app.name} className='about-projects'>
                            <div className='align-ver'>
                                <p className="body-texts">
                                    <span className='body-texts bold'>{app.name}: </span>
                                    {app.first_des}<span className='red-font bold'>{app.red_font}</span>{app.second_des}
                                </p>
                            </div>


                            <div className='align-ver'>
                                <img className='projects-logos' src={app.icon}></img>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AboutProjects