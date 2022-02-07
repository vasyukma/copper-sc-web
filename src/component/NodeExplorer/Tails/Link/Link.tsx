import { FC } from 'react';
import { ITail } from '../../../../model/ITail';
import { copperSkApi } from '../../../../service/CopperSkService';
import styles from './Link.module.css';
import { RightTail } from './RightTail/RightTail';

interface IProps {
  leftTail: ITail;
}
export const Link: FC<IProps> = ({ leftTail }) => {
  const { data: tails } = copperSkApi.useFetchLinkTailsQuery(leftTail.link.id);
  return (
    <div className={styles.wrapper}>
      {tails &&
        tails.map((rightTail) => {
          if (leftTail.id !== rightTail.id) {
            return <RightTail leftTail={leftTail} rightTail={rightTail} />;
          }
        })}
    </div>
  );
};

export default Link;
