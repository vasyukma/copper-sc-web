import styles from "./ControlPanel.module.css";
import { FC } from "react";
import { useDispatch } from "react-redux";
interface IControlPanel {}

const ControlPanel: FC<IControlPanel> = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        {/* <button onClick={() => dispatch()}>Edit Node</button> */}
        {/* <button onClick={() => dispatch(setIsCreateNode(true))}> */}
        Create Node
        {/* </button> */}
      </div>
    </div>
  );
};
export default ControlPanel;
