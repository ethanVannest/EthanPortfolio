import React from 'react'
//Router Dom
import { Link } from 'react-router-dom'
//CSS
import './Footer.css'

const Footer =() => {
  return (
    <div className='footer'>
        <ul className='iconLinks'>
            <li>
                <a className='githubIcon' href='https://github.com/ethanVannest'>
                    <i className="fa-brands fa-github fa-2x"></i>
                </a>
            </li>
            <li>
                <a className='linkedInIcon' href='https://www.linkedin.com/in/ethan-vannest/'>
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                </a>   
            </li>
            <li>
                <Link to="/contact"><i className="fa-solid fa-envelope fa-2x"></i></Link>    
            </li>
        </ul>
    </div>
  )
}

export default Footer