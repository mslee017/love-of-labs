import React from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

const Events = () => {
  return (
    <MaxWidthWrapper>
      <div className="pt-10">
        <h1 className="text-4xl sm:text-6xl font-semibold text-radixViolet-12 mb-6">
          Upcoming Events
        </h1>
        <p className="text-xl italic mb-12">Please check back soon!</p>
        <img
          src="undraw_under_construction.svg"
          alt="Under Construction"
          className="w-3/5"
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default Events;
