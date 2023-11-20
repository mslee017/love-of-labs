import MaxWidthWrapper from './components/MaxWidthWrapper';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      <img
        src="/troy-williams-Ub9m5a2EEKs-unsplash.jpg"
        alt="Testing Hero Image"
      />
      <div className="absolute top-[20%] right-2 gap-8 flex-col md:top-[15%] md:left-[60%] md:flex xl:top-[25%] xl:items-center">
        <h1 className=" text-white md:text-5xl font-semibold">
          Find The Right Dog For You
        </h1>
        <Link href="/adopt">
          <button className="py-2 px-2 bg-white md:py-4 md:px-4 text-blue-700 text-xl">
            Available Dogs
          </button>
        </Link>
      </div>

      <MaxWidthWrapper>
        <section>
          <h1 className="text-4xl pt-8">About Us</h1>
          <h1>THIS SECTION FOR FOSTER WITH IMAGE FLEXED</h1>
          <p className="mb-4">
            We are a foster based rescue, dedicated to the rescue of labs and
            lab mixes in danger of euthanasia. We are a 501(c)3 organization
            based in Connecticut. Our group is comprised of volunteers in the
            Eastern US who love labs and want to help those that end up homeless
            through no fault of their own.
          </p>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
