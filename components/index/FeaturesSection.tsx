import Feature from '@/components/index/Feature';
import { features } from '@/content/main';

const FeaturesSection = () => {
  return (
    <div className="flex lg:flex-row flex-col md:pt-4 lg:gap-2 gap-14 w-10/12 mx-auto">
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          text={feature.text}
          title={feature.title}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
