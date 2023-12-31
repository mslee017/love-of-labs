'use client';
import React from 'react';
import * as Select from '@radix-ui/react-select';

export default function SelectMenu({ options, value, setValue, id }) {
  return (
    <Select.Root value={value} onValueChange={setValue} className="">
      <Select.Trigger
        className="bg-radixGray-3 border border-radixGray-7 text-radixGray-12 text-sm rounded-lg  focus:border-radixViolet-7 block w-full p-2.5 focus:outline-none"
        id={id}
      >
        <Select.Value aria-label={value}>{value}</Select.Value>
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.Viewport>
            {options.map((option, index) => (
              <Select.Item
                value={option}
                className="text-[13px] leading-none text-radixGray-12 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-radixViolet-9 data-[highlighted]:text-violet1 cursor-pointer hover:bg-radixViolet-9 hover:text-white"
                key={index}
              >
                <Select.ItemText>{option}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
