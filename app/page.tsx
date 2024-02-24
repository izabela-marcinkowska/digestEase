import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col w-5/6 mx-auto gap-24">
      <Hero />
      <div className="md:mx-24 ">
        <h2 className=" md:text-4xl highlight text-2xl text-center font-josefin">
          Reimagine Your Digestive Health: Discover the Power of Personalized
          Insights and Seamless Daily Tracking with DigestEase, Your Ally in
          Wellness.
        </h2>
      </div>
    </div>
  );
}
