import Image from 'next/image';
import picture from '@/assets/BellaCVRound.png';
import { behindDigestEastText } from '@/content/main';

const FounderSection = () => {
  return (
    <div className="md:w-10/12 mx-auto md:mt-6 shadow-lg bg-lightGreen rounded-3xl">
      <div className="flex flex-col md:flex-row p-6 md:justify-around items-center">
        <Image src={picture} alt="Picture of Bella" width={250} height={250} />
        <div className="md:w-1/2 text-center md:text-start self-center flex flex-col md:gap-7 gap-5">
          <h2 className="text-3xl text-center mt-7 md:mt-0 font-robotoSerif text-darkGreen">
            Behind DigestEase
          </h2>
          <p>{behindDigestEastText}</p>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
