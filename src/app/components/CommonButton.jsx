import React from 'react';

const CommonButton = ({ children }) => {
  return (
    <button className="px-4 py-4 bg-radixViolet-9 text-white w-[200px] rounded mb-4">
      {children}
    </button>
  );
};

export default CommonButton;
