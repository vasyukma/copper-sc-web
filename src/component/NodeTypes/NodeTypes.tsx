
import { nodeTypeApi } from '../../service/NodeTypeService';
import NodeTypeItem from './NodeType/NodeType';
import './NodeTypes.css'

export function NodeTypes() {
  const {
    data: nodeTypes,
    error,
    isLoading,
  } = nodeTypeApi.useFetchAllNodeTypesQuery('');

  return (
    <div className="ListItems">
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
