import { Link } from 'react-router-dom'

import './BottomSection.css'

import Picture from './Picture'
import { sharedImages } from '../imageSources'

const BottomSection = () => {
  return (
    <div className='bottom-sections'>
      <section id='services' className='card compact-card'>
        <div className='content2'>
          <h2>Signature services</h2>
          <ul>
            <li>Private swimming lessons for infants, kids, and adults</li>
            <li>Specialized coaching to overcome fear and panic</li>
            <li>Stroke refinement and endurance training</li>
            <li>Water safety and survival skills</li>
          </ul>
        </div>
      </section>
      <section id='contact' className='card compact-card'>
        <div className='content3'>
          <div className='headshot-container'>
            <Picture
              sources={sharedImages.headshot}
              alt='Christin Mitchell headshot'
              imgProps={{ className: 'headshot', loading: 'lazy' }}
            />
            <h2>Connect with Christin</h2>
          </div>
          <p>
            For inquiries and bookings call <strong>Christin</strong> at{' '}
            <strong>706-540-7810</strong> or email{' '}
            <strong>
              <a href='mailto:cmswimminglessons@gmail.com'>cmswimminglessons@gmail.com</a>
            </strong>
            .
          </p>
          <Link className='secondary-link' to='/contact'>Send a message</Link>
        </div>
      </section>
    </div>
  )
}

export default BottomSection
