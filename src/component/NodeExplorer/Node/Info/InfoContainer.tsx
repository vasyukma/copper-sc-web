import { FC } from 'react';
import { INode } from '../../../../model/INode';
import { copperSkApi } from '../../../../service/CopperSkService';
import Info from './Info';

interface IProps {
  node: INode;
}
export const InfoContainer: FC<IProps> = ({ node }) => {
  const {
    data: fetchedNode,
    error: error,
    isLoading: isLoading,
  } = copperSkApi.useFetchNodeQuery(node.id);

  return <>{fetchedNode && <Info node={fetchedNode} />} </>;
};

export default InfoContainer;
