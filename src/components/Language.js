import React from 'react'

//CSS
import "../css/Language.css"

export default function Language({language, tooltip}) {
    return (
        <div className='language' draggable={false}>
            <img src={language} alt='' title={tooltip} draggable={false}/>
        </div>
    )
}