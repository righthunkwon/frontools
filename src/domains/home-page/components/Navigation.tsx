import OverviewSvg from '@assets/btn-eye.svg?react';

const Navigation = () => {
  return (
    <>
      <div className='select-none flex w-full h-10 text-xs border-ourLnLightGray border-b-[1px]  text-ourLnGray  '>
        <button className='flex items-center gap-1 pl-8 text-ourLnWhite '>
          <OverviewSvg width={12} height={12} />
          <span className='pr-1'>Overview </span>
          <span className='pr-8 h-4 border-r-[1px]  border-ourLnLightGray'></span>
        </button>
      </div>
    </>
  );
};

export default Navigation;
