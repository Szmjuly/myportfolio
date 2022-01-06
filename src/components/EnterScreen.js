import React from 'react'

//CSS
import "../css/LandingPage.css"

export default class EnterScreen extends React.Component{
    constructor(props) {
        super(props);
      }

    componentDidMount(){
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount(){
      document.body.style.overflow = 'visible'
    }
      
    render(){
    return (
        <div className='landing__page'>
            <div className='landing__page__body'>
                    <h1 style={{color: 'white', position: 'absolute', top: '35%'}}>Hello, Welcome to my Portfolio</h1>
                    <h2 style={{color: 'white', position: 'absolute', top: '40%'}}>My name is Solomon Markowitz</h2>
                    <div className='enter__btn' onClick={this.props.hideEnterScreen}> <span></span><text>Click to Enter</text> </div>
                </div>
        </div>
    )
}
}