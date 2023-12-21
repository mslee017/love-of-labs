'use client';
import React, { useState } from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import CommonButton from '../components/CommonButton';

const Volunteer = () => {
  const handleSubmit = () => {
    //
  };

  return (
    <MaxWidthWrapper>
      <div className="pt-10">
        <h1 className="text-4xl sm:text-6xl font-semibold text-radixViolet-12 mb-4">
          Volunteering
        </h1>
        {/* <img
          src="undraw_good_doggy.svg"
          alt="Woman Petting Dog Graphic"
          className="pt-8 mb-8"
        /> */}
        <p className="mb-12 text-lg text-radixGray-11">
          We have many volunteer opportunities at any given time, from dog
          handling and transport to regular coordinator positions. Please fill
          out the form below and let us know how you would like to help and we
          will get back to you as soon as possible!
        </p>

        <form action={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Input label="Name" autofocus />
            <Input label="Email" />
            <Input label="Address" />
            <Input label="Cell Phone" />
            <TextArea label="How would you like to help?" />
          </div>
          <button
            className="px-4 py-4 bg-radixViolet-9 text-white w-[200px] rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default Volunteer;
