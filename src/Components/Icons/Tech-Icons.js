import React from 'react'

import html from '../../media/icons/skills-icons/html5.png'
import css from '../../media/icons/skills-icons/css3.png'
import js from '../../media/icons/skills-icons/js.png'
import jquery from '../../media/icons/skills-icons/jquery.png'
import graphql from '../../media/icons/skills-icons/graphql.png'
import node from '../../media/icons/skills-icons/nodejs.png'
import express from '../../media/icons/skills-icons/express.png'
import mysql from '../../media/icons/skills-icons/mysql.png'
import react from '../../media/icons/skills-icons/react.png'
import sequelize from '../../media/icons/skills-icons/sequelize.png'
import mongoose from '../../media/icons/skills-icons/mongoose.png'
import bootstrap from '../../media/icons/skills-icons/bootstrap.png'
import api from '../../media/icons/skills-icons/api.png'
import mongodb from '../../media/icons/skills-icons/mongodb.png'
import handlebars from '../../media/icons/skills-icons/handlebars.png'
import python from '../../media/icons/skills-icons/python.png'
import git from '../../media/icons/skills-icons/git.png'
import github from '../../media/icons/skills-icons/github-logo.png'
import vscode from '../../media/icons/skills-icons/vscode.png'
import command from '../../media/icons/skills-icons/command.png'
import insomnia from '../../media/icons/skills-icons/insomnia-icon.png'
import apollo from '../../media/icons/skills-icons/apollo.png'
import framework from '../../media/icons/skills-icons/framework.png'

const techIcons = () => {

    const techArrays = [
        {
            name: 'Front End',
            links: [
                { url: html, name: 'HTML' }, { url: css, name: 'CSS' }, { url: js, name: 'JavaScript' }, { url: jquery, name:'JQuery' }, { url: bootstrap, name: 'Bootstrap' }, { url: react, name: 'React.js' }, { url: handlebars, name: 'Handlebars.js' }
            ]
        },
        {
            name: 'Back End',
            links: [
                { url: node, name: 'Node.js' }, { url: python, name: 'Python' }, { url: api , name:'REST APIs'}, { url: express, name: 'Express'}, { url: mysql , name: 'MySQL'}, { url: sequelize, name: 'Sequelize ORM'}, { url: mongodb, name: 'MongoDB' }, { url: mongoose, name: 'Mongoose ODM' },
            ]
        },
        {
            name: 'Developer Technologies',
            links: [
                { url: git , name: 'Git'}, { url: github, name: 'GitHub' }, { url: vscode, name: 'VSCode' }, { url: graphql, name:'GraphQL'}, {url:command, name: 'CLI/Terminal'}, {url: insomnia, name: 'Insomnia'}, {url: apollo, name: 'Apollo'}, {url: framework, name: 'MVC/MERN'}, 
            ]
        }
    ]

    return (

        techArrays.map((singleArray) => {
            return <div key={singleArray.name}>
                <h5>{singleArray.name}</h5>
                <div className='technologies'>
                    {singleArray.links.map((tech, i) => {
                        return (

                        <div className='technologies-box'>
                            <img className='technologies-logos' src={tech.url} key={i} alt={tech.url}>
                            </img>
                            <p className='technologies-names'>{tech.name}</p>
                        </div>
                        
                        )
                    })}
                </div>
            </div>
        })
    )
}

export default techIcons

