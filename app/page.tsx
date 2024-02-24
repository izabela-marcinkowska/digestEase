import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col w-5/6 mx-auto md:gap-22 gap-12">
      <Hero />
      <div className="md:mx-24 ">
        <h2 className=" md:text-4xl bg-highlight pt-4 pb-3 text-2xl text-center font-robotoSerif">
          Reimagine Your Digestive Health: Discover the Power of Personalized
          Insights and Seamless Daily Tracking with <br></br> DigestEase, Your
          Ally in Wellness.
        </h2>
      </div>
    </div>
  );
}
