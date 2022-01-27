import { FC, ReactComponentElement, ReactElement } from "react";
import { INode } from "../../model/INode";
import { copperSkApi } from "../../service/CopperSkService";
import Node, { getNode } from "./Node/Node";
import "./Nodes.css";

function getTest(text: string): string {
  return "text";
}

const Nodes = () => {
  const {
    data: rootNode,
    error,
    isLoading,
  } = copperSkApi.useFetchRootNodeQuery("");

  debugger;
  return (
    <div className="Wrapper">
      {/* {() => return 1;} */}
      {/* {rootNode && () => ()} */}

      {/* {getTest("!!!!!!")} */}
      <h1>!!!</h1>
      <div className="Component">
        <div className="Component__Title">
          {isLoading && <h1>Идёт загрузка...</h1>}
          {error && <h1>Произошла ошибка</h1>}
          {/* {rootNode && rootNode.longName} */}
        </div>
        <div className="Component__Data">{rootNode && getNode(rootNode)}</div>
      </div>
    </div>
  );
};

export default Nodes;
