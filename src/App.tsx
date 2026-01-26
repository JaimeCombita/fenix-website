import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/Home';
import { CatalogPage } from './pages/Catalog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalogo" element={<CatalogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
