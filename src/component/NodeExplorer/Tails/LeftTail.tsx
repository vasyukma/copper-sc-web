import { FC } from 'react';
import { INode } from '../../../model/INode';
import { copperSkApi } from '../../../service/CopperSkService';
import Link from './Link/Link';
import styles from './LeftTail.module.css';
interface ITails {
  node: INode;
}

const LeftTail: FC<ITails> = ({ node }) => {
  const { data: tails } = copperSkApi.useFetchNodeTailsQuery(node.id);

  return (
    <div className={styles.wrapper}>
      {tails && tails.map((tail) => <Link leftTail={tail} />)}
    </div>
  );
};
export default LeftTail;
