"use client"

import React, {useState, useEffect} from 'react';
import "./ScrollToTop.css";

const ScrollToTop:React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down by 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      } 
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return <a href="#" id="scroll-top" className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? "active" :""}`}><i className="bi bi-arrow-up-short"></i></a>
}

export default ScrollToTop;