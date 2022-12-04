import React from 'react'

const Footer =() => {
  return (
    <div className='footer'>
        <div className='githubDiv'>
            <a className='githubIcon' href='https://github.com/ethanVannest'>github</a>
            <i className="fa-brands fa-github"></i>
        </div>
        <div className='linkedinDiv'>
            <a className='linkedInIcon' href='https://www.linkedin.com/in/ethan-vannest/'>linkedin <i className="fa-brands fa-linkedin"></i></a>
            
        </div>
        <div>
        <a href="mailto:ethanvannest@gmail.com">Send Email <i className="fa-solid fa-envelope"></i></a>    
        </div>
        </div>
  )
}

export default Footer