import { nodeTypeApi } from '../../service/NodeTypeService';
import NodeTypeItem from './NodeType/NodeType';
import './NodeTypes.css';

export function NodeTypes() {
  const {
    data: nodeTypes,
    error,
    isLoading,
  } = nodeTypeApi.useFetchAllNodeTypesQuery(null);

  return (
    <div className="ListItems">
      <h1>Типы узлов</h1>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>Произошла ошибка</h1>}
      {nodeTypes &&
        nodeTypes.map((item) => {
          return (
            <div>
              <NodeTypeItem item={item} />
            </div>
          );
        })}
    </div>
  );
}
