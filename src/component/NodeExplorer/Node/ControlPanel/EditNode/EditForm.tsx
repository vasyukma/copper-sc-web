import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { INode, INodeForCreateAndUpdate } from '../../../../../model/Node';
import { copperSkApi } from '../../../../../service/CopperSkService';
import { offCreateEditNode } from '../../../../../store/reducer/nodeExplorerSlice';
import { RootState } from '../../../../../store/store';
import styles from './EditForm.module.css';

interface IProps {
  node: INode;
  title: string;
}
export const EditFrom: FC<IProps> = ({ node, title }) => {
  const dispatch = useDispatch();

  const isCreateNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.isCreateNode
  );
  const isEditNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.isEditNode
  );

  const [postNode, {}] = copperSkApi.usePostNodeMutation();
  const [putNode, {}] = copperSkApi.usePutNodeMutation();
  const { data: nodeTypes } = copperSkApi.useFetchAllNodeTypesQuery('');

  const [nodeTypeId, setNodeTypeId] = useState(node.type.id);
  const handleChangeNodeType = (event: any) => {
    setNodeTypeId(event.target.value);
  };
  if (isEditNode && isCreateNode) {
    alert('Влючен режим созадния и редактирования одновременно!!!');
    dispatch(offCreateEditNode());
  }

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<INodeForCreateAndUpdate>();

  const onSubmit = handleSubmit((data) => {
    if (isCreateNode) {
      postNode({
        ...data,
        id: null,
        parentId: node.id,
        typeId: nodeTypeId,
      } as INodeForCreateAndUpdate);
      dispatch(offCreateEditNode());
    }
    if (isEditNode) {
      putNode({
        ...data,
        id: node.id,
        parentId: node.parentId,
        typeId: nodeTypeId,
      } as INodeForCreateAndUpdate);
      dispatch(offCreateEditNode());
    }
  });
  useEffect(() => {
    if (isEditNode) {
      setValue('shortName', node.shortName);
      setValue('longName', node.longName);
      setValue('description', node.description);
      // setValue('type', node.id);
      // setValue('parentId', node.parentId);
      // dispatch()
      // isEditNode && isCreateNode && dispatch(offCreateEditNode());
    }
  }, []);

  // useEffect(() => {
  //   setNodeTypeId(node.type.id);
  // }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.item}>
        {/* Node: {currentNode?.shortName} */}
        <button onClick={() => dispatch(offCreateEditNode())}>Close</button>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.element}>
            <label className={styles.label}>Короткое имя: </label>
            <input className={styles.input} {...register('shortName')} />
          </div>
          <div className={styles.element}>
            <label className={styles.label}>Длинное имя: </label>
            <input className={styles.input} {...register('longName')} />
          </div>
          <div className={styles.element}>
            <label className={styles.label}>Описание: </label>
            <input className={styles.input} {...register('description')} />
          </div>
          <div className={styles.element}>
            <label className={styles.label}>Тип: </label>
            {/* <input {...register('descriptison')} /> */}
            <select
              className={styles.input}
              value={nodeTypeId}
              onChange={handleChangeNodeType}
            >
              {nodeTypes &&
                nodeTypes.map((nodeType) => {
                  if (nodeType.id === node.type.id)
                    return (
                      <option value={nodeType.id} selected>
                        {nodeType.shortName}
                      </option>
                    );
                  else
                    return (
                      <option value={nodeType.id}>{nodeType.shortName}</option>
                    );
                })}
              {/* <option>Пункт 1</option>
              <option>Пункт 2</option> */}
            </select>
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default EditFrom;
