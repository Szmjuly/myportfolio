import React from 'react'

//CSS
import '../css/Welcome.css'

//Compoenets
import { Avatar } from '@mui/material'

export default function Welcome() {
        return (
            <div className='welcome'>
                    <Avatar className='noDrag boxShadow' src={''} style={{position: 'absolute', top: '20%', width: '13%', height: '26%', border: 'solid 5px white'}} />
                    <h1 className='removeMargins noSelect textShadow relative' style={{top: '5%', fontSize: '48px'}}>Solomon Markowitz</h1>
                    <h1 className='removeMargins noSelect textShadow relative' style={{top: '5%'}}>Welcome to my Portfolio</h1>
                </div>
        )
}
