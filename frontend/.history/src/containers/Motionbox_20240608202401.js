// YourComponent.js
import React from 'react';
import images from './Images'; // Adjust the path as necessary

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
