import React from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

const About = () => {
  return (
    <MaxWidthWrapper>
      <div>
        MIX CONTENTS OF ABOUT & HOME PAGES: THIS PAGE SHOULD HAVE SMALL INFO
        LIKE BADASS ABOUT PAGE & OUR TEAM SECTION FROM FTLOL
        <p className="mb-4">
          We are a foster based rescue, dedicated to the rescue of labs and lab
          mixes in danger of euthanasia. We are a 501(c)3 organization based in
          Connecticut. Our group is comprised of volunteers in the Eastern US
          who love labs and want to help those that end up homeless through no
          fault of their own.
        </p>
        <p className="mb-4">
          To the best of our ability, we evaluate all of our dogs temperament
          and suitability for living with other dogs, cats, and children. Our
          dog’s health is checked, and they are brought current on all
          vaccinations and are spayed or neutered. We then place them in loving
          foster homes until they find their very own family. Our goal is to
          meet the needs of each dog as an individual and to assure proper
          placement in a loving forever home.
        </p>
        <h1>NEED IMAGE FLEXED WITH UPCOMING EVENT & DONATE BUTTON</h1>
        <p>
          Our labs live in loving foster homes until their perfect forever home
          is found. Our foster homes work with our dogs to determine temperament
          as well as the requirements for each specific dog so that we can place
          them in a home that will fit their needs.
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default About;
