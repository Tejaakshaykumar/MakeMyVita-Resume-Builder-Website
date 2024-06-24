import React from 'react';
import './pagestyles.css';
import Image1 from '../images/433-4334735_address-icon-png-address-logo-png-transparent-png.png';
import Image2 from '../images/a4e11b78e6c94821f27832d9c623a805.jpg';
import Image3 from '../images/Email-Logo-No-Background.jpg';

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
        <img src={Image1} alt="location" ></img> <p>Hyderabad, Telangana, India</p>
        <img src={Image} alt="phoneno"></img><p> +91-8897009748</p>
        <img src={Image} alt="email"></img><p> tejaakshaykumar08@gmail.com</p>
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