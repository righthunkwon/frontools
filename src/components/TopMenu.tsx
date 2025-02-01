import MenuSvg from '@assets/window-menu.svg?react';
import MaximizeSvg from '@assets/window-maximize.svg?react';
import MinimizeSvg from '@assets/window-minimize.svg?react';
import CloseSvg from '@assets/window-close.svg?react';

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
            <MenuSvg width={15} height={15} />
          </button>
        </div>
        <div className='my-auto '>
          <button className='top-menu-button' onClick={handleMinimize}>
            <MinimizeSvg width={10} height={10} />
          </button>
          <button className='top-menu-button' onClick={handleMaximize}>
            <MaximizeSvg width={10} height={10} />
          </button>
          <button className='top-menu-button-red ' onClick={handleClose}>
            <CloseSvg width={10} height={10} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
