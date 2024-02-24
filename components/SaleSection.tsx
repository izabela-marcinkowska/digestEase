import { saleText } from '@/content';

const SaleSection = () => {
  return (
    <div className="md:mx-24 ">
      <h2 className=" md:text-4xl bg-highlight pt-4 pb-3 text-2xl text-center font-robotoSerif">
        {saleText}
      </h2>
    </div>
  );
};
export default SaleSection;
