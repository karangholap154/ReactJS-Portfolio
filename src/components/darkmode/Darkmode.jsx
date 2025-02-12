import React, { useState, useEffect } from 'react';
import './darkmode.css';

export const Darkmode = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    const storedDarkmode = localStorage.getItem('darkmode');
    if (storedDarkmode) {
      setIsDarkmode(storedDarkmode === 'true');
      document.body.classList.toggle('darkmode', storedDarkmode === 'true');
    }
  }, []);

  const toggleDarkmode = () => {
    setIsDarkmode(!isDarkmode);
    document.body.classList.toggle('darkmode');
    localStorage.setItem('darkmode', isDarkmode.toString());
  };

  return (
    <button className="darkmode-button" onClick={toggleDarkmode}>
      {isDarkmode ? (
        <i className="uil uil-sun darkmode-icon"></i>
      ) : (
        <i className="uil uil-moon darkmode-icon"></i>
      )}
    </button>
  );
};