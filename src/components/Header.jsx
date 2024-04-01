// Import necessary dependencies from React
import { useEffect, useRef } from "react";

// Define the Header component
export const Header = () => {
  // Create refs for the container and text elements
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // Effect to resize the text dynamically
  useEffect(() => {
    // Function to resize the text
    const resizeText = () => {
      // Get references to the container and text elements
      const container = containerRef.current;
      const text = textRef.current;

      // Check if either reference is null
      if (!container || !text) {
        return;
      }

      // Get the width of the container
      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2560;

      // Binary search to find the optimal font size
      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + "px";

        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      // Set the font size to the maximum found
      text.style.fontSize = max + "px";
    };

    // Call resizeText initially and add resize event listener
    resizeText();
    window.addEventListener("resize", resizeText);

    // Remove resize event listener on component unmount
    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  // Render the Header component
  return (
    <div className="max-w-5xl overflow-hidden mx-auto" ref={containerRef}>
      {/* Render the text element */}
      <span className="mx-auto whitespace-nowrap text-center font-bold uppercase text-primaryContent" ref={textRef}>
        Redux Tasker
      </span>
    </div>
  );
};
