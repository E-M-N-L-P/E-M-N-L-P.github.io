import React from 'react';

export const Slider = ({ defaultValue, max, step, onValueChange }) => {
  return (
    <input
      type="range"
      defaultValue={defaultValue[0]}
      max={max}
      step={step}
      onChange={(e) => onValueChange([parseInt(e.target.value)])}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer transition duration-150 ease-in-out"
    />
  );
};