import './wdyr';
import './styles/global.scss';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DocumentTitleProvider } from './contexts/document-title/DocumentTitle.context';
import { LoadingProvider } from './contexts/loading/Loading.context';
import NotFoundPage from './pages/not-found/NotFound.page';
import PokeBookPage from './pages/poke-book/PokeBook.page';

export function App() {
  return (
    <BrowserRouter>
      <DocumentTitleProvider>
        <LoadingProvider>
          <Routes>
            <Route path="/poke-book" element={<PokeBookPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/" element={<Navigate to="/poke-book" />} />
            <Route path="/*" element={<Navigate to="/404" />} />
          </Routes>
        </LoadingProvider>
      </DocumentTitleProvider>
    </BrowserRouter>
  );
}

export default App;
