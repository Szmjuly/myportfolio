import React from 'react'

export default function ProjectBulletPoint({bullet}) {
    return (
        <div className='project__blt_pnt'>
            <p style={{marginTop: '1%', marginBottom: 0, marginLeft: '8%', marginRight: '10%'}}>• {bullet}</p>
        </div>
    )
}