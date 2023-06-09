import { CustomContext } from "../../config/context/Context";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../../scss/checkout.scss";

const Checkout = () => {
  const { user, total, handleOrder } = useContext(CustomContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    let order = {
      ...data,
      order: user.carts,
      totalPrice: total,
    };
    handleOrder(order);
  };

  return (
    <section className="checkout">
      <div className="container">
        <h2 className="cart__title">Оформление заказа</h2>
        <form className="checkout__form" onSubmit={handleSubmit(submitForm)}>
          <div className="checkout__form-block">
            <h3 className="checkout__form-title">Данные покупателя</h3>
            <div className="checkout__form-fields">
              <input
                className="checkout__form-field"
                defaultValue={user.name}
                {...register("name", {
                  required: {
                    messege: "Имя обязательно к заполнению",
                    value: true,
                  },
                  minLength: {
                    messege: "Минимум 2 символа",
                    value: 2,
                  },
                  pattern: {
                    message: "Напишите правильно свое имя",
                    value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                  },
                })}
                placeholder="Имя"
                aria-label="idk"
                type="text"
              />
              <p className="register__label-error">
                {errors.name && errors.name?.message}
              </p>
              <input
                className="checkout__form-field"
                defaultValue={user.email}
                {...register("email", {
                  required: {
                    messege: "Email обязательно к заполнению",
                    value: true,
                  },
                  minLength: {
                    messege: "Минимум 10 символов",
                    value: 10,
                  },
                  pattern: {
                    message: "Напишите правильно свой email",
                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                  },
                })}
                placeholder="E-mail"
                aria-label="idk"
                type="email"
              />
              <p className="register__label-error">
                {errors.email && errors.email?.message}
              </p>
              <input
                className="checkout__form-field"
                defaultValue={user.phone}
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Это поле обязательное",
                  },
                  pattern: {
                    value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                    message: "Заполните номер телефона",
                  },
                })}
                placeholder="Телефон"
                aria-label="idk"
                type="tel"
              />
              <p className="register__label-error">
                {errors.phone && errors.phone?.message}
              </p>
            </div>
          </div>
          <div className="checkout__form-block">
            <h3 className="checkout__form-title">Ваш заказ</h3>
            <ul className="checkout__form-info">
              <li className="checkout__form-item">
                <p className="checkout__form-product">Товар</p>
                <p className="checkout__form-price">Всего</p>
              </li>
              {user.carts?.map((item) => (
                <li className="checkout__form-item" key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <p className="checkout__form-product">{item.title}</p>
                  </Link>
                  <div>
                    <p className="checkout__form-price">
                      {item.count + " / " + item.price * item.count}P
                    </p>
                  </div>
                </li>
              ))}
              <li className="checkout__form-item checkout__form-item_count">
                <p className="cart__end-total">Итого</p>
                <p className="checkout__form-price">{total}P</p>
              </li>
            </ul>
          </div>
          <div className="checkout__form-block">
            <h3 className="checkout__form-title">Адрес получателя</h3>
            <div className="checkout__form-fields">
              <input
                className="checkout__form-field"
                {...register("country", {
                  required: {
                    value: true,
                    message: "Это поле обязательное",
                  },
                })}
                placeholder="Страна"
                aria-label="idk"
                type="text"
              />
              <p className="register__label-error">
                {errors.country && errors.country?.message}
              </p>
              <input
                className="checkout__form-field"
                {...register("city", {
                  required: {
                    value: true,
                    message: "Это поле обязательное",
                  },
                })}
                placeholder="Город"
                aria-label="idk"
                type="text"
              />
              <p className="register__label-error">
                {errors.city && errors.city?.message}
              </p>
              <input
                className="checkout__form-field"
                {...register("street", {
                  required: {
                    value: true,
                    message: "Это поле обязательное",
                  },
                })}
                placeholder="Улица"
                aria-label="idk"
                type="text"
              />
              <p className="register__label-error">
                {errors.street && errors.street?.message}
              </p>
              <input
                className="checkout__form-field"
                {...register("house", {
                  required: {
                    value: true,
                    message: "Это поле обязательное",
                  },
                })}
                placeholder="Дом"
                aria-label="idk"
                type="text"
              />
              <p className="register__label-error">
                {errors.house && errors.house?.message}
              </p>
              <input
                className="checkout__form-field"
                {...register("apartment", {
                  required: {
                    value: true,
                    message: "Это поле обязательное",
                  },
                })}
                placeholder="Квартира"
                aria-label="idk"
                type="text"
              />
              <p className="register__label-error">
                {errors.apartment && errors.apartment?.message}
              </p>
            </div>
          </div>
          <div className="checkout__form-block">
            <h3 className="checkout__form-title">Способы оплаты</h3>
            <div className="checkout__form-info">
              <label className="checkout__form-label">
                <input type="checkbox" aria-label="idk" />
                Оплата наличными
              </label>
              <button className="checkout__form-btn" type="submit">
                Разместить заказ
              </button>
            </div>
          </div>
          <div className="checkout__form-block">
            <h3 className="checkout__form-title">Коментарий</h3>
            <textarea
              placeholder="Дополнительная информация"
              {...register("comment")}
              className="comment"
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
