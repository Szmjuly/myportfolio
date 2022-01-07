import React from 'react'

//CSS
import '../css/HomePage.css'

//Components
import Skills from '../components/Skills'
import Welcome from '../components/Welcome'
import AboutMe from '../components/AboutMe'

export default function HomePage(){
    
    
    function scrollDiv(elem){
        var element = document.getElementById(elem)
        element.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
    }

    return (
        <div className='home__page'>
            <div className='home__page__body'>
                
                <div className='welcome'>
                    <Welcome />
                    <button className='entr__btn' onClick={() => scrollDiv('aboutme')}>Click to Enter</button>
                </div>

                <div className='bar' />

                <AboutMe />

                <div id='skills'>
                    <Skills />
                </div>
                
            </div>
        </div>
)}