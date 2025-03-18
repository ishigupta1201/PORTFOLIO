import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ishi Gupta</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Project</a>
                </li>
                <li>
                    <a href="#experience" className="footer__link">Experience</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href="https://www.linkedin.com/in/ishigupta693/" 
                    className="footer__social-link" 
                    target='_blank'
                    rel="noopener noreferrer"
                >
                <i className="bx bxl-linkedin-square"></i>
                </a>

                <a 
                    href="https://www.snapchat.com/add/ishigupta664" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="bx bxl-snapchat"></i>
                </a>

                <a 
                    href="https://www.instagram.com/ishigupta699/" 
                    className="footer__social-link" 
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <i className="bx bxl-instagram-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer