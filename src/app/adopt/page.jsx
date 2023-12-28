import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { Suspense } from 'react';

async function getToken() {
  const clientId = process.env.NEXT_PUBLIC_PETFINDER_API_KEY;
  const clientSecret = process.env.NEXT_PUBLIC_PETFINDER_SECRET_KEY;
  const url = 'https://api.petfinder.com/v2/oauth2/token';

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error('Error:', error);
    });
}

async function getAllDogs(token) {
  const ID = 'CT438';
  const url = `https://api.petfinder.com/v2/animals?organization=${ID}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

async function AllDogs({ token }) {
  const response = await getAllDogs(token);
  const { animals } = response;

  return animals?.map((dog, index) => (
    <div className="basis-full md:basis-1/2 lg:basis-1/3" key={index}>
      <a href={dog.url} target="_blank">
        <div className="flex flex-col items-start mb-6 lg:items-start">
          <img
            src={dog.photos[0]?.medium}
            alt="Main Dog Photo"
            className="object-cover w-full md:h-[300px] md:w-[300px]"
          />
          <span className="text-2xl font-semibold pt-4">{dog.name}</span>
          <span>
            {dog.gender} {dog.breeds.primary}
          </span>
          <span>
            {dog.size}, {dog.age}
          </span>
        </div>
      </a>
    </div>
  ));
}

const Adopt = async () => {
  const { access_token } = await getToken();
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col pt-10 mb-8">
        <h1 className="text-4xl sm:text-6xl font-semibold text-radixViolet-12 mb-6">
          OUR MISSION
        </h1>
        <p className="mb-4 text-radixGray-11 text-lg">
          For the Love of Labs goal is to place homeless dogs into loving homes
          and families. We take special care to match the right home with the
          right dog, ensuring a lifetime of love for both the pet and the
          adopter. To ensure the best matches are made, we have a process that
          has been proven effective in determining the best homes for our
          animals. Our adoption process may seem time consuming or unnecessarily
          complicated, but please understand that we have our dogs’ best
          interests at heart. We strive to find the best homes possible for our
          dogs, as well as find the right dog for you and your lifestyle
        </p>
        <p className="mb-8 text-radixGray-11 text-lg">
          Please understand that our organization is completely run by unpaid
          volunteers who dedicate their free time to help the dogs. If your
          references are unavailable, it will delay the process, since those
          must be checked before moving forward. The entire adoption process
          takes time; we are unwilling to sacrifice being thorough when the
          dog’s future is at stake. We thank you for your time and patience
          throughout our adoption process.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Link href="/adopt-faq">
            <button className="bg-radixViolet-9 h-[50px] px-4 text-white rounded">
              Adoption FAQ
            </button>
          </Link>
          <Link href="/adopt-application">
            <button className="bg-radixViolet-9 h-[50px] px-4 text-white rounded">
              Apply to Adopt
            </button>
          </Link>
        </div>
      </div>
      <div className="md:pt-4">
        <h2 className="text-4xl font-semibold mb-8 md:text-5xl text-radixViolet-12">
          Available Dogs
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
            <AllDogs token={access_token} />
          </div>
        </Suspense>
      </div>
    </MaxWidthWrapper>
  );
};

export default Adopt;
