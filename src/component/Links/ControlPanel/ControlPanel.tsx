import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onIsCreateLinks,
  onIsEditLinks,
} from "../../../store/reducer/linksSlice";
import { RootState } from "../../../store/store";
import styles from "./ControlPanel.module.css";
import CreateLink from "./CreateLink/CreateLink";

interface IControlPanel {}

const ControlPanel: FC<IControlPanel> = () => {
  const dispatch = useDispatch();

  const isCreateLink = useSelector(
    (state: RootState) => state.linksSlice.isCreateLink
  );
  const isEditLink = useSelector(
    (state: RootState) => state.linksSlice.isEditLink
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <button onClick={() => dispatch(onIsCreateLinks())}>Create Link</button>
        <button onClick={() => dispatch(onIsEditLinks())}>Edit Links</button>
      </div>
      {isCreateLink && (
        <div className={styles.create_edit_form}>
          <CreateLink />
        </div>
      )}
    </div>
  );
};
export default ControlPanel;
