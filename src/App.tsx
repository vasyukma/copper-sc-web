import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Labels from './component/Labels/Labels';
import Links from './component/Links/Links';
import Nav from './component/Nav/Nav';
import NodeExplorer from './component/NodeExplorer/NodeExplorer';
import Nodes from './component/Nodes/Nodes';

function App() {
  return (
    <div className="App">
      {/* <div><Navi /></div> */}
      <div>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<NodeExplorer />} />
            <Route path="/cable-list" element={<Links />} />
            <Route path="/labels" element={<Labels />} />
            <Route path="/node-explorer" element={<NodeExplorer />} />
            {/* <Route path="/nodes" element={<Nodes />} />
            <Route path="/nodes/:id" element={<Nodes />} /> */}
            <Route path="/links" element={<Links />} />
          </Route>
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
