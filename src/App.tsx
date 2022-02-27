import './App.css';
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Labels from './component/Labels/Labels';
import Links from './component/Links/Links';
import Nav from './component/Nav/Nav';
import Explorer from './component/NodeExplorer/Explorer';
import Nodes from './component/Nodes/Nodes';
import { CableList } from './component/CableList/CableList';
import Crossing from './component/Crossing/Crossing';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Explorer />} />
            <Route path="/cable-list" element={<CableList />} />
            <Route path="/labels" element={<Labels />} />
            <Route path="/node-explorer" element={<Explorer />} />
            <Route path="/nodes" element={<Nodes />} />
            <Route path="/nodes/:id" element={<Nodes />} />
            <Route path="/links" element={<Links />} />
            <Route path="/crossing" element={<Crossing />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
