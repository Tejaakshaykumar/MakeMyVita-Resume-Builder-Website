import React from 'react';
import './Temp2.css';

const SaanviPatelResume1 = () => {
  return (
    <div className="container">
      <div className="resume-header">
        <div>
          <h1>Saanvi Patel</h1>
          <div className="contact-info">
            <a href="mailto:saanvipatel@sample.in">saanvipatel@sample.in</a>
            <span>+91 22 1234 5677</span>
            <span>New Delhi, India 110034</span>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">Professional Summary</div>
        <p>Motivated Sales Associate with 5 years of experience boosting sales and customer loyalty through individualized service. Resourceful expert at learning customer needs, directing to desirable merchandise and upselling to meet sales quotas. Committed to strengthening customer experiences with positivity and professionalism when answering requests and processing sales.</p>
      </div>
      <div className="section">
        <div className="section-title">Skills</div>
        <ul className="skill-list">
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
        <div className="section-title">Work History</div>
        <h3>H&M - Retail Sales Associate</h3>
        <p>New Delhi • 05/2016 - Current</p>
        <ul>
          <li>Effectively upsold products by introducing accessories and other add-ons, adding ₹3000 to average monthly sales.</li>
          <li>Generated brand awareness and positive product impressions to increase sales 22%.</li>
          <li>Used consultative sales approach to understand customer needs and recommend relevant offerings.</li>
        </ul>
        <h3>Starbucks - Barista</h3>
        <p>New Delhi • 01/2015 - 03/2016</p>
        <ul>
          <li>Created over 60 drinks per hour with consistently positive customer satisfaction scores.</li>
          <li>Learned every menu preparation and numerous off-label drinks to meet all customer needs.</li>
          <li>Upsold baked goods and extra shots with beverages, increasing store sales ₹3800 per month.</li>
        </ul>
      </div>
      <div className="section">
        <div className="section-title">Education</div>
        <p>Oxford Software Institute & Oxford School of English</p>
        <p>New Delhi, India • June 2016</p>
        <p>Diploma: Financial Accounting</p>
      </div>
      <div className="section">
        <div className="section-title">Languages</div>
        <ul className="language-list">
          <li>Hindi: Native Language</li>
          <li>English: Proficient (C2)</li>
          <li>Bengali: Upper Intermediate (B2)</li>
        </ul>
      </div>
    </div>
  );
};

export default SaanviPatelResume1;
