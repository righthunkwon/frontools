import { Outlet } from 'react-router-dom';
import TopMenu from '@/components/TopMenu';
import SideMenu from '@/components/SideMenu';

const Layout = () => {
  return (
    <>
      <div className='flex flex-col h-screen '>
        {/* 상단메뉴 */}
        <div>
          <TopMenu />
        </div>

        {/* 사이드메뉴 & 메인페이지 */}
        <div className='flex flex-1 '>
          <div className='h-full flex flex-col items-center w-20 text-ourLnGray bg-ourBgGray border-ourLnLightGray border-r-[1px]'>
            <SideMenu />
          </div>
          <div className='flex flex-col flex-1 overflow-y-auto text-white bg-ourBgBlack'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
