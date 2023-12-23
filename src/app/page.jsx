'use client';
import { Paytone_One } from 'next/font/google';
import { useEffect } from 'react';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import Link from 'next/link';
import supabase from '@/utils/supabase';

const paytoneOne = Paytone_One({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Home() {
  useEffect(() => {
    async function fetchAdoptionRequests() {
      let { data: adoption, error } = await supabase
        .from('adoption')
        .select('*');
    }

    fetchAdoptionRequests();
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center">
        <div className="h-screen flex flex-col justify-center items-center gap-24 mb-4">
          <div className="flex flex-col justify-center items-center gap-12">
            <h1
              style={paytoneOne.style}
              className="text-7xl font-semibold text-radixViolet-12"
            >
              Find Your Perfect Match
            </h1>
            <Link href="/adopt">
              <button className="py-2 px-2 text-white bg-radixViolet-9 md:py-5 md:px-10 text-xl rounded">
                Adopt Dog
              </button>
            </Link>
          </div>

          <img src="undraw_dog.svg" alt="" className="mb-6 w-100 sm:w-3/5" />
        </div>

        <h2 className="text-5xl font-semibold text-radixViolet-12 pt-12 mb-12">
          About Us
        </h2>
        <div className="text-radixGray-12 text-lg pb-4 flex flex-col justify-center">
          <p className="mb-4">
            We are a foster based rescue, dedicated to the rescue of labs and
            lab mixes in danger of euthanasia. We are a 501(c)3 organization
            based in Connecticut. Our group is comprised of volunteers in the
            Eastern US who love labs and want to help those that end up homeless
            through no fault of their own.
          </p>
          <p className="mb-4">
            To the best of our ability, we evaluate all of our dogs temperament
            and suitability for living with other dogs, cats, and children. Our
            dog’s health is checked, and they are brought current on all
            vaccinations and are spayed or neutered. We then place them in
            loving foster homes until they find their very own family. Our goal
            is to meet the needs of each dog as an individual and to assure
            proper placement in a loving forever home.
          </p>
          <img
            src="undraw_passing_by.svg"
            alt="Woman Walking Dog"
            className="w-100 sm:w-3/5 mx-auto py-10"
          />
          {/* ADOPT PROCESS TO GO HERE WHEN READY */}
          <p className="mb-12">
            Our labs live in loving foster homes until their perfect forever
            home is found. Our foster homes work with our dogs to determine
            temperament as well as the requirements for each specific dog so
            that we can place them in a home that will fit their needs.
          </p>
          <p className="font-semibold text-radixViolet12 mb-2">
            The process to adopt a FTLOL dog includes:
          </p>
          <ul className="list-disc flex flex-col gap-1 pl-[30px] text-radixGray-12 mb-6">
            <li>Completion of an application</li>
            <li>Phone interview</li>
            <li>Veterinary reference & personal references</li>
            <li>Home visit</li>
            <li>
              <span className="font-bold">Non-refundable</span> adoption fee of
              $495 which offsets vetting and transporting our rescue dogs
            </li>
            <li>Adoption agreement</li>
          </ul>

          <p className="mb-4">
            We strive to match the right dog to the right family so that all
            will have many happy yers together. Each of our dogs now have a new
            chance at life - all{' '}
            <span className="font-bold">FOR THE LOVE OF LABS!</span>
          </p>

          <p>
            Not ready to adopt but want to help?!? Our 501(c)(3) non-profit
            rescue runs solely on fundraising efforts, adoption donation fees
            and monetary donations. No amount is too small! (All donations are{' '}
            <span className="font-bold">non-refundable</span>)
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
