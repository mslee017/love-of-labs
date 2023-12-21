import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import CommonButton from '../components/CommonButton';

const Foster = () => {
  return (
    <div className="pt-10 text-radixGray-8">
      <MaxWidthWrapper>
        <h1 className="text-4xl sm:text-6xl font-semibold text-radixViolet-12 mb-6">
          How to Foster
        </h1>
        <p className="text-lg mb-10 text-radixGray-11">
          Fostering a dog saves a life. If you would like to help us by
          fostering a dog please fill out our Foster Application. Foster care
          consists of providing a safe, loving, temporary home for a dog until a
          permanent adoptive home can be found. All dogs are screened for health
          and temperament before entering our program. We can only rescue as
          many dogs as we have foster homes!
        </p>
        <img
          src="undraw_playing_fetch.svg"
          alt="Dog Playing Fetch Graphic"
          className="pt-6 mb-8"
        />
        <h3 className="text-2xl mb-2 text-radixViolet-12 font-semibold pt-6">
          Foster Home Responsibilities:
        </h3>
        <ul className="list-disc flex flex-col gap-1 pl-[30px] text-radixGray-11">
          <li>Provide temporary home for the dog.</li>
          <li>
            Be patient. Understand that all dogs are rescue dogs and their
            behavior can be unpredictable. Be prepared for some adjustment in
            the beginning. It can be stressful for both you and the dog to be in
            a new situation.
          </li>
          <li>
            Be willing to foster your dog from rescue to adoption. The amount of
            time needed to find a permanent home for a dog can vary from weeks
            to months.
          </li>
          <li>
            If you are working full time, provide a safe indoor place for the
            dog to be while you are gone. For the Love of Labs Rescue highly
            recommends crate training to keep both the dog and your home safe
            and secure. We will provide a crate if requested.
          </li>
          <li>
            Foster homes sign a Foster Agreement and agree to abide by For the
            Love of Labs Rescue policies.
          </li>
          <li>
            Notify your For the Love of Labs Rescue contacts immediately in the
            event the dog is sick or lost (your foster agreement includes the
            names and numbers of your contacts). Take the dog to medical
            appointments as required.
          </li>
          <li>
            Notify your For the Love of Labs Rescue contacts when you are going
            on vacation so we can provide another home for your dog to go to.
            Taking your foster dog with you also requires permission.
          </li>
          <li>
            Keep For the Love of Labs Rescue informed about your foster dog’s
            personality, quirks, behavior, etc. Your input is invaluable for
            describing the dog on the website and to potential adopters.
          </li>
          <li>Treat the dog as a member of your family.</li>
        </ul>
        <div className="flex flex-col gap-4 md:flex-row py-4">
          <Link href="/foster-faq">
            <CommonButton>Foster FAQ</CommonButton>
          </Link>
          <Link href="/foster-application">
            <CommonButton>Apply to Foster</CommonButton>
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Foster;
