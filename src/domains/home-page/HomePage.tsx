import Introduction from './components/Introduction';
import About from './components/About';
import OverviewSvg from '@assets/btn-eye.svg?react';

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col flex-1 overflow-y-auto text-white bg-ourBgBlack '>
        <nav>
          <span className='select-none px-12 flex items-center w-full h-10 text-xs border-ourLnLightGray border-b-[1px] text-white gap-2 '>
            <span>
              <OverviewSvg width={12} height={12} />
            </span>
            <span>Overview</span>
          </span>
        </nav>

        <main className='flex h-[calc(100vh-96px)] pt-16 home-page-scroll'>
          <div className='w-32'></div>
          <article className='flex-1 max-w-[640px] text-sm'>
            <Introduction />
          </article>
          <article className='px-8 text-xs w-80 min-w-48'>
            <About />
          </article>
        </main>
      </div>
    </>
  );
};

export default HomePage;
