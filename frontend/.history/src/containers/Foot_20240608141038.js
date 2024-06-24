import React from 'react';
import './cont.css'; // Import the CSS file

export default function Foot() {
  return (
    <footer>
      <div className="footer-container">
        <ul className="footer-nav">
        <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT US
            </a>
          </li>
          <>|</>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TERMS & CONDITIONS
            </a>
          </li>
          <>|</>
        <li className="nav-item">
            <a className="nav-link" href="#">
              PRIVACY POLICY
            </a>
          </li>
          <>|</>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTACT US
            </a>
          </li>
          <>|</>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQs
            </a>
          </li>
          <>|</>
        </ul>
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
      <div className="footer-copy">
          &copy; 2024 developed by Teja Akshay Kumar
      </div>
      </div>
    </footer>
  );
}