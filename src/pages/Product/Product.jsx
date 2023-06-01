import ProductInfo from "../../components/Product/ProductInfo"
import ProductSwiper from "../../components/Product/ProductSwiper"

const Product = () => {

  return (
    <section className='product'>
      <div className="container">
        <div className="product__row">
          <ProductSwiper/>
          <ProductInfo/>
        </div>
      </div>
    </section>
  )
}

export default Product