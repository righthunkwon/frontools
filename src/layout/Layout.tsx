import { Outlet } from 'react-router-dom';
import TitleBar from '../components/TitleBar';

const Layout = () => {
  return (
    <>
      <TitleBar />
      <Outlet />
    </>
  );
};

export default Layout;
