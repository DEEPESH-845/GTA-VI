import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

const PreLoader = ({ onFinish }) => {
  const overlayRef = useRef(null);
  const [visible, setVisible] = useState(true);

  // Minimum display time — ~2 full animation cycles, then fade out
  useEffect(() => {
    const minDuration = 4300;
    let loaded = false;
    let timeoutId = null;

    const startExit = () => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setVisible(false);
          document.body.style.overflow = "";
          if (onFinish) onFinish();
        },
      });
    };

    const handleLoad = () => {
      loaded = true;
      clearTimeout(timeoutId);
      startExit();
    };

    // Ensure minimum display time
    timeoutId = setTimeout(() => {
      if (loaded) startExit();
      else {
        window.addEventListener("load", handleLoad);
        // Fallback: exit after max ~6.3s regardless
        setTimeout(() => {
          if (visible) startExit();
        }, 2000);
      }
    }, minDuration);

    if (document.readyState === "complete") {
      loaded = true;
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      data-loading="true"
      className="preloader-overlay"
    >
      <div className="preloader-wrapper">
        {/* Main logo mask with animated background + shimmer ::after */}
        <div className="preloader-logo" />
        {/* Background glow */}  
        <div className="preloader-glow" />
      </div>
    </div>
  );
};

export default PreLoader;
