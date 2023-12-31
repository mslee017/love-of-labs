'use client';
import React, { useState } from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import SelectMenu from '../components/SelectMenu';
import SelectWrapper from '../components/SelectWrapper';
import supabase from '../../utils/supabase';

const HOMES = ['House', 'Condo', 'Apartment', 'Mobile Home', 'Other'];
const LIVING_STATUS = ['Own', 'Rent', 'Live w/ Parents'];
const YES_NO = ['Yes', 'No'];

const AdoptApplication = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [placeOfEmployment, setPlaceOfEmployment] = useState('');
  const [homes, setHomes] = useState(HOMES[0]);
  const [livingStatus, setLivingStatus] = useState(LIVING_STATUS[0]);
  const [isMoving, setIsMoving] = useState(YES_NO[0]);
  const [childrenAtHome, setChildrenAtHome] = useState(YES_NO[0]);
  const [vaccinated, setVaccinated] = useState(YES_NO[0]);
  const [allowedIndoors, setAllowedIndoors] = useState(YES_NO[0]);
  const [enrollObedience, setEnrollObedience] = useState(YES_NO[0]);
  const [animalControl, setAnimalControl] = useState(YES_NO[0]);
  const [licenseDog, setLicenseDog] = useState(YES_NO[0]);
  const [repVisit, setRepVisit] = useState(YES_NO[0]);
  const [financialAwareness, setFinancialAwareness] = useState(YES_NO[0]);
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsSendingRequest(true);

    const { data, error } = await supabase
      .from('adoption')
      .insert([
        {
          name,
          email,
          address,
          city,
          phone_number: phoneNumber,
          place_employment: placeOfEmployment,
        },
      ])
      .select();
  };

  return (
    <MaxWidthWrapper>
      <div className="pb-16 pt-10">
        <h1 className="text-4xl sm:text-6xl font-semibold text-radixViolet-12 mb-6">
          Adoption Application
        </h1>
        <form onSubmit={handleSubmit}>
          <p className="mb-12 text-radixGray-11">
            PLEASE review our adoption process tab BEFORE completing your
            application to review our requirements. Incomplete applications will
            not be processed. In addition, our initial contact with you will be
            via email. PLEASE check your spam periodically over the first few
            days after submitting your application to be sure you do not miss
            our initial email. Due to the volume of applications we receive,
            applicants that do not respond to the email may not get processed.
            Please scroll all the way down to finish the application. Thank you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <Input
              label="Name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <Input
              label="Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <Input
              label="Address"
              value={address}
              onChange={event => setAddress(event.target.value)}
            />
            <Input
              label="City, State, Zip"
              value={city}
              onChange={event => setCity(event.target.value)}
            />
            <Input
              label="Phone Number"
              value={phoneNumber}
              onChange={event => setPhoneNumber(event.target.value)}
            />
            <Input
              label="Place of Employment"
              value={placeOfEmployment}
              onChange={event => setPlaceOfEmployment(event.target.value)}
            />
            <Input label="Who will be responsible for the dog?" />
            <SelectWrapper>
              <label htmlFor="domain-type">Do you live in a: </label>
              <SelectMenu
                options={HOMES}
                value={homes}
                setValue={setHomes}
                id="domain-type"
              />
            </SelectWrapper>
            <Input label="If other, please specify" required={false} />
            <SelectWrapper>
              <label htmlFor="living-status">Do you:</label>
              <SelectMenu
                options={LIVING_STATUS}
                value={livingStatus}
                setValue={setLivingStatus}
                id="living-status"
              />
            </SelectWrapper>
            <Input label="Landlords Name and Phone" required={false} />
            <Input label="How long at your present address?" />
            <SelectWrapper>
              <label htmlFor="moving">
                Do you plan on moving in the next 6 months?
              </label>
              <SelectMenu
                options={YES_NO}
                value={isMoving}
                setValue={setIsMoving}
                id="moving"
              />
            </SelectWrapper>
            <TextArea label="If you move in the future, what will you do with the dog?" />
            <SelectWrapper>
              <label htmlFor="children-at-home">
                Do you have children at the home?
              </label>
              <SelectMenu
                options={YES_NO}
                value={childrenAtHome}
                setValue={setChildrenAtHome}
                id="children-at-home"
              />
            </SelectWrapper>
            <TextArea label="If yes, what are their ages?" />
            <Input label="Are they used to animals?" />
            <Input label="Is anybody in the home allergic to dogs?" />
            <Input label="Do all adult members of the household know of your plan to adopt?" />
            <TextArea label="Why do you want this dog? (Companion, Guard Dog, Hunting Dog, Other)" />
            <Input label="Do you have other animals in your home? If so, how many?" />
            <TextArea label="Please provide the following information for each of your animals: (Type, Age, Sex, Time Owned For, Spayed/Neutered)" />
            <SelectWrapper>
              <label htmlFor="vaccinations">
                Are your pets current on all vaccinations?
              </label>
              <SelectMenu
                options={YES_NO}
                value={vaccinated}
                setValue={setVaccinated}
                id="vaccinations"
              />
            </SelectWrapper>
            <Input label="Name and Phone No. of Vet" />
            <Input label="How many hours a day will this dog be without human supervision?" />
            <Input label="Where will this dog be during the day?" />
            <Input label="At night?" />
            <SelectWrapper>
              <label htmlFor="indoors">Will this dog be allowed indoors?</label>
              <SelectMenu
                options={YES_NO}
                value={allowedIndoors}
                setValue={setAllowedIndoors}
                id="indoors"
              />
            </SelectWrapper>
            <Input label="Where will this dog sleep?" />
            <TextArea label="When outside, this dog will be: (In a Fenced Yard, On Leash, Allowed to Run Loose, Chained, Other)" />
            <Input
              label="If yard is fenced, will it safely contain the dog?"
              required={false}
            />
            <Input label="Type of fence and height" />
            <Input label="What kind of outside shelter will be provided?" />
            <SelectWrapper>
              <label htmlFor="obedience">
                Are you willing to enroll this dog in obediance classes?
              </label>
              <SelectMenu
                options={YES_NO}
                value={enrollObedience}
                setValue={setEnrollObedience}
              />
            </SelectWrapper>
            <SelectWrapper>
              <label htmlFor="animal-control">
                Are you aware of your local animal control regulations?
              </label>
              <SelectMenu
                options={YES_NO}
                value={animalControl}
                setValue={setAnimalControl}
              />
            </SelectWrapper>
            <SelectWrapper>
              <label htmlFor="dog-license">Will you license this dog?</label>
              <SelectMenu
                options={YES_NO}
                value={licenseDog}
                setValue={setLicenseDog}
              />
            </SelectWrapper>
            <Input label="How many animals excluding those listed above have you owned in the last 5 years?" />
            <TextArea label="What happened to them?" />
            <SelectWrapper>
              <label htmlFor="rep-visit">
                Would you allow one of our reps to visit the animal in your
                home?
              </label>
              <SelectMenu
                options={YES_NO}
                value={repVisit}
                setValue={setRepVisit}
              />
            </SelectWrapper>
            <SelectWrapper>
              <label htmlFor="rep-visit">
                Are you aware of the financial commitment and responsibilites in
                owning a companion animal?
              </label>
              <SelectMenu
                options={YES_NO}
                value={financialAwareness}
                setValue={setFinancialAwareness}
              />
            </SelectWrapper>
            <TextArea label="PLEASE PROVIDE THREE (3) REFERENCES: One reference must be a veterinarian. Other references may include neighbors or co-workers. For each reference please list the following: Name/Relationship/Phone No." />
            <TextArea
              label="Please provide any additional information you would like to share here"
              required={false}
            />
            <TextArea label="If you are not applying for a specific dog, please indicate preferences here (color, sex, energy level, etc" />
            <Input label="How did you hear about us?" />
          </div>
          <button
            className="px-4 py-4 bg-radixViolet-9 text-white w-[200px] rounded mt-12"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default AdoptApplication;
