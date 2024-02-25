import FeaturesSection from '@/components/FeaturesSection';
import Hero from '@/components/Hero';
import SaleSection from '@/components/SaleSection';
import Image from 'next/image';
import picture from '@/assets/BellaCVRound.png';

export default function Home() {
  return (
    <div className="flex flex-col w-5/6 mx-auto  md:gap-22 gap-12">
      <Hero />
      <SaleSection />
      <FeaturesSection />
      <div className="w-10/12 mx-auto mt-6 shadow-lg bg-lightGreen p-4 rounded-3xl">
        <div className="flex mt-8 justify-around">
          <Image
            src={picture}
            alt="picture of founder"
            width={250}
            height={250}
          />
          <div className="w-1/2 self-center flex flex-col gap-7">
            <h2 className="text-3xl text-center font-robotoSerif text-darkGreen">
              Behind DigestEase
            </h2>
            <p>
              Founded by Bella, who has navigated the IBS journey herself,
              DigestEase is more than just an app—it is a community. We are
              committed to making the management of IBS as effortless and
              insightful as possible, giving you back the time and freedom to
              enjoy life to the fullest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
