// YourComponent.js
import React from 'react';
import i1 from '../images/icons/_1511456315_653_apple-mobile.jpg'; // Adjust the path as necessary
import i2 from '../images/icons/image_1505931884_eb6d43e20609dcb00235138ef0f43edb.png';
import i3 from '../images/icons/image_1505931959_3f5fa8e8d6ff05024be024c21235005b.jpeg';
import i4 from '../images/icons/image_1505931969_932f312aeb5789608e890a8a5ba07c7f.jpeg';
import i5 from '../images/icons/image_1505932289_77391d55bacd2bf59fd1117c3c8483ad.png';
import i6 from '../images/icons/image_1505932854_5502d987d0f183a175defc2b94bf0470.jpeg';
import i7 from '../images/icons/image_1505932854_5502d987d0f183a175defc2b94bf0470.jpeg';
import i8 from '../images/icons/image_1505932882_1eee877b98a15811c3b4e7ea2732e4f1.png';
import i9 from '../images/icons';
import i10 from '../images/icons';
import i11 from '../images/icons';
import i12 from '../images/icons';
import i13 from '../images/icons';
import i14 from '../images/icons';
import i15 from '../images/icons';
import i16 from '../images/icons';
import i17 from '../images/icons';
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
