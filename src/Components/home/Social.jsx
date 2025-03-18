import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a 
            href="https://www.linkedin.com/in/ishigupta693/" 
            className="home__social-icon" 
            target='_blank'
            rel="noopener noreferrer"
        >
          <i className="uil uil-linkedin"></i>
        </a>

        <a 
            href="https://github.com/ishigupta1201" 
            className="home__social-icon" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="uil uil-github"></i>
        </a>

        <a 
            href="https://www.instagram.com/ishigupta699/" 
            className="home__social-icon" 
            target='_blank'
            rel="noopener noreferrer"
        >
            <i className="uil uil-instagram"></i>
        </a>


    </div>
  )
}

export default Social