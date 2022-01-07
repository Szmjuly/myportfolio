import React from 'react'

//Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

//Components
import { IconButton } from '@mui/material'

//CSS
import '../../src/css/AboutMeIcons.css'

export default function AboutMeIcons() {
    function handleLinkedInRoute(){
        window.location = 'https://www.linkedin.com/in/solomon-markowitz-13931b220/';
    }

    function handleGithubRoute(){
        window.location = 'https://github.com/Szmjuly';
    }

    return ( <div className='icons'>
                                <IconButton onClick={handleLinkedInRoute}>
                                    <LinkedInIcon />
                                </IconButton>

                                <IconButton onClick={handleGithubRoute}>
                                    <GitHubIcon />
                                </IconButton> 
                            </div>
    )
}