import { Link } from 'react-router-dom'
import './Header.css'
import { useEffect } from 'react';
import Picture from '../Picture';
import { sharedImages } from '../../imageSources';

const Header = () => {

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
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
    </header>
  )
}

export default Header