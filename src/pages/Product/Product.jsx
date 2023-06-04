import ProductSwiper from "../../components/Product/ProductSwiper";
import ProductInfo from "../../components/Product/ProductInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../config/api/api";
import HitSale from "../../components/HitSale/HitSale";

const Product = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    api(`products/${params.id}`)
      .json()
      .then((res) => setProduct(res));
      window.scrollBy(0, -100000)
  }, [params.id]);

  if ("id" in product) {
    return (
      <>
      <section className="product">
        <div className="container">
          <div className="product__row">
            <ProductSwiper product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
      <HitSale/>
      </>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Product;
