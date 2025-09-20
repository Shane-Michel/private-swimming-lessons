import { useState } from 'react';
import './ContactPage.css';
import Picture from '../../Components/Picture';
import { sharedImages } from '../../imageSources';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset any previous error

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://private-swimming-lessons.com/contact.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // If the response is not ok, get the response text for debugging.
        const text = await response.text();
        setError(text || "Something went wrong. Please try again later.");
        return;
      }

      // If submission is successful, update state to render thank-you message.
      setFormSubmitted(true);
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  return (
    <main>
      <section id="contact">
        <div className="content3">
          <div className="headshot-container">
            <Picture
              sources={sharedImages.headshot}
              alt="headshot"
              imgProps={{ className: 'headshot', loading: 'eager' }}
            />
            <h2>Contact Us</h2>
          </div>
          {formSubmitted ? (
            <div className="thank-you-message">
              <p>Thank you for contacting us. Your message has been sent!</p>
              <Picture
                sources={sharedImages.contactCard}
                alt="business card"
                imgProps={{ className: 'contact-card', loading: 'lazy' }}
              />
            </div>
          ) : (
            <div className="form-contact-card">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
                {error && <p className="error-message">{error}</p>}
              </form>
              <Picture
                sources={sharedImages.contactCard}
                alt="business card"
                imgProps={{ className: 'contact-card', loading: 'lazy' }}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ContactPage;