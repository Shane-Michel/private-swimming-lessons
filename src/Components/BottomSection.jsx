import { Link } from 'react-router-dom'
import './BottomSection.css'

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
            <picture>
              <source srcSet='/generated/headshot.webp' type='image/webp' />
              <img className='headshot' src='/images/headshot.png' alt='Christin Mitchell headshot' loading='lazy' />
            </picture>
            <h2>Connect with Christin</h2>
          </div>
          <p>
            For inquiries and bookings call <strong>706-540-7810</strong> or email{' '}
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
