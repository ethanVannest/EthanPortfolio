import React from 'react'
//Router Dom
import { Link } from 'react-router-dom'
//CSS
import './Header.css'

const Header = () => {
  return (
    <nav>
        <div>
            <div className='headerDiv'>
                <h1 className='header'>Ethan Vannest</h1>
            </div>
        </div>
        <ul>
            <li> <Link to='/'>About Me</Link> </li>
            <li> <Link to='/contact'> Let's Connect</Link> </li>
            <li> <Link to='/projects'>Projects</Link> </li>
            <li> <Link to='/skills'> Skills </Link> </li>
        </ul>
    </nav>
  )
}

export default Header