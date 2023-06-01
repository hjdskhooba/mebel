import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../scss/card.scss";
import { useContext } from "react";
import { CustomContext } from "../../config/context/Context";

const Card = ({ item }) => {
  const { favorites, favoritesHandler } = useContext(CustomContext);
  return (
    <div className="card">
      <span className="card__fav" onClick={() => favoritesHandler(item)}>
        {favorites.some((el) => el.id === item.id) ? (
          <AiFillHeart color="red"/>
        ) : (
          <AiOutlineHeart />
        )}
      </span>
      <Link to={`/product/${item.id}`}>
        <img src={"../" + item.images[0]} alt="" className="card__image" />
      </Link>
      <h3 className="card__title">{item.title}</h3>
      <p className="card__category">{item.category}</p>
      <p className="card__price">{item.price}₽</p>
      <div className="card__sizes">
        <h4 className="card__sizes-title">Размеры</h4>
        <div className="card__sizes-info">
          <p className="card__sizes-size">
            <span>ШИРИНА</span>
            {item.width} СМ
          </p>
          x
          <p className="card__sizes-size">
            <span>ГЛУБИНА</span>
            {item.deep} СМ
          </p>
          x
          <p className="card__sizes-size">
            <span>ВЫСОТА</span>
            {item.height} СМ
          </p>
        </div>
        <button className="card__sizes-btn">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default Card;
