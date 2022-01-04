import React from 'react'

//Components
import { Avatar } from '@mui/material'

//CSS
import "../css/HomePageHeaderInfo.css"

export default function HomePageHeaderInfo({src, myName, school, degree, website1, link1, website2, link2, website3, link3}) {
    return (<div className='home__page__info'>
                <Avatar src={src} style={{width: 400,height: 400}}/>
                <h>{myName}</h>
                <div className='info'>
                    <h1>Degree: {degree}</h1> 
                    <h2>School: {school}</h2> 
                </div>
                <div className='links'>
                    <h1>Links:</h1>
                    {website1 && <h2>{website1}: <a href={link1}>{link1}</a></h2>}
                    {website2 && <h2>{website2}: <a href={link2}>{link2}</a></h2>}
                    {website3 && <h2>{website3}: <a href={link3}>{link3}</a></h2>}
                </div>
            </div>);}