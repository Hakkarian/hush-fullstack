import { useEffect, useState } from 'react'
import { ToTopCss } from './ToTop.styled';
import { useLocation } from 'react-router-dom';

const ToTop = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const addHushClass = (str: string) => location.pathname.includes("/hush-gallery") && `${str}--hush`;
  const addRiseyClass = (str: string) => location.pathname.includes("/risey-gallery") && `${str}--risey`;
  
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
        <div
          className={`round ${addHushClass("round")} ${addRiseyClass("round")}`}
        >
          <div id="cta">
            <div id="arrowAnim">
              <div className="arrowSliding">
                <div
                  className={`arrow ${addHushClass("arrow")} ${addRiseyClass(
                    "arrow"
                  )}`}
                ></div>
              </div>
              <div className="arrowSliding delay1">
                <div
                  className={`arrow ${addHushClass("arrow")} ${addRiseyClass(
                    "arrow"
                  )}`}
                ></div>
              </div>
              <div className="arrowSliding delay2">
                <div
                  className={`arrow ${addHushClass("arrow")} ${addRiseyClass(
                    "arrow"
                  )}`}
                ></div>
              </div>
              <div className="arrowSliding delay3">
                <div
                  className={`arrow ${addHushClass("arrow")} ${addRiseyClass(
                    "arrow"
                  )}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToTopCss>
  );
};

export default ToTop;