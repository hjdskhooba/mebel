import { CustomContext } from "../../config/context/Context";
import { useContext, useEffect, Fragment } from "react";
import Card from "../Card/Card";
import "../../scss/hitSale.scss";

const HitSale = () => {
  const { hitSale, getHitSale } = useContext(CustomContext);

  useEffect(() => {
    getHitSale();
  }, []);

  return (
    <div className="hitSale">
      <div className="container">
        <h2 className="hitSale__title">Хиты продаж</h2>
        <div className="hitSale__row">
          {hitSale.map((item) => (
            <Fragment key={item.id}>
              <Card item={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HitSale;
