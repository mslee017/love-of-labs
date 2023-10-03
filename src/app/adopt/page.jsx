import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { Suspense } from 'react';

async function getToken() {
  // const clientId = 'evypOMDH8YzRz4lQA0Vlm3Ed787TQsJt6BUNUMoMjqCvh06T0M'; // Replace with your client ID
  // const clientSecret = 'j7Fv5UaTp1rat9C34MMNWrfYPyYNZHbek2ezB08B'; // Replace with your client secret
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
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
    });
}

async function AllDogs({ token }) {
  const { animals } = await getAllDogs(token);

  return animals?.map(dog => (
    <div className="basis-full md:basis-1/2 lg:basis-1/3">
      <a href={dog.url} target="_blank">
        <div className="flex flex-col items-start mb-6 lg:items-start">
          <img
            src={dog.photos[0]?.medium}
            alt="Main Dog Photo"
            className="object-cover w-full md:h-[300px] md:w-[300px]"
          />
          <span className="text-2xl font-semibold">{dog.name}</span>
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
    <>
      <img src="" alt="" />
      <div className="mb-4 bg-red-700 text-white">
        <MaxWidthWrapper>
          <div className="flex gap-10">
            <h2 className="text-4xl mb-4 md:text-6xl">
              Finding Your Perfect Match
            </h2>
            <div>
              <p className="mb-4">
                FTLOL’s goal is to place homeless dogs into loving homes and
                families. We take special care to match the right home with the
                right dog, ensuring a lifetime of love for both the pet and the
                adopter.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
                <Link href="/adopt-faq">
                  <button className="bg-white h-[50px] px-4 text-red-700">
                    Adoption FAQ
                  </button>
                </Link>
                <Link href="/adopt-faq">
                  <button className="bg-white h-[50px] px-4 text-red-700">
                    Apply to Adopt
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <h2 className="text-4xl font-bold mb-4 md:text-5xl">Available Dogs</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-wrap max-w-4/5 mx-auto">
            <AllDogs token={access_token} />
          </div>
        </Suspense>
      </MaxWidthWrapper>
    </>
  );
};

export default Adopt;

/*
--min-column-width: min(320px, 100%);
display: grid;
grid-template-columns: repeat(auto-fill, minmax(var(--min-column-width), 1fr));
grid-column-gap: 32px;
grid-row-gap: 32px;
*/

/* NEW CLIENT SECRET: SEPTEMBER 28th @ 11:30 */

// CHECK JC FOR SETTING PICTURES EVEN ON FLEX/GRID
