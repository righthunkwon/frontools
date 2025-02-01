import { Outlet } from 'react-router-dom';
import TopMenu from '@/components/TopMenu';
import SideMenu from '@/components/SideMenu';

const Layout = () => {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <div>
          <TopMenu />
        </div>

        <div className='flex flex-1 '>
          <SideMenu />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
