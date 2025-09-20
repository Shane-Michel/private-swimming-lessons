import { Link } from 'react-router-dom'
import './Header.css'
import { useEffect } from 'react';

const Header = () => {

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <header>
      <img className='signature' src="/images/cMitchellHeader-noBG-H100.png" alt="signature" />
      <img className='logo' src="/images/freshlogo.png" alt="logo" />
        <nav>
            <ul>
                <li><div className="fb-share-button" data-href="https://www.facebook.com/professionalprivatelearning" data-layout="button_count"></div></li>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/reviews'} >Reviews</Link></li>
                <li><Link to={'/videos'} >Videos</Link></li>
                <li><Link to={'/contact'} >Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header