'use client';

type Props = {
  visible: boolean;
};

const OpenMenu = ({ visible }: Props) => {
  return (
    <div className={!visible ? 'hidden' : 'visible'}>
      <div className="bg-white absolute border border-solid left-0 top-18 min-w-full ">
        <div className="flex flex-col gap-3 text-center my-6">
          <p> Link nr 1</p>
          <p> Link nr 2</p>
          <p> Link nr 3</p>
        </div>
      </div>
    </div>
  );
};

export default OpenMenu;
