import Image from 'next/image';
import whatitis from '../assets/whatitis.png';
import howitworks from '../assets/howitworks.png';
import { howItWorksDescription, whatIsItDescription } from '@/content';
import ActionCard from '@/components/ActionCard';

export default function Home() {
  return (
    <div>
      <h1 className="text-gray-700 text-3xl font-logo">DigestEase</h1>
    </div>

    // <div className=" flex flex-col gap-2 mx-2 my-4 bg-green-50">
    //   <ActionCard
    //     img={whatitis}
    //     title="What is it?"
    //     description={whatIsItDescription}
    //   />
    //   <ActionCard
    //     img={howitworks}
    //     title="How it works?"
    //     description={howItWorksDescription}
    //   />
    // </div>
  );
}
