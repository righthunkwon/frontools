import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '@layout/Layout.tsx';
import HomePage from '@/domains/home-page/HomePage';
import DataPage from '@domains/data-page/DataPage.tsx';
import JsonPage from '@domains/json-page/JsonPage.tsx';
import TypescriptPage from '@domains/typescript-page/TypescriptPage.tsx';
import { Path } from '@/constants/path';

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={Path.HomePage} element={<HomePage />} />
            <Route path={Path.JsonPage} element={<JsonPage />} />
            <Route path={Path.DataPage} element={<DataPage />} />
            <Route path={Path.TypeScriptPage} element={<TypescriptPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
