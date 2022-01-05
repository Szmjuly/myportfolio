import React from 'react'
import { useNavigate } from 'react-router-dom'

//CSS
import "../css/LandingPage.css"

export default function LandingPage() {
    let navigate = useNavigate();

    function handlePortfolioRoute(){
        navigate('/home');
    }

    return (
        <div className='landing__page'>
            <div id='stars' />
                <div id='stars2' />
                <div id='stars3' />
            <div className='landing__page__body'>
                
                
                <h1 style={{color: 'white', position: 'absolute', top: '35%'}}>Hello, Welcome to my Portfolio</h1>
                <h2 style={{color: 'white', position: 'absolute', top: '40%'}}>My name is Solomon Markowitz</h2>
                <div className='enter__btn' onClick={handlePortfolioRoute}> <span></span><text>Click to Enter</text> </div>
            </div>
        </div>
    )
}
