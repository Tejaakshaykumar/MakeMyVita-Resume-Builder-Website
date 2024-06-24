import React from 'react';
import './pagestyles.css';
import aboutImage from './path_to_your_image.jpg'; // Replace with the correct path to your image

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-top">
        <img src={aboutImage} alt="About" className="about-image" />
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>
      </div>
      <div className="about-bottom">
        <h2>About Me: Building Your Dream Resume on makemyvita.com</h2>
        <p>Hey everyone!</p>
        <p>
          I'm [Your Name], a student passionate about making the job search process smoother for everyone.
        </p>
        <p>
          I created makemyvita.com because, let's be honest, building a resume can be a real pain. It's time-consuming, confusing, and often leaves you feeling frustrated.
        </p>
        <p>
          That's why I designed makemyvita.com specifically for students and job seekers like you and me. I want to help you craft a resume that stands out from the crowd and lands you the interview you deserve.
        </p>
        <p>What makemyvita.com offers:</p>
        <ul>
          <li>User-friendly platform: No design experience required! Build your resume in minutes, even if you're a tech newbie.</li>
          <li>Modern templates: Choose from a variety of eye-catching templates that showcase your skills and experience in the best light.</li>
          <li>Easy customization: Tailor your resume to each job application with our flexible editing tools.</li>
          <li>Free to use: Get started with our basic features for free, or upgrade for even more customization options.</li>
        </ul>
        <p>
          Want to stay connected and get career tips? Follow me on social media!
        </p>
        <p>Instagram: [@your_instagram_handle]</p>
        <p>Twitter: [@your_twitter_handle]</p>
        <p>
          Let's build your dream resume together! Sign up for a free account on makemyvita.com today.
        </p>
        <h3>Why this is better:</h3>
        <p>
          Personal story: It connects with your audience by highlighting your experience as a student and your empathy for their struggles.
        </p>
        <p>
          Focus on benefits: You emphasize the value proposition of makemyvita.com - ease of use, modern templates, and customization.
        </p>
        <p>
          Call to action: A clear call to action encourages visitors to explore the platform.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
