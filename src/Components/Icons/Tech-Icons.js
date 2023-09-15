import React from 'react'

import html from '../../media/icons/skills-icons/html5.avif'
import css from '../../media/icons/skills-icons/css3.avif'
import js from '../../media/icons/skills-icons/js.avif'
import jquery from '../../media/icons/skills-icons/jquery.avif'
import graphql from '../../media/icons/skills-icons/graphql.avif'
import node from '../../media/icons/skills-icons/nodejs.avif'
import express from '../../media/icons/skills-icons/express.avif'
import mysql from '../../media/icons/skills-icons/mysql.avif'
import react from '../../media/icons/skills-icons/react.avif'
import sequelize from '../../media/icons/skills-icons/sequelize.avif'
import mongoose from '../../media/icons/skills-icons/mongoose.avif'
import bootstrap from '../../media/icons/skills-icons/bootstrap.avif'
import postgresql from '../../media/icons/skills-icons/postgresql.avif'
import api from '../../media/icons/skills-icons/api.avif'
import mongodb from '../../media/icons/skills-icons/mongodb.avif'
import handlebars from '../../media/icons/skills-icons/handlebars.avif'
import python from '../../media/icons/skills-icons/python.avif'
import git from '../../media/icons/skills-icons/git.avif'
import github from '../../media/icons/skills-icons/github-logo.avif'
import vscode from '../../media/icons/skills-icons/vscode.avif'
import command from '../../media/icons/skills-icons/command.avif'
import insomnia from '../../media/icons/skills-icons/insomnia-icon.avif'
import apollo from '../../media/icons/skills-icons/apollo.avif'
import framework from '../../media/icons/skills-icons/framework.avif'

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
                { url: node, name: 'Node.js' }, { url: python, name: 'Python' }, { url: api , name:'REST APIs'}, { url: express, name: 'Express'}, { url: mysql , name: 'MySQL'}, {url:postgresql, name: 'PostgreSQL'},{ url: sequelize, name: 'Sequelize ORM'}, { url: mongodb, name: 'MongoDB' }, { url: mongoose, name: 'Mongoose ODM' },
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
                <p className='h5'>{singleArray.name}</p>
                <div className='technologies'>
                    {singleArray.links.map((tech, i) => {
                        return (

                        <div className='technologies-box' key={i}>
                            <img alt={`${tech.name} development technology logo`} className='technologies-logos' src={tech.url}>
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

