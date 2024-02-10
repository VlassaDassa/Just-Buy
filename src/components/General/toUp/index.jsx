import React, { useState, useEffect } from 'react';

import './index.scss';



const ToUp = () => {
    const [isDisplayed, setIsDisplayed] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setIsDisplayed(true);
          }
          else {
            setIsDisplayed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <button 
            className={`scroll-to-top-btn ${isDisplayed && 'scroll-to-top-btn--show'}`} 
            title="Наверх"
            onClick={(scrollToTop)}
        >

        </button>
    )
}

export default ToUp;
