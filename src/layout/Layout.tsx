import { Outlet } from 'react-router-dom';
import TopMenu from '@/components/TopMenu';
import SideMenu from '@/components/SideMenu';

const Layout = () => {
  return (
    <>
      <div className='flex flex-col h-screen'>
        {/* 상단메뉴 */}
        <div>
          <TopMenu />
        </div>

        {/* 사이드메뉴 & 메인페이지 */}
        <div className='flex flex-1 '>
          <SideMenu />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
