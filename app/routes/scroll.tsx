import { useState, useEffect } from 'react';

const ScrollDetectionWithDelay = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollCooldown, setScrollCooldown] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let cooldownTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!scrollCooldown) {
        setIsScrolling(true);
        setScrollCooldown(true);

        // Clear any existing timeout and set a new one to stop scrolling detection after 200ms
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 3000);

        // Set a cooldown of 5 seconds to prevent further scroll detection
        cooldownTimeout = setTimeout(() => {
          setScrollCooldown(false);
        }, 5000);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listeners and timeouts on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(cooldownTimeout);
    };
  }, [scrollCooldown]);

  return (
    <div>


<div className="h-screen bg-red-500" >
        Section 1
      </div>
      <div className="h-screen bg-green-500" >
        Section 2
      </div>
      <div className="h-screen bg-blue-500" >
        Section 3
      </div>
      <div className="h-screen bg-yellow-500" >
        Section 4
      </div>
    </div>
  );
};

export default ScrollDetectionWithDelay;
