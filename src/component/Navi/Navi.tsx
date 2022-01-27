import { Link } from "react-router-dom";
import "./Navi.css";

export const Navi = () => {
  return (
    <div className="Wrapper">
      <div className="Navi">
        <div className="Navi__Item">
          <Link to="/cable-list">Кабельный журнал</Link>
        </div>
        <div className="Navi__Item">
          <Link to="/nodes">Узлы</Link>
        </div>
      </div>
    </div>
  );
};

export default Navi;
