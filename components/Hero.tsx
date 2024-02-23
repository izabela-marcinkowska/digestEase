import Image from 'next/image';
import tarm from '../assets/tarm.svg';
import LogotextDark from '../assets/DigestEaseTitleGreen.svg';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-12">
      <div className="w-11/12 mt-11 mb-4 flex flex-col gap-3 items-center">
        <Image src={LogotextDark} alt="logo" width={500}></Image>
        <h2 className="md:text-2xl text-xl text-center font-montserrat text-darkGreen">
          The Smart Path to Digestive Balance.
        </h2>
      </div>
      <div className="w-11/12">
        <Image src={tarm} alt="logo" width={550} className=""></Image>
      </div>
    </div>
  );
};

export default Hero;
