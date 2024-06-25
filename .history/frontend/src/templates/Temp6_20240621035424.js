import React from 'react';
import './temp6.css';

const SaanviPatelResume3 = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Saanvi Patel</h1>
        <div className="contact-info">
          <a href="mailto:saanvipatel@sample.in">saanvipatel@sample.in</a>
          <span>New Delhi, India 110034</span>
          <span>+91 22 1234 5677</span>
        </div>
      </div>
      <div className="section">
        <h2>Professional Summary</h2>
        <p>Motivated Sales Associate with 5 years of experience boosting sales and customer loyalty through individualized service. Resourceful expert at learning customer needs, directing to desirable merchandise and upselling to meet sales quotas. Committed to strengthening customer experiences with positivity and professionalism when answering requests and processing sales.</p>
      </div>
      <div className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>Store opening and closing</li>
          <li>Sales expertise</li>
          <li>Accurate Money Handling</li>
          <li>Store Merchandising</li>
          <li>Loss prevention</li>
          <li>Product promotions</li>
          <li>Guest Services</li>
          <li>Point of Sale Systems</li>
        </ul>
      </div>
      <div className="section">
        <h2>Work History</h2>
        <div className="job">
          <h3>Retail Sales Associate</h3>
          <p>H&M, New Delhi</p>
          <span>05/2016 - Current</span>
          <ul>
            <li>Effectively upsold products by introducing accessories and other add-ons, adding ₹3000 to average monthly sales.</li>
            <li>Generated brand awareness and positive product impressions to increase sales 22%.</li>
            <li>Used consultative sales approach to understand customer needs and recommend relevant offerings.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Barista</h3>
          <p>Starbucks, New Delhi</p>
          <span>01/2015 - 03/2016</span>
          <ul>
            <li>Created over 60 drinks per hour with consistently positive customer satisfaction scores.</li>
            <li>Learned every menu preparation and numerous off-label drinks to meet all customer needs.</li>
            <li>Upsold baked goods and extra shots with beverages, increasing store sales ₹3800 per month.</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2>Education</h2>
        <p>Oxford Software Institute & Oxford School of English</p>
        <p>New Delhi, India • June 2016</p>
        <p>Diploma: Financial Accounting</p>
      </div>
      <div className="section">
        <h2>Languages</h2>
        <ul className="languages">
          <li>Hindi: Native Language</li>
          <li>English: Proficient (C2)</li>
          <li>Bengali: Upper Intermediate (B2)</li>
        </ul>
      </div>
    </div>
  );
};

export default SaanviPatelResume3;
