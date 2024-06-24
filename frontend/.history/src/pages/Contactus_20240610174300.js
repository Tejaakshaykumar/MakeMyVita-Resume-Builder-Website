import React from 'react';
import './pagestyles.css';
import img1 form '../'

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
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className='contactus-button'>Send Message</button>
        </form>
      </div>
      <div className="contact-right">
        <h3>INFO</h3>
        <p><img src="" alt="location"></img> Hyderabad, Telangana, India</p>
        <p><img src="" alt="phoneno"></img> +91-8897009748</p>
        <p><img src="" alt="email"></img> tejaakshaykumar08@gmail.com</p>
        <div class="social-icons">
        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://www.pinterest.com" target="_blank" aria-label="Pinterest">
          <i class="bi bi-pinterest"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" aria-label="YouTube">
          <i class="bi bi-youtube"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
          <i class="bi bi-twitter"></i>
        </a>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Contactus;