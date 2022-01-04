import React from 'react'

//Components
import SideBarRow from "../components/SideBarRow"

//CSS
import "../css/SideBar.css"

export default function SideBar() {
    return (
        <div className='sidebar'>
            <SideBarRow title='About'/>
            <SideBarRow title='Contact'/>
            <SideBarRow title='Projects'/>
        </div>
    )
}
