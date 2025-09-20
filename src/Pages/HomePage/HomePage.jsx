import { Link } from 'react-router-dom'
import './Homepage.css'
import { useEffect } from 'react';

const HomePage = () => {

    useEffect(() => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
    }, []);

  return (
    <main>

        <section className='home'>
            <img src="/images/private-swimming-lessons-instructors.jpg" alt="intructors" />
            <div className='hero'>
                <h2>Private Swimming Lessons</h2>
                <p>Learn to swim confidently with our experienced instructors.</p>
            </div>
            <img src="/images/pool.jpg" alt="pool" />
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

                    <p>So, whether you&apos;re a nervous adult hoping to conquer water anxieties or a parent seeking expert guidance for
                    your child&apos;s aquatic journey, Christin Mitchell&apos;s Private Swimming Lessons is your trusted partner in unlocking
                    the potential within. Dive into a world of confidence and joy with us - let&apos;s make waves together!</p><br />

                    <p>Contact us today to schedule your first fear-breaking lesson and take the plunge towards a life of aquatic
                    freedom and empowerment.</p>
                </div>
            </div>
        </section>

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
                        <img className='headshot' src="/images/headshot.png" alt="headshot" />
                        <h2>Contact Us</h2>
                    </div>
                    <p>For inquiries and bookings call <strong>Christin</strong> at <strong>706-540-7810</strong> or <strong><a href="mailto:cmswimminglessons@gmail.com">cmswimminglessons@gmail.com</a></strong>.</p>
                    <p>For more information, subscribe down below for emails:</p>
                    <Link className='subscribe' to={'/contact'} >Contact</Link>
                </div>
            </section>
        </div>

    </main>
  )
}

export default HomePage