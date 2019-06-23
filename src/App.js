import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
