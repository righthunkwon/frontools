import Home from '@assets/domain-home.svg?react';
import TypeScript from '@assets/domain-typescript.svg?react';
import Json from '@assets/domain-brace.svg?react';
import Data from '@assets/domain-data.svg?react';
import { useNavigate } from 'react-router-dom';
import { Path } from '@/constants/path';

const SideMenu = () => {
  const navigate = useNavigate();

  const handleBtnClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className='flex flex-col items-center w-20 text-ourBtnGray bg-ourBgGray'>
        {/* 공백 */}
        <div className='h-4'></div>

        {/* home */}
        <div className='w-full px-1 py-2'>
          <button className='side-menu-button' onClick={() => handleBtnClick(Path.HomePage)}>
            <Home width={20} height={20} />
            <span className='pt-1 text-[10px]'>home</span>
          </button>
        </div>

        {/* json */}
        <div className='w-full px-1 py-2'>
          <button className='side-menu-button' onClick={() => handleBtnClick(Path.JsonPage)}>
            <Json width={20} height={20} />
            <span className='pt-1 text-[10px]'>json</span>
          </button>
        </div>

        {/* data */}
        <div className='w-full px-1 py-2'>
          <button className='side-menu-button' onClick={() => handleBtnClick(Path.DataPage)}>
            <Data width={20} height={20} />
            <span className='pt-1 text-[10px]'>data</span>
          </button>
        </div>

        {/* typescript */}
        <div className='w-full px-1 py-2'>
          <button className='side-menu-button' onClick={() => handleBtnClick(Path.TypeScriptPage)}>
            <TypeScript width={20} height={20} />
            <span className='pt-1 text-[10px]'>typescript</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
