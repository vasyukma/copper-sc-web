import { FC } from 'react';
import styles from './Form.module.css';
import { INode } from '../../../../../../model/INode';

interface IProps {
  node: INode;
}
export const Form: FC<IProps> = ({ node }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}></div>
    </div>
  );
};

export default Form;
