import React from 'react';
import { useId } from 'react';

const Input = ({ label, type = 'text', required = true, ...props }) => {
  const inputId = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId}>
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      <input
        type={type}
        id={inputId}
        required={required}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-700 block w-full p-2.5 focus:outline-none"
      />
    </div>
  );
};

export default Input;
