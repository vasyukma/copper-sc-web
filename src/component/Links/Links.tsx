import { copperSkApi } from '../../service/CopperSkService';
import Link from './Link/Link';
import '../Links/Links.css';

export const Links = () => {
  const {
    data: links,
    error,
    isLoading,
  } = copperSkApi.useFetchAllLinksQuery('');
  // debugger;
  return (
    <div className="wrapper">
      <div className="block">
        {isLoading && <h1>Идёт загрузка...</h1>}
        {error && <h1>Произошла ошибка</h1>}
        <div className="block__row">
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
