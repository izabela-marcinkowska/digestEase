import Hero from '@/components/Hero';
import SaleSection from '@/components/SaleSection';
import { Drumstick } from 'lucide-react';
import FoodDiaryIcon from '../components/icons/FoodDiaryIcon';
import BowelTrackerIcon from '@/components/icons/BowelTrackerIcon';
import AIAnalyzeIcon from '@/components/icons/AIAnalyzeIcon';

export default function Home() {
  return (
    <div className="flex flex-col w-5/6 mx-auto  md:gap-22 gap-12">
      <Hero />
      <SaleSection />
      <div className="flex lg:flex-row flex-col md:pt-4 lg:gap-2 gap-14 w-10/12 mx-auto">
        <div className="flex flex-col items-center lg:gap-4 gap-1">
          <Drumstick size={38} strokeWidth={0.8} />
          <h3 className="text-xl text-center text-darkGreen font-montserratBold">
            Food Diary
          </h3>
          <p className="w-5/6 text-center">
            Go beyond simple meal tracking with our Food Diary. Detail your
            daily intake and spot patterns that may influence your IBS. It is
            more than just a log; it is the first step to uncovering what fuels
            your body right.
          </p>
        </div>
        <div className="flex flex-col items-center lg:gap-4 gap-1">
          <BowelTrackerIcon width={38} />
          <h3 className="text-xl text-center text-darkGreen font-montserratBold">
            Bowel Movement Tracker
          </h3>
          <p className="w-5/6 text-center">
            Our discreet Bowel Movement Tracker offers a clear view of your
            digestive trends. With just a few taps, you can record consistency
            and frequency, paving the way for meaningful health conversations
            and personal insights.
          </p>
        </div>
        <div className="flex flex-col items-center lg:gap-4 gap-1">
          <AIAnalyzeIcon width={38} />
          <h3 className="text-xl text-center text-darkGreen font-montserratBold">
            Personalized AI Analysis
          </h3>
          <p className="w-5/6 text-center">
            Leverage the wisdom of our Personalized AI Analysis to turn your
            health data into action. Our AI sifts through your logs, offering
            customized advice and identifying changes that could make a big
            difference to your digestive comfort.
          </p>
        </div>
      </div>
    </div>
  );
}
