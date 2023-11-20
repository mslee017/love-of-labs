import React from 'react';
import { useId } from 'react';

const TextArea = ({ label, required = true, ...props }) => {
  const textAreaId = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={textAreaId}>
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      <textarea
        id={textAreaId}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-blue-700 focus:outline-none"
      />
    </div>
  );
};

export default TextArea;
