import { CustomContext } from "../../config/context/Context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "../../scss/cart.scss";

const Cart = () => {
  const { user, removeFromCart, addToCart, total } = useContext(CustomContext);
  const navigate = useNavigate();

  return (
    <section className="cart basket">
      <div className="container">
        <div className="cart__top">
          <h2>Ваша корзина</h2>
          <p className="cart__count">
            В общем {user.carts?.reduce((a, r) => a + r.count, 0)} предметов
          </p>
        </div>
        <div className="cart__row">
          {user.carts?.map((item) => (
            <div className="cart__card" key={item.id}>
              <div className="cart__card-body">
                <div className="cart__card-mob-btns">
                  <img className="posle" src={"/" + item.images[0]} alt="" />
                  <div>
                    <p className="cart__card-price mob-p">{item.price}P </p> /{" "}
                    <p className="cart__card-price mon-p">
                      {" "}
                      {item.price * item.count}P
                    </p>
                    <button
                      className="cart__card-delete"
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
                <img className="do" src={"/" + item.images[0]} alt="" />
                <div className="cart__card-info">
                  <h3 className="card__card-title">{item.title}</h3>
                  <br />
                  <p className="cart__card-size">
                    Размер(Ш×Г×В) {item.width} CM X {item.deep} CM X{" "}
                    {item.height} CM
                  </p>
                  <br />
                  <div className="cart__card-size btns">
                    Количество{" "}
                    <div className="card__sizes-count">
                      <button
                        style={{ background: "red" }}
                        type="button"
                        className="plus"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        style={{ background: "green" }}
                        type="button"
                        className="minus"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart__card-body2">
                <p className="cart__card-price">{item.price}P </p> <h2>/</h2>
                <p className="cart__card-price">
                  {item.price * item.count}P
                </p>
                <button
                  className="cart__card-delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__end">
          <p className="cart__end-total">Итоговая стоимость: {total}P</p>
          <button className="cart__end-checkout" onClick={()=>navigate("/checkout")}>Оформить заказ</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
