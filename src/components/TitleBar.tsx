import Menu from '../assets/window-menu.svg?react';
import Maximize from '../assets/window-maximize.svg?react';
import Minimize from '../assets/window-minimize.svg?react';
import Close from '../assets/window-close.svg?react';

const TitleBar = () => {
  const handleMenu = () => {
    console.log('메뉴클릭');
  };

  const handleMinimize = () => {
    window.titleBar.minimize();
  };

  const handleMaximize = () => {
    window.titleBar.maximize();
  };

  const handleClose = () => {
    window.titleBar.close();
  };

  return (
    <>
      <div className='window-title-bar'>
        <div className='my-auto '>
          <button className='window-menu' onClick={handleMenu}>
            <Menu width={15} height={15} />
          </button>
        </div>
        <div className='my-auto '>
          <button className=' window-button' onClick={handleMinimize}>
            <Minimize width={10} height={10} />
          </button>
          <button className='window-button' onClick={handleMaximize}>
            <Maximize width={10} height={10} />
          </button>
          <button className='window-button-red ' onClick={handleClose}>
            <Close width={10} height={10} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TitleBar;
