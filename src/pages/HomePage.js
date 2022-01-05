import React from 'react'

//CSS
import "../css/HomePage.css"

//Components
import HomePageHeaderInfo from '../components/HomePageHeaderInfo'
import Projects from '../components/Projects'
import Languages from '../components/Languages'

//Assets
import picture from "../assets/Solomon_Markowitz_Pic.JPG"


export default 
function HomePage(){
    return (
        <div className='home__page'>
            <div className='home__page__body'>
                <div className='home__page__top'>
                    <HomePageHeaderInfo src={picture} myName={"Solomon Markowitz"} school={"Florida Atlantic University"} degree={"Bachlor of Computer Engineering"}
                                        website1={"LinkedIn"} link1={"https://www.linkedin.com/in/solomon-markowitz-13931b220/"}
                                        website2={"Github"} link2={"https://github.com/Szmjuly"}/>
                </div>

                <div className='home__page__middle'>
                    <hr style={{width: "100%"}}/>

                    <Languages />

                    <hr style={{width: "100%"}}/>

                    <Projects />

                    <hr style={{width: "100%"}}/>  
                </div>

                

                <div className='home__page__btm'>

                </div>
                
            </div>
        </div>
        
    )
}