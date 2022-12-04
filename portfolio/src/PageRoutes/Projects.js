import React from 'react'
import '../App.css'


const Projects = () => {
  let n1 = 'greenly'
  let n2 = 'breakout'
  let n3 = 'reshopper'
  let n4 = 'tamagotchi'
  return (
    <div>
      <h3>Current Projects</h3>
      <div>

        {/* Greenly */}
      <img className='greenlyImg' src={require('../images/Greenly.png')} alt={n1}/>


        {/* Breakout */}
      <img className='breakoutImg' src={require('../images/breakout.png')} alt={n2}/>


        {/* Reshopper */}
      <img className='reshopperImg' src={require('../images/reshop.png')} alt={n3}/>


        {/* Tamagotchi */}
      <img className='tamagotchiImg' src={require('../images/tam.png')} alt={n4}/>
      </div>

    </div>
  )
}

export default Projects