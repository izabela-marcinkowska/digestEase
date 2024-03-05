import { FeatureProp } from '@/content/types';

const Feature = ({ icon, title, text }: FeatureProp) => {
  return (
    <div className="flex flex-col items-center lg:gap-4 gap-1">
      {icon}
      <h3 className="text-xl text-center text-darkGreen font-montserratBold">
        {title}
      </h3>
      <p className="w-5/6 text-center">{text}</p>
    </div>
  );
};

export default Feature;
