import React from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import CommonButton from '../components/CommonButton';
import Link from 'next/link';

const AdoptFAQ = () => {
  return (
    <MaxWidthWrapper>
      <h1 className="text-4xl pt-12">Adoption FAQs</h1>

      <hr className="w-100 md:w-1/3 mb-8" />
      <img
        src="../adrian-craig-z8VFCteH-mI-unsplash.jpg"
        alt="Black Labrador"
        className="mb-4"
      />
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">What are your adoption fees?</h6>
        <p>
          Adoption donation fees are $495 and are non-refundable. They are,
          however, tax deductible
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          How long does the adoption process take?
        </h6>
        <p>
          Please allow 7 days for us to process your adoption application. This
          may take a little longer depending on the ability of your references,
          as well as the amount of application we receive at a given time.
          Please be patient and remember that we are an all-volunteer
          organization and many of our volunteers for fully time jobs, families,
          etc.
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          Are there specific requirements for adopting a FTLOL dog?
        </h6>
        <p>
          Yes, during the application process we will speak with your references
          as well as your vet. If you currently have an animal, we will
          determine that your current dog is up to date on all their core
          vaccinations before you can be considered for adopting. In addition,
          any animals currently in your home must be spayed or neutered unless
          there is a medical reason that they are not (determined by a vet).
          Homes with un-altered dogs for reasons of breeding or the possibility
          of breeding will not be considered.
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          Is the dog I’m interested in still available?
        </h6>
        <p>
          We try to keep our website current. If a dog is listed as ‘Available
          for Adoption’ on our Available Dogs page, then we are still accepting
          adoption applications for the dog.
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          I really have to have a particular dog I saw on the web site. If I’m
          first to apply for that dog, do I get him?
        </h6>
        <p>
          No. We do not place dogs on a first come, first served basis. Our main
          goal is to act in the best interest of each dog. We will evaluate all
          interested potential homes based on the needs of the particular dog.
          Most of these dogs have been abandoned and neglected, and we do
          everything within our power to make sure the home they go to is truly
          a “forever home” where they will be not only be loved, but well cared
          for physically and emotionally. Our foster homes weigh heavily in
          placement decisions as they have the knowledge and insight into the
          needs of their particular foster dog. We believe a dog’s foster family
          knows that dog’s temperament and personality best. They will be your
          greatest asset (and ours) in helping to determine if their foster dog
          will be a good match for your family. The foster’s assessment of the
          dog/adopter interaction and interview with the potential adopter will
          be taken into serious consideration in any determination of approving
          a specific adoption
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-2xl font-semibold">
          Do you adopt outside of the local area?
        </h6>
        <p>Yes we do adopt dogs to homes outside of the local area.</p>
      </div>

      <div className="flex flex-col items-center sm:flex-row gap-4 mb-12">
        <Link href="adopt-application">
          <CommonButton>Adoption Application</CommonButton>
        </Link>

        <Link href="/agreement.pdf" target="_blank">
          <CommonButton>Adoption Policy</CommonButton>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default AdoptFAQ;
