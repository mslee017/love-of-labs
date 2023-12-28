import React from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

const About = () => {
  return (
    <MaxWidthWrapper>
      <div className="pt-10">
        <h1 className="text-4xl sm:text-6xl font-semibold text-radixViolet-12 mb-6">
          About Us
        </h1>

        <div className="text-radixGray-11 text-lg mb-20">
          <p className="mb-12">
            For the Love of Labs is a 501(c)3 foster based dog rescue based in
            Enfield, CT. We are dedicated to the rescue of labs and lab mixes
            (though not exclusively) in danger of euthanasia. We believe every
            dog deserves a chance at life and through no fault of their own many
            of the dogs we rescue have ended up homeless or abandoned. Our dogs
            live in living foster homes until their perfect forever home is
            found.
          </p>
          <img
            src="undraw_walk_dreaming.svg"
            alt="Dog Graphic"
            className="w-100 md:w-[300px]"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-radixViolet-12 mb-6">
            Our Team
          </h2>
          <h3 className="text-2xl font-semibold text-radixViolet-12 mb-2">
            Tracy Cole, President
          </h3>
          <p className="text-radixGray-11">
            Tracy Cole has been involved in rescue and fostering rescue dogs for
            over 20 years. She lives in MA with her husband Ron and their labs
            Beau & Phinn, as well as their cocker spaniel Lucy and Chihuahua
            mix, Carly. Tracy oversees For the Love of Labs, including
            financials and the vetting of our rescue dogs. Please contact Tracy
            Cole at tracyc@fortheloveoflabs.org{' '}
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-radixViolet-12 mb-2">
            Tracy O'Connell, Executive Director
          </h3>
          <p className="text-radixGray-11">
            Tracy has been involved in rescue for a little over 13 years
            beginning by volunteering for a transport and the rest is history!
            She lives in CT with her husband Ken and three boys who all assist
            in caring for the dogs she fosters as well as their lab/hound mixes,
            Hank & Bonnie. Tracy oversees rescue along the east coast and in the
            deep south. Please contact Tracy O'Connell at
            tracy@fortheloveoflabs.org{' '}
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default About;
