import Hero from '@/components/Hero';
import SaleSection from '@/components/SaleSection';
import { Drumstick } from 'lucide-react';
import FoodDiaryIcon from '../components/icons/FoodDiaryIcon';
import BowelTrackerIcon from '@/components/icons/BowelTrackerIcon';
import AIAnalyzeIcon from '@/components/icons/AIAnalyzeIcon';

export default function Home() {
  return (
    <div className="flex flex-col w-5/6 mx-auto md:gap-22 gap-12">
      <Hero />
      <SaleSection />
      <div className="flex">
        <div>
          <Drumstick size={38} color="darkGreen" strokeWidth={0.8} />
          <h3>Food Diary</h3>
          <p>
            Go beyond simple meal tracking with our Food Diary. Detail your
            daily intake and spot patterns that may influence your IBS. It is
            more than just a log; it is the first step to uncovering what fuels
            your body right.
          </p>
        </div>
        <div>
          <BowelTrackerIcon width={38} />
          <h3>Bowel Movement Tracker</h3>
          <p>
            Our discreet Bowel Movement Tracker offers a clear view of your
            digestive trends. With just a few taps, you can record consistency
            and frequency, paving the way for meaningful health conversations
            and personal insights.
          </p>
        </div>
        <div>
          <AIAnalyzeIcon width={38} />
          <h3>Personalized AI Analysis</h3>
          <p>
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
