import React from 'react';
import './btnscroll.css'

const BackToTopButton = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={handleClick} className="back-to-top-button">
            <img  src={process.env.PUBLIC_URL + 'scroll.png'} alt="scroll"></img>
        </button>
    );
};

export default BackToTopButton;
