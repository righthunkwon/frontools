import Introduction from './components/Introduction';
import About from './components/About';
import Navigation from './components/Navigation';

const HomePage = () => {
  return (
    <>
      <div>
        <nav>
          <Navigation />
        </nav>
        <main className='flex h-[calc(100vh-92px)] pt-12 c-scroll'>
          <div className='w-20'></div>
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
