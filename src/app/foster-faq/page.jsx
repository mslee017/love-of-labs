import React from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

const FosterFAQ = () => {
  return (
    <MaxWidthWrapper>
      <h1 className="text-4xl sm:text-6xl font-semibold text-radixViolet-12 mb-6 pt-10">
        Foster FAQ
      </h1>
      <img
        src="undraw_everyday_life.svg"
        alt="Woman Walking Dog Graphic"
        className="w-100 sm:w-3/5 mb-12"
      />
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          What is the process of becoming a foster home?
        </h6>
        <p className="text-radixGray-11">
          The first step is for you to fill out a Foster Care Application. Upon
          receipt of your application, the FTLOL application coordinator(s) will
          review your application and speak with your references to determine if
          you qualify for appropriately caring for a dog. Please allow us 7-10
          days to review your application and contact your references{' '}
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          Do I get to choose which dog I foster?
        </h6>
        <p className="text-radixGray-11">
          We try to match the foster dog to the home it will be going to. If you
          require a particular size, energy level or breed, or if you need a dog
          who is good with children or other pets we do our best to meet that
          criteria.{' '}
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          How much will it cost to foster a dog?
        </h6>
        <p className="text-radixGray-11">
          There is minimal cost to the foster. For the Love of Labs pays the
          cost of all veterinary care. Foster homes are asked to provide food
          and love!{' '}
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          How long does it take for a dog to get adopted?
        </h6>
        <p className="text-radixGray-11">
          We cannot make any promises regarding how long a particular dog will
          be in your home. On average our dogs are in foster homes for 3-6
          weeks, sometimes longer.
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          Will I be involved in choosing the dog's new owner?
        </h6>
        <p className="text-radixGray-11">
          We have found that foster homes are the best judge of what kind of
          home is the best fit for their foster dog's particular needs. You will
          be involved in the screening process of potential adopters in order to
          find the best home for the dog
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">Can I adopt my foster dog?</h6>
        <p className="text-radixGray-11">
          Yes, we do allow this. We ask that foster homes let us know as soon as
          possible of their decision and before a dog is listed for adoption.
          Foster homes do pay our same adoption fee of $495.
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default FosterFAQ;
