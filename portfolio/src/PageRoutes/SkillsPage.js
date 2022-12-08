import React from 'react'
import Skills from '../components/Skills'
//CSS
import './SkillsPage.css'

const SkillsPage = () => {
  return (
    <div>
       <div className='contactHeaderDiv'>
                <div className='left'></div>
                    <h1 className='connectHeader'>Skills
                    </h1>
                <div className='right'></div>
            </div>
        <Skills/>
    </div>
  )
}

export default SkillsPage