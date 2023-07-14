import React, { useRef, useEffect } from 'react'

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
import nosql from '../../media/icons/skills-icons/nosql.png'
import python from '../../media/icons/skills-icons/python.png'
import git from '../../media/icons/skills-icons/git.png'
import github from '../../media/icons/skills-icons/github-logo.png'
import vscode from '../../media/icons/skills-icons/vscode.png'

const techIcons = () => {

    const techArrays = [
        {
            name: 'Front End',
            links: [
                { url: html }, { url: css }, { url: js }, { url: jquery }, { url: bootstrap }, { url: react }, { url: handlebars }
            ]
        },
        {
            name: 'Back End',
            links: [
                { url: node }, { url: python }, { url: api }, { url: express }, { url: mysql }, { url: sequelize }, { url: mongodb }, { url: graphql }, { url: mongoose }, { url: nosql }
            ]
        },
        {
            name: 'Developer Technologies',
            links: [
                { url: git }, { url: github }, { url: vscode }
            ]
        }
    ]

    const myRef = useRef()

    return (

        techArrays.map((singleArray) => {
            return <div key={singleArray.name} ref={myRef}>
                <h5>{singleArray.name}</h5>
                <div className='technologies'>
                    {singleArray.links.map((tech) => {
                        return <img className='technologies-logos' src={tech.url} key={tech.url} alt={tech.url}>
                        </img>
                    })}
                </div>
            </div>
        })
    )
}

export default techIcons

