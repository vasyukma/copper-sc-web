import React, { useEffect } from 'react';
import './App.css';
import Links from './component/Links/Links';
import { Route, Routes } from 'react-router-dom';
import Navi from './component/Navi/Navi';
import Nodes from './component/Nodes/Nodes';

function App() {
  return (
    <div className="App">
      <div>
        <Navi />
      </div>
      <div>
        <Routes>
          <Route path="/cable-list" element={<Links />} />
          <Route path="/nodes" element={<Nodes />} />
          <Route path="/nodes/:id" element={<Nodes />} />
          <Route path="/" element={<Links />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
