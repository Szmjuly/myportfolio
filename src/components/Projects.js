import React from 'react'

//Components
import Project from "../components/Project"
import ProjectBulletPoint from './ProjectBulletPoint';

export default function Projects() {
    let enlivenDiscription = "Enliven was a project completed by 5 team members. The purpose of Enliven was to allow those who were effected by the pandemic to share bit of inf-ormation relating to the pandemic. The web app frontend was built utilizing React and Node.js while the backend was handled by firebase.";
    let neuarlNetworkDiscription ="Built a simple neural network inside of python";
    return (
        <div className='projects'>
            <h1 style={{marginTop: 0, marginBottom: 0}}><u>Projects</u></h1>
            <Project projectName={"Enliven"} projectDisc={enlivenDiscription}/>
                <ProjectBulletPoint bullet={"Contributed to the design and implemntation of the UI"}/>
                <ProjectBulletPoint bullet={"Setup Firebase backend services, including user authentication, and cloud storage"}/>
                <ProjectBulletPoint bullet={"Contributed to user profile and news api implementation"}/>
                <ProjectBulletPoint bullet={"Contributed to Sign Up and Log In forms"}/>
                <ProjectBulletPoint bullet={"Implemented data visualization and data uploading"}/>

            <Project projectName={"Neural Network"} projectDisc={neuarlNetworkDiscription} />
                <ProjectBulletPoint bullet={"bullet point 1"}/>
        </div>
    )
}
