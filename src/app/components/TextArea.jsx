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
        className="bg-radixGray-3 border border-radixGray-7 text-radixGray-12  text-sm rounded-lg block w-full p-2.5 focus:border-radixViolet-7 focus:outline-none hover:bg-radixGray-4"
      />
    </div>
  );
};

export default TextArea;
