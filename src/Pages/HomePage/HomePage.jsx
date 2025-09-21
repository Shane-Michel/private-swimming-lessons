import { Link } from 'react-router-dom'
import './HomePage.css'


import { useEffect } from 'react';
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
      'She got my girl diving in 9 ft & swimming like a fish in 2 days. I highly recommend her! I’m one proud mama.',
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
            <picture>
              <source srcSet='/generated/private-swimming-lessons-instructors.webp' type='image/webp' />
              <img src='/images/private-swimming-lessons-instructors.jpg' alt='Private swim instructors smiling by the pool' loading='lazy' />
            </picture>
          </div>
          <div className='hero-image secondary'>
            <picture>
              <source srcSet='/generated/pool.webp' type='image/webp' />
              <img src='/images/pool.jpg' alt='Sunlit outdoor pool' loading='lazy' />
            </picture>
          </div>
          <div className='hero-badge card'>
            <h3>600+ swimmers coached</h3>
            <p>Trusted by families across Athens, Colbert, and surrounding communities.</p>
          </div>
        </div>
      </section>

    <main>

        <section className='home'>
            <Picture
              sources={sharedImages.instructors}
              alt="instructors"
              imgProps={{ loading: 'eager' }}
            />
            <div className='hero'>
                <h2>Private Swimming Lessons</h2>
                <p>Learn to swim confidently with our experienced instructors.</p>
            </div>
            <Picture
              sources={sharedImages.pool}
              alt="pool"
              imgProps={{ loading: 'lazy' }}
            />
        </section>

        <section className='about'>
            <div className='content1'>
                <div className='welcome'>
                    <h2>Christin Mitchell&apos;s Private Swimming Lessons - Where Fear Meets Confidence!</h2>
                    <p>Are you or your loved ones held back from the joy of swimming due to fear and panic in the water? Look no
                    further! As a specialized swim instructor with a passion for breaking fears and building confidence, I am here
                    to help you embark on a journey of aquatic discovery like never before.</p>

                    <p>At Christin Mitchell&apos;s Private Swimming Lessons, we understand that fear can be a significant barrier for both
                    children and adults, preventing them from enjoying the water and all the benefits it brings. With years of
                    experience and a proven track record, I am dedicated to empowering my students with the skills and mindset
                    needed to conquer their anxieties and thrive in the water.</p>
                </div>
                <div className='why-us'>
                    <h2>Why Choose Us:</h2>
                    <ul>
                        <li><strong className="text">Personalized Approach:</strong> Every individual&apos;s fears and needs are unique. I tailor my swimming
                            lessons to cater to the specific challenges faced by each student, ensuring a customized and comfortable
                            learning experience.
                        </li>
                        <li><strong className="text">Safe and Supportive Environment:</strong> Creating a safe and encouraging atmosphere is of utmost
                            importance to me. I foster an environment where students feel at ease, free from judgment, and motivated to
                            overcome their fears at their own pace.
                        </li>
                        <li><strong className="text">Patient and Experienced Instructor:</strong> With a wealth of experience in working with both
                            children and adults, I understand the varying emotional and physical aspects of overcoming fear. I approach
                            each lesson with patience, compassion, and a wealth of expertise.
                        </li>
                        <li><strong className="text">Step-by-Step Progression:</strong> Breaking fears and panics requires a gradual and structured
                            approach. I build a progression plan that starts with basic water acclimatization, advancing to fundamental
                            swimming techniques, and eventually conquering more challenging skills.
                        </li>
                        <li><strong className="text">Building Confidence:</strong> It&apos;s not just about learning swimming strokes; it&apos;s about building
                            self-assurance in the water. I take pride in nurturing my students&apos; confidence, helping them develop a
                            positive relationship with the aquatic environment.
                        </li>
                        <li><strong className="text">Results-Oriented:</strong> Witnessing my students transform from fearful beginners to confident
                            swimmers is incredibly rewarding. I am dedicated to delivering tangible results that go beyond just swimming
                            skills - instilling a lifelong love for the water.
                        </li>
                        <li><strong className="text">Flexibility and Convenience:</strong> As a private swim instructor, I understand the value of
                            flexibility. I work with your schedule to find the most convenient time and location for your lessons, be it
                            at your home pool or another suitable venue.
                        </li>
                    </ul>


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

        <div className='bottom-sections'>
            <section id='services'>
                <div className='content2'>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Private Swimming Lessons for Kids starting at age 6 months</li>
                        <li>Private Swimming Lessons for Adults</li>
                        <li>Specializing in breaking fear and panic </li>
                        <li>Advanced Swimming Techniques</li>
                        <li>Water Safety Courses</li>
                    </ul>
                </div>
            </section>
            <div className="fb-page" data-href="https://www.facebook.com/professionalprivatelearning" data-tabs="timeline" data-width="" data-height="70" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/professionalprivatelearning" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/professionalprivatelearning">CM swimming lessons</a></blockquote></div>
            <section id='contact'>
                <div className="content3">
                    <div className="headshot-container">
                        <Picture
                          sources={sharedImages.headshot}
                          alt="headshot"
                          imgProps={{ className: 'headshot', loading: 'lazy' }}
                        />
                        <h2>Contact Us</h2>
                    </div>
                    <p>For inquiries and bookings call <strong>Christin</strong> at <strong>706-540-7810</strong> or <strong><a href="mailto:cmswimminglessons@gmail.com">cmswimminglessons@gmail.com</a></strong>.</p>
                    <p>For more information, subscribe down below for emails:</p>
                    <Link className='subscribe' to={'/contact'} >Contact</Link>
                </div>
            </section>

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
