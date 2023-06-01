import { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CustomContext } from "../../config/context/Context";

const ProductInfo = ({product}) => {
  const colors = ["red", "green", "blue"];
  const {favorites, favoritesHandler} = useContext(CustomContext);
  return (
    <div className="product__info">
      <h2 className="product__info-title">{product.title}</h2>
      <p className="product__info-category">{product.category}</p>
      <div className="product__info-row">
        <div className="product__info-price">{product.price}P</div>
        <button className="product__info-btn">Купить</button>
        <p className="product__info-fav" onClick={() => favoritesHandler(product)}>
            {favorites.some((el) => el.id === product.id) ? (
              <AiFillHeart />
            ) : (
              <AiOutlineHeart />
            )}
          Добавить в избранное
        </p>
      </div>
      <div className="product__info-selects">
        <ul className="product__info-colors">
          {colors.map((i, idx) => (
            <li
              className="product__info-color"
              key={idx}
              style={{
                zIndex: 3,
                backgroundColor: i,
                height: "20px",
                width: "20px",
              }}
            ></li>
          ))}
        </ul>
        <ul className="product__info-quanitiy">
          <li>
            {product.width} СМ х {product.height} СМ х {product.deep} СМ
          </li>
        </ul>
      </div>
      <div className="product__info-description">
        <h2>Oписание</h2>
        <p>
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
