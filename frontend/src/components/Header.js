import React, { useState , useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [isHeaderShrunk, setHeaderShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderShrunk(true);
      } else {
        setHeaderShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isHeaderShrunk ? 'shrink' : ''}>
      <img src="http://localhost:4000/images/Logo.png" alt="Phase Games Logo" className="logo" />
    </header>
  );
}

export default Header;