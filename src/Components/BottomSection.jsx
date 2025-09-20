import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Picture from './Picture'
import { sharedImages } from '../imageSources'

const BottomSection = () => {

    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

  return (
    <div className="bottom-sections">
        <section id="services">
          <div className="content2">
            <h2>Our Services</h2>
            <ul>
              <li>Private Swimming Lessons for Kids starting at 6 months</li>
              <li>Private Swimming Lessons for Adults</li>
              <li>Specializing in breaking fear and panic</li>
              <li>Advanced Swimming Techniques</li>
              <li>Water Safety Courses</li>
            </ul>
          </div>
        </section>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/professionalprivatelearning"
          data-tabs="timeline"
          data-width=""
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/professionalprivatelearning"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/professionalprivatelearning">
              CM swimming lessons
            </a>
          </blockquote>
        </div>
        <section id="contact">
          <div className="content3">
            <div className="headshot-container">
              <Picture
                sources={sharedImages.headshot}
                alt="headshot"
                imgProps={{ className: 'headshot', loading: 'lazy' }}
              />
              <h2>Contact Us</h2>
            </div>
            <p>
              For inquiries and bookings call <strong>Christin</strong> at{' '}
              <strong>706-540-7810</strong>.
            </p>
            <p>For more information, subscribe down below for emails:</p>
            <Link className="subscribe" to={'/contact'}>Subscribe</Link>
          </div>
        </section>
      </div>
  )
}

export default BottomSection