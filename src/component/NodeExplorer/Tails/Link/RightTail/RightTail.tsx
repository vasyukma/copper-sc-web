import { FC } from 'react';
import styles from './RightTail.module.css';
import { ITail } from '../../../../../model/Tail';
import { copperSkApi } from '../../../../../service/CopperSkService';

interface IProps {
  leftTail: ITail;
  rightTail: ITail;
}
export const RightTail: FC<IProps> = ({ leftTail, rightTail }) => {
  const { data: rigthTailPath } = copperSkApi.useFetchNodePathQuery(
    rightTail.node.id
  );
  return (
    <div className={styles.wrapper}>
      {`${leftTail.id}<${rightTail.link.name}>${rightTail.id}-${rigthTailPath?.text}`}
    </div>
  );
};

export default RightTail;
