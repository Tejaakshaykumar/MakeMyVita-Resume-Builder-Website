import React from 'react';
import './cont.css'; // Ensure the path is correct
import backgroundImage from '../images/pexels-magda-ehlers-pexels-1279813.jpg'; // Adjust the path as necessary

const Features = () => {
  return (
    <section>
      <div className="icon-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Your content */}
      </div>
    </section>
  );
};

export default Features;
