
import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke="blue" strokeWidth="5"></circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;