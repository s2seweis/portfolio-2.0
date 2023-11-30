import React from 'react'
import './Contact.css'
import { Home, ContactPhone, Email, LinkedIn, FacebookRounded, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div>
      <div style={{ display: "flex" }} className="Contact" id="Contact">
        <div className="contact__container">
          <div style={{ display: "block" }}>
            <div className="contact__title">
              <h1>Contact</h1>
            </div>
            <div className="divider"></div>
            <div className="contact__details">
              <div className="contact__row">
                <Home className="contact__icon" />
                <div className="contact__info">
                  <h1>Koblenz</h1>
                  <h2>Sebastian Weissenborn</h2>
                </div>
              </div>
              <div className="contact__row">
                <ContactPhone className="contact__icon" />
                <div className="contact__info">
                  <h1>+4915203174827</h1>
                  <h2>Monday - Sunday</h2>
                </div>
              </div>
              <div className="contact__row">
                <Email className="contact__icon" />
                <div className="contact__info">
                  <h1>weissenborn.sebastian@gmail.com</h1>
                  <h2>Email me</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "block" }} className="social__accounts">
          <div className="social__title">
            <h1>My Social Network</h1>
            <div className="divider"></div>
          </div>
          <div className="social__media">
            <motion.a
              animate=""
              transition=""
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" className="social__row">
              <LinkedIn className="social__icon blue" />
              <h1 className='social__name'>LinkedIn</h1>
            </motion.a>
            <motion.a
              animate=""
              transition=""
              href="https://www.facebook.com/profile.php?id=100079871498434" target="_blank" className="social__row">
              <FacebookRounded className="social__icon blue" />
              <h1 className='social__name'>Facebook</h1>
            </motion.a>
            <motion.a
              animate=""
              transition=""
              href="https://github.com/s2seweis" target="_blank" className="social__row">
              <GitHub className="social__icon black" />
              <h1 className='social__name'>GitHub</h1>
            </motion.a>
          </div>
        </div>
      </div>
       <div className="contact__card">
          <form>
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
      </div>
  )
}

export default Contact
