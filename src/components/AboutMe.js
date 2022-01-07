import React from 'react'

//Components
import AboutMeLeft from './AboutMeLeft'
import AboutMeRight from './AboutMeRight'

//CSS
import '../css/AboutMe.css'

export default function AboutMe() {
    
    return (
        <div id='aboutme' className='aboutme'>
                    <div className='aboutme__body'>
                        <AboutMeLeft />
                        <AboutMeRight />
                    </div>
                </div>
    )
}