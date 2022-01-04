import React from 'react'

//Components
import Language from '../components/Language'

//CSS
import "../css/Languages.css"

export default function Languages() {
    return (
        <div className='languages'>
            <h1 style={{marginTop: 0, marginBottom: 0, marginRight: 10}}><u>Languages: </u></h1>
            <Language language={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'} tooltip={'C'}/>
            <Language language={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'} tooltip={'C++'}/>
            <Language language={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'} tooltip={'Java'}/>
            <Language language={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} tooltip={'JavaScript'}/>
            <Language language={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} tooltip={'HTML5'}/>
            <Language language={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} tooltip={'CSS'}/>
            <Language language={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} tooltip={'React / JSX'}/>
            <Language language={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'} tooltip={'TypeScript'}/>
        </div>
    )
}