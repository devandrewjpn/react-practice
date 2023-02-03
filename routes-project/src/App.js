import React from 'react';
import Produtos from './components/Produtos';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
