import React from 'react'

export default function ContactForm() {
  return (
    <div className="contact__card">
      <form action="https://formsubmit.co/weissenborn.sebastian@gmail.com" method="POST">
        <input type='hidden' name='subject' value="New email, OMG!" />
        <input type="hidden" name="_next" value="https://idyllic-mooncake-7b63ff.netlify.app/thanks.html" />
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button className='button-contact' type="submit">Send Message</button>
      </form>
    </div>
  )
}
