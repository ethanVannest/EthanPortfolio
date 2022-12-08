import React from 'react'

//CSS
import './AboutMe.css'


const AboutMe = () => {
    let pictureName = 'headshot'
  return (
    <div className='AboutPage'>
            <div className='imgDiv'>
                <img className='headshot' src={require('../images/Ethan_headshot.jpeg')} alt={pictureName}/>
            </div>
        <div className='textContainer'>
            <div className='textDiv'>
                <p className='aboutText'>
                    > Hello! My name is Ethan Vannest, I am a frontend developer from Colorado. 
                </p>
                <p className='aboutText'>
                    > I love to create attractive looking products that are user intuitive, that also have something a bit unique to it.
                </p>
                <p className='aboutText'>
                    > I also am a huge fan of music and anything that pertains to video games, reading, and/or cars. 
                </p>
                <p className='aboutText'>
                    > Feel free to reach out with any comments, questions, or concerns. I love to work on ambitous projects with positive and driven people.
                </p>
            </div>
        </div>
    </div>
  )
}
export default AboutMe