import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.tsx';
import Home from './components/Home.tsx';
import DataPage from './domains/data-tool/DataPage.tsx';
import JsonPage from './domains/json-tool/JsonPage.tsx';
import TypescriptPage from './domains/typescript-tool/TypescriptPage.tsx';

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/data' element={<DataPage />} />
            <Route path='/json' element={<JsonPage />} />
            <Route path='/typescript' element={<TypescriptPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
