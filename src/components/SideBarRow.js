import React from 'react'

//CSS
import "../css/SideBarRow.css"

export default function SideBarRow({title, onClick}) {
    return (<div className='sidebar__row' onClick={onClick}>
                <div className='sidebar__btn'/>
                <div className='sidebar__title'>{title}</div>
            </div>);}