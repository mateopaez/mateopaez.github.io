import React from 'react';

export default function ResumeBtn() {
    const handleButtonClick = () => {
        window.open("/MateoPaez-Resume.pdf");  // opens in a new tab
    };

    return (
        <button className='resume-btn' onClick={handleButtonClick}>
            Resume
        </button>
    );
}
