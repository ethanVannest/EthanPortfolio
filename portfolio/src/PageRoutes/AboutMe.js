import React from 'react'
const AboutMe = () => {
    let pictureName = 'headshot'
  return (
    <div className='AboutPage'>
        <img src={require('../images/Ethan_headshot.jpeg')} alt={pictureName}/>
    </div>
  )
}
// {require(pic1)}
export default AboutMe