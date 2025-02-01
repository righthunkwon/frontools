const HomePage = () => {
  return (
    <>
      <div className='flex flex-1 text-white bg-ourBgBlack'>
        <div>
          <h2 className='text-xl font-semibold'>👋 Introduction</h2>
          <p>
            The API testing workspace is designed to provide a collaborative environment for developers and testers to
            thoroughly test APIs before they are released to production. This workspace is equipped with different
            collections that can help you perform various tests for your APIs.
          </p>
          <h2 className='text-xl font-semibold'>🚀 Getting started with this workspace</h2>
          <p>
            You can either send individual requests in these collections or use the Postman collection runner to run all
            the requests in the collection manually. If needed, you can also schedule and automate your collection runs
            to test your APIs continuously. We've included some example collections to illustrate how you can build a
            test suite for various use cases like contract, integration and performance testing. We've also included the
            Intro to Writing Tests collection to help you start writing tests. We hope this workspace enables you to
            detect API issues early.
          </p>
          <h2 className='text-xl font-semibold'>🐞 Reporting issues</h2>
          <p>
            If you find API issues or bugs when testing, please create a ticket and assign it to a member of the
            development team.
          </p>
          <h2 className='text-xl font-semibold'>🛟 Help and support</h2>
          <p>
            If you have any questions or suggestions, please don't hesitate to reach out to your manager or any member
            of the Quality Engineering team.
          </p>
        </div>
        <div>으악!</div>
      </div>
    </>
  );
};

export default HomePage;
