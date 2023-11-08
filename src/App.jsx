import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './Components/Produtos';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
