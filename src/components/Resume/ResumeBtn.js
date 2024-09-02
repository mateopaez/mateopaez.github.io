import React from 'react';
import resume from '../../assets/MateoPaez-Resume.pdf';


export default function ResumeBtn() {
    const handleButtonClick = () => {
        window.open(resume);  // opens in a new tab
    };

    return (
        <button className='resume-btn' onClick={handleButtonClick}>
            Resume
        </button>
    );
}
