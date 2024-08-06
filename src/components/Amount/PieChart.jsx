import React from 'react';

const CircularProgressBar = () => {
  return (
    <div className="py-2 cursor-pointer">
    <svg width="200" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#2B3265" strokeWidth="10"/>
      <circle cx="50" cy="50" r="45" fill="none" stroke="#7394FD" strokeWidth="10" strokeLinecap="round"
        strokeDasharray={283} strokeDashoffset={85}  transform="rotate(-90 50 50)"/>
      <text x="50" y="50" textAnchor="middle" dy="0.3em" fontSize="10" fill='#fff' className='font-semibold text-xl'>70%</text>
      <text x="50" y="60" textAnchor="middle" dy="1.2em" fontSize="5" fill='#fff' className='text-[6px]'>Goal Completed</text>
    </svg>  
  </div>
  );
};

export default CircularProgressBar;
