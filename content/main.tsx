import { Drumstick } from 'lucide-react';
import BowelTrackerIcon from '@/components/icons/BowelTrackerIcon';
import AIAnalyzeIcon from '@/components/icons/AIAnalyzeIcon';

export const whatIsItDescription =
  'Our platform is an innovative solution for individuals with Irritable Bowel Syndrome (IBS). It acts as a digital diary and analysis tool, helping users track and manage their IBS symptoms with ease. Using advanced AI, we simplify the tracking of food intake, bowel movements, and health indicators, making IBS management more accessible.';

export const howItWorksDescription =
  'You log your food, bowel types, alcohol, medication, pain, stress levels, and feelings daily. With a click, the AI analyzes your inputs, correlating your diet and stress with IBS symptoms. You receive personalized insights, identifying potential dietary triggers and offering IBS-friendly recommendations.';

export const NAV_LINKS = [
  {
    text: 'Logs',
    href: '/logs',
  },
  {
    text: 'Rapports',
    href: '/rapports',
  },
];

export const saleText =
  'Reimagine Your Digestive Health: Discover the Power of Personalized Insights and Seamless Daily Tracking with DigestEase, Your Ally in Wellness.';

export const features = [
  {
    icon: <Drumstick size={38} strokeWidth={0.8} />,
    title: 'Food Diary',
    text: 'Go beyond simple meal tracking with our Food Diary. Detail your daily intake and spot patterns that may influence your IBS. It is more than just a log; it is the first step to uncovering what fuels your body right.',
  },
  {
    icon: <BowelTrackerIcon width={38} />,
    title: 'Bowel Movement Tracker',
    text: 'Our discreet Bowel Movement Tracker offers a clear view of your digestive trends. With just a few taps, you can record consistency and frequency, paving the way for meaningful health conversations and personal insights.',
  },
  {
    icon: <AIAnalyzeIcon width={38} />,
    title: 'Personalized AI Analysis',
    text: 'Leverage the wisdom of our Personalized AI Analysis to turn your health data into action. Our AI sifts through your logs, offering customized advice and identifying changes that could make a big difference to your digestive comfort.',
  },
];

export const behindDigestEastText =
  'Founded by Bella, who has navigated the IBS journey herself, DigestEase is more than just an app—it is a community. We are committed to making the management of IBS as effortless and insightful as possible, giving you back the time and freedom to enjoy life to the fullest.';
