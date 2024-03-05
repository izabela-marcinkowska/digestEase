import FeaturesSection from '@/components/index/FeaturesSection';
import FounderSection from '@/components/index/FounderSection';
import Hero from '@/components/index/Hero';
import SaleSection from '@/components/index/SaleSection';

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
