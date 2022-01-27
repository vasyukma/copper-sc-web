import { FC, ReactComponentElement, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { INode } from '../../model/INode';
import { copperSkApi } from '../../service/CopperSkService';
import Node, { getNode } from './Node/Node';
import './Nodes.css';
import TreeNode from './NodeTree/TreeNode';

function getTest(text: string): string {
  return 'text';
}

const Nodes = () => {
  debugger;
  let { id } = useParams<'id'>();
  let rootNodeId = 143;
  if (id) {
    rootNodeId = Number(id);
  }

  const {
    data: rootNode,
    error,
    isLoading,
    // } = copperSkApi.useFetchRootNodeQuery('');
  } = copperSkApi.useFetchNodeQuery(rootNodeId);

  // rootNode && getNode(rootNode);

  debugger;
  return (
    <div className="Wrapper">
      <h1>!!!</h1>
      <div className="Component">
        <div className="Component__Title">
          {isLoading && <h1>Идёт загрузка...</h1>}
          {error && <h1>Произошла ошибка</h1>}
        </div>
        <div className="Component__Data">
          {rootNode && <TreeNode node={rootNode} />}
        </div>
      </div>
    </div>
  );
};

export default Nodes;
