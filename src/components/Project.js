import React from 'react'

export default function Project({projectName, projectDisc}) {
    return (
        <div className='project'>
            <h3 style={{marginTop: '5px', marginBottom: '5px', marginLeft: '1.5%'}}>{projectName}: </h3>
            <p style={{marginTop: 0, marginBottom: 0, marginLeft: '3%', marginRight: '3%', wordBreak: 'break-all', whiteSpace: 'normal'}}>{projectDisc}</p>
        </div>
    )
}