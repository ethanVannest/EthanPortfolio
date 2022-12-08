import React from 'react'
//CSS
import './Projects.css'


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
      <div className='greenlyDiv'>
        <div className='breakoutDisplay'>
          <h2 className='titleProjects'>Greenly</h2>
          <a href='https://heroku-greenly.herokuapp.com' className='greenlyAnchor'>
            <img className='greenlyImg' src={require('../images/Greenly.png')} alt={n1}/>
          </a>
        </div>
        <div className='breakoutDisplayText'>
          <h2 className='descriptionProjects'>Description</h2>
            <p className='projectDescription'>
              A full stack application utilizing a cart feature to buy all neccesary goods.
            </p>
            <p className='projectDescription'>
              Greenly uses MongoDB, Express, React, Redux, and Node to give a clean and user friendly experience.
            </p>
        </div>
      </div>


        {/* Breakout */}
      <div className='breakoutDiv'>
        <div className='breakoutDisplay'>
          <h2 className='titleProjects'>Breakout For Two</h2>
          <a href='https://ethanvannest.github.io/two-player-breakout/' className='breakoutAnchor'>
            <img className='breakoutImg' src={require('../images/breakout.png')} alt={n2}/>
          </a>
        </div>
        <div className='breakoutDisplayText'>
          <div className='displayTextBox'>
            <p className='projectDescription'>
              lorem
            </p>
          </div>
        </div>
      </div>


        {/* Reshopper */}
      <div className='breakoutDiv'>
        <div className='breakoutDisplay'>
          <h2 className='titleProjects'>Reshopper</h2>
          <a href='https://reshopper.herokuapp.com' className='resAnchor'>
            <img className='reshopperImg' src={require('../images/reshop.png')} alt={n3}/>
          </a>
        </div>
        <div className='breakoutDisplayText'>
          <p className='projectDescription'>
            lorem
          </p>
        </div>
      </div>


        {/* Tamagotchi */}
        <div className='breakoutDiv'>
          <div className='breakoutDisplay'>
            <h2 className='titleProjects'>Tamagotchi</h2>
            <a href='https://ethanvannest.github.io/Tamagotchi-Mini-Project/' className='tamAnchor'>
            <img className='tamagotchiImg' src={require('../images/tam.png')} alt={n4}/>
            </a>
          </div>
          <div className='breakoutDisplayText'>
            <p className='projectDescription'>
              lorem
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects