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
        className="bg-radixGray-3 border border-radixGray-7 text-radixGray-12 text-sm rounded-lg  focus:border-radixViolet-7 block w-full p-2.5 focus:outline-none hover:bg-radixGray-4"
      />
    </div>
  );
};

export default Input;
