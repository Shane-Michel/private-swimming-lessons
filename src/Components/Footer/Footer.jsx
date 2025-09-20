import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='site-footer'>
      <div className='footer-inner'>
        <div className='footer-brand'>
          <picture>
            <source srcSet='/generated/cMitchell-logo2.webp' type='image/webp' />
            <img src='/images/cMitchell-logo2.png' alt='Christin Mitchell logo' loading='lazy' />
          </picture>
          <div>
            <h3>Private Swimming Lessons</h3>
            <p>Breaking fear, building confident swimmers across Northeast Georgia.</p>
          </div>
        </div>

        <div className='footer-links'>
          <h4>Explore</h4>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/reviews'>Reviews</Link></li>
            <li><Link to='/videos'>Videos</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div className='footer-contact'>
          <h4>Get in touch</h4>
          <p><a href='tel:17065407810'>706-540-7810</a></p>
          <p><a href='mailto:cmswimminglessons@gmail.com'>cmswimminglessons@gmail.com</a></p>
          <p>Serving Athens &amp; Northeast Georgia</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {currentYear} Christin Mitchell&apos;s Private Swimming Lessons. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
