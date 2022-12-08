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
      <div className='contactHeaderDiv'>
                <div className='left'></div>
                    <h1 className='connectHeader'>Projects
                    </h1>
                <div className='right'></div>
            </div>
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
          <h2 className='descriptionProjects'>Description | <a className='anchorTag' href='https://github.com/ethanVannest/Greenly-Frontend'>Github</a>
          </h2>
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
          <h2 className='descriptionProjects'>Description | <a className='anchorTag' href='https://github.com/ethanVannest/two-player-breakout'>Github</a>
          </h2>
            <p className='projectDescription'>
              Breakout For Two is an alteration of a classic game that takes a turn based approach allowing you to play with two players instead of one.
            </p>
            <p className='projectDescription'>
              Breakout For Two uses Javascript, HTML, CSS, and Canvas to draw the ball onto the page and give the ball hit detection.
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
          <h2 className='descriptionProjects'>Description | <a className='anchorTag' href='https://github.com/ethanVannest/ResHopper'>Github</a></h2>
          <p className='projectDescription'>
            ResHopper is an application ends the debate on where to eat by randomly selecting a place based on user entered information.
          </p>
          <p className='projectDescription'>
            Made using EJS, MongoDB, and Node to allow the user to access information that was entered and render it to the screen dynamically.
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
            <h2 className='descriptionProjects'>
               Description | <a className='anchorTag' href='https://github.com/ethanVannest/Tamagotchi-Mini-Project'>Github</a>
            </h2>
              <p className='projectDescription'>
                A game that allows the user to grow with their own personal Tamagotchi.  
              </p>
              <p className='projectDescription'>
                Created using HTML, CSS, and Javascript and made functional by the use of loops, conditionals, and class organization.
              </p>
              <div className='gap'></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects