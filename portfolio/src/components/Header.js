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
        <div>
            <div className='headerDiv'>
                <h1 className='header'>ethanVannest</h1>
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