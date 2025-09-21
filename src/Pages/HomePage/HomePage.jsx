import { Link } from 'react-router-dom'
import './HomePage.css'

import Picture from '../../Components/Picture'
import { sharedImages } from '../../imageSources'

const testimonialHighlights = [
  {
    quote:
      'Christin had my baby swimming in the 9 ft on her first lesson and treading water in her second lesson. Book her y’all!',
    author: 'Nicole Walton',
  },
  {
    quote:
      'She got my girl diving in 9 ft & swimming like a fish in 2 days. I’m one proud mama.',
    author: 'Ne-Ne Feaster',
  },
  {
    quote:
      'Christin was kind, patient, and very educational. I completed my lessons and I’m not scared anymore.',
    author: 'Cecil Shiflet',
  },
]

const HomePage = () => {
  return (
    <main className='home-page'>
      <section className='hero-section'>
        <div className='hero-content'>
          <span className='tagline'>Northeast Georgia&apos;s private swim coach</span>
          <h1>Transform fear of water into confident swimming.</h1>
          <p>
            From infants to adults, Christin Mitchell offers patient, personalized instruction designed to replace panic with
            poise in the pool.
          </p>
          <ul className='hero-highlights'>
            <li>Tailored lessons for every age and ability level</li>
            <li>Breakthrough coaching that conquers fear &amp; builds confidence</li>
            <li>Flexible scheduling at your home or community pool</li>
          </ul>
          <div className='hero-actions'>
            <Link className='cta-button' to='/contact'>Book a lesson</Link>
            <Link className='secondary-link' to='/reviews'>Read success stories</Link>
          </div>
        </div>
        <div className='hero-visual'>
          <div className='hero-image primary'>
            <Picture
              sources={sharedImages.instructors}
              alt='Private swim instructors smiling by the pool'
              imgProps={{ loading: 'lazy' }}
            />
          </div>
          <div className='hero-image secondary'>
            <Picture
              sources={sharedImages.pool}
              alt='Sunlit outdoor pool'
              imgProps={{ loading: 'lazy' }}
            />
          </div>
          <div className='hero-badge card'>
            <h3>600+ swimmers coached</h3>
            <p>Trusted by families across Athens, Colbert, and surrounding communities.</p>
          </div>
        </div>
      </section>

      <section className='about-section'>
        <div className='card mission-card'>
          <h2>Where fear meets confidence</h2>
          <p>
            Are you or a loved one held back from the joy of swimming due to fear or panic in the water? Christin specializes in
            guiding nervous beginners, neurodivergent swimmers, and determined athletes alike through a supportive, tailored
            curriculum.
          </p>
          <p>
            Every lesson is designed to feel calm, encouraging, and empowering—so you can enjoy the water with confidence for
            life.
          </p>
        </div>
        <div className='card approach-card'>
          <h3>Why families choose Christin</h3>
          <ul>
            <li><strong>Personalized approach:</strong> Lessons tailored to your goals, challenges, and learning style.</li>
            <li><strong>Patient, experienced instruction:</strong> Compassionate coaching for children, teens, and adults.</li>
            <li><strong>Proven results:</strong> A clear progression that takes swimmers from basic water comfort to advanced skills.</li>
            <li><strong>Confidence first:</strong> Building self-assurance in and around the water is at the heart of every session.</li>
          </ul>
        </div>
      </section>

      <section className='services-section'>
        <div className='section-heading'>
          <span className='tagline'>Lessons crafted for you</span>
          <h2>Private coaching for every swimmer</h2>
          <p>
            Whether you&apos;re starting fresh or polishing advanced technique, sessions are built around what success looks like for
            you.
          </p>
        </div>
        <div className='grid services-grid'>
          <article className='card service-card'>
            <h3>Infant &amp; toddler lessons</h3>
            <p>Gentle water introduction starting at 6 months with an emphasis on safety, floating, and early confidence.</p>
          </article>
          <article className='card service-card'>
            <h3>Kids &amp; teens</h3>
            <p>Private skill-building sessions that develop strong technique, breath control, and lifelong love for swimming.</p>
          </article>
          <article className='card service-card'>
            <h3>Adults conquering fear</h3>
            <p>Supportive instruction to overcome anxiety, learn efficient strokes, and feel secure in deep water.</p>
          </article>
          <article className='card service-card'>
            <h3>Advanced coaching</h3>
            <p>Customized training for competitive goals, endurance, and refined stroke mechanics.</p>
          </article>
        </div>
      </section>

      <section className='testimonial-section'>
        <div className='section-heading'>
          <span className='tagline'>Real transformations</span>
          <h2>What swimmers &amp; families are saying</h2>
        </div>
        <div className='grid testimonial-grid'>
          {testimonialHighlights.map(({ quote, author }) => (
            <article key={author} className='card testimonial-card'>
              <p className='quote'>“{quote}”</p>
              <span className='author'>— {author}</span>
            </article>
          ))}
        </div>
        <div className='testimonial-actions'>
          <Link className='secondary-link' to='/reviews'>Explore full reviews</Link>
        </div>
      </section>

      <section className='cta-section card'>
        <div className='cta-content'>
          <div>
            <h2>Ready to dive in?</h2>
            <p>Contact Christin to design a lesson plan around your goals and schedule.</p>
          </div>
          <div className='cta-actions'>
            <a className='cta-button' href='tel:17065407810'>Call 706-540-7810</a>
            <Link className='secondary-link' to='/contact'>Send a message</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
