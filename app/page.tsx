import Image from 'next/image';
import howitworks from '../assets/howitworks.png';
import tarm from '../assets/tarm.svg';
import { howItWorksDescription, whatIsItDescription } from '@/content';
import ActionCard from '@/components/ActionCard';
import LogotextDark from '../assets/DigestEaseTitleGreen.svg';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center w-5/6 mx-auto">
      <div className="w-11/12 mt-11 mb-4 flex flex-col gap-3 items-center">
        <Image src={LogotextDark} alt="logo"></Image>
        <h2 className="md:text-3xl text-xl text-center font-montserrat text-darkGreen">
          The Smart Path to Digestive Balance.
        </h2>
      </div>
      <div className="w-11/12">
        <Image src={tarm} alt="logo" width={700} className=""></Image>
      </div>
    </div>
  );
}
