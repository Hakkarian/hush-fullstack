import React, { useEffect, useRef, useState } from 'react'
import { ToTopCss } from './ToTop.styled';

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling animation
    });
    };
    


  return (
    <ToTopCss>
      <div
        className={`center-con ${isVisible && "scrolled"}`}
        onClick={scrollToTop}
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <div className="round">
          <div id="cta">
            <div id="arrowAnim">
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToTopCss>
  );
};

export default ToTop;