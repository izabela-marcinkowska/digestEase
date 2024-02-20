import Image from 'next/image';
import howitworks from '../assets/howitworks.png';
import tarm from '../assets/tarm.svg';
import { howItWorksDescription, whatIsItDescription } from '@/content';
import ActionCard from '@/components/ActionCard';
import LogotextDark from '../assets/DigestEase-darkGreen.svg';

export default function Home() {
  return (
    <div className="relative">
      <Image
        src={LogotextDark}
        alt="logo"
        className="absolute top-52 left-40 z-20 "
      ></Image>
      <Image
        src={tarm}
        alt="logo"
        width={700}
        className="absolute right-28"
      ></Image>
      <h2 className="text-3xl font-montserrat text-darkGreen absolute top-80 left-40">
        The Smart Path to Digestive Balance.
      </h2>
    </div>
  );
}
