import { FC, useEffect, useState } from 'react';
import styles from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEditNode } from '../../../../../store/reducer/nodeExplorerSlice';
import { RootState } from '../../../../../store/store';
import { useForm } from 'react-hook-form';
import { INode } from '../../../../../model/INode';
import { copperSkApi } from '../../../../../service/CopperSkService';

interface IProps {
  node: INode;
}
export const EditFrom: FC<IProps> = ({ node }) => {
  const dispatch = useDispatch();

  const [createPost, {}] = copperSkApi.usePutNodeMutation();
  const { data: nodeTypes } = copperSkApi.useFetchAllNodeTypesQuery('');

  const [nodeTypeId, setNodeTypeId] = useState(node.type.id);
  const handleChangeNodeType = (event: any) => {
    setNodeTypeId(event.target.value);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<INode>();

  const onSubmit = handleSubmit((data) => {
    // console.log({ ...data });
    createPost({
      ...data,
      id: node.id,
      parentId: node.parentId,
      typeId: nodeTypeId,
    } as INode);
    dispatch(setIsEditNode(false));
  });
  useEffect(() => {
    setValue('shortName', node.shortName);
    setValue('longName', node.longName);
    setValue('description', node.description);
    // setValue('type', node.id);
    // setValue('parentId', node.parentId);
  });

  // useEffect(() => {
  //   setNodeTypeId(node.type.id);
  // }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        {/* Node: {currentNode?.shortName} */}
        <button onClick={() => dispatch(setIsEditNode(false))}>Close</button>
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
