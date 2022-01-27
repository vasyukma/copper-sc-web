import { copperSkApi } from "../../service/CopperSkService";
import Link from "./Link/Link";
import "../Links/Links.css";

export const Links = () => {
  const {
    data: links,
    error,
    isLoading,
  } = copperSkApi.useFetchAllLinksQuery("");
  // debugger;
  return (
    <div className="Wrapper">
      <div className="Block">
        <div className="Title"></div>
        <div className="Title__Text">
          <h1>Кабельный журнал</h1>
        </div>
        {isLoading && <h1>Идёт загрузка...</h1>}
        {error && <h1>Произошла ошибка</h1>}
        <div className="Block__Row">
          {links &&
            links.map((item) => {
              return <Link item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Links;
