import React from 'react'

//CSS
import "../css/HomePage.css"

//Components
import HomePageHeaderInfo from '../components/HomePageHeaderInfo'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import EnterScreen from '../components/EnterScreen'

//Assets
import picture from "../assets/Solomon_Markowitz_Pic.JPG"

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: true,
        };

        this.hideEnterScreen = this.hideEnterScreen.bind(this);
      }

      hideEnterScreen(){
          this.setState({
              showComponent: false,
          });
      }

    render() {
    return (
        <div className='home__page'>
            {this.state.showComponent && <EnterScreen hideEnterScreen={this.hideEnterScreen} />}

            <div className='home__page__body'>
                <div className='home__page__top'>
                    <HomePageHeaderInfo src={picture} myName={"Solomon Markowitz"} school={"Florida Atlantic University"} degree={"Bachlor of Computer Engineering"}
                                        website1={"LinkedIn"} link1={"https://www.linkedin.com/in/solomon-markowitz-13931b220/"}
                                        website2={"Github"} link2={"https://github.com/Szmjuly"}/>
                </div>

                <div className='home__page__middle'>
                                        
                    <Skills />

                    <h2 class="title">About me</h2>

                    <Projects />

                    <hr style={{width: "100%"}}/>  
                </div>

                

                <div className='home__page__btm'>

                </div>
                
            </div>
        </div>
)}}