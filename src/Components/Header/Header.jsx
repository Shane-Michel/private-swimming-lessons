import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'


const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/videos', label: 'Videos' },
  { to: '/contact', label: 'Contact' },
]

import { useEffect } from 'react';
import Picture from '../Picture';
import { sharedImages } from '../../imageSources';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (

    <header className={`site-header${menuOpen ? ' nav-open' : ''}`}>
      <div className='header-inner'>
        <Link to='/' className='brand' onClick={() => setMenuOpen(false)}>
          <picture>
            <source srcSet='/generated/cMitchell-logo2.webp' type='image/webp' />
            <img src='/images/cMitchell-logo2.png' alt="Christin Mitchell logo" className='brand-mark' loading='lazy' />
          </picture>
          <div className='brand-copy'>
            <span className='brand-name'>Christin Mitchell</span>
            <span className='brand-subtitle'>Private Swim Coaching</span>
          </div>
        </Link>

        <button
          className='menu-toggle'
          type='button'
          aria-label='Toggle navigation'
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className='site-nav' aria-label='Main navigation'>
          <ul>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

    <header>
      <Picture
        sources={sharedImages.headerSignature}
        alt="signature"
        imgProps={{ className: 'signature', loading: 'eager' }}
      />
      <Picture
        sources={sharedImages.headerLogo}
        alt="logo"
        imgProps={{ className: 'logo', loading: 'eager' }}
      />
        <nav>
            <ul>
                <li><div className="fb-share-button" data-href="https://www.facebook.com/professionalprivatelearning" data-layout="button_count"></div></li>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/reviews'} >Reviews</Link></li>
                <li><Link to={'/videos'} >Videos</Link></li>
                <li><Link to={'/contact'} >Contact</Link></li>
            </ul>

        </nav>

        <a className='header-cta cta-button' href='tel:17065407810'>
          <span>Call Christin</span>
        </a>
      </div>
    </header>
  )
}

export default Header
