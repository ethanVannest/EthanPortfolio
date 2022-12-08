import React from 'react'

//CSS
import './Skills.css'

const Skills = () => {
  return (
    <div className='skillsComp'>
        <div className='skillsBar'>
            <div className='skill'>
                <span>React</span>
                <p className='percent'>90%</p>
                <div className='skillBarReact'>
                    <div className='gapBar'></div>
                </div>
            </div>
            <div className='skill'>
                <span>CSS</span>
                <p className='percent'>90%</p>
                <div className='skillBarCSS'>
                    <div className='gapBar'></div>
                </div>
            </div>
            <div className='skill'>
                <span>HTML</span>
                <p className='percent'>85%</p>
                <div className='skillBarHTML'>
                    <div className='gapBar'></div>
                </div>
            </div>
            <div className='skill'>
                <span>MongoDB</span>
                <p className='percent'>60%</p>
                <div className='skillBarMongo'>
                    <div className='gapBar'></div>
                </div>
            </div>
            <div className='skill'>
                <span>Node</span>
                <p className='percent'>70%</p>
                <div className='skillBarNode'>
                    <div className='gapBar'></div>
                </div>
            </div>
            <div className='skill'>
                <span>Express</span>
                <p className='percent'>70%</p>
                <div className='skillBarExpress'>
                    <div className='gapBar'></div>
                </div>
            </div>
            <div className='skill'>
                <span>Python</span>
                <p className='percent'>50%</p>
                <div className='skillBarPython'>
                    <div className='gapBar'></div>
                </div>
            </div>
            <div className='skill'>
                <span>Flask</span>
                <p className='percent'>40%</p>
                <div className='skillBarFlask'>
                    <div className='gapBar'></div>
                </div>
            </div>
            <div className='skill'>
                <span>PostgresSQL</span>
                <p className='percent'>35%</p>
                <div className='skillBarPost'>
                    <div className='gapBar'></div>
                </div>
            </div>
            <div className='skill'>
                <span>Tailwind</span>
                <p className='percent'>20%</p>
                <div className='skillBarTailwind'>
                    <div className='gapBar'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills