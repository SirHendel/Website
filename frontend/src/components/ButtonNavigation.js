import React, { useRef, useEffect, useState } from 'react';
import '../styles/ButtonNavigation.css';

const ButtonNavigation = ({ Themen }) => {
  const buttonsRef = useRef([]);
  const [openIndex, setOpenIndex] = useState(-1); // Track the index of the open button

  useEffect(() => {
    buttonsRef.current = buttonsRef.current.slice(0, 3);

    const handleKeyDown = (event) => {
      const currentFocusedIndex = buttonsRef.current.findIndex(
        (button) => button === document.activeElement
      );

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        const nextIndex =
          (currentFocusedIndex + 1) % buttonsRef.current.length;
        buttonsRef.current[nextIndex].focus();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        const prevIndex =
          (currentFocusedIndex - 1 + buttonsRef.current.length) %
          buttonsRef.current.length;
        buttonsRef.current[prevIndex].focus();
      }
    };

    const handleFocus = (buttonIndex) => {
      buttonsRef.current.forEach((button, index) => {
        if (index === buttonIndex) {
          button.classList.add('highlighted');
        } else {
          button.classList.remove('highlighted');
        }
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    buttonsRef.current.forEach((button, index) => {
      button.addEventListener('focus', () => handleFocus(index));
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      buttonsRef.current.forEach((button) => {
        button.removeEventListener('focus', handleFocus);
      });
    };
  }, []);

  // Function to toggle the text open/close state
  const toggleText = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="button-container">
      {Themen.map((item, index) => (
        <div key={index}>
          <button
            ref={(button) => (buttonsRef.current[index] = button)}
            onClick={() => toggleText(index)} // Toggle text on button click
          >
            {item.title}
          </button>
          <div>
            {openIndex === index && <p>{item.text}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ButtonNavigation;
