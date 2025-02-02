import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Path } from '@/constants/path';
import HomeSvg from '@assets/domain-home.svg?react';
import TypeScriptSvg from '@assets/domain-typescript.svg?react';
import JsonSvg from '@assets/domain-brace.svg?react';
import DataSvg from '@assets/domain-data.svg?react';

const SideMenu = () => {
  const [menu, setMenu] = useState('/');
  const navigate = useNavigate();

  const handleBtnClick = (path: string) => {
    navigate(path);
    setMenu(path);
  };

  return (
    <>
      <aside>
        {/* 공백 */}
        <div className='w-20 h-10'></div>

        {/* home */}
        <div className='w-full px-1 py-2 '>
          <button
            className={`side-menu-button ${menu === Path.HomePage ? 'bg-ourBgLightGray text-ourLnWhite pointer-events-none' : ''} `}
            onClick={() => handleBtnClick(Path.HomePage)}
          >
            <HomeSvg width={20} height={20} />
            <span className='pt-1 text-[10px]'>home</span>
          </button>
        </div>

        {/* json */}
        <div className='w-full px-1 py-2'>
          <button
            className={`side-menu-button ${menu === Path.JsonPage ? 'bg-ourBgLightGray text-ourLnWhite pointer-events-none' : ''} `}
            onClick={() => handleBtnClick(Path.JsonPage)}
          >
            <JsonSvg width={20} height={20} />
            <span className='pt-1 text-[10px]'>json</span>
          </button>
        </div>

        {/* data */}
        <div className='w-full px-1 py-2'>
          <button
            className={`side-menu-button ${menu === Path.DataPage ? 'bg-ourBgLightGray text-ourLnWhite pointer-events-none' : ''} `}
            onClick={() => handleBtnClick(Path.DataPage)}
          >
            <DataSvg width={20} height={20} />
            <span className='pt-1 text-[10px]'>data</span>
          </button>
        </div>

        {/* typescript */}
        <div className='w-full px-1 py-2'>
          <button
            className={`side-menu-button ${menu === Path.TypeScriptPage ? 'bg-ourBgLightGray text-ourLnWhite pointer-events-none' : ''} `}
            onClick={() => handleBtnClick(Path.TypeScriptPage)}
          >
            <TypeScriptSvg width={20} height={20} />
            <span className='pt-1 text-[10px]'>typescript</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
