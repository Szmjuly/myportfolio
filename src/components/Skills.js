import React from 'react'

//Components
import Skill from './Skill'

//CSS
import "../css/Skills.css"

export default function Skills() {
    return (
        <div className='skills'>
            <div className='skill__list'>
                <div className='list' style={{marginRight: '-10%'}}>
                    <h2 class='title fixTitle removeMarginTop'>Languages</h2>
                    <div className='language__list'>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'} tooltip={'C'} name={'C'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'} tooltip={'C++'} name={'C++'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'} tooltip={'Java'} name={'Java'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} tooltip={'JS'} name={'JavaScript'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} tooltip={'HTML'} name={'HTML5'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} tooltip={'CSS'} name={'CSS'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'} tooltip={'TypeScript'} name={'TypeScript'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'} tooltip={'Python'} name={'Python'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'} tooltip={'Ruby'} name={'Ruby'}/>
                    </div>
                </div>

                <div className='list' style={{marginLeft: '-10%'}}>
                    <h2 class='title fixTitle removeMarginTop'>Operating Systems</h2>
                    <div className='os__list'>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg'} tooltip={'Apple'} name={'IOS / MacOS'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'} tooltip={'Microsoft'} name={'Windows'}/>
                    </div>
                </div>

                <div className='list' style={{marginRight: '-10%'}}>
                    <h2 class='title fixTitle removeMarginTop'>Software</h2>
                    <div className='software__list'>
                        <Skill id={'3'} skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'} tooltip={'VS Code'} name={'Visual Studio Code'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg'} tooltip={'Visual Studio'} name={'Visual Studio 2019'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} tooltip={'Github'} name={'Github'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg'} tooltip={'InkScape'} name={'InkScape'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'} tooltip={'Jira'} name={'Jira'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'} tooltip={'MySQL'} name={'MySQL'}/>
                        <Skill id={'4'} skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} tooltip={'React'} name={'React Native'}/>
                    </div>
                </div>

                <div className='list' style={{marginLeft: '-10%'}}>
                    <h2 class='title fixTitle removeMarginTop'>Other</h2>
                    <div className='other__list'>
                        <Skill id={'5'} skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'} tooltip={'MUI'} name={'Material-UI'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'} tooltip={'NJS'} name={'Node.Js'}/>
                        <Skill skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'} tooltip={'Firebase'} name={'Firebase'}/>
                        <Skill id={'6'} skill={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'} tooltip={'TF'} name={'TensorFlow'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}