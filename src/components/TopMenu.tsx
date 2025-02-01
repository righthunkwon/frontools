import Menu from '@assets/window-menu.svg?react';
import Maximize from '@assets/window-maximize.svg?react';
import Minimize from '@assets/window-minimize.svg?react';
import Close from '@assets/window-close.svg?react';

const TopMenu = () => {
  const handleMenu = () => {
    console.log('메뉴클릭');
  };

  const handleMinimize = () => {
    window.topMenu.minimize();
  };

  const handleMaximize = () => {
    window.topMenu.maximize();
  };

  const handleClose = () => {
    window.topMenu.close();
  };

  return (
    <>
      <div className='top-menu'>
        <div className='my-auto '>
          <button className='top-menu-menu' onClick={handleMenu}>
            <Menu width={15} height={15} />
          </button>
        </div>
        <div className='my-auto '>
          <button className='top-menu-button' onClick={handleMinimize}>
            <Minimize width={10} height={10} />
          </button>
          <button className='top-menu-button' onClick={handleMaximize}>
            <Maximize width={10} height={10} />
          </button>
          <button className='top-menu-button-red ' onClick={handleClose}>
            <Close width={10} height={10} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
