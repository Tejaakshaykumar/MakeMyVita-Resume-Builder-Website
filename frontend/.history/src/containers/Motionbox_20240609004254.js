// YourComponent.js
import React from 'react';
import i1 from '../images/icons'; // Adjust the path as necessary
import i2 from '../images/icons';
import i3 from '../images/icons';
import i4 from '../images/icons';
import i5 from '../images/icons';
import i6 from '../images/icons';
import i7 from '../images/icons';
import i8 from '../images/icons';
import i9 from '../images/icons';
import i0 from '../images/icons';
import i1 from '../images/icons';
import i1 from '../images/icons';
import i1 from '../images/icons';
import i1 from '../images/icons';
import i1 from '../images/icons';
import i1 from '../images/icons';
import i1 from '../images/icons';
const Motionbox = () => {
    return (
        <div className="icon-container">
            <div className="icons">
                <img src={images.logoImage1} alt="Challenge Target" />
                <img src={images.logoImage2} alt="Slideshow Line" />
                <img src={images.logoImage3} alt="Themes" />
                <img src={images.logoImage4} alt="Document Search" />
                <img src={images.logoImage5} alt="Folder" />
                <img src={images.logoImage6} alt="Cloud Protection" />
                {/* Repeat the images for continuous scrolling */}
                <img src={images.logoImage1} alt="Challenge Target" />
                <img src={images.logoImage2} alt="Slideshow Line" />
                <img src={images.logoImage3} alt="Themes" />
                <img src={images.logoImage4} alt="Document Search" />
                <img src={images.logoImage5} alt="Folder" />
                <img src={images.logoImage6} alt="Cloud Protection" />
            </div>
        </div>
    );
};

export default Motionbox;
