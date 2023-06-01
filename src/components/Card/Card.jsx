import { AiOutlineHeart } from "react-icons/ai";
import "../../scss/card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <span className="card__fav">
        <AiOutlineHeart />
      </span>
      <img src={item.image} alt="" className="card__image" />
      <h3 className="card__title">{item.title}</h3>
      <p className="card__category">{item.category}</p>
      <p className="card__price">{item.price}₽</p>
      <div className="card__sizes">
        <h4 className="card__sizes-title">Размеры</h4>
        <div className="card__sizes-info">
          <p className="card__sizes-size">
            <span>Ширина</span>
            {item.width} СМ
          </p>
          x
          <p className="card__sizes-size">
            <span>Глубина</span>
            {item.deep} СМ
          </p>
          x
          <p className="card__sizes-size">
            <span>Высота</span>
            {item.height} СМ
          </p>
        </div>
        <button className="card__sizes-btn">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default Card;
