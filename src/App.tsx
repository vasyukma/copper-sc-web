import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppDispatch } from './hook/redux';
import { useAppSelector } from './hook/redux';
// import { fetchNodeTypes } from './store/reducer/ActionCreators';
import { NodeTypes } from './component/NodeTypes/NodeTypes';
import Links from './component/Links/Links';

function App() {
  // const dispatch = useAppDispatch();
  // const { nodeTypes, isLoading, error } = useAppSelector(
  //   (state) => state.nodeTypeReducer
  // );

  // useEffect(() => {
  //   dispatch(fetchNodeTypes());
  // }, []);

  // return (
  //   <div className="App">
  //     {isLoading && <h1>Идёт загрузка...</h1>}
  //     {error && <h1>{error}</h1>}
  //     {/* {JSON.stringify(nodeTypes, null, 2)} */}
  //     {nodeTypes.map((item) => {
  //       return (
  //         <div>
  //           <span>{item.id}</span>
  //           <span>{item.shortName}</span>
  //           <span>{item.description}</span>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="App">
      {/* <div>
        <NodeTypes />
      </div> */}
      <div>
        <Links />
      </div>
    </div>
  );
}

export default App;
