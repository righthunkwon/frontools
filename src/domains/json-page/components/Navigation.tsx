import JsonSvg from '@assets/domain-brace.svg?react';

const Navigation = () => {
  return (
    <>
      <div className='select-none flex w-full h-10 text-xs border-ourLnLightGray border-b-[1px]  text-ourLnGray  '>
        <button className='flex items-center pl-2 text-white '>
          <div className='flex items-center justify-center h-full gap-1 px-8  min-w-36 border-ourBgDarkOrange border-b-[1px]'>
            <JsonSvg width={12} height={12} />
            <span className='pr-1 mr-1'>Json </span>
          </div>
          <div className='pr-2 h-4 border-r-[1px]  border-ourLnLightGray'></div>
        </button>
      </div>
    </>
  );
};

export default Navigation;
