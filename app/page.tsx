import FeaturesSection from '@/components/FeaturesSection';
import FounderSection from '@/components/FounderSection';
import Hero from '@/components/Hero';
import SaleSection from '@/components/SaleSection';

export default function Home() {
  return (
    <div className="flex flex-col w-5/6 mx-auto md:gap-22 gap-12">
      <Hero />
      <SaleSection />
      <FeaturesSection />
      <FounderSection />
    </div>
  );
}
