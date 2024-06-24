import React from 'react';
import './pagestyles.css';

const Contactus = () => {
  return (
    <div className="contact-container">
        <div className='contactus'>
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>Make My Vita</p>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-right">
        <h3>INFO</h3>
        <p>📍 Hyderabad, Telangana, India</p>
        <p>📞 +91-8897009748</p>
        <p>📧 tejaakshaykumar08@gmail.com</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contactus;