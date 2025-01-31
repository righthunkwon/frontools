import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>레이아웃</div>
      <Outlet />
    </>
  );
};

export default Layout;
