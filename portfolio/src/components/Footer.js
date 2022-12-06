import React from 'react'
//Router Dom
import { Link } from 'react-router-dom'
//CSS
import './Footer.css'

const Footer =() => {
  return (
    <div className='footer'>
        <div className='githubDiv'>
            <a className='githubIcon' href='https://github.com/ethanVannest'>
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <div className='linkedinDiv'>
            <a className='linkedInIcon' href='https://www.linkedin.com/in/ethan-vannest/'>
                 <i className="fa-brands fa-linkedin"></i>
            </a>   
        </div>
            <div>
                <Link to="/contact"><i className="fa-solid fa-envelope"></i></Link>    
            </div>
        </div>
  )
}

export default Footer