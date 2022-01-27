import { FC } from "react";
import { INode } from "../../../model/INode";
import { copperSkApi } from "../../../service/CopperSkService";

export function getNode(node: INode) {
  return <Node node={node} />;
}
interface NodeItemProps {
  node: INode;
}

const Node: FC<NodeItemProps> = ({ node }) => {
  const {
    data: children,
    error,
    isLoading,
    // } = copperSkApi.useFetchChildrenNodeQuery(node.id);
  } = copperSkApi.useFetchChildrenNodeQuery(node.id);

  debugger;
  return (
    <div>
      <div>{node.longName}</div>
      <div>
        <div>Cildren</div>
        {/* <div>{children && getNode(rootNode)}</div> */}
        {children &&
          children.map((item) => {
            // return <Node node={node} />;
          })}
      </div>
    </div>
  );
};

export default Node;
