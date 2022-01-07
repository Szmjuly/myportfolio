import React from 'react'

//Components
import { Avatar } from '@mui/material'
import AboutMeIcons from './AboutMeIcons';

export default function AboutMeLeft() {
    return (
        <div className='aboutme__left' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Avatar className='boxShadow borderS10W' src={''} style={{width: '300px', height: '300px', marginTop: '30px'}}/>
                            <AboutMeIcons />
                        </div>
    )
}