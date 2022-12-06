import React from 'react'
import { useEffect, useState } from 'react'
//Router Dom
import { Link } from 'react-router-dom'
//CSS
import './Header.css'

const Header = () => {
    const [head, setHead] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", () =>
            setHead(window.pageYOffset > 100)
          );
        }
      }, []);
  return (
    <nav className={`${
        head ? "nav" : "noNav"
    }`}>
        <div className='navText'>
            <div className='headerDiv'>
                <h1 className='header'><b>ethanVannest</b></h1>
            </div>
            <div className='linksDiv'>
                <ul className='navLinks'>
                    <li> <Link to='/'>_About Me</Link> </li>
                    <li> <Link to='/contact'> _Let's Connect</Link> </li>
                    <li> <Link to='/projects'>_Projects</Link> </li>
                    <li> <Link to='/skills'> _Skills</Link> </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header