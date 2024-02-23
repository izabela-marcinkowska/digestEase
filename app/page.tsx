import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col w-5/6 mx-auto gap-24">
      <Hero />
      <div className="mx-24">
        <h2 className=" md:text-4xl text-xl text-center font-mont">
          At DigestEase, we understand the intricacies of living with Irritable
          Bowel Syndrome (IBS) and similar digestive challenges. DigeastEase it
          is more than just a tracker. It is a personal health assistant that
          empowers you to take control of your IBS management through detailed
          insights and supportive guidance.
        </h2>
      </div>
    </div>
  );
}
