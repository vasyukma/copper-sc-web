import { Route, Routes } from 'react-router-dom';
import './App.css';
import Labels from './component/Labels/Labels';
import Links from './component/Links/Links';
import Nav from './component/Nav/Nav';
import Explorer from './component/NodeExplorer/Explorer';
import Nodes from './component/Nodes/Nodes';
import { CableList } from './component/CableList/CableList';

function App() {
  return (
    <div className="App">
      {/* <div><Navi /></div> */}
      <div>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Explorer />} />
            <Route path="/cable-list" element={<CableList />} />
            <Route path="/labels" element={<Labels />} />
            <Route path="/node-explorer" element={<Explorer />} />
            <Route path="/nodes" element={<Nodes />} />
            <Route path="/nodes/:id" element={<Nodes />} />
            <Route path="/links" element={<Links />} />
          </Route>
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
