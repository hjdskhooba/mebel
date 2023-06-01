import { AiOutlineHeart } from "react-icons/ai";

const ProductInfo = () => {
  const colors = ["red", "green", "blue"];

  return (
    <div className="product__info">
      <h2 className="product__info-title">Product1</h2>
      <p className="product__info-category">type Product</p>
      <div className="product__info-row">
        <div className="product__info-price">{123}P</div>
        <button className="product__info-btn">Купить</button>
        <p className="product__info-fav">
          <AiOutlineHeart />
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
          {[40, 35, 32, 22, 122].map((i, idx) => (
            <li className="product__info-size" key={idx}>
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="product__info-description">
        <h2>Oписание</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          delectus nemo voluptate, eveniet natus architecto reiciendis ad vel,
          modi unde eligendi maxime doloremque fugit. Rem quisquam ipsum odit
          nisi blanditiis vero, consequatur omnis consectetur autem soluta sunt
          tenetur nulla voluptas mollitia, iure, possimus minus? Modi fugit
          corrupti nam laudantium eum minus ab id, doloremque saepe labore,
          magnam dolores? Ipsum, architecto.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
