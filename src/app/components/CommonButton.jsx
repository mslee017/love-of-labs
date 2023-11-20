import React from 'react';

const CommonButton = ({ children }) => {
  return (
    <button className="px-4 py-4 bg-blue-700 text-white w-[200px]">
      {children}
    </button>
  );
};

export default CommonButton;
