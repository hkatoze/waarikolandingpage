import React from 'react';

export function AfricanPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="africanPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M0 0h60v60H0z" fill="none"/>
          <path d="M30 5L5 30l25 25 25-25z" fill="currentColor"/>
          <circle cx="30" cy="30" r="4" fill="currentColor"/>
          <path d="M30 15L15 30l15 15 15-15z" fill="currentColor"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#africanPattern)"/>
      </svg>
    </div>
  );
}