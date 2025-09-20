import { useState } from 'react'
import './ContactPage.css'

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const formData = new FormData(event.target)

    try {
      const response = await fetch('https://private-swimming-lessons.com/contact.php', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const text = await response.text()
        setError(text || 'Something went wrong. Please try again later.')
        return
      }

      setFormSubmitted(true)
      event.target.reset()
    } catch (err) {
      setError('Error: ' + err.message)
    }
  }

  return (
    <main className='contact-page'>
      <section className='contact-hero card'>
        <span className='tagline'>Start your swim journey</span>
        <h1>Let’s build confidence in the water together</h1>
        <p>
          Share your goals and availability and we&apos;ll follow up with next steps, scheduling details, and how lessons can be
          tailored to you or your swimmer.
        </p>
      </section>

      <div className='contact-grid'>
        <section className='contact-form card'>
          {formSubmitted ? (
            <div className='thank-you-message'>
              <h2>Message sent!</h2>
              <p>Thank you for reaching out. Christin will contact you shortly.</p>
              <picture>
                <source srcSet='/generated/contact-card.webp' type='image/webp' />
                <img src='/images/contact-card.jpeg' alt='Christin Mitchell contact card' />
              </picture>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Send us a message</h2>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' placeholder='Your name' required />

              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' placeholder='your@email.com' required />

              <label htmlFor='message'>How can we help?</label>
              <textarea id='message' name='message' rows='5' placeholder='Tell us about your goals or swimmer' required></textarea>

              <button className='cta-button' type='submit'>Submit message</button>
              {error && <p className='error-message'>{error}</p>}
            </form>
          )}
        </section>

        <aside className='contact-details card'>
          <div className='contact-profile'>
            <picture>
              <source srcSet='/generated/headshot.webp' type='image/webp' />
              <img src='/images/headshot.png' alt='Christin Mitchell' />
            </picture>
            <div>
              <h2>Connect directly</h2>
              <p>Call or email to schedule lessons throughout Northeast Georgia.</p>
            </div>
          </div>
          <ul className='contact-methods'>
            <li>
              <span>Phone</span>
              <a href='tel:17065407810'>706-540-7810</a>
            </li>
            <li>
              <span>Email</span>
              <a href='mailto:cmswimminglessons@gmail.com'>cmswimminglessons@gmail.com</a>
            </li>
            <li>
              <span>Service area</span>
              <p>Athens, Colbert, and surrounding Northeast Georgia communities</p>
            </li>
          </ul>
          <div className='contact-card-preview'>
            <picture>
              <source srcSet='/generated/contact-card.webp' type='image/webp' />
              <img src='/images/contact-card.jpeg' alt='Private swimming lessons contact information card' />
            </picture>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default ContactPage
