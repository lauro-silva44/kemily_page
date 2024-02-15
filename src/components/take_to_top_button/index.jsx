import React, { useState, useEffect } from 'react';
import './style.css'; // Import your CSS file for styling
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpOutlinedIcon/>
    </button>
  );
};

export default ScrollToTopButton;
