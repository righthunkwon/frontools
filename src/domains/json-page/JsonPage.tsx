import Navigation from './components/Navigation';

const JsonPage = () => {
  return (
    <>
      <div>
        <nav>
          <Navigation />
        </nav>
        <main className='flex h-[calc(100vh-96px)] pt-16 home-page-scroll'>
          <div className='w-32'></div>
          <article className='flex-1 max-w-[640px] text-sm'>JSON 페이지</article>
        </main>
      </div>
    </>
  );
};

export default JsonPage;
