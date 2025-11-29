import { useState, useEffect } from 'react';
import '../App.css'

const TypewriterEffect = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Check if the current index is within the bounds of the full text
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      // Cleanup function to clear the timeout if the component unmounts or effect runs again
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]); // Dependencies: re-run effect when these change

  return (
    <span className="typewriter-container">
      {currentText}
      <span className="cursor">|</span> {/* Optional cursor element */}
    </span>
  );
};

export default TypewriterEffect;
