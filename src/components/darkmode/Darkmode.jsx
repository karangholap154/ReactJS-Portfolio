import React, { useState, useEffect } from 'react';
import './darkmode.css';

export const Darkmode = () => {
  const [isDarkmode, setIsDarkmode] = useState(() => {
    const storedDarkmode = localStorage.getItem('darkmode');
    return storedDarkmode === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('darkmode', isDarkmode);
    localStorage.setItem('darkmode', isDarkmode.toString());
  }, [isDarkmode]);

  const toggleDarkmode = () => {
    setIsDarkmode(!isDarkmode);
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