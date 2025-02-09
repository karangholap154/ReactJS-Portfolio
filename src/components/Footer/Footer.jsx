import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            {/* <h1 className='footer__title'>Karan</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>
                <li>
                    <a href='#portfolio' className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href='#testimonials' className='footer__link'>Testimonials</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href='https://www.facebook.com/' className='footer__social-link' target='_blank'>
                <i className='bx bxl-facebook'></i>
                </a>

                <a href='https://www.instagram.com/' className='footer__social-link' target='_blank'>
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href='https://twitter.com/' className='footer__social-link' target='_blank'>
                    <i class='bx bxl-twitter'></i>
                </a>
            </div> */}
            <span className='footer__copy'>
                Made with ❤️ by Karan Gholap
            </span>
        </div>
    </footer>
  )
}
