import React from 'react'

//CSS
import "../css/Skill.css"

export default function Skill({skill, tooltip, id, name}) {
    return (
        <div id={id} className='skill' draggable={false}>
            <img src={skill} alt='' title={tooltip} draggable={false}/>
            {name && <h3 class='fixPostioning'>{name}</h3>}
        </div>
    )
}