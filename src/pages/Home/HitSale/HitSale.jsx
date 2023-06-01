import { CustomContext } from "../../../config/context/Context";
import Card from "../../../components/Card/Card";
import "../../../scss/hitSale.scss";
import { useContext, useEffect, Fragment } from "react";

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
              <Card item={item}/>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HitSale