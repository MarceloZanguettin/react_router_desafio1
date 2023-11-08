import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
