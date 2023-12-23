'use client';
import React, { useState } from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import SelectMenu from '../components/SelectMenu';
import SelectWrapper from '../components/SelectWrapper';

const CALL_TIME = ['Day', 'Evening'];
const LIVING_STATUS = ['Own', 'Rent', 'Live w/ Parents'];
const YES_NO = ['Yes', 'No'];

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  });
  return response.json();
}

const FosterApplication = () => {
  const [callTime, setCallTime] = useState(CALL_TIME[0]);
  const [ownedPet, setOwnedPet] = useState(YES_NO[0]);
  const [spayedNeutered, setSpayedNeutered] = useState(YES_NO[0]);
  const [vaccinations, setVaccinations] = useState(YES_NO[0]);
  const [livingStatus, setLivingStatus] = useState(LIVING_STATUS[0]);
  const [movingStatus, setMovingStatus] = useState(YES_NO[0]);
  const [houseAgreement, setHouseAgreement] = useState(YES_NO[0]);
  const [homeVisit, setHomeVisit] = useState(YES_NO[0]);
  const [animalControl, setAnimalControl] = useState(YES_NO[0]);
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    setIsSendingRequest(true);
    const payload = {
      callTime,
      ownedPet,
      spayedNeutered,
      vaccinations,
      livingStatus,
      movingStatus,
      houseAgreement,
      homeVisit,
      animalControl,
    };

    postData('https://example.com/answer', payload).then(data => {
      console.log(data);
      setIsSendingRequest(false);
      setCallTime(CALL_TIME[0]);
      setOwnedPet(YES_NO[0]);
      setSpayedNeutered(YES_NO[0]);
      setVaccinations(YES_NO[0]);
      setLivingStatus(LIVING_STATUS[0]);
      setMovingStatus(YES_NO[0]);
      setHouseAgreement(YES_NO[0]);
      setHomeVisit(YES_NO[0]);
      setAnimalControl(YES_NO[0]);
    });
  };

  return (
    <MaxWidthWrapper>
      <div className="pt-10">
        <h1 className="text-4xl sm:text-6xl font-semibold text-radixViolet-12 mb-6">
          Foster Application
        </h1>
        <form onSubmit={handleSubmit}>
          <p className="text-radixGray-12 mb-8">
            Please be sure to scroll all the way down to complete the full
            application
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 md:mb-12">
            <Input label="Name" autofocus />
            <Input label="Email" />
            <Input label="Address" />
            <Input label="City, State, Zip" />
            <Input label="Drivers License State & Number" />
            <Input label="Phone Number" />
            <SelectWrapper>
              <label htmlFor="call-time">Best time to call</label>
              <SelectMenu
                options={CALL_TIME}
                value={callTime}
                setValue={setCallTime}
                id="call-time"
              />
            </SelectWrapper>
            <SelectWrapper>
              <label htmlFor="owned-pet">
                Do you or have you ever owned a pet?
              </label>
              <SelectMenu
                options={YES_NO}
                value={ownedPet}
                setValue={ownedPet}
                id="owned-pet"
              />
            </SelectWrapper>
            <TextArea label="What type(s) and how many animals do you currently have in your home?" />
            <Input label="Are animals in your home kept indoors, outdoors or both?" />
            <SelectWrapper>
              <label htmlFor="spayed-neutered">
                Are the animals in your home spayed/neutered?
              </label>
              <SelectMenu
                options={YES_NO}
                value={spayedNeutered}
                setValue={setSpayedNeutered}
                id="spayed-neutered"
              />
            </SelectWrapper>
            <SelectWrapper>
              <label htmlFor="vaccinations">
                Are the animals in your home up to date on vaccinations?
              </label>
              <SelectMenu
                options={YES_NO}
                value={vaccinations}
                setValue={setVaccinations}
                id="spayed-neutered"
              />
            </SelectWrapper>
            <Input label="Please provide your local vet contact information (we may call for a reference)" />
            <SelectWrapper>
              <label htmlFor="living-status">
                Do you own or rent your home?
              </label>
              <SelectMenu
                options={LIVING_STATUS}
                value={livingStatus}
                setValue={setLivingStatus}
                id="living-status"
              />
            </SelectWrapper>
            <Input
              label="If you rent, please provide Landlord name and Phone Number"
              required={false}
            />
            <SelectWrapper>
              <label htmlFor="moving-status">
                Do you plan on moving in the next year?
              </label>
              <SelectMenu
                options={YES_NO}
                value={movingStatus}
                setValue={setMovingStatus}
                id="moving-status"
              />
            </SelectWrapper>
            <SelectWrapper>
              <label htmlFor="house-agreement">
                Has everyone in your household agreed to fostering?
              </label>
              <SelectMenu
                options={YES_NO}
                value={houseAgreement}
                setValue={setHouseAgreement}
                id="house-agreement"
              />
            </SelectWrapper>
            <Input label="How many hours a day are you away from the home?" />
            <TextArea label="Do you have an area in your home to isolate the foster dog from your pets? " />
            <TextArea label="How will you exercise your foster dog? (Walk, run, hike, backyard play etc.)" />
            <Input label="Do you have children in the home and what are their ages?" />
            <Input label="Have you fostered dogs before?" />
            <SelectWrapper>
              <label htmlFor="home-visit">
                Are you willing to allow a For the Love of Labs representative
                to visit the foster dogs in your home?
              </label>
              <SelectMenu
                options={YES_NO}
                value={homeVisit}
                setValue={setHomeVisit}
                id="home-visit"
              />
            </SelectWrapper>
            <SelectWrapper>
              <label htmlFor="animal-control">
                Do you agree to abide by all animal control laws with regards to
                your foster dog?
              </label>
              <SelectMenu
                options={YES_NO}
                value={animalControl}
                setValue={setAnimalControl}
                id="animal-control"
              />
            </SelectWrapper>
            <TextArea label="Why do you want to become a foster parent?" />
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

export default FosterApplication;
