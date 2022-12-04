import React from 'react'
const AboutMe = () => {
    let pictureName = 'headshot'
  return (
    <div className='AboutPage'>
        <img src={require('../images/Ethan_headshot.jpeg')} alt={pictureName}/>
        <div>

            <p>
                Hello! My name is Ethan Vannest, I am a frontend developer from Colorado. 
            </p>
            <p>
                I love to create attractice looking products that are user intuitive, that also have something a bit unique to it.
            </p>
            <p>
                I also am a huge fan of music and anything that pertains to video games, reading, and/or cars. 
            </p>
            <p>
                Feel free to reach out with any comments, questions, or concerns. I love to work on ambitous projects with positive and driven people.
            </p>
        </div>
    </div>
  )
}
export default AboutMe