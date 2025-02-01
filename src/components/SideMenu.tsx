import Home from '@assets/domain-home.svg?react';
import TypeScript from '@assets/domain-typescript.svg?react';
import Json from '@assets/domain-brace.svg?react';
import Data from '@assets/domain-data.svg?react';

const SideMenu = () => {
  const handleSideMenuBtnClick = () => {};

  return (
    <>
      <div className='flex flex-col items-center w-20 text-ourBtnGray bg-ourBgGray'>
        {/* 공백 */}
        <div className='h-4'></div>

        {/* home */}
        <div className='w-full px-1 py-2'>
          <div className='side-menu-button'>
            <Home width={20} height={20} />
            <span className='pt-1 text-[10px]'>home</span>
          </div>
        </div>

        {/* json */}
        <div className='w-full px-1 py-2'>
          <div className='side-menu-button'>
            <Json width={20} height={20} />
            <span className='pt-1 text-[10px]'>json</span>
          </div>
        </div>

        {/* data */}
        <div className='w-full px-1 py-2'>
          <div className='side-menu-button'>
            <Data width={20} height={20} />
            <span className='pt-1 text-[10px]'>data</span>
          </div>
        </div>

        {/* typescript */}
        <div className='w-full px-1 py-2'>
          <div className='side-menu-button'>
            <TypeScript width={20} height={20} />
            <span className='pt-1 text-[10px]'>typescript</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
