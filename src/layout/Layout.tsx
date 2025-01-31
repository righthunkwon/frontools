import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className='bg-red-200'>레이아웃</div>
      <Outlet />
    </>
  );
};

export default Layout;
